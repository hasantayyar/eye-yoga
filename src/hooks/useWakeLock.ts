import { useEffect } from 'react'

type Sentinel = { release: () => Promise<void> }
type WakeLockApi = { request: (type: 'screen') => Promise<Sentinel> }

function wakeLock(): WakeLockApi | undefined {
  return (navigator as Navigator & { wakeLock?: WakeLockApi }).wakeLock
}

/**
 * Holds the screen awake while a session runs. Sessions can pass a minute
 * without a tap, and a phone dimming mid-exercise breaks the guidance.
 */
export function useWakeLock(active: boolean): void {
  useEffect(() => {
    const api = wakeLock()
    if (!active || !api) return

    let sentinel: Sentinel | null = null
    let released = false

    const acquire = async () => {
      try {
        const next = await api.request('screen')
        if (released) {
          void next.release()
          return
        }
        sentinel = next
      } catch {
        // Denied or unsupported. The session still works, the screen may dim.
      }
    }

    // A lock is dropped when the tab is hidden, so re-take it on return.
    const onVisibility = () => {
      if (document.visibilityState === 'visible' && !sentinel) void acquire()
    }

    void acquire()
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      released = true
      document.removeEventListener('visibilitychange', onVisibility)
      void sentinel?.release()
      sentinel = null
    }
  }, [active])
}
