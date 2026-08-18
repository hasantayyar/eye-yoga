import { cycleSeconds } from '../data/exercises'
import { useI18n } from '../i18n/context'
import { formatClock, formatMinutes } from '../lib/time'
import type { Routine, SourceLink } from '../types'
import { EvidenceBadge } from './EvidenceBadge'
import { LanguageSwitch } from './LanguageSwitch'

type RoutineDetailProps = {
  routine: Routine
  sound: boolean
  onSound: (value: boolean) => void
  onBack: () => void
  onBegin: () => void
  onOpenExercise: (id: string) => void
}

export function RoutineDetail({
  routine,
  sound,
  onSound,
  onBack,
  onBegin,
  onOpenExercise,
}: RoutineDetailProps) {
  const { t } = useI18n()
  const sources = dedupe(routine.exercises.flatMap((exercise) => exercise.sources))
  const cautions = dedupe2(routine.exercises.flatMap((exercise) => exercise.skipIf))

  return (
    <div className="page detail">
      <header className="topbar">
        <button type="button" className="text-btn" onClick={onBack}>
          {t.back}
        </button>
        <LanguageSwitch />
      </header>

      <p className="eyebrow">{formatMinutes(routine.seconds, t.minuteUnit)}</p>
      <h1>{routine.name}</h1>
      <p className="lede">{routine.tagline}</p>

      <section className="setup-block">
        <label className="check">
          <input
            type="checkbox"
            checked={sound}
            onChange={(event) => onSound(event.target.checked)}
          />
          <span>{t.soundLabel}</span>
        </label>

        <button type="button" className="primary-btn" onClick={onBegin}>
          {t.beginRoutine}
        </button>
        <p className="hero-hint">{t.prepBody}</p>
      </section>

      <p className="body-copy lead-copy">{routine.what}</p>

      <section className="plan">
        <div className="section-head">
          <h2>{t.planTitle}</h2>
          <p>{t.planHint}</p>
        </div>
        <ol className="plan-list">
          {routine.items.map((item, index) => {
            const exercise = routine.exercises.find((e) => e.id === item.exerciseId)
            if (!exercise) return null
            const seconds = cycleSeconds(exercise.steps) * item.rounds
            return (
              <li key={`${item.exerciseId}-${index}`}>
                <button
                  type="button"
                  className="plan-item"
                  onClick={() => onOpenExercise(exercise.id)}
                >
                  <span className="plan-n">{index + 1}</span>
                  <span className="plan-body">
                    <span className="plan-name">{exercise.name}</span>
                    <span className="plan-meta">
                      {t.exerciseRounds(item.rounds)} · {formatClock(seconds)}
                    </span>
                    <span className="plan-tagline">{exercise.tagline}</span>
                  </span>
                  <EvidenceBadge level={exercise.evidence} />
                </button>
              </li>
            )
          })}
        </ol>
      </section>

      {cautions.length > 0 ? (
        <section className="panel panel-warn">
          <h2>{t.skipIfTitle}</h2>
          <ul className="plain-list">
            {cautions.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {sources.length > 0 ? (
        <section className="panel">
          <h2>{t.sourcesTitle}</h2>
          <ul className="source-list">
            {sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <footer className="disclaimer">
        <p>{t.disclaimer}</p>
      </footer>
    </div>
  )
}

function dedupe(links: SourceLink[]): SourceLink[] {
  const seen = new Set<string>()
  return links.filter((link) => {
    if (seen.has(link.url)) return false
    seen.add(link.url)
    return true
  })
}

function dedupe2(lines: string[]): string[] {
  return Array.from(new Set(lines))
}
