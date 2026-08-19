import type { Effort, EvidenceLevel, GoalKey, RoutineCopy, StepKind } from '../types'

export type Ui = {
  brand: string
  brandAria: string
  langEn: string
  langTr: string
  langAria: string

  heroEyebrow: string
  heroTitle: string
  heroLede: string
  quickStart: string
  browse: string

  howAria: string
  how: { title: string; text: string }[]

  routinesTitle: string
  routinesHint: string
  featuredTag: string
  exercisesTitle: string
  exercisesHint: string
  exercisesCount: (count: number) => string
  goalTitle: string
  goalAria: string
  goals: Record<GoalKey, { label: string; hint: string }>

  evidence: Record<EvidenceLevel, { label: string; hint: string }>
  evidenceAria: string
  effort: Record<Effort, string>

  limitsTitle: string
  limits: string[]
  sourcesTitle: string
  sourcesLede: string
  safetyTitle: string
  safety: string
  disclaimer: string

  streakOne: string
  streakMany: (days: number) => string
  sessionsTotal: (count: number) => string
  minutesTotal: (minutes: number) => string
  todayDone: string

  reminderTitle: string
  reminderBody: string
  reminderOn: string
  reminderOff: string
  reminderEvery: (minutes: number) => string
  reminderNudgeTitle: string
  reminderNudgeBody: string
  reminderStart: string
  reminderLater: string
  reminderNext: (clock: string) => string

  back: string
  begin: string
  beginRoutine: string
  whatTitle: string
  whyTitle: string
  evidenceNoteTitle: string
  setupTitle: string
  howToTitle: string
  bestForTitle: string
  skipIfTitle: string
  planTitle: string
  planHint: string
  roundsTitle: string
  roundsHint: (rounds: number, clock: string) => string
  roundsUnit: (rounds: number) => string
  soundLabel: string
  timelineTitle: string
  timelineHint: string
  inRoutines: string
  routineContains: (count: number) => string
  exerciseRounds: (rounds: number) => string

  prepTitle: string
  prepBody: string
  nextUp: string
  finalExercise: string
  stepOf: (current: number, total: number) => string
  roundOf: (round: number, total: number) => string
  exerciseOf: (current: number, total: number) => string
  headStill: string
  close: string
  pause: string
  paused: string
  pausedBody: string
  resume: string
  skip: string
  skipAria: string
  keys: string

  stepKind: Record<StepKind, string>
  blinkNow: string
  eyesClosed: string
  lookFar: string
  lookNear: string
  followDot: string

  completeEyebrow: string
  completeTitle: string
  completeBody: (name: string) => string
  completeStreak: (days: number) => string
  repeat: string
  chooseAnother: string
  tipTitle: string
  tips: string[]

  routines: Record<string, RoutineCopy>
  secondUnit: string
  minuteUnit: string
}

export const ui: Record<'en' | 'tr', Ui> = {
  en: {
    brand: 'Eye Yoga',
    brandAria: 'Eye Yoga',
    langEn: 'EN',
    langTr: 'TR',
    langAria: 'Language',

    heroEyebrow: 'Guided eye exercise',
    heroTitle: 'Your eyes have been fixed at one distance all day.',
    heroLede: 'Short, guided eye-exercise routines.',
    quickStart: 'Start the 1-minute reset',
    browse: 'Or pick a longer routine',

    howAria: 'How it works',
    how: [
      {
        title: 'Press start',
        text: 'You get a countdown, then one instruction at a time. No prior reading needed.',
      },
      {
        title: 'Follow the dot',
        text: 'Keep your head still and let only your eyes travel. The dot sets the pace.',
      },
      {
        title: 'Stop when told',
        text: 'Each routine ends on rest. If anything aches or spins, stop. That instruction is in every exercise.',
      },
    ],

    routinesTitle: 'Guided routines',
    routinesHint: 'Several exercises in a row, timed for you. Start here.',
    featuredTag: 'Start here',
    exercisesTitle: 'Single exercises',
    exercisesHint: 'One movement at a time, with the reasoning and the references.',
    exercisesCount: (count) => (count === 1 ? '1 exercise' : `${count} exercises`),
    goalTitle: 'What do your eyes need?',
    goalAria: 'Filter by need',
    goals: {
      all: { label: 'Everything', hint: 'All exercises' },
      strain: { label: 'Tired eyes', hint: 'Aching or blurring after screens' },
      dryness: { label: 'Dry eyes', hint: 'Gritty, burning, not blinking enough' },
      focus: { label: 'Focus', hint: 'Blur when switching near to far' },
      mobility: { label: 'Stiffness', hint: 'The full range of movement' },
      calm: { label: 'Calm', hint: 'Wind down and quiet the mind' },
      headache: { label: 'Headache', hint: 'Pressure building behind the eyes' },
    },

    evidence: {
      trial: {
        label: 'Measured in a trial',
        hint: 'A controlled study measured this practice, or the sequence it belongs to.',
      },
      clinical: {
        label: 'Clinical practice',
        hint: 'Prescribed by eye-care professionals for a specific diagnosed condition.',
      },
      mixed: {
        label: 'Evidence is split',
        hint: 'Good studies disagree. Both sides are linked below.',
      },
      traditional: {
        label: 'Traditional',
        hint: 'Comes from yoga practice. Little or no measurement behind it.',
      },
    },
    evidenceAria: 'Strength of evidence',
    effort: {
      rest: 'Rest',
      easy: 'Easy',
      active: 'Active',
    },

    limitsTitle: 'What this can and cannot do',
    limits: [
      'Eye exercises do not change a glasses prescription. Nearsightedness, farsightedness, astigmatism, and presbyopia come from the physical shape and ageing of the eye, and no movement alters that. The American Academy of Ophthalmology is direct about this, and so are we.',
      'What they plausibly do is relieve strain and dryness, loosen muscles held in one position for hours, and make focus switch more readily between near and far. Those are comfort gains, and they are worth having.',
      'One exercise here is a real treatment for a real diagnosis: drawing a target towards the nose is the home exercise for convergence insufficiency. In the trial it helped 43% of children, while supervised therapy helped 73%. If close work regularly doubles or aches, get assessed rather than self-treating.',
      'The most strongly supported thing you can do for your eyes is not in this app at all: spend time outdoors. In a three-year trial, an extra 40 minutes outside each day cut new short-sightedness in children from 39.5% to 30.4%.',
    ],
    sourcesTitle: 'References',
    sourcesLede: 'Every claim above comes from one of these. Open any of them and check.',
    safetyTitle: 'When to stop',
    safety:
      'Stop immediately if you get dizzy, nauseous, or a headache builds. Skip the eye-movement exercises after recent eye surgery, with a retinal condition, or with an eye infection or injury, unless your clinician has cleared them. Sudden double vision, flashes, floaters, curtains across your vision, or a loss of sight are emergencies. Go to a clinician today, not to an app.',
    disclaimer:
      'This is a self-care guide, not medical advice, and it does not diagnose anything. It will not correct your eyesight and does not replace an eye examination. If your eyes hurt, if vision changes, or if symptoms keep coming back, see an optometrist or ophthalmologist.',

    streakOne: '1 day in a row',
    streakMany: (days) => `${days} days in a row`,
    sessionsTotal: (count) => (count === 1 ? '1 session' : `${count} sessions`),
    minutesTotal: (minutes) => `${minutes} min of practice`,
    todayDone: 'Done today',

    reminderTitle: 'Nudge me every 20 minutes',
    reminderBody:
      'While this tab stays open, a quiet banner appears when it is time to look away. It is the one habit eye-care bodies agree on.',
    reminderOn: 'On',
    reminderOff: 'Off',
    reminderEvery: (minutes) => `Every ${minutes} min`,
    reminderNudgeTitle: 'Time to look away',
    reminderNudgeBody: 'Twenty seconds on something far. That is the whole ask.',
    reminderStart: 'Take the break',
    reminderLater: 'Not now',
    reminderNext: (clock) => `Next nudge in ${clock}`,

    back: 'All routines',
    begin: 'Begin',
    beginRoutine: 'Begin the routine',
    whatTitle: 'What it is',
    whyTitle: 'Why it might help',
    evidenceNoteTitle: 'How well we know',
    setupTitle: 'Before you start',
    howToTitle: 'Doing it well',
    bestForTitle: 'Best for',
    skipIfTitle: 'Skip or stop if',
    planTitle: 'The plan',
    planHint: 'In this order, timed for you.',
    roundsTitle: 'Rounds',
    roundsHint: (rounds, clock) => `${rounds} ${rounds === 1 ? 'round' : 'rounds'} · about ${clock}`,
    roundsUnit: (rounds) => `${rounds}×`,
    soundLabel: 'Soft cue at each change',
    timelineTitle: 'One round, step by step',
    timelineHint: 'Widths match the seconds, so you can see the pace before you begin.',
    inRoutines: 'Appears in',
    routineContains: (count) => `${count} ${count === 1 ? 'exercise' : 'exercises'}`,
    exerciseRounds: (rounds) => `${rounds} ${rounds === 1 ? 'round' : 'rounds'}`,

    prepTitle: 'Get comfortable',
    prepBody:
      'Screen about an arm\u2019s length away, at eye level. Keep your head still; only your eyes move. Glasses on if you wear them.',
    nextUp: 'Next',
    finalExercise: 'Last one',
    stepOf: (current, total) => `Step ${current} of ${total}`,
    roundOf: (round, total) => `Round ${round}/${total}`,
    exerciseOf: (current, total) => `${current} of ${total}`,
    headStill: 'Head still, eyes only',
    close: 'Exit',
    pause: 'Pause',
    paused: 'Paused',
    pausedBody: 'Take as long as you need.',
    resume: 'Continue',
    skip: 'Skip',
    skipAria: 'Skip to the next exercise',
    keys: 'Space to pause · → to skip · Esc to exit',

    stepKind: {
      follow: 'Follow',
      hold: 'Hold',
      jump: 'Jump',
      blink: 'Blink',
      squeeze: 'Squeeze',
      closed: 'Rest',
      near: 'Near',
      far: 'Far',
      gaze: 'Gaze',
    },
    blinkNow: 'Blink',
    eyesClosed: 'Eyes closed',
    lookFar: 'Look far away',
    lookNear: 'Look up close',
    followDot: 'Follow the dot',

    completeEyebrow: 'Done',
    completeTitle: 'Eyes are back.',
    completeBody: (name) =>
      `You finished ${name}. If the room looks a little brighter and sharper for a moment, that is the focusing muscle letting go.`,
    completeStreak: (days) => `${days} days in a row. Keep it small and keep it often.`,
    repeat: 'Again',
    chooseAnother: 'Choose another',
    tipTitle: 'One thing to carry with you',
    tips: [
      'The best eye habit is boring: look at something far away, often. Every twenty minutes is the usual advice.',
      'Screens sit below eye level, so your eyes look slightly down all day. Raising the monitor a little does more than any exercise.',
      'If your eyes are dry, blinking fully matters more than blinking often. Let the lids actually meet.',
      'Time outdoors is the only intervention with strong trial evidence behind it, especially for children.',
      'Dry air dries eyes. A humidifier or moving away from the air vent can beat any exercise.',
      'If you take one thing from this app, make it the 20-second look out of a window.',
    ],

    routines: {
      desk: {
        name: 'One-Minute Reset',
        tagline: 'The shortest useful break. Two blink sets and a long look away.',
        what: 'Fits between two meetings. Rehydrates the surface of the eye and lets the focusing muscle off for twenty seconds.',
      },
      screen: {
        name: 'Screen Break',
        tagline: 'Three minutes to undo a long stretch at the desk.',
        what: 'Blinking, a distance break, a horizontal stretch, focus switching, and warm hands to finish. The everyday option.',
      },
      classic: {
        name: 'Classic Eye Yoga',
        tagline: 'The eight-step sequence from the study, in its original order.',
        what: 'Palming, blinking, sideways, front and sideways, up and down, circles, thumb to nose, and near to far. This is the exact sequence that lowered eye-fatigue scores in a controlled trial.',
      },
      mobility: {
        name: 'Full Range',
        tagline: 'Every direction the eyes can go, then warm hands.',
        what: 'Straight lines, diagonals, circles, an eight, and a square. For eyes that feel stiff rather than dry.',
      },
      focus: {
        name: 'Focus Trainer',
        tagline: 'Near, far, and inward: the focusing and teaming muscles.',
        what: 'Switching distances, drawing a target to the nose, and fast jumps. The most demanding routine here. Stop if it aches.',
      },
      'wind-down': {
        name: 'Wind Down',
        tagline: 'Dim the day. Blink, soften, gaze, rest.',
        what: 'Ends in darkness with warm palms over closed eyes. Made for the last hour before sleep.',
      },
    },
    secondUnit: 's',
    minuteUnit: 'min',
  },

  tr: {
    brand: 'Göz Yogası',
    brandAria: 'Göz Yogası',
    langEn: 'EN',
    langTr: 'TR',
    langAria: 'Dil',

    heroEyebrow: 'Rehberli göz egzersizi',
    heroTitle: 'Gözlerin bütün gün aynı mesafede kaldı.',
    heroLede: 'Kısa ve rehberli rutinlerde göz egzersizleri.',
    quickStart: '1 dakikalık sıfırlamayı başlat',
    browse: 'Ya da daha uzun bir rutin seç',

    howAria: 'Nasıl çalışır',
    how: [
      {
        title: 'Başlat',
        text: 'Önce geri sayım, sonra tek tek talimatlar gelir. Önceden bir şey okumana gerek yok.',
      },
      {
        title: 'Noktayı takip et',
        text: 'Başını sabit tut, sadece gözlerin hareket etsin. Hızı nokta belirler.',
      },
      {
        title: 'Söylendiğinde dur',
        text: 'Her rutin dinlenmeyle biter. Bir yerin ağrırsa ya da başın dönerse bırak. Bu uyarı her egzersizde yazılı.',
      },
    ],

    routinesTitle: 'Rehberli rutinler',
    routinesHint: 'Arka arkaya birkaç egzersiz; süreleri hazır. Başlamak için en iyi yer.',
    featuredTag: 'Buradan başla',
    exercisesTitle: 'Tek egzersizler',
    exercisesHint: 'Tek bir hareket; nedeni ve kaynaklarıyla birlikte.',
    exercisesCount: (count) => `${count} egzersiz`,
    goalTitle: 'Gözlerinin neye ihtiyacı var?',
    goalAria: 'İhtiyaca göre filtrele',
    goals: {
      all: { label: 'Tümü', hint: 'Bütün egzersizler' },
      strain: { label: 'Yorgun gözler', hint: 'Ekrandan sonra ağrı veya bulanıklık' },
      dryness: { label: 'Kuru gözler', hint: 'Kumlu, yanan, yeterince kırpılmayan' },
      focus: { label: 'Odak', hint: 'Yakından uzağa geçerken bulanıklık' },
      mobility: { label: 'Katılık', hint: 'Tam hareket açıklığı' },
      calm: { label: 'Sakinlik', hint: 'Yavaşla ve zihni sustur' },
      headache: { label: 'Baş ağrısı', hint: 'Gözlerin arkasında biriken baskı' },
    },

    evidence: {
      trial: {
        label: 'Çalışmayla ölçüldü',
        hint: 'Kontrollü bir çalışma bu hareketi ya da içinde yer aldığı diziyi ölçtü.',
      },
      clinical: {
        label: 'Klinik pratik',
        hint: 'Göz hekimleri tanı almış belirli bir durum için öneriyor.',
      },
      mixed: {
        label: 'Kanıt ikiye bölünmüş',
        hint: 'Nitelikli çalışmalar birbirini tutmuyor. İkisinin de bağlantısı aşağıda.',
      },
      traditional: {
        label: 'Geleneksel',
        hint: 'Yoga geleneğinden geliyor. Arkasında ölçüm ya yok ya çok az.',
      },
    },
    evidenceAria: 'Kanıt gücü',
    effort: {
      rest: 'Dinlenme',
      easy: 'Kolay',
      active: 'Aktif',
    },

    limitsTitle: 'Bu uygulamanın yapabildikleri ve yapamadıkları',
    limits: [
      'Göz egzersizleri gözlük numarasını değiştirmez. Miyopi, hipermetropi, astigmat ve presbiyopi gözün fiziksel şeklinden ve yaşlanmasından kaynaklanır; hiçbir hareket bunu değiştirmez. American Academy of Ophthalmology bu konuda net, biz de aynısını söylüyoruz.',
      'Muhtemelen yaptıkları şu: zorlanmayı ve kuruluğu hafifletmek, saatlerce aynı pozisyonda kalan kasları gevşetmek, odağın yakınla uzak arasında daha kolay geçmesini sağlamak. Bunlar birer rahatlama ve küçümsenecek şeyler değil.',
      'Buradaki bir egzersiz, gerçek bir tanının gerçek bir tedavisi: hedefi burna doğru getirmek, konverjans yetersizliğinin ev egzersizi. Çalışmada çocukların %43\u2019üne yardım etti; gözetimli terapi ise %73\u2019üne. Yakın çalışırken düzenli olarak çift görüyorsan ya da gözün ağrıyorsa, kendi kendine tedavi etmek yerine muayene ol.',
      'Gözlerin için yapabileceğin, kanıtı en güçlü şey bu uygulamada hiç yok: açık havada vakit geçirmek. Üç yıllık bir çalışmada günde 40 dakika ek açık hava, çocuklarda yeni miyopiyi %39,5\u2019ten %30,4\u2019e düşürdü.',
    ],
    sourcesTitle: 'Kaynaklar',
    sourcesLede: 'Yukarıdaki her iddia bunlardan birine dayanıyor. İstediğini aç, kendin bak.',
    safetyTitle: 'Ne zaman durmalı',
    safety:
      'Başın dönerse, miden bulanırsa ya da baş ağrın birikmeye başlarsa hemen dur. Yakın zamanda göz ameliyatı geçirdiysen, retina rahatsızlığın ya da göz enfeksiyonun veya yaralanman varsa, hekimin onaylamadıkça göz hareketi egzersizlerini yapma. Ani çift görme, ışık çakmaları, uçuşan cisimler, görüşün önüne perde inmesi ya da görme kaybı acil durumdur. Bugün bir hekime git, uygulamaya değil.',
    disclaimer:
      'Bu bir öz bakım rehberi; tıbbi tavsiye değil ve hiçbir şeyi teşhis etmiyor. Görüşünü düzeltmez, göz muayenesinin yerini almaz. Gözlerin ağrıyorsa, görüşün değişiyorsa ya da şikayetlerin tekrarlıyorsa bir göz hekimine görün.',

    streakOne: 'Üst üste 1 gün',
    streakMany: (days) => `Üst üste ${days} gün`,
    sessionsTotal: (count) => `${count} seans`,
    minutesTotal: (minutes) => `${minutes} dk pratik`,
    todayDone: 'Bugün yapıldı',

    reminderTitle: '20 dakikada bir hatırlat',
    reminderBody:
      'Bu sekme açık kaldığı sürece, uzağa bakma vakti geldiğinde sessiz bir uyarı çıkar. Göz sağlığı kuruluşlarının üzerinde anlaştığı tek alışkanlık bu.',
    reminderOn: 'Açık',
    reminderOff: 'Kapalı',
    reminderEvery: (minutes) => `${minutes} dakikada bir`,
    reminderNudgeTitle: 'Uzağa bakma vakti',
    reminderNudgeBody: 'Uzaktaki bir şeye yirmi saniye bak. Hepsi bu.',
    reminderStart: 'Molayı ver',
    reminderLater: 'Şimdi değil',
    reminderNext: (clock) => `Sonraki hatırlatmaya ${clock}`,

    back: 'Tüm rutinler',
    begin: 'Başla',
    beginRoutine: 'Rutini başlat',
    whatTitle: 'Nedir',
    whyTitle: 'Neden işe yarayabilir',
    evidenceNoteTitle: 'Ne kadar eminiz',
    setupTitle: 'Başlamadan önce',
    howToTitle: 'İyi yapmanın yolu',
    bestForTitle: 'Şunlara iyi gelir',
    skipIfTitle: 'Şu durumlarda atla ya da dur',
    planTitle: 'Plan',
    planHint: 'Bu sırayla; süreler hazır.',
    roundsTitle: 'Tur',
    roundsHint: (rounds, clock) => `${rounds} tur · yaklaşık ${clock}`,
    roundsUnit: (rounds) => `${rounds}×`,
    soundLabel: 'Her geçişte yumuşak bir işaret',
    timelineTitle: 'Bir tur, adım adım',
    timelineHint: 'Genişlikler saniyelerle orantılı; başlamadan önce hızı görebilirsin.',
    inRoutines: 'Şu rutinlerde var',
    routineContains: (count) => `${count} egzersiz`,
    exerciseRounds: (rounds) => `${rounds} tur`,

    prepTitle: 'Rahat bir pozisyon al',
    prepBody:
      'Ekran yaklaşık bir kol mesafesinde ve göz seviyesinde olsun. Başını sabit tut; sadece gözlerin hareket etsin. Gözlük kullanıyorsan tak.',
    nextUp: 'Sırada',
    finalExercise: 'Son egzersiz',
    stepOf: (current, total) => `Adım ${current}/${total}`,
    roundOf: (round, total) => `Tur ${round}/${total}`,
    exerciseOf: (current, total) => `${current}/${total}`,
    headStill: 'Baş sabit, sadece gözler',
    close: 'Çık',
    pause: 'Duraklat',
    paused: 'Duraklatıldı',
    pausedBody: 'Ne kadar istersen bekle.',
    resume: 'Devam et',
    skip: 'Atla',
    skipAria: 'Sonraki egzersize geç',
    keys: 'Boşluk duraklatır · → atlar · Esc çıkar',

    stepKind: {
      follow: 'Takip et',
      hold: 'Bekle',
      jump: 'Sıçra',
      blink: 'Kırp',
      squeeze: 'Sık',
      closed: 'Dinlen',
      near: 'Yakın',
      far: 'Uzak',
      gaze: 'Bak',
    },
    blinkNow: 'Kırp',
    eyesClosed: 'Gözler kapalı',
    lookFar: 'Uzağa bak',
    lookNear: 'Yakına bak',
    followDot: 'Noktayı takip et',

    completeEyebrow: 'Bitti',
    completeTitle: 'Gözlerin geri geldi.',
    completeBody: (name) =>
      `${name} tamamlandı. Oda bir an daha parlak ve net görünüyorsa, bu odak kasının gevşediği andır.`,
    completeStreak: (days) => `Üst üste ${days} gün. Kısa tut, sık yap.`,
    repeat: 'Tekrar',
    chooseAnother: 'Başka bir şey seç',
    tipTitle: 'Aklında kalsın',
    tips: [
      'En iyi göz alışkanlığı sıkıcı olanı: sık sık uzağa bakmak. Yaygın tavsiye yirmi dakikada bir.',
      'Ekranlar göz seviyesinin altında durur, gözlerin gün boyu hafifçe aşağı bakar. Monitörü biraz yükseltmek her egzersizden fazlasını yapar.',
      'Gözlerin kuruysa, sık kırpmaktan çok tam kırpmak işe yarar. Kapakların gerçekten birleşsin.',
      'Arkasında güçlü çalışma kanıtı olan tek yöntem açık havada vakit geçirmek; özellikle çocuklarda.',
      'Kuru hava gözü kurutur. Bir nemlendirici ya da klima menfezinden uzaklaşmak her egzersizden iyi gelebilir.',
      'Bu uygulamadan tek bir şey alacaksan, camdan dışarı bakılan o yirmi saniye olsun.',
    ],

    routines: {
      desk: {
        name: 'Bir Dakikalık Sıfırlama',
        tagline: 'İşe yarayan en kısa mola. İki kırpma seti ve uzun bir uzak bakış.',
        what: 'İki toplantı arasına sığar. Göz yüzeyini yeniden nemlendirir, odak kasını yirmi saniye serbest bırakır.',
      },
      screen: {
        name: 'Ekran Molası',
        tagline: 'Masa başında geçen uzun bir süreyi telafi etmek için üç dakika.',
        what: 'Kırpma, uzak molası, yatay germe, odak değiştirme ve bitirişte sıcak eller. Günlük seçenek.',
      },
      classic: {
        name: 'Klasik Göz Yogası',
        tagline: 'Çalışmadaki sekiz adımlı dizi, özgün sırasıyla.',
        what: 'Avuçlama, kırpma, yana bakış, ön ve yan, yukarı aşağı, daireler, başparmaktan buruna ve yakından uzağa. Kontrollü bir çalışmada göz yorgunluğu puanlarını düşüren dizinin birebir aynısı.',
      },
      mobility: {
        name: 'Tam Açıklık',
        tagline: 'Gözlerin gidebildiği her yön, sonra sıcak eller.',
        what: 'Düz hatlar, çaprazlar, daireler, bir sekiz ve bir kare. Kuruluktan değil katılıktan şikayetçi gözler için.',
      },
      focus: {
        name: 'Odak Çalışması',
        tagline: 'Yakın, uzak ve içe: odaklama ve birlikte çalışma kasları.',
        what: 'Mesafe değiştirme, hedefi burna getirme ve hızlı sıçramalar. Buradaki en zorlayıcı rutin. Ağrırsa dur.',
      },
      'wind-down': {
        name: 'Yavaşlama',
        tagline: 'Günü kapat. Kırp, yumuşat, bak, dinlen.',
        what: 'Kapalı gözlerin üzerinde sıcak avuçlarla, karanlıkta biter. Uykudan önceki son saat için.',
      },
    },
    secondUnit: 'sn',
    minuteUnit: 'dk',
  },
}
