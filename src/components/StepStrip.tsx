import { useI18n } from '../i18n/context'
import { formatSeconds } from '../lib/time'
import type { Step } from '../types'

type StepStripProps = {
  steps: Step[]
  activeIndex?: number
  progress?: number
  compact?: boolean
}

/** Segment widths track the seconds, so the pace is visible before you start. */
export function StepStrip({ steps, activeIndex, progress = 0, compact = false }: StepStripProps) {
  const { t } = useI18n()

  return (
    <div className={`step-strip ${compact ? 'is-compact' : ''}`} role="list">
      {steps.map((step, index) => {
        const active = index === activeIndex
        const fill = active ? Math.min(100, progress * 100) : index < (activeIndex ?? -1) ? 100 : 0
        return (
          <div
            key={`${step.kind}-${index}`}
            className={`step-seg kind-${step.kind} ${active ? 'is-active' : ''}`}
            style={{ flexGrow: step.seconds }}
            role="listitem"
          >
            <span className="step-seg-fill" style={{ width: `${fill}%` }} />
            <span className="step-seg-copy">
              <span className="step-seg-label">{step.label}</span>
              <span className="step-seg-time">{formatSeconds(step.seconds, t.secondUnit)}</span>
            </span>
          </div>
        )
      })}
    </div>
  )
}
