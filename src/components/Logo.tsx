import { useI18n } from '../i18n/context'

export function Logo() {
  const { t } = useI18n()

  return (
    <div className="logo" aria-label={t.brandAria}>
      <svg viewBox="0 0 34 24" width="32" height="23" aria-hidden="true">
        <path
          d="M2 12C6 5 11 2 17 2s11 3 15 10c-4 7-9 10-15 10S6 19 2 12Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="12" r="4.6" fill="currentColor" />
      </svg>
      <span>{t.brand}</span>
    </div>
  )
}
