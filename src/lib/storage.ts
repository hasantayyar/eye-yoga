const SOUND_KEY = 'eyy:sound'
const STATS_KEY = 'eyy:stats'
const SEEN_KEY = 'eyy:seen'

export type Stats = {
  sessions: number
  seconds: number
  streak: number
  /** Last completed day as YYYY-MM-DD in local time. */
  lastDay: string
}

const EMPTY: Stats = { sessions: 0, seconds: 0, streak: 0, lastDay: '' }

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return { ...fallback, ...(JSON.parse(raw) as object) }
  } catch {
    return fallback
  }
}

export function dayKey(date = new Date()): string {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}

function daysBetween(from: string, to: string): number {
  const a = Date.parse(`${from}T00:00:00`)
  const b = Date.parse(`${to}T00:00:00`)
  if (Number.isNaN(a) || Number.isNaN(b)) return Number.POSITIVE_INFINITY
  return Math.round((b - a) / 86_400_000)
}

export function readStats(): Stats {
  return read(STATS_KEY, EMPTY)
}

/** A streak counts consecutive calendar days, and a second session today keeps it. */
export function recordSession(seconds: number): Stats {
  const current = readStats()
  const today = dayKey()
  const gap = current.lastDay ? daysBetween(current.lastDay, today) : Number.POSITIVE_INFINITY

  const streak = gap === 0 ? Math.max(1, current.streak) : gap === 1 ? current.streak + 1 : 1

  const next: Stats = {
    sessions: current.sessions + 1,
    seconds: current.seconds + Math.round(seconds),
    streak,
    lastDay: today,
  }
  localStorage.setItem(STATS_KEY, JSON.stringify(next))
  return next
}

export function isStreakLive(stats: Stats): boolean {
  if (!stats.lastDay) return false
  return daysBetween(stats.lastDay, dayKey()) <= 1
}

export function doneToday(stats: Stats): boolean {
  return stats.lastDay === dayKey()
}

export function readSound(): boolean {
  const stored = localStorage.getItem(SOUND_KEY)
  return stored === null ? true : stored === 'true'
}

export function writeSound(value: boolean): void {
  localStorage.setItem(SOUND_KEY, String(value))
}

export function readSeen(): boolean {
  return localStorage.getItem(SEEN_KEY) === 'true'
}

export function markSeen(): void {
  localStorage.setItem(SEEN_KEY, 'true')
}
