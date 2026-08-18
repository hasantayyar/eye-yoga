import { useI18n } from '../i18n/context'

export function LanguageSwitch() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div className="lang-switch" role="group" aria-label={t.langAria}>
      <button
        type="button"
        className={locale === 'en' ? 'is-on' : ''}
        aria-pressed={locale === 'en'}
        onClick={() => setLocale('en')}
      >
        {t.langEn}
      </button>
      <button
        type="button"
        className={locale === 'tr' ? 'is-on' : ''}
        aria-pressed={locale === 'tr'}
        onClick={() => setLocale('tr')}
      >
        {t.langTr}
      </button>
    </div>
  )
}
