import type { ExerciseBase, GoalKey, StepBase } from '../types'

/** Depth 0 reads as "across the room", depth 1 as "at the tip of your nose". */
const FAR = 0.06
const NEAR = 1

function follow(
  seconds: number,
  from: number,
  to: number,
  extra: Partial<StepBase> = {},
): StepBase {
  return { kind: 'follow', seconds, from, to, ...extra }
}

function hold(seconds: number, at: number, extra: Partial<StepBase> = {}): StepBase {
  return { kind: 'hold', seconds, from: at, to: at, ...extra }
}

function jump(seconds: number, to: number, extra: Partial<StepBase> = {}): StepBase {
  return { kind: 'jump', seconds, from: to, to, ...extra }
}

function blink(seconds: number, beats = 1): StepBase {
  return { kind: 'blink', seconds, beats }
}

function closed(seconds: number): StepBase {
  return { kind: 'closed', seconds }
}

export const goalOrder: GoalKey[] = [
  'all',
  'strain',
  'dryness',
  'focus',
  'mobility',
  'calm',
  'headache',
]

export const exercises: ExerciseBase[] = [
  {
    id: 'blinking',
    goals: ['dryness', 'strain', 'calm', 'headache'],
    effort: 'easy',
    evidence: 'trial',
    guide: 'none',
    track: 'center',
    defaultRounds: 3,
    maxRounds: 6,
    steps: [
      blink(8, 4),
      { kind: 'squeeze', seconds: 3 },
      closed(4),
    ],
  },
  {
    id: 'twenty',
    goals: ['strain', 'dryness', 'focus', 'headache', 'calm'],
    effort: 'rest',
    evidence: 'mixed',
    guide: 'none',
    track: 'center',
    defaultRounds: 1,
    maxRounds: 3,
    steps: [
      { kind: 'far', seconds: 20, depthFrom: FAR, depthTo: FAR },
      blink(6, 3),
    ],
  },
  {
    id: 'palming',
    goals: ['calm', 'strain', 'headache'],
    effort: 'rest',
    evidence: 'traditional',
    guide: 'none',
    track: 'center',
    defaultRounds: 1,
    maxRounds: 3,
    steps: [
      closed(14),
      closed(44),
      closed(10),
    ],
  },
  {
    id: 'near-far',
    goals: ['focus', 'strain', 'headache'],
    effort: 'easy',
    evidence: 'trial',
    guide: 'depth',
    track: 'center',
    defaultRounds: 5,
    maxRounds: 10,
    steps: [
      { kind: 'near', seconds: 5, depthFrom: NEAR, depthTo: NEAR },
      { kind: 'far', seconds: 5, depthFrom: FAR, depthTo: FAR },
      blink(2),
    ],
  },
  {
    id: 'nose-tip',
    goals: ['focus', 'strain'],
    effort: 'active',
    evidence: 'clinical',
    guide: 'depth',
    track: 'center',
    defaultRounds: 4,
    maxRounds: 8,
    steps: [
      { kind: 'far', seconds: 3, depthFrom: 0.12, depthTo: 0.12 },
      { kind: 'near', seconds: 5, depthFrom: 0.12, depthTo: NEAR },
      hold(2, 0, { depthFrom: NEAR, depthTo: NEAR }),
      { kind: 'far', seconds: 5, depthFrom: NEAR, depthTo: 0.12 },
      blink(2),
    ],
  },
  {
    id: 'sideways',
    goals: ['mobility', 'strain'],
    effort: 'easy',
    evidence: 'trial',
    guide: 'horizontal',
    track: 'horizontal',
    defaultRounds: 3,
    maxRounds: 6,
    steps: [
      follow(2, 0.5, 0),
      hold(2, 0),
      follow(3, 0, 1),
      hold(2, 1),
      follow(2, 1, 0.5),
      blink(2),
    ],
  },
  {
    id: 'front-sideways',
    goals: ['mobility', 'focus'],
    effort: 'active',
    evidence: 'trial',
    guide: 'horizontal',
    track: 'horizontal',
    defaultRounds: 4,
    maxRounds: 8,
    steps: [
      jump(1.6, 0),
      jump(1.6, 0.5),
      jump(1.6, 1),
      jump(1.6, 0.5),
    ],
  },
  {
    id: 'updown',
    goals: ['mobility', 'strain', 'headache'],
    effort: 'easy',
    evidence: 'trial',
    guide: 'vertical',
    track: 'vertical',
    defaultRounds: 3,
    maxRounds: 6,
    steps: [
      follow(2, 0.5, 0),
      hold(2, 0),
      follow(3, 0, 1),
      hold(2, 1),
      follow(2, 1, 0.5),
      blink(2),
    ],
  },
  {
    id: 'diagonal',
    goals: ['mobility'],
    effort: 'active',
    evidence: 'traditional',
    guide: 'cross',
    track: 'diagonalUp',
    defaultRounds: 2,
    maxRounds: 4,
    steps: [
      follow(2, 0.5, 1),
      hold(1.5, 1),
      follow(3, 1, 0),
      hold(1.5, 0),
      follow(2, 0, 0.5),
      blink(1.5),
      follow(2, 0.5, 0, { path: 'diagonalDown' }),
      hold(1.5, 0, { path: 'diagonalDown' }),
      follow(3, 0, 1, { path: 'diagonalDown' }),
      hold(1.5, 1, { path: 'diagonalDown' }),
      follow(2, 1, 0.5, { path: 'diagonalDown' }),
      blink(1.5),
    ],
  },
  {
    id: 'rotation',
    goals: ['mobility', 'strain'],
    effort: 'active',
    evidence: 'trial',
    guide: 'circle',
    track: 'circle',
    defaultRounds: 3,
    maxRounds: 6,
    steps: [
      follow(7, 0, 1),
      blink(2),
      follow(7, 1, 0),
      blink(2),
    ],
  },
  {
    id: 'figure-eight',
    goals: ['mobility', 'focus'],
    effort: 'active',
    evidence: 'traditional',
    guide: 'figureEight',
    track: 'figureEight',
    defaultRounds: 2,
    maxRounds: 5,
    steps: [
      follow(8, 0, 1),
      blink(2),
      follow(8, 1, 0),
      blink(2),
    ],
  },
  {
    id: 'square',
    goals: ['mobility'],
    effort: 'active',
    evidence: 'traditional',
    guide: 'square',
    track: 'square',
    defaultRounds: 2,
    maxRounds: 5,
    steps: [
      follow(8, 0, 1),
      blink(2),
      follow(8, 1, 0),
      blink(2),
    ],
  },
  {
    id: 'saccades',
    goals: ['focus', 'mobility'],
    effort: 'active',
    evidence: 'traditional',
    guide: 'horizontal',
    track: 'horizontal',
    defaultRounds: 4,
    maxRounds: 8,
    steps: [
      jump(0.9, 0),
      jump(0.9, 1),
      jump(0.9, 0),
      jump(0.9, 1),
      blink(2),
    ],
  },
  {
    id: 'trataka',
    goals: ['calm', 'focus'],
    effort: 'rest',
    evidence: 'trial',
    guide: 'dot',
    track: 'center',
    defaultRounds: 1,
    maxRounds: 3,
    steps: [
      { kind: 'gaze', seconds: 45 },
      closed(30),
    ],
  },
]

export function getExerciseBase(id: string): ExerciseBase | undefined {
  return exercises.find((item) => item.id === id)
}

export function cycleSeconds(steps: { seconds: number }[]): number {
  return steps.reduce((sum, step) => sum + step.seconds, 0)
}

export function exerciseSeconds(base: ExerciseBase, rounds: number): number {
  return cycleSeconds(base.steps) * rounds
}
