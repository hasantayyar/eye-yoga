import { useI18n } from '../i18n/context'
import type { EvidenceLevel } from '../types'

/**
 * Says how well an exercise is backed up right where a person chooses it,
 * so "traditional" is never quietly dressed up as "proven".
 */
export function EvidenceBadge({ level, withHint = false }: { level: EvidenceLevel; withHint?: boolean }) {
  const { t } = useI18n()
  const copy = t.evidence[level]

  return (
    <span className={`evidence evidence-${level}`} title={copy.hint}>
      <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
        <circle cx="8" cy="8" r="6.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M5.2 8.2 7 10l3.8-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={level === 'traditional' ? 0.35 : 1}
        />
      </svg>
      <span>{copy.label}</span>
      {withHint ? <span className="evidence-hint">{copy.hint}</span> : null}
    </span>
  )
}
