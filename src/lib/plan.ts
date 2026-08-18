import { INTRO_SECONDS, PREP_SECONDS } from '../data/routines'
import type { Exercise, Routine, Segment } from '../types'

export type PlanSource =
  | { kind: 'routine'; routine: Routine }
  | { kind: 'exercise'; exercise: Exercise; rounds: number }

export type Plan = {
  id: string
  name: string
  segments: Segment[]
  seconds: number
  blocks: { exercise: Exercise; rounds: number; start: number; seconds: number }[]
}

/**
 * Flattens a routine or a single exercise into one ordered list of segments.
 * Everything downstream (the clock, the skip button, the progress bar) reads
 * this list, so the session player never has to know which it was given.
 */
export function buildPlan(source: PlanSource): Plan {
  const items =
    source.kind === 'routine'
      ? source.routine.items
          .map((item) => {
            const exercise = source.routine.exercises.find((e) => e.id === item.exerciseId)
            return exercise ? { exercise, rounds: item.rounds } : null
          })
          .filter((item): item is { exercise: Exercise; rounds: number } => Boolean(item))
      : [{ exercise: source.exercise, rounds: source.rounds }]

  const segments: Segment[] = []
  const blocks: Plan['blocks'] = []
  let cursor = 0
  let index = 0

  const first = items[0]?.exercise
  if (first) {
    segments.push({
      index: index++,
      blockIndex: 0,
      exercise: first,
      kind: 'prep',
      round: 0,
      rounds: items[0].rounds,
      start: 0,
      seconds: PREP_SECONDS,
    })
    cursor += PREP_SECONDS
  }

  items.forEach((item, blockIndex) => {
    const blockStart = cursor
    const showIntro = items.length > 1

    if (showIntro) {
      segments.push({
        index: index++,
        blockIndex,
        exercise: item.exercise,
        kind: 'intro',
        round: 0,
        rounds: item.rounds,
        start: cursor,
        seconds: INTRO_SECONDS,
      })
      cursor += INTRO_SECONDS
    }

    for (let round = 1; round <= item.rounds; round += 1) {
      item.exercise.steps.forEach((step) => {
        segments.push({
          index: index++,
          blockIndex,
          exercise: item.exercise,
          kind: step.kind,
          step,
          round,
          rounds: item.rounds,
          start: cursor,
          seconds: step.seconds,
        })
        cursor += step.seconds
      })
    }

    blocks.push({
      exercise: item.exercise,
      rounds: item.rounds,
      start: blockStart,
      seconds: cursor - blockStart,
    })
  })

  return {
    id: source.kind === 'routine' ? source.routine.id : source.exercise.id,
    name: source.kind === 'routine' ? source.routine.name : source.exercise.name,
    segments,
    seconds: cursor,
    blocks,
  }
}

export function segmentAt(plan: Plan, elapsed: number): Segment {
  const segments = plan.segments
  const last = segments[segments.length - 1]
  if (elapsed >= plan.seconds) return last

  let low = 0
  let high = segments.length - 1
  while (low < high) {
    const mid = (low + high + 1) >> 1
    if (segments[mid].start <= elapsed) low = mid
    else high = mid - 1
  }
  return segments[low]
}
