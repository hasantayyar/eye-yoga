import { cycleSeconds } from '../data/exercises'
import { routineSeconds } from '../data/routines'
import type {
  Exercise,
  ExerciseBase,
  ExerciseCopy,
  Routine,
  RoutineBase,
  RoutineCopy,
  SourceLink,
  StepKind,
} from '../types'

export function localizeExercise(
  base: ExerciseBase,
  copy: ExerciseCopy,
  stepLabels: Record<StepKind, string>,
  sources: SourceLink[] = [],
): Exercise {
  return {
    ...base,
    name: copy.name,
    alsoKnownAs: copy.alsoKnownAs,
    tagline: copy.tagline,
    what: copy.what,
    why: copy.why,
    evidenceNote: copy.evidenceNote,
    setup: copy.setup,
    howTo: copy.howTo,
    bestFor: copy.bestFor,
    skipIf: copy.skipIf,
    sources,
    steps: base.steps.map((step, index) => {
      const stepCopy = copy.steps[index]
      return {
        ...step,
        label: stepCopy?.label ?? stepLabels[step.kind],
        instruction: stepCopy?.instruction ?? '',
      }
    }),
  }
}

export function localizeRoutine(
  base: RoutineBase,
  copy: RoutineCopy,
  lookup: (id: string) => Exercise | undefined,
): Routine {
  const exercises = base.items
    .map((item) => lookup(item.exerciseId))
    .filter((item): item is Exercise => Boolean(item))

  return {
    ...base,
    name: copy.name,
    tagline: copy.tagline,
    what: copy.what,
    exercises,
    seconds: routineSeconds(base),
  }
}

export function exerciseCycleSeconds(exercise: Exercise): number {
  return cycleSeconds(exercise.steps)
}
