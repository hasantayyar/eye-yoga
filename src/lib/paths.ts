import type { GuideKind, PathId, Point } from '../types'

/**
 * The stage is drawn in a 200x200 viewBox with the origin in the middle, so
 * normalised -1..1 coordinates map onto a comfortable square on any screen.
 */
export const STAGE = 200
export const STAGE_REACH = 78

export function toStage(point: Point): Point {
  return { x: point.x * STAGE_REACH, y: point.y * STAGE_REACH }
}

const TAU = Math.PI * 2

/** Where the target sits at position `t` (0 to 1) along a path. */
export function pointAt(path: PathId, t: number): Point {
  const p = clamp01(t)
  switch (path) {
    case 'center':
      return { x: 0, y: 0 }
    case 'horizontal':
      return { x: -1 + 2 * p, y: 0 }
    case 'vertical':
      return { x: 0, y: -1 + 2 * p }
    case 'diagonalUp':
      return { x: -1 + 2 * p, y: 1 - 2 * p }
    case 'diagonalDown':
      return { x: -1 + 2 * p, y: -1 + 2 * p }
    case 'circle': {
      const angle = p * TAU
      return { x: Math.sin(angle), y: -Math.cos(angle) }
    }
    case 'figureEight': {
      const angle = p * TAU
      return { x: Math.sin(angle), y: 0.55 * Math.sin(2 * angle) }
    }
    case 'square':
      return squarePoint(p)
    default:
      return { x: 0, y: 0 }
  }
}

function squarePoint(t: number): Point {
  const side = Math.min(3, Math.floor(t * 4))
  const into = t * 4 - side
  switch (side) {
    case 0:
      return { x: -1 + 2 * into, y: -1 }
    case 1:
      return { x: 1, y: -1 + 2 * into }
    case 2:
      return { x: 1 - 2 * into, y: 1 }
    default:
      return { x: -1, y: 1 - 2 * into }
  }
}

/** The faint shape drawn behind the target, as an SVG path in stage units. */
export function guidePath(guide: GuideKind): string | null {
  const r = STAGE_REACH
  switch (guide) {
    case 'horizontal':
      return `M ${-r} 0 H ${r}`
    case 'vertical':
      return `M 0 ${-r} V ${r}`
    case 'cross':
      return `M ${-r} ${r} L ${r} ${-r} M ${-r} ${-r} L ${r} ${r}`
    case 'circle':
      return `M 0 ${-r} A ${r} ${r} 0 1 1 0 ${r} A ${r} ${r} 0 1 1 0 ${-r}`
    case 'figureEight':
      return sampledPath('figureEight', 96)
    case 'square': {
      const k = 14
      return [
        `M ${-r + k} ${-r}`,
        `H ${r - k}`,
        `A ${k} ${k} 0 0 1 ${r} ${-r + k}`,
        `V ${r - k}`,
        `A ${k} ${k} 0 0 1 ${r - k} ${r}`,
        `H ${-r + k}`,
        `A ${k} ${k} 0 0 1 ${-r} ${r - k}`,
        `V ${-r + k}`,
        `A ${k} ${k} 0 0 1 ${-r + k} ${-r}`,
        'Z',
      ].join(' ')
    }
    default:
      return null
  }
}

function sampledPath(path: PathId, samples: number): string {
  const points: string[] = []
  for (let i = 0; i <= samples; i += 1) {
    const { x, y } = toStage(pointAt(path, i / samples))
    points.push(`${i === 0 ? 'M' : 'L'} ${round(x)} ${round(y)}`)
  }
  return points.join(' ')
}

function round(value: number): number {
  return Math.round(value * 100) / 100
}

export function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value))
}
