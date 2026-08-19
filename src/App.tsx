import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { completeHaptic, playCompleteCue, resumeAudio } from './audio/cues'
import { Complete } from './components/Complete'
import { ExerciseDetail } from './components/ExerciseDetail'
import { Home } from './components/Home'
import { RoutineDetail } from './components/RoutineDetail'
import { Session } from './components/Session'
import { getExerciseBase } from './data/exercises'
import { useI18n } from './i18n/context'
import { buildPlan, type Plan } from './lib/plan'
import { hrefFor, navigate, parseRoute, type Route } from './lib/route'
import { readSound, readStats, recordSession, writeSound, type Stats } from './lib/storage'
import type { GoalKey } from './types'

const QUICK_ROUTINE = 'desk'

type Screen =
  | { name: 'home' }
  | { name: 'routine'; id: string }
  | { name: 'exercise'; id: string }
  | { name: 'session'; kind: 'routine' | 'exercise'; id: string; rounds: number }
  | { name: 'complete'; kind: 'routine' | 'exercise'; id: string; rounds: number; title: string }

function screenFromRoute(route: Route): Screen {
  if (route.name === 'routine') return { name: 'routine', id: route.id }
  if (route.name === 'exercise') return { name: 'exercise', id: route.id }
  return { name: 'home' }
}

/** Sessions keep the shareable URL of whatever they were launched from. */
function routeFromScreen(screen: Screen): Route {
  if (screen.name === 'home') return { name: 'home' }
  if (screen.name === 'routine') return { name: 'routine', id: screen.id }
  if (screen.name === 'exercise') return { name: 'exercise', id: screen.id }
  return screen.kind === 'routine'
    ? { name: 'routine', id: screen.id }
    : { name: 'exercise', id: screen.id }
}

function samePath(a: string, b: string): boolean {
  const norm = (value: string) => value.replace(/\/+$/, '') || '/'
  return norm(a) === norm(b)
}

export default function App() {
  const { t, getExercise, getRoutine } = useI18n()
  const [screen, setScreen] = useState<Screen>(() => screenFromRoute(parseRoute()))
  const [goal, setGoal] = useState<GoalKey>('all')
  const [rounds, setRounds] = useState(() => {
    const route = parseRoute()
    if (route.name === 'exercise') return getExerciseBase(route.id)?.defaultRounds ?? 3
    return 3
  })
  const [sound, setSound] = useState(readSound)
  const [stats, setStats] = useState<Stats>(readStats)
  const completing = useRef(false)
  const wentBack = useRef(false)

  const screenKey =
    screen.name === 'home' ? 'home' : `${screen.name}:${'id' in screen ? screen.id : ''}`

  useEffect(() => {
    const onPopState = () => {
      const next = screenFromRoute(parseRoute())
      if (next.name === 'exercise') {
        const found = getExerciseBase(next.id)
        if (found) setRounds(found.defaultRounds)
      }
      completing.current = false
      wentBack.current = true
      setScreen(next)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // A new screen starts at the top; going back keeps the browser's own position.
  useLayoutEffect(() => {
    if (wentBack.current) {
      wentBack.current = false
      return
    }
    window.scrollTo(0, 0)
  }, [screenKey])

  const title = useMemo(() => {
    if (screen.name === 'routine') return getRoutine(screen.id)?.name
    if (screen.name === 'exercise') return getExercise(screen.id)?.name
    if (screen.name === 'session' || screen.name === 'complete') {
      return screen.kind === 'routine' ? getRoutine(screen.id)?.name : getExercise(screen.id)?.name
    }
    return undefined
  }, [screen, getExercise, getRoutine])

  useEffect(() => {
    const route = routeFromScreen(screen)
    if (!samePath(window.location.pathname, hrefFor(route))) {
      navigate(route, 'replace')
    }
    document.title = title ? `${title} · ${t.brand}` : t.brand
  }, [screen, title, t.brand])

  const plan: Plan | null = useMemo(() => {
    if (screen.name !== 'session' && screen.name !== 'complete') return null
    if (screen.kind === 'routine') {
      const routine = getRoutine(screen.id)
      return routine ? buildPlan({ kind: 'routine', routine }) : null
    }
    const exercise = getExercise(screen.id)
    return exercise ? buildPlan({ kind: 'exercise', exercise, rounds: screen.rounds }) : null
  }, [screen, getExercise, getRoutine])

  const persistSound = (value: boolean) => {
    setSound(value)
    writeSound(value)
  }

  const goHome = () => {
    completing.current = false
    navigate({ name: 'home' })
    setScreen({ name: 'home' })
  }

  const openRoutine = (id: string) => {
    if (!getRoutine(id)) return
    completing.current = false
    navigate({ name: 'routine', id })
    setScreen({ name: 'routine', id })
  }

  const openExercise = (id: string) => {
    const base = getExerciseBase(id)
    if (!base) return
    setRounds(base.defaultRounds)
    completing.current = false
    navigate({ name: 'exercise', id })
    setScreen({ name: 'exercise', id })
  }

  const startRoutine = useCallback(
    (id: string) => {
      if (!getRoutine(id)) return
      completing.current = false
      if (sound) resumeAudio()
      navigate({ name: 'routine', id }, 'replace')
      setScreen({ name: 'session', kind: 'routine', id, rounds: 1 })
    },
    [getRoutine, sound],
  )

  const startExercise = useCallback(
    (id: string, count: number) => {
      if (!getExerciseBase(id)) return
      completing.current = false
      if (sound) resumeAudio()
      navigate({ name: 'exercise', id }, 'replace')
      setScreen({ name: 'session', kind: 'exercise', id, rounds: count })
    },
    [sound],
  )

  const onDone = useCallback(() => {
    if (completing.current) return
    completing.current = true
    const seconds = plan?.seconds ?? 0
    setStats(recordSession(seconds))
    if (sound) {
      resumeAudio()
      playCompleteCue()
      completeHaptic()
    }
    setScreen((current) =>
      current.name === 'session'
        ? {
            name: 'complete',
            kind: current.kind,
            id: current.id,
            rounds: current.rounds,
            title: title ?? t.brand,
          }
        : current,
    )
  }, [plan, sound, title, t.brand])

  if (screen.name === 'session' && plan) {
    return (
      <Session
        plan={plan}
        sound={sound}
        onExit={() => {
          const back: Screen =
            screen.kind === 'routine'
              ? { name: 'routine', id: screen.id }
              : { name: 'exercise', id: screen.id }
          completing.current = false
          setScreen(back)
        }}
        onDone={onDone}
      />
    )
  }

  if (screen.name === 'complete') {
    return (
      <Complete
        name={screen.title}
        stats={stats}
        tipIndex={stats.sessions}
        onAgain={() =>
          screen.kind === 'routine'
            ? startRoutine(screen.id)
            : startExercise(screen.id, screen.rounds)
        }
        onHome={goHome}
      />
    )
  }

  if (screen.name === 'routine') {
    const routine = getRoutine(screen.id)
    if (routine) {
      return (
        <RoutineDetail
          routine={routine}
          sound={sound}
          onSound={persistSound}
          onBack={goHome}
          onBegin={() => startRoutine(routine.id)}
          onOpenExercise={openExercise}
        />
      )
    }
  }

  if (screen.name === 'exercise') {
    const exercise = getExercise(screen.id)
    if (exercise) {
      return (
        <ExerciseDetail
          exercise={exercise}
          rounds={Math.min(rounds, exercise.maxRounds)}
          sound={sound}
          onRounds={setRounds}
          onSound={persistSound}
          onBack={goHome}
          onBegin={() => startExercise(exercise.id, Math.min(rounds, exercise.maxRounds))}
          onOpenRoutine={openRoutine}
        />
      )
    }
  }

  return (
    <Home
      goal={goal}
      onGoal={setGoal}
      stats={stats}
      onQuickStart={() => startRoutine(QUICK_ROUTINE)}
      onOpenRoutine={openRoutine}
      onOpenExercise={openExercise}
    />
  )
}
