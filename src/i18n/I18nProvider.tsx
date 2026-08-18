import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { exercises as exerciseBases } from '../data/exercises'
import { routines as routineBases } from '../data/routines'
import { generalSources, sourcesFor } from '../data/sources'
import type { Locale } from '../types'
import { I18nContext } from './context'
import { exercisesEn } from './exercisesEn'
import { exercisesTr } from './exercisesTr'
import { localizeExercise, localizeRoutine } from './localize'
import { ui } from './ui'

const LANG_KEY = 'eyy:lang'

function detectLocale(): Locale {
  const stored = localStorage.getItem(LANG_KEY)
  if (stored === 'en' || stored === 'tr') return stored
  return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)
  const t = ui[locale]
  const copy = locale === 'tr' ? exercisesTr : exercisesEn

  const exercises = useMemo(
    () =>
      exerciseBases.map((base) =>
        localizeExercise(
          base,
          copy[base.id] ?? exercisesEn[base.id],
          t.stepKind,
          sourcesFor(base.id, locale),
        ),
      ),
    [copy, locale, t.stepKind],
  )

  const getExercise = useCallback(
    (id: string) => exercises.find((item) => item.id === id),
    [exercises],
  )

  const routines = useMemo(
    () => routineBases.map((base) => localizeRoutine(base, t.routines[base.id], getExercise)),
    [t.routines, getExercise],
  )

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LANG_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      exercises,
      routines,
      getExercise,
      getRoutine: (id: string) => routines.find((item) => item.id === id),
      sources: generalSources(locale),
    }),
    [locale, setLocale, t, exercises, routines, getExercise],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
