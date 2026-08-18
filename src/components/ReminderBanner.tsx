import { useI18n } from '../i18n/context'

type ReminderBannerProps = {
  onStart: () => void
  onDismiss: () => void
}

export function ReminderBanner({ onStart, onDismiss }: ReminderBannerProps) {
  const { t } = useI18n()

  return (
    <div className="nudge" role="status">
      <div className="nudge-copy">
        <p className="nudge-title">{t.reminderNudgeTitle}</p>
        <p className="nudge-body">{t.reminderNudgeBody}</p>
      </div>
      <div className="nudge-actions">
        <button type="button" className="nudge-primary" onClick={onStart}>
          {t.reminderStart}
        </button>
        <button type="button" className="nudge-ghost" onClick={onDismiss}>
          {t.reminderLater}
        </button>
      </div>
    </div>
  )
}
