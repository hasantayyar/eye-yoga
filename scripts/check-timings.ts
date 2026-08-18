import { cycleSeconds, exercises, goalOrder } from '../src/data/exercises'
import { routines, routineSeconds } from '../src/data/routines'
import { exercisesEn } from '../src/i18n/exercisesEn'
import { exercisesTr } from '../src/i18n/exercisesTr'
import { pointAt } from '../src/lib/paths'
import type { PathId } from '../src/types'

const PATHS: PathId[] = [
  'center',
  'horizontal',
  'vertical',
  'diagonalUp',
  'diagonalDown',
  'circle',
  'figureEight',
  'square',
]

function clock(seconds: number): string {
  const total = Math.round(seconds)
  return `${Math.floor(total / 60)}:${`${total % 60}`.padStart(2, '0')}`
}

/** Returns the number of problems found so the runner can set an exit code. */
export function checkData(): number {
  let problems = 0

  const expect = (condition: boolean, message: string) => {
    if (!condition) {
      problems += 1
      console.log(`FAIL  ${message}`)
    }
  }

  console.log('Exercises')
  for (const base of exercises) {
    const cycle = cycleSeconds(base.steps)
    const en = exercisesEn[base.id]
    const tr = exercisesTr[base.id]
    console.log(
      `  ${base.id.padEnd(16)} cycle ${clock(cycle).padStart(5)}` +
        `  default ${clock(cycle * base.defaultRounds).padStart(5)}` +
        `  max ${clock(cycle * base.maxRounds).padStart(5)}  steps ${base.steps.length}`,
    )
    expect(Boolean(en), `${base.id}: missing English copy`)
    expect(Boolean(tr), `${base.id}: missing Turkish copy`)
    expect(en?.steps.length === base.steps.length, `${base.id}: EN step copy count mismatch`)
    expect(tr?.steps.length === base.steps.length, `${base.id}: TR step copy count mismatch`)
    expect(base.defaultRounds <= base.maxRounds, `${base.id}: default rounds above max`)
    expect(cycle * base.defaultRounds <= 300, `${base.id}: default run over 5 minutes`)
    for (const step of base.steps) {
      expect(step.seconds > 0, `${base.id}: step with no duration`)
      if (step.kind === 'follow' || step.kind === 'hold' || step.kind === 'jump') {
        expect(step.from !== undefined, `${base.id}: travel step without a start`)
        expect(step.to !== undefined, `${base.id}: travel step without an end`)
      }
    }
  }

  console.log('\nRoutines')
  for (const routine of routines) {
    const total = routineSeconds(routine)
    console.log(
      `  ${routine.id.padEnd(12)} ${clock(total).padStart(5)}  ${routine.items.length} exercises`,
    )
    expect(total <= 480, `${routine.id}: longer than 8 minutes`)
    for (const item of routine.items) {
      const base = exercises.find((entry) => entry.id === item.exerciseId)
      expect(Boolean(base), `${routine.id}: unknown exercise ${item.exerciseId}`)
      expect(
        !base || item.rounds <= base.maxRounds,
        `${routine.id}: ${item.exerciseId} rounds above max`,
      )
    }
  }

  // The home screen has no empty state, so every filter chip must land on something.
  console.log('\nGoal filters')
  for (const goal of goalOrder) {
    const hits =
      goal === 'all' ? exercises.length : exercises.filter((e) => e.goals.includes(goal)).length
    const routineHits =
      goal === 'all' ? routines.length : routines.filter((r) => r.goals.includes(goal)).length
    console.log(
      `  ${goal.padEnd(10)} ${`${hits}`.padStart(2)} exercises  ${routineHits} routines`,
    )
    expect(hits > 0, `${goal}: no exercises match`)
    expect(routineHits > 0, `${goal}: no routines match`)
  }

  console.log('\nPath bounds')
  for (const path of PATHS) {
    let maxX = 0
    let maxY = 0
    for (let i = 0; i <= 400; i += 1) {
      const point = pointAt(path, i / 400)
      maxX = Math.max(maxX, Math.abs(point.x))
      maxY = Math.max(maxY, Math.abs(point.y))
    }
    console.log(`  ${path.padEnd(14)} |x| <= ${maxX.toFixed(3)}  |y| <= ${maxY.toFixed(3)}`)
    expect(maxX <= 1.0001 && maxY <= 1.0001, `${path}: leaves the stage`)
  }

  console.log(problems === 0 ? '\nAll checks passed.' : `\n${problems} problem(s) found.`)
  return problems
}
