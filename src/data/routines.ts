import type { RoutineBase } from '../types'
import { cycleSeconds, getExerciseBase } from './exercises'

/** Seconds spent announcing each exercise inside a routine. */
export const INTRO_SECONDS = 5
export const PREP_SECONDS = 6

export const routines: RoutineBase[] = [
  {
    id: 'desk',
    goals: ['strain', 'dryness'],
    featured: true,
    items: [
      { exerciseId: 'blinking', rounds: 2 },
      { exerciseId: 'twenty', rounds: 1 },
    ],
  },
  {
    id: 'screen',
    goals: ['strain', 'dryness', 'focus', 'headache'],
    featured: true,
    items: [
      { exerciseId: 'blinking', rounds: 2 },
      { exerciseId: 'twenty', rounds: 1 },
      { exerciseId: 'sideways', rounds: 2 },
      { exerciseId: 'near-far', rounds: 3 },
      { exerciseId: 'palming', rounds: 1 },
    ],
  },
  {
    id: 'classic',
    goals: ['strain', 'mobility', 'focus', 'calm'],
    featured: true,
    items: [
      { exerciseId: 'palming', rounds: 1 },
      { exerciseId: 'blinking', rounds: 2 },
      { exerciseId: 'sideways', rounds: 2 },
      { exerciseId: 'front-sideways', rounds: 3 },
      { exerciseId: 'updown', rounds: 2 },
      { exerciseId: 'rotation', rounds: 2 },
      { exerciseId: 'nose-tip', rounds: 3 },
      { exerciseId: 'near-far', rounds: 3 },
    ],
  },
  {
    id: 'mobility',
    goals: ['mobility'],
    items: [
      { exerciseId: 'sideways', rounds: 2 },
      { exerciseId: 'updown', rounds: 2 },
      { exerciseId: 'diagonal', rounds: 1 },
      { exerciseId: 'rotation', rounds: 2 },
      { exerciseId: 'figure-eight', rounds: 1 },
      { exerciseId: 'square', rounds: 1 },
      { exerciseId: 'palming', rounds: 1 },
    ],
  },
  {
    id: 'focus',
    goals: ['focus', 'strain'],
    items: [
      { exerciseId: 'near-far', rounds: 4 },
      { exerciseId: 'nose-tip', rounds: 4 },
      { exerciseId: 'saccades', rounds: 3 },
      { exerciseId: 'twenty', rounds: 1 },
      { exerciseId: 'palming', rounds: 1 },
    ],
  },
  {
    id: 'wind-down',
    goals: ['calm', 'headache', 'strain'],
    items: [
      { exerciseId: 'blinking', rounds: 2 },
      { exerciseId: 'updown', rounds: 2 },
      { exerciseId: 'trataka', rounds: 1 },
      { exerciseId: 'palming', rounds: 1 },
    ],
  },
]

export function getRoutineBase(id: string): RoutineBase | undefined {
  return routines.find((item) => item.id === id)
}

export function routineSeconds(base: RoutineBase): number {
  const body = base.items.reduce((sum, item) => {
    const exercise = getExerciseBase(item.exerciseId)
    if (!exercise) return sum
    return sum + cycleSeconds(exercise.steps) * item.rounds
  }, 0)
  return PREP_SECONDS + body + INTRO_SECONDS * base.items.length
}
