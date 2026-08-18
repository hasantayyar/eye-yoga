import { useCallback, useEffect, useRef, useState } from 'react'
import { segmentAt, type Plan } from '../lib/plan'
import type { Segment } from '../types'

export type SessionStatus = 'running' | 'paused' | 'done'

export type SessionState = {
  status: SessionStatus
  segment: Segment
  /** 0 to 1 through the current segment. */
  progress: number
  secondsLeft: number
  elapsed: number
  remaining: number
  /** 0 to 1 through the whole plan. */
  planProgress: number
}

export type SessionControls = {
  pause: () => void
  resume: () => void
  toggle: () => void
  skipBlock: () => void
  restart: () => void
}

export function useEyeSession(plan: Plan, autoStart = true): SessionState & SessionControls {
  const elapsedRef = useRef(0)
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(autoStart)

  useEffect(() => {
    elapsedRef.current = 0
    setElapsed(0)
    setRunning(autoStart)
  }, [plan.id, plan.seconds, autoStart])

  useEffect(() => {
    if (!running) return
    let frame = 0
    let last = performance.now()

    const tick = (now: number) => {
      // Clamping the delta keeps a backgrounded tab from jumping the session forward.
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      elapsedRef.current = Math.min(plan.seconds, elapsedRef.current + dt)
      setElapsed(elapsedRef.current)
      if (elapsedRef.current < plan.seconds) {
        frame = requestAnimationFrame(tick)
      } else {
        setRunning(false)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [running, plan.seconds])

  const seek = useCallback(
    (seconds: number) => {
      const next = Math.max(0, Math.min(plan.seconds, seconds))
      elapsedRef.current = next
      setElapsed(next)
    },
    [plan.seconds],
  )

  const segment = segmentAt(plan, elapsed)
  const into = Math.max(0, elapsed - segment.start)
  const done = elapsed >= plan.seconds - 0.001

  const skipBlock = useCallback(() => {
    const current = segmentAt(plan, elapsedRef.current)
    const next = plan.blocks[current.blockIndex + 1]
    seek(next ? next.start : plan.seconds)
  }, [plan, seek])

  const restart = useCallback(() => {
    seek(0)
    setRunning(true)
  }, [seek])

  // Stable identities: the session re-renders every frame, and the key handler
  // in the player subscribes to these.
  const pause = useCallback(() => setRunning(false), [])
  const resume = useCallback(() => setRunning(true), [])
  const toggle = useCallback(() => setRunning((value) => !value), [])

  return {
    status: done ? 'done' : running ? 'running' : 'paused',
    segment,
    progress: segment.seconds > 0 ? Math.min(1, into / segment.seconds) : 1,
    secondsLeft: Math.max(0, Math.ceil(segment.seconds - into)),
    elapsed,
    remaining: Math.max(0, plan.seconds - elapsed),
    planProgress: plan.seconds > 0 ? Math.min(1, elapsed / plan.seconds) : 1,
    pause,
    resume,
    toggle,
    skipBlock,
    restart,
  }
}
