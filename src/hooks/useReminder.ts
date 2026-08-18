import { useCallback, useEffect, useRef, useState } from 'react'

export const REMINDER_MINUTES = 20

type Reminder = {
  due: boolean
  secondsLeft: number
  /** Clears the banner and starts the next interval. */
  snooze: () => void
  reset: () => void
}

/**
 * A 20-minute nudge that only runs while the tab is open. Deliberately not a
 * background notification: the point is a light tap on the shoulder, and a
 * reminder you cannot act on is just noise.
 */
export function useReminder(enabled: boolean, minutes = REMINDER_MINUTES): Reminder {
  const period = minutes * 60_000
  const nextAt = useRef(Date.now() + period)
  const [due, setDue] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60)

  const reset = useCallback(() => {
    nextAt.current = Date.now() + period
    setDue(false)
    setSecondsLeft(Math.round(period / 1000))
  }, [period])

  useEffect(() => {
    if (!enabled) {
      setDue(false)
      return
    }
    reset()
    const timer = window.setInterval(() => {
      const left = Math.max(0, Math.round((nextAt.current - Date.now()) / 1000))
      setSecondsLeft(left)
      if (left === 0) setDue(true)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [enabled, reset])

  return { due: enabled && due, secondsLeft, snooze: reset, reset }
}
