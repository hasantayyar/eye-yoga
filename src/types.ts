export type Locale = 'en' | 'tr'

/** What a person came here for, in plain words rather than clinical terms. */
export type GoalId = 'strain' | 'dryness' | 'focus' | 'mobility' | 'calm' | 'headache'

export type GoalKey = GoalId | 'all'

/**
 * How well the exercise is backed up, stated honestly.
 * `trial` means a controlled study measured this specific practice.
 * `clinical` means eye-care bodies recommend it as routine care.
 * `mixed` means trials disagree.
 * `traditional` means it comes from yoga practice with little measurement.
 */
export type EvidenceLevel = 'trial' | 'clinical' | 'mixed' | 'traditional'

export type Effort = 'rest' | 'easy' | 'active'

/** A point on the stage. -1 to 1 on both axes, with 0,0 at the centre. */
export type Point = { x: number; y: number }

/**
 * Named parametric paths the target travels along. `t` runs 0 to 1.
 * Steps pick a slice of a path, so one path serves many steps.
 */
export type PathId =
  | 'center'
  | 'horizontal'
  | 'vertical'
  | 'diagonalUp'
  | 'diagonalDown'
  | 'circle'
  | 'figureEight'
  | 'square'

/** The faint shape drawn behind the target so the whole route is visible. */
export type GuideKind =
  | 'none'
  | 'dot'
  | 'horizontal'
  | 'vertical'
  | 'cross'
  | 'circle'
  | 'figureEight'
  | 'square'
  | 'depth'

/**
 * What the eyes are asked to do during a step. The stage renders each kind
 * differently, so this drives both the visuals and the instruction wording.
 */
export type StepKind =
  | 'follow'
  | 'hold'
  | 'jump'
  | 'blink'
  | 'squeeze'
  | 'closed'
  | 'near'
  | 'far'
  | 'gaze'

export type StepBase = {
  kind: StepKind
  seconds: number
  /** Which path the target rides. Defaults to the exercise track. */
  path?: PathId
  /** Slice of the path: where the target starts and ends. */
  from?: number
  to?: number
  /** Apparent distance, 0 far to 1 near. Drives the target size. */
  depthFrom?: number
  depthTo?: number
  /** How many cues fire inside the step, for blink prompts. */
  beats?: number
}

export type Step = StepBase & {
  label: string
  instruction: string
}

export type ExerciseBase = {
  id: string
  goals: GoalId[]
  effort: Effort
  evidence: EvidenceLevel
  guide: GuideKind
  track: PathId
  defaultRounds: number
  /** Rounds beyond this add strain rather than benefit. */
  maxRounds: number
  steps: StepBase[]
}

export type StepCopy = {
  label?: string
  instruction: string
}

export type ExerciseCopy = {
  name: string
  alsoKnownAs?: string
  tagline: string
  /** One sentence: what the practice is. */
  what: string
  /** One short paragraph: the mechanism, in plain language. */
  why: string
  /** The honest limit of the evidence, shown next to the badge. */
  evidenceNote: string
  setup: string
  howTo: string[]
  bestFor: string[]
  skipIf: string[]
  steps: StepCopy[]
}

export type SourceLink = {
  url: string
  label: string
}

export type Exercise = Omit<ExerciseBase, 'steps'> &
  Omit<ExerciseCopy, 'steps'> & {
    steps: Step[]
    sources: SourceLink[]
  }

export type RoutineItem = {
  exerciseId: string
  rounds: number
}

export type RoutineBase = {
  id: string
  goals: GoalId[]
  /** Shown first on the home screen as the one-tap way in. */
  featured?: boolean
  items: RoutineItem[]
}

export type RoutineCopy = {
  name: string
  tagline: string
  what: string
}

export type Routine = Omit<RoutineBase, 'items'> &
  RoutineCopy & {
    items: RoutineItem[]
    exercises: Exercise[]
    seconds: number
  }

/** One entry in the flattened session timeline. */
export type Segment = {
  index: number
  blockIndex: number
  exercise: Exercise
  /** `intro` announces the next exercise; `prep` opens the session. */
  kind: StepKind | 'intro' | 'prep'
  step?: Step
  round: number
  rounds: number
  start: number
  seconds: number
}
