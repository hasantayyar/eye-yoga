import { createContext, useContext } from 'react'
import type { Exercise, Locale, Routine, SourceLink } from '../types'
import type { Ui } from './ui'

export type I18nValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Ui
  exercises: Exercise[]
  routines: Routine[]
  getExercise: (id: string) => Exercise | undefined
  getRoutine: (id: string) => Routine | undefined
  sources: SourceLink[]
}

export const I18nContext = createContext<I18nValue | null>(null)

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return ctx
}
