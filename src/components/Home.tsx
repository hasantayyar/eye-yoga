import { goalOrder } from '../data/exercises'
import { useI18n } from '../i18n/context'
import { formatMinutes } from '../lib/time'
import type { Exercise, GoalKey, Routine } from '../types'
import { EvidenceBadge } from './EvidenceBadge'
import { LanguageSwitch } from './LanguageSwitch'
import { Logo } from './Logo'
import type { Stats } from '../lib/storage'
import { doneToday, isStreakLive } from '../lib/storage'

type HomeProps = {
  goal: GoalKey
  onGoal: (goal: GoalKey) => void
  stats: Stats
  onQuickStart: () => void
  onOpenRoutine: (id: string) => void
  onOpenExercise: (id: string) => void
}

export function Home({
  goal,
  onGoal,
  stats,
  onQuickStart,
  onOpenRoutine,
  onOpenExercise,
}: HomeProps) {
  const { locale, t, routines, exercises, sources } = useI18n()

  const shownRoutines = goal === 'all' ? routines : routines.filter((r) => r.goals.includes(goal))
  const shownExercises =
    goal === 'all' ? exercises : exercises.filter((e) => e.goals.includes(goal))

  return (
    <div className="page home">
      <header className="topbar">
        <Logo />
        <div className="topbar-end">
          {isStreakLive(stats) && stats.streak > 0 ? (
            <p className="streak" title={t.sessionsTotal(stats.sessions)}>
              <span className="streak-dot" aria-hidden="true" />
              {stats.streak === 1 ? t.streakOne : t.streakMany(stats.streak)}
            </p>
          ) : null}
          <LanguageSwitch />
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <h1>{t.heroTitle}</h1>
        <p className="lede">{t.heroLede}</p>

        <div className="hero-cta">
          <button type="button" className="primary-btn" onClick={onQuickStart}>
            {t.quickStart}
          </button>
        </div>

        {doneToday(stats) ? (
          <p className="done-today">
            <span aria-hidden="true">✓</span> {t.todayDone} ·{' '}
            {t.minutesTotal(Math.round(stats.seconds / 60))}
          </p>
        ) : null}
      </section>

      <section className="panel audio-guide">
        <div>
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h2>{t.audioGuideTitle}</h2>
          <p>{t.audioGuideBody}</p>
        </div>
        <audio key={locale} controls preload="metadata">
          <source src={`/audio/screen-reset-${locale}.mp3`} type="audio/mpeg" />
          {t.audioUnsupported}
        </audio>
      </section>

      <section className="how" aria-label={t.howAria}>
        {t.how.map((step, index) => (
          <div className="how-step" key={step.title}>
            <span className="how-n">{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="goal-block">
        <div className="section-head">
          <h2>{t.goalTitle}</h2>
          <p>{t.goals[goal].hint}</p>
        </div>
        <div className="chip-row" aria-label={t.goalAria}>
          {goalOrder.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={goal === id}
              className={`chip ${goal === id ? 'is-on' : ''}`}
              onClick={() => onGoal(id)}
            >
              {t.goals[id].label}
            </button>
          ))}
        </div>
      </section>

      <section className="list-block">
        <div className="section-head">
          <h2>{t.routinesTitle}</h2>
          <p>{t.routinesHint}</p>
        </div>
        <ul className="card-list">
          {shownRoutines.map((routine) => (
            <li key={routine.id}>
              <RoutineCard routine={routine} onOpen={() => onOpenRoutine(routine.id)} />
            </li>
          ))}
        </ul>
      </section>

      <section className="list-block">
        <div className="section-head">
          <h2>{t.exercisesTitle}</h2>
          <p>{t.exercisesCount(shownExercises.length)}</p>
        </div>
        <ul className="card-list is-tight">
          {shownExercises.map((exercise) => (
            <li key={exercise.id}>
              <ExerciseCard exercise={exercise} onOpen={() => onOpenExercise(exercise.id)} />
            </li>
          ))}
        </ul>
      </section>

      <section className="panel limits">
        <h2>{t.limitsTitle}</h2>
        {t.limits.map((line) => (
          <p key={line.slice(0, 24)} className="body-copy">
            {line}
          </p>
        ))}
      </section>

      <section className="panel">
        <h2>{t.sourcesTitle}</h2>
        <p className="body-copy">{t.sourcesLede}</p>
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

      <section className="panel panel-warn">
        <h2>{t.safetyTitle}</h2>
        <p>{t.safety}</p>
      </section>

      <footer className="disclaimer">
        <p>{t.disclaimer}</p>
      </footer>
    </div>
  )
}

function RoutineCard({ routine, onOpen }: { routine: Routine; onOpen: () => void }) {
  const { t } = useI18n()

  return (
    <button type="button" className="card routine-card" onClick={onOpen}>
      <div className="card-top">
        <span className="card-time">{formatMinutes(routine.seconds, t.minuteUnit)}</span>
        {routine.featured ? <span className="card-tag">{t.featuredTag}</span> : null}
      </div>
      <h3>{routine.name}</h3>
      <p>{routine.tagline}</p>
      <ul className="card-chain">
        {routine.exercises.map((exercise, index) => (
          <li key={`${exercise.id}-${index}`}>{exercise.name}</li>
        ))}
      </ul>
      <span className="card-cta">{t.beginRoutine}</span>
    </button>
  )
}

function ExerciseCard({ exercise, onOpen }: { exercise: Exercise; onOpen: () => void }) {
  const { t } = useI18n()
  const seconds = exercise.steps.reduce((sum, step) => sum + step.seconds, 0) * exercise.defaultRounds

  return (
    <button type="button" className="card exercise-card" onClick={onOpen}>
      <div className="card-top">
        <span className="card-time">{formatMinutes(seconds, t.minuteUnit)}</span>
        <span className={`effort effort-${exercise.effort}`}>{t.effort[exercise.effort]}</span>
      </div>
      <h3>{exercise.name}</h3>
      <p>{exercise.tagline}</p>
      <EvidenceBadge level={exercise.evidence} />
    </button>
  )
}
