import { useEffect, useRef } from 'react'
import {
  lightHaptic,
  playBeatCue,
  playIntroCue,
  playStepCue,
  resumeAudio,
} from '../audio/cues'
import { useEyeSession } from '../hooks/useEyeSession'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useWakeLock } from '../hooks/useWakeLock'
import { useI18n } from '../i18n/context'
import type { Plan } from '../lib/plan'
import { formatClock } from '../lib/time'
import { Stage } from './Stage'
import { StepStrip } from './StepStrip'

type SessionProps = {
  plan: Plan
  sound: boolean
  onExit: () => void
  onDone: () => void
}

export function Session({ plan, sound, onExit, onDone }: SessionProps) {
  const { t } = useI18n()
  const reducedMotion = usePrefersReducedMotion()
  const session = useEyeSession(plan)
  const { segment, progress, status, toggle, skipBlock, pause, resume } = session
  const lastCue = useRef(-1)
  const lastBeat = useRef(-1)

  useWakeLock(status === 'running')

  useEffect(() => {
    if (sound) resumeAudio()
  }, [sound])

  useEffect(() => {
    if (status === 'done') onDone()
  }, [status, onDone])

  useEffect(() => {
    if (status !== 'running') return
    if (lastCue.current === segment.index) return
    lastCue.current = segment.index
    lastBeat.current = -1
    if (sound) {
      if (segment.kind === 'intro' || segment.kind === 'prep') playIntroCue()
      else playStepCue(segment.kind)
    }
    lightHaptic()
  }, [status, segment.index, segment.kind, sound])

  // Blink prompts need one tick per blink, not one per step.
  const beats = segment.step?.beats ?? 0
  const beat = beats > 1 ? Math.floor(progress * beats) : -1
  useEffect(() => {
    if (status !== 'running' || beat < 1) return
    if (lastBeat.current === beat) return
    lastBeat.current = beat
    if (sound) playBeatCue()
    lightHaptic()
  }, [status, beat, sound])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onExit()
        return
      }
      if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault()
        toggle()
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        skipBlock()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggle, skipBlock, onExit])

  const paused = status === 'paused'
  const isOpening = segment.kind === 'prep' || segment.kind === 'intro'
  const blockCount = plan.blocks.length
  const blockNumber = segment.blockIndex + 1
  const isLastBlock = blockNumber === blockCount

  const label = paused
    ? t.paused
    : segment.kind === 'prep'
      ? t.prepTitle
      : segment.kind === 'intro'
        ? isLastBlock && blockCount > 1
          ? t.finalExercise
          : t.nextUp
        : (segment.step?.label ?? '')

  const instruction = paused
    ? t.pausedBody
    : segment.kind === 'prep'
      ? t.prepBody
      : segment.kind === 'intro'
        ? segment.exercise.tagline
        : (segment.step?.instruction ?? '')

  const headline =
    segment.kind === 'intro' ? segment.exercise.name : String(Math.max(1, session.secondsLeft))

  const stepIndex = segment.step ? segment.exercise.steps.indexOf(segment.step) : undefined

  return (
    <div className="session" data-kind={paused ? 'paused' : segment.kind}>
      <div className="session-progress" aria-hidden="true">
        <span style={{ width: `${session.planProgress * 100}%` }} />
      </div>

      {/* One quiet announcement per step, instead of a spoken countdown. */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`${label}. ${instruction}`}
      </p>

      <header className="session-top">
        <button type="button" className="icon-btn" onClick={onExit}>
          {t.close}
        </button>
        <div className="session-meta">
          <p className="session-name">{segment.exercise.name}</p>
          <p className="session-sub">
            {formatClock(session.remaining)}
            {blockCount > 1 ? ` · ${t.exerciseOf(blockNumber, blockCount)}` : ''}
            {segment.rounds > 1 && !isOpening
              ? ` · ${t.roundOf(segment.round, segment.rounds)}`
              : ''}
          </p>
        </div>
        <button
          type="button"
          className="icon-btn"
          onClick={skipBlock}
          aria-label={t.skipAria}
        >
          {t.skip}
        </button>
      </header>

      <div className="session-body">
        <div className="session-stage">
          {isOpening ? (
            <OpeningMark large={segment.kind === 'prep'} />
          ) : (
            <Stage segment={segment} progress={progress} reducedMotion={reducedMotion} />
          )}
        </div>

        <div className="session-guide" aria-hidden="true">
          <p className="session-label">{label}</p>
          <p className={`session-count ${segment.kind === 'intro' ? 'is-name' : ''}`}>{headline}</p>
          <p className="session-instruction">{instruction}</p>
          {isTravelKind(segment.kind) ? <p className="session-nudge">{t.headStill}</p> : null}
          {!isOpening ? (
            <StepStrip
              steps={segment.exercise.steps}
              activeIndex={stepIndex}
              progress={progress}
              compact
            />
          ) : null}
        </div>
      </div>

      <div className="session-actions">
        {paused ? (
          <button type="button" className="primary-btn on-dark" onClick={resume}>
            {t.resume}
          </button>
        ) : (
          <button type="button" className="ghost-btn on-dark" onClick={pause}>
            {t.pause}
          </button>
        )}
        <p className="session-keys">{t.keys}</p>
      </div>
    </div>
  )
}

function isTravelKind(kind: string): boolean {
  return kind === 'follow' || kind === 'hold' || kind === 'jump'
}

/** A calm mark for the countdown screens, so the stage is never empty. */
function OpeningMark({ large }: { large: boolean }) {
  return (
    <svg className="stage opening-mark" viewBox="-100 -100 200 200" aria-hidden="true">
      <circle className="opening-outer" cx="0" cy="0" r="72" />
      <circle className="opening-mid" cx="0" cy="0" r="46" />
      <circle className="opening-core" cx="0" cy="0" r={large ? 16 : 10} />
    </svg>
  )
}
