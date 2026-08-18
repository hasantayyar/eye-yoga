import type { StepKind } from '../types'

let ctx: AudioContext | null = null

function getCtx(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext()
  }
  return ctx
}

export function resumeAudio(): void {
  const audio = getCtx()
  if (audio.state === 'suspended') {
    void audio.resume()
  }
}

function tone(freq: number, at: number, length: number, peak: number): void {
  const audio = getCtx()
  const osc = audio.createOscillator()
  const gain = audio.createGain()
  const start = audio.currentTime + at

  osc.type = 'sine'
  osc.frequency.setValueAtTime(freq, start)

  gain.gain.setValueAtTime(0, start)
  gain.gain.linearRampToValueAtTime(peak, start + 0.03)
  gain.gain.exponentialRampToValueAtTime(0.0001, start + length)

  osc.connect(gain)
  gain.connect(audio.destination)
  osc.start(start)
  osc.stop(start + length + 0.05)
}

/**
 * Pitch carries meaning: high for a jump to land on, mid for travel,
 * low and soft for rest. Nothing is loud enough to startle.
 */
export function playStepCue(kind: StepKind): void {
  switch (kind) {
    case 'jump':
      tone(659.3, 0, 0.2, 0.035)
      break
    case 'follow':
      tone(493.9, 0, 0.4, 0.028)
      break
    case 'hold':
      tone(392, 0, 0.45, 0.024)
      break
    case 'blink':
      tone(587.3, 0, 0.16, 0.03)
      break
    case 'squeeze':
      tone(329.6, 0, 0.5, 0.03)
      break
    case 'near':
      tone(523.3, 0, 0.32, 0.028)
      break
    case 'far':
      tone(349.2, 0, 0.5, 0.028)
      break
    case 'closed':
    case 'gaze':
      tone(261.6, 0, 0.8, 0.022)
      break
    default:
      tone(440, 0, 0.3, 0.026)
  }
}

/** A short tick inside a step, used for the individual blink prompts. */
export function playBeatCue(): void {
  tone(783.9, 0, 0.11, 0.026)
}

/** Two notes announcing the next exercise, so it is not mistaken for a step. */
export function playIntroCue(): void {
  tone(392, 0, 0.24, 0.026)
  tone(523.3, 0.14, 0.3, 0.026)
}

/** Rising triad: the session is over, not just this step. */
export function playCompleteCue(): void {
  const notes = [392, 493.9, 587.3, 784]
  notes.forEach((freq, index) => tone(freq, index * 0.2, 0.7, 0.032))
}

export function lightHaptic(): void {
  navigator.vibrate?.(14)
}

export function completeHaptic(): void {
  navigator.vibrate?.([18, 40, 18, 40, 28])
}
