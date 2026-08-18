import { useI18n } from '../i18n/context'
import type { Stats } from '../lib/storage'
import { LanguageSwitch } from './LanguageSwitch'

type CompleteProps = {
  name: string
  stats: Stats
  tipIndex: number
  onAgain: () => void
  onHome: () => void
}

export function Complete({ name, stats, tipIndex, onAgain, onHome }: CompleteProps) {
  const { t } = useI18n()
  const tip = t.tips[tipIndex % t.tips.length]

  return (
    <div className="page complete">
      <header className="topbar topbar-end-only">
        <LanguageSwitch />
      </header>

      <p className="eyebrow">{t.completeEyebrow}</p>
      <h1>{t.completeTitle}</h1>
      <p className="lede">{t.completeBody(name)}</p>

      <div className="stat-row">
        <div className="stat">
          <span className="stat-value">{stats.streak}</span>
          <span className="stat-label">
            {stats.streak === 1 ? t.streakOne : t.streakMany(stats.streak)}
          </span>
        </div>
        <div className="stat">
          <span className="stat-value">{stats.sessions}</span>
          <span className="stat-label">{t.sessionsTotal(stats.sessions)}</span>
        </div>
        <div className="stat">
          <span className="stat-value">{Math.round(stats.seconds / 60)}</span>
          <span className="stat-label">{t.minutesTotal(Math.round(stats.seconds / 60))}</span>
        </div>
      </div>

      <section className="panel">
        <h2>{t.tipTitle}</h2>
        <p>{tip}</p>
      </section>

      <div className="complete-actions">
        <button type="button" className="primary-btn" onClick={onAgain}>
          {t.repeat}
        </button>
        <button type="button" className="ghost-btn" onClick={onHome}>
          {t.chooseAnother}
        </button>
      </div>
    </div>
  )
}
