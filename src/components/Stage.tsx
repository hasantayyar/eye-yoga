import { useI18n } from '../i18n/context'
import { clamp01, guidePath, pointAt, toStage } from '../lib/paths'
import { easeInOutSine, easeOutCubic, lerp } from '../lib/time'
import type { GuideKind, PathId, Point, Segment, Step } from '../types'

const RING_RADIUS = 94
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS
const FAR_RADIUS = 6
const NEAR_RADIUS = 30
const TRAIL = [0.04, 0.08, 0.13]

type StageProps = {
  segment: Segment
  progress: number
  reducedMotion: boolean
}

export function Stage({ segment, progress, reducedMotion }: StageProps) {
  const { t } = useI18n()
  const step = segment.step
  const kind = segment.kind

  const ringOffset = RING_CIRCUMFERENCE * (1 - clamp01(progress))

  return (
    <svg
      className="stage"
      viewBox="-100 -100 200 200"
      data-kind={kind}
      role="img"
      aria-label={stageLabel(kind, t.followDot, t.blinkNow, t.eyesClosed, t.lookFar, t.lookNear)}
    >
      <circle className="stage-ring-track" cx="0" cy="0" r={RING_RADIUS} />
      <circle
        className="stage-ring"
        cx="0"
        cy="0"
        r={RING_RADIUS}
        strokeDasharray={RING_CIRCUMFERENCE}
        strokeDashoffset={ringOffset}
        transform="rotate(-90 0 0)"
      />

      {kind === 'blink' || kind === 'squeeze' ? (
        <EyeCue
          closure={kind === 'squeeze' ? 1 : blinkClosure(progress, step?.beats ?? 1)}
          squeeze={kind === 'squeeze'}
        />
      ) : null}

      {kind === 'closed' ? <RestCue progress={progress} reducedMotion={reducedMotion} /> : null}

      {kind === 'gaze' ? <GazeCue progress={progress} reducedMotion={reducedMotion} /> : null}

      {isDepth(kind) ? (
        <DepthCue depth={depthAt(step, progress)} reducedMotion={reducedMotion} />
      ) : null}

      {isTravel(kind) && step ? (
        <TravelCue
          step={step}
          track={segment.exercise.track}
          guide={segment.exercise.guide}
          kind={kind}
          progress={progress}
          reducedMotion={reducedMotion}
        />
      ) : null}
    </svg>
  )
}

function isTravel(kind: Segment['kind']): boolean {
  return kind === 'follow' || kind === 'hold' || kind === 'jump'
}

function isDepth(kind: Segment['kind']): boolean {
  return kind === 'near' || kind === 'far'
}

function stageLabel(
  kind: Segment['kind'],
  follow: string,
  blink: string,
  closed: string,
  far: string,
  near: string,
): string {
  if (kind === 'blink' || kind === 'squeeze') return blink
  if (kind === 'closed') return closed
  if (kind === 'far') return far
  if (kind === 'near') return near
  return follow
}

function depthAt(step: Step | undefined, progress: number): number {
  if (!step) return 0
  const from = step.depthFrom ?? 0
  const to = step.depthTo ?? from
  return clamp01(lerp(from, to, easeInOutSine(progress)))
}

/**
 * Short hops read better with an eased start and stop; long sweeps like the
 * circle and the figure eight need steady speed, because smooth pursuit locks
 * onto a constant velocity and stutters when it changes.
 */
function travelAt(step: Step, progress: number): number {
  const from = step.from ?? 0.5
  const to = step.to ?? from
  const shaped = step.seconds <= 3 ? easeInOutSine(progress) : progress
  return lerp(from, to, shaped)
}

function TravelCue({
  step,
  track,
  guide,
  kind,
  progress,
  reducedMotion,
}: {
  step: Step
  track: PathId
  guide: GuideKind
  kind: Segment['kind']
  progress: number
  reducedMotion: boolean
}) {
  const path = step.path ?? track
  const t = kind === 'jump' ? (step.to ?? 0.5) : travelAt(step, progress)
  const here = toStage(pointAt(path, t))
  const target = toStage(pointAt(path, step.to ?? t))
  const shape = guidePath(guide)
  const landing = kind === 'jump' ? 1 - easeOutCubic(Math.min(1, progress / 0.35)) : 0

  return (
    <>
      {shape ? <path className="stage-guide" d={shape} /> : null}
      {guide === 'horizontal' || guide === 'vertical' || guide === 'cross' ? (
        <Endpoints guide={guide} />
      ) : null}

      {kind === 'follow' && step.to !== undefined && step.to !== step.from ? (
        <circle className="stage-target-ring" cx={target.x} cy={target.y} r="13" />
      ) : null}

      {kind === 'follow' && !reducedMotion
        ? TRAIL.map((lag, index) => {
            const ghost = toStage(
              pointAt(path, travelAt(step, Math.max(0, progress - lag))),
            )
            return (
              <circle
                key={lag}
                className="stage-trail"
                cx={ghost.x}
                cy={ghost.y}
                r={9 - index * 2}
                opacity={0.26 - index * 0.07}
              />
            )
          })
        : null}

      {landing > 0 && !reducedMotion ? (
        <circle
          className="stage-landing"
          cx={here.x}
          cy={here.y}
          r={12 + (1 - landing) * 26}
          opacity={landing * 0.5}
        />
      ) : null}

      <Dot at={here} radius={11} />
    </>
  )
}

function Endpoints({ guide }: { guide: GuideKind }) {
  const paths: PathId[] =
    guide === 'cross' ? ['diagonalUp', 'diagonalDown'] : [guide === 'vertical' ? 'vertical' : 'horizontal']
  return (
    <>
      {paths.flatMap((path) =>
        [0, 1].map((t) => {
          const point = toStage(pointAt(path, t))
          return (
            <circle
              key={`${path}-${t}`}
              className="stage-endpoint"
              cx={point.x}
              cy={point.y}
              r="4.5"
            />
          )
        }),
      )}
    </>
  )
}

function Dot({ at, radius }: { at: Point; radius: number }) {
  return (
    <g transform={`translate(${round(at.x)} ${round(at.y)})`}>
      <circle className="stage-dot-halo" r={radius * 2.4} />
      <circle className="stage-dot" r={radius} />
      <circle className="stage-dot-spark" cx={-radius * 0.3} cy={-radius * 0.32} r={radius * 0.3} />
    </g>
  )
}

/** Rings that recede or advance, standing in for a target that moves in depth. */
function DepthCue({ depth, reducedMotion }: { depth: number; reducedMotion: boolean }) {
  const radius = lerp(FAR_RADIUS, NEAR_RADIUS, depth)
  const rings = [0.34, 0.56, 0.78, 1]

  return (
    <>
      {rings.map((scale) => (
        <circle
          key={scale}
          className="stage-depth-ring"
          cx="0"
          cy="0"
          r={NEAR_RADIUS * scale * 2.4}
          opacity={0.05 + scale * 0.09}
        />
      ))}
      {!reducedMotion ? (
        <circle className="stage-depth-wash" cx="0" cy="0" r={radius * 2.8} opacity={0.16} />
      ) : null}
      <Dot at={{ x: 0, y: 0 }} radius={radius} />
    </>
  )
}

function GazeCue({ progress, reducedMotion }: { progress: number; reducedMotion: boolean }) {
  const breath = reducedMotion ? 1 : 1 + 0.06 * Math.sin(progress * Math.PI * 6)
  return (
    <g transform={`scale(${round(breath)})`}>
      <circle className="stage-gaze-halo" cx="0" cy="0" r="46" />
      <circle className="stage-gaze-halo" cx="0" cy="0" r="26" opacity="0.5" />
      <Dot at={{ x: 0, y: 0 }} radius={9} />
    </g>
  )
}

/** Eyes are shut here, so this is only a countdown someone might peek at. */
function RestCue({ progress, reducedMotion }: { progress: number; reducedMotion: boolean }) {
  const breath = reducedMotion ? 1 : 1 + 0.09 * Math.sin(progress * Math.PI * 4)
  return (
    <g transform={`scale(${round(breath)})`} className="stage-rest">
      <circle cx="0" cy="0" r="58" className="stage-rest-glow" />
      <circle cx="0" cy="0" r="30" className="stage-rest-core" />
    </g>
  )
}

const EYE_SHAPE = 'M -62 0 C -40 -38 40 -38 62 0 C 40 32 -40 32 -62 0 Z'

function EyeCue({ closure, squeeze }: { closure: number; squeeze: boolean }) {
  const lidHeight = 44 + closure * 46
  return (
    <g className={`stage-eye ${squeeze ? 'is-squeeze' : ''}`}>
      <clipPath id="eye-clip">
        <path d={EYE_SHAPE} />
      </clipPath>
      <path className="stage-eye-white" d={EYE_SHAPE} />
      <g clipPath="url(#eye-clip)">
        <circle className="stage-eye-iris" cx="0" cy="-2" r="19" />
        <circle className="stage-eye-pupil" cx="0" cy="-2" r="8.5" />
        <circle className="stage-eye-glint" cx="-7" cy="-9" r="3.4" />
        <rect className="stage-eye-lid" x="-70" y={-44} width="140" height={lidHeight} />
        <path
          className="stage-eye-lash"
          d={`M -66 ${round(-44 + lidHeight)} H 66`}
          opacity={closure * 0.85}
        />
      </g>
      <path className="stage-eye-line" d={EYE_SHAPE} />
    </g>
  )
}

/**
 * Each beat closes the lid quickly, holds it shut for a moment, then opens.
 * The hold is the point: a half blink is what leaves the eye dry.
 */
function blinkClosure(progress: number, beats: number): number {
  const within = (clamp01(progress) * Math.max(1, beats)) % 1
  if (within < 0.16) return easeOutCubic(within / 0.16)
  if (within < 0.34) return 1
  if (within < 0.56) return 1 - easeOutCubic((within - 0.34) / 0.22)
  return 0
}

function round(value: number): number {
  return Math.round(value * 100) / 100
}
