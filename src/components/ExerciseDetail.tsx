import { useI18n } from '../i18n/context'
import { cycleSeconds } from '../data/exercises'
import { PREP_SECONDS } from '../data/routines'
import { formatClock } from '../lib/time'
import type { Exercise } from '../types'
import { EvidenceBadge } from './EvidenceBadge'
import { LanguageSwitch } from './LanguageSwitch'
import { StepStrip } from './StepStrip'

type ExerciseDetailProps = {
  exercise: Exercise
  rounds: number
  sound: boolean
  onRounds: (value: number) => void
  onSound: (value: boolean) => void
  onBack: () => void
  onBegin: () => void
  onOpenRoutine: (id: string) => void
}

export function ExerciseDetail({
  exercise,
  rounds,
  sound,
  onRounds,
  onSound,
  onBack,
  onBegin,
  onOpenRoutine,
}: ExerciseDetailProps) {
  const { t, routines } = useI18n()
  const cycle = cycleSeconds(exercise.steps)
  const total = PREP_SECONDS + cycle * rounds
  const appearsIn = routines.filter((routine) =>
    routine.items.some((item) => item.exerciseId === exercise.id),
  )

  return (
    <div className="page detail">
      <header className="topbar">
        <button type="button" className="text-btn" onClick={onBack}>
          {t.back}
        </button>
        <LanguageSwitch />
      </header>

      <p className="eyebrow">{exercise.alsoKnownAs ?? t.effort[exercise.effort]}</p>
      <h1>{exercise.name}</h1>
      <p className="lede">{exercise.tagline}</p>

      <div className="badge-row">
        <EvidenceBadge level={exercise.evidence} />
        <span className={`effort effort-${exercise.effort}`}>{t.effort[exercise.effort]}</span>
      </div>

      <section className="setup-block">
        <div className="section-head">
          <h2>{t.roundsTitle}</h2>
          <p>{t.roundsHint(rounds, formatClock(total))}</p>
        </div>

        <div className="stepper" role="group" aria-label={t.roundsTitle}>
          <button
            type="button"
            className="stepper-btn"
            onClick={() => onRounds(Math.max(1, rounds - 1))}
            disabled={rounds <= 1}
            aria-label="−"
          >
            −
          </button>
          <span className="stepper-value">{t.exerciseRounds(rounds)}</span>
          <button
            type="button"
            className="stepper-btn"
            onClick={() => onRounds(Math.min(exercise.maxRounds, rounds + 1))}
            disabled={rounds >= exercise.maxRounds}
            aria-label="+"
          >
            +
          </button>
        </div>

        <label className="check">
          <input
            type="checkbox"
            checked={sound}
            onChange={(event) => onSound(event.target.checked)}
          />
          <span>{t.soundLabel}</span>
        </label>

        <button type="button" className="primary-btn" onClick={onBegin}>
          {t.begin}
        </button>
      </section>

      <section className="timeline">
        <div className="section-head">
          <h2>{t.timelineTitle}</h2>
          <p>{t.timelineHint}</p>
        </div>
        <StepStrip steps={exercise.steps} />
        <ol className="step-list">
          {exercise.steps.map((step, index) => (
            <li key={`${step.kind}-${index}`}>
              <span className={`step-list-dot kind-${step.kind}`} aria-hidden="true" />
              <span>
                <strong>{step.label}</strong> {step.instruction}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <p className="body-copy lead-copy">{exercise.what}</p>

      <section className="panel">
        <h2>{t.whyTitle}</h2>
        <p>{exercise.why}</p>
      </section>

      <section className="panel panel-evidence">
        <h2>{t.evidenceNoteTitle}</h2>
        <EvidenceBadge level={exercise.evidence} withHint />
        <p>{exercise.evidenceNote}</p>
      </section>

      <section className="panel">
        <h2>{t.setupTitle}</h2>
        <p className="posture">{exercise.setup}</p>
        <ol className="how-list">
          {exercise.howTo.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ol>
      </section>

      <div className="split">
        <section className="panel">
          <h2>{t.bestForTitle}</h2>
          <ul className="plain-list">
            {exercise.bestFor.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
        <section className="panel panel-warn">
          <h2>{t.skipIfTitle}</h2>
          <ul className="plain-list">
            {exercise.skipIf.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      </div>

      {appearsIn.length > 0 ? (
        <section className="panel">
          <h2>{t.inRoutines}</h2>
          <ul className="link-list">
            {appearsIn.map((routine) => (
              <li key={routine.id}>
                <button type="button" className="text-btn" onClick={() => onOpenRoutine(routine.id)}>
                  {routine.name}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {exercise.sources.length > 0 ? (
        <section className="panel">
          <h2>{t.sourcesTitle}</h2>
          <ul className="source-list">
            {exercise.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
