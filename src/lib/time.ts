export function lerp(from: number, to: number, t: number): number {
  return from + (to - from) * t
}

export function easeInOutSine(t: number): number {
  return 0.5 - 0.5 * Math.cos(Math.PI * Math.min(1, Math.max(0, t)))
}

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3)
}

export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.ceil(totalSeconds))
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m}:${r.toString().padStart(2, '0')}`
}

/** Rounded to the nearest half minute, because exact seconds are noise here. */
export function formatMinutes(totalSeconds: number, unit: string): string {
  const minutes = totalSeconds / 60
  if (minutes < 1) return `${Math.round(totalSeconds)} ${unit === 'dk' ? 'sn' : 's'}`
  const rounded = Math.round(minutes * 2) / 2
  return `${rounded} ${unit}`
}

export function formatSeconds(seconds: number, unit = 's'): string {
  const rounded = Math.round(seconds * 10) / 10
  return `${rounded}${unit === 'sn' ? ' sn' : 's'}`
}
