import { getExerciseBase } from '../data/exercises'
import { getRoutineBase } from '../data/routines'

export type Route =
  | { name: 'home' }
  | { name: 'routine'; id: string }
  | { name: 'exercise'; id: string }

function basePath(): string {
  const base = import.meta.env.BASE_URL
  return base.endsWith('/') ? base.slice(0, -1) : base
}

function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed || '/'
}

/** Path after the deploy base. Empty means home. */
export function pathFromLocation(pathname = window.location.pathname): string {
  const base = basePath()
  let path = pathname
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || '/'
  }
  if (!path.startsWith('/')) path = `/${path}`
  return path === '/' ? '' : path.replace(/\/+$/, '')
}

export function parseRoute(pathname = window.location.pathname): Route {
  const path = pathFromLocation(pathname)
  if (!path) return { name: 'home' }

  const [head, tail] = path.replace(/^\//, '').split('/')
  if (head === 'exercise' && tail && getExerciseBase(tail)) {
    return { name: 'exercise', id: tail }
  }
  if (head === 'routine' && tail && getRoutineBase(tail)) {
    return { name: 'routine', id: tail }
  }
  return { name: 'home' }
}

export function hrefFor(route: Route): string {
  const base = basePath()
  if (route.name === 'home') return `${base}/`
  return `${base}/${route.name}/${route.id}`
}

export function navigate(route: Route, mode: 'push' | 'replace' = 'push') {
  const href = hrefFor(route)
  if (normalizePath(window.location.pathname) === normalizePath(href)) return
  if (mode === 'replace') window.history.replaceState(null, '', href)
  else window.history.pushState(null, '', href)
}
