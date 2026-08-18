import type { Locale, SourceLink } from '../types'

type SourceEntry = {
  url: string
  en: string
  tr: string
}

const YOGIC_EYE_TRIAL: SourceEntry = {
  url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4932063/',
  en: 'J Phys Ther Sci - Eight-step yogic eye exercises reduced eye fatigue over 8 weeks (Kim, 2016)',
  tr: 'J Phys Ther Sci - Sekiz adımlı göz yogası 8 haftada göz yorgunluğunu azalttı (Kim, 2016)',
}

const BLINK_COMPLETENESS: SourceEntry = {
  url: 'https://pubmed.ncbi.nlm.nih.gov/23538437/',
  en: 'Optom Vis Sci - Incomplete blinks tracked with symptoms; blinking faster did not help (Portello et al., 2013)',
  tr: 'Optom Vis Sci - Yarım kırpmalar şikayetlerle ilişkiliydi; daha hızlı kırpmak işe yaramadı (Portello ve ark., 2013)',
}

const BREAKS_HELP: SourceEntry = {
  url: 'https://doi.org/10.1016/j.clae.2022.101744',
  en: 'Cont Lens Anterior Eye - 20-20-20 reminders eased strain and dry-eye symptoms, and improved focusing flexibility (Talens-Estarelles et al., 2023)',
  tr: 'Cont Lens Anterior Eye - 20-20-20 hatırlatmaları zorlanma ve kuruluk şikayetlerini azalttı, odak esnekliğini artırdı (Talens-Estarelles ve ark., 2023)',
}

const BREAKS_DOUBT: SourceEntry = {
  url: 'https://doi.org/10.1097/opx.0000000000001971',
  en: 'Optom Vis Sci - 20-second breaks alone did not reduce strain in a controlled task (Johnson & Rosenfield, 2023)',
  tr: 'Optom Vis Sci - Kontrollü bir görevde yalnız 20 saniyelik molalar zorlanmayı azaltmadı (Johnson ve Rosenfield, 2023)',
}

const CITT: SourceEntry = {
  url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2779032/',
  en: 'Arch Ophthalmol - Convergence Insufficiency Treatment Trial: home push-ups helped 43% of children, supervised therapy 73% (CITT, 2008)',
  tr: 'Arch Ophthalmol - Konverjans Yetersizliği Tedavi Çalışması: evde itme egzersizi çocukların %43\u2019üne, gözetimli terapi %73\u2019üne yardım etti (CITT, 2008)',
}

const AAO_MYTHS: SourceEntry = {
  url: 'https://www.aao.org/eye-health/tips-prevention/common-eye-vision-myths-facts',
  en: 'American Academy of Ophthalmology - Eye exercises do not change glasses prescriptions, but may help convergence problems',
  tr: 'American Academy of Ophthalmology - Göz egzersizleri numarayı değiştirmez, ancak konverjans sorunlarına yardımcı olabilir',
}

const AAO_TRAINING: SourceEntry = {
  url: 'https://www.aao.org/eye-health/tips-prevention/vision-training-not-proven-to-make-vision-sharper',
  en: 'American Academy of Ophthalmology - Vision training is not proven to make eyesight sharper',
  tr: 'American Academy of Ophthalmology - Görme antrenmanının görüşü keskinleştirdiği kanıtlanmadı',
}

const TRATAKA: SourceEntry = {
  url: 'https://pubmed.ncbi.nlm.nih.gov/26870677/',
  en: 'J Tradit Complement Med - A single trataka session improved attention and response inhibition in 30 volunteers (Raghavendra & Singh, 2016)',
  tr: 'J Tradit Complement Med - Tek bir trataka seansı 30 gönüllüde dikkat ve tepki kontrolünü iyileştirdi (Raghavendra ve Singh, 2016)',
}

const OUTDOORS: SourceEntry = {
  url: 'https://jamanetwork.com/journals/jama/fullarticle/2441261',
  en: 'JAMA - 40 extra minutes outdoors a day cut new myopia in children from 39.5% to 30.4% over three years (He et al., 2015)',
  tr: 'JAMA - Günde 40 dakika ek açık hava, çocuklarda yeni miyopiyi üç yılda %39,5\u2019ten %30,4\u2019e düşürdü (He ve ark., 2015)',
}

const byExercise: Record<string, SourceEntry[]> = {
  blinking: [BLINK_COMPLETENESS, YOGIC_EYE_TRIAL],
  twenty: [BREAKS_HELP, BREAKS_DOUBT, OUTDOORS],
  palming: [YOGIC_EYE_TRIAL, AAO_TRAINING],
  'near-far': [BREAKS_HELP, YOGIC_EYE_TRIAL],
  'nose-tip': [CITT, AAO_MYTHS],
  sideways: [YOGIC_EYE_TRIAL],
  'front-sideways': [YOGIC_EYE_TRIAL],
  updown: [YOGIC_EYE_TRIAL],
  diagonal: [YOGIC_EYE_TRIAL, AAO_TRAINING],
  rotation: [YOGIC_EYE_TRIAL],
  'figure-eight': [YOGIC_EYE_TRIAL, AAO_TRAINING],
  square: [YOGIC_EYE_TRIAL, AAO_TRAINING],
  saccades: [AAO_TRAINING, CITT],
  trataka: [TRATAKA, YOGIC_EYE_TRIAL],
}

/** Shown once on the home screen, under the honest-limits section. */
const general: SourceEntry[] = [
  YOGIC_EYE_TRIAL,
  BREAKS_HELP,
  BREAKS_DOUBT,
  BLINK_COMPLETENESS,
  CITT,
  AAO_MYTHS,
  AAO_TRAINING,
  OUTDOORS,
]

function localize(entries: SourceEntry[], locale: Locale): SourceLink[] {
  return entries.map((entry) => ({
    url: entry.url,
    label: locale === 'tr' ? entry.tr : entry.en,
  }))
}

export function sourcesFor(id: string, locale: Locale): SourceLink[] {
  return localize(byExercise[id] ?? [], locale)
}

export function generalSources(locale: Locale): SourceLink[] {
  return localize(general, locale)
}
