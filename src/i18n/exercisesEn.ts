import type { ExerciseCopy } from '../types'

export const exercisesEn: Record<string, ExerciseCopy> = {
  blinking: {
    name: 'Full Blink Reset',
    alsoKnownAs: 'Blinking practice',
    tagline: 'Relearn the complete blink your screen taught you to skip.',
    what: 'Slow, deliberate blinks where the lids actually meet, followed by a gentle squeeze and a rest.',
    why: 'A blink spreads a fresh oily film across the eye. Reading pulls attention away from the lids, so blinks get shallow: they close halfway and the lower third of the eye stays uncovered and dries. Practising complete closure gives that strip its film back.',
    evidenceNote:
      'In a 2013 study, symptoms tracked with the share of incomplete blinks, not with how often people blinked. Prompting people to blink faster changed nothing. So this exercise trains full closure rather than speed.',
    setup: 'Anywhere. Sit or stand, face relaxed, glasses on or off.',
    howTo: [
      'Let the blink come from the upper lid falling, not from squinting.',
      'Aim for the lids to touch for a moment before opening.',
      'Keep the forehead and jaw out of it. Only the lids move.',
      'If your eyes feel gritty afterwards, you may need drops rather than more blinking.',
    ],
    bestFor: [
      'Eyes that feel dry, gritty, or sandy by the afternoon',
      'Long reading, coding, or driving stretches',
      'Contact lens wearers',
    ],
    skipIf: [
      'You have an eye infection, a stye, or a recent eye injury. Leave the lids alone and see a clinician.',
      'Squeezing hurts. Do the soft blinks only and skip the squeeze.',
    ],
    steps: [
      {
        label: 'Soft blinks',
        instruction: 'Blink fully on each cue. Let the lids meet completely, then open. No force.',
      },
      {
        label: 'Squeeze',
        instruction: 'Close and hold a gentle squeeze. Feel the lids press together for three counts.',
      },
      {
        label: 'Let go',
        instruction: 'Release. Eyes stay closed, face soft, shoulders down.',
      },
    ],
  },

  twenty: {
    name: 'The 20-20-20 Break',
    alsoKnownAs: 'Distance break',
    tagline: 'Every twenty minutes, give the focusing muscle twenty seconds off.',
    what: 'Look at something at least 20 feet (about 6 metres) away for 20 seconds, then blink it in.',
    why: 'Focusing up close is muscular work: a ring of muscle inside the eye squeezes the lens into a rounder shape and holds it there. Hours of that without release is what most people feel as tired eyes. Looking far lets the muscle go slack, the way putting down a bag rests your arm.',
    evidenceNote:
      'The evidence is genuinely split. A 2023 trial found that reminders to take these breaks reduced strain and dry-eye symptoms and improved focusing flexibility. Another 2023 study found 20-second breaks alone changed nothing, and its authors suspect the break needs to be a minute or two. Eye-care bodies still recommend it because the cost is nearly zero.',
    setup: 'Best near a window or a long view. A far wall works. Stand up if you can.',
    howTo: [
      'Pick a real object with detail, not a blank wall, and let it come into sharp focus.',
      'Six metres is roughly across a room, down a corridor, or out a window.',
      'Stand and move while you look. Some of the benefit is probably the break itself.',
      'Blink a few times before you go back to the screen.',
    ],
    bestFor: [
      'Any long screen session',
      'Eyes that ache or blur towards the end of the day',
      'Headaches that build behind the eyes',
    ],
    skipIf: ['Nothing to skip. This is the safest thing in the app.'],
    steps: [
      {
        label: 'Look far',
        instruction:
          'Find something at least 6 metres away and rest your eyes on it. Let your face and shoulders soften.',
      },
      {
        label: 'Blink it in',
        instruction: 'Two or three full blinks before you return. Lids all the way closed.',
      },
    ],
  },

  palming: {
    name: 'Palming',
    alsoKnownAs: 'Warm-hand rest',
    tagline: 'Warm darkness. The oldest move in eye yoga, and the most restful.',
    what: 'Rub the palms warm, cup them over closed eyes without pressing, and rest in complete darkness.',
    why: 'Two things happen. The eyes get real darkness, which no dim room provides, and warmth relaxes the muscles around the socket that clench when you concentrate. It is also a full stop in the day, which may be most of the effect.',
    evidenceNote:
      'Palming opens the eight-step yoga protocol that lowered eye-fatigue scores in a 2016 controlled study, but that study tested the whole sequence, not palming alone. Traditional claims that it corrects eyesight are not supported. Treat it as rest, which it does well.',
    setup: 'Sit with elbows on a desk or braced against your ribs so the arms are not working.',
    howTo: [
      'Rub the palms together briskly until they feel warm.',
      'Cup them so the hollow of the palm sits over the closed eye. No weight on the eyeball.',
      'Rest the fingers on the forehead and let the heels of the hands sit on the cheekbones.',
      'Block the light fully. If you can still see a glow, adjust the seal.',
    ],
    bestFor: [
      'The end of a heavy screen day',
      'Tension across the brow and temples',
      'A reset between tasks',
    ],
    skipIf: [
      'You have had recent eye surgery or an eye injury. Do not put hands near the eye.',
      'You have an eye infection. Skip it, or wash your hands first and do not touch the lids.',
      'You wear contact lenses and your eyes are already irritated.',
    ],
    steps: [
      {
        label: 'Warm the hands',
        instruction: 'Rub your palms together briskly until they feel genuinely warm.',
      },
      {
        label: 'Cup and rest',
        instruction:
          'Cup the warm palms over closed eyes. No pressure on the eyeballs. Let the darkness be complete and just breathe.',
      },
      {
        label: 'Come back',
        instruction: 'Slide the hands away slowly. Keep the eyes closed a moment, then open them gently.',
      },
    ],
  },

  'near-far': {
    name: 'Near and Far',
    alsoKnownAs: 'Accommodative flexibility',
    tagline: 'Switch between close and distant focus so the lens stops sticking.',
    what: 'Focus on your thumb about 25 cm away, then on the furthest thing you can see, and keep swapping.',
    why: 'The lens is reshaped by a muscle that has to both contract and release. Hours at one distance leave it slow to change, which is why the room looks briefly soft when you finally look up. Alternating distances is a range-of-motion drill for that muscle.',
    evidenceNote:
      'A 2023 trial of break reminders measured a real improvement in accommodative facility (how quickly focus can switch), which is exactly what this trains. That is a measure of flexibility, not sharpness: this will not change your prescription.',
    setup: 'Sit where you have a long view in one direction. A window is ideal.',
    howTo: [
      'Hold your thumb up about 25 cm from your face, or use any small detail that close.',
      'Wait until each target is genuinely sharp before you switch. Do not rush the swap.',
      'Keep the head still. Only focus moves.',
      'A soft ache after a few rounds is normal. A headache means stop.',
    ],
    bestFor: [
      'Blurry vision when you look up from close work',
      'Long days of reading or screens',
      'Warming up before detailed work',
    ],
    skipIf: [
      'It brings on a headache or nausea. Stop and rest instead.',
      'You have double vision that is new or getting worse. See an eye-care professional first.',
    ],
    steps: [
      {
        label: 'Near',
        instruction:
          'Focus on your thumb about 25 cm from your face. Wait for the detail to sharpen.',
      },
      {
        label: 'Far',
        instruction:
          'Now the furthest thing you can see. Let it sharpen fully before the next swap.',
      },
      { label: 'Blink', instruction: 'One full blink to refresh the film.' },
    ],
  },

  'nose-tip': {
    name: 'Thumb to Nose',
    alsoKnownAs: 'Nose tip gazing, pencil push-ups',
    tagline: 'Train the eyes to turn inward together and stay as one image.',
    what: 'Hold your thumb at arm\u2019s length, draw it slowly towards your nose keeping one clear image, then take it back out.',
    why: 'Looking at something close asks both eyes to rotate inward by the same amount at the same time. When that teamwork is weak the image splits or the words swim after a page or two. Following a target inwards trains the range where the eyes can still fuse a single image.',
    evidenceNote:
      'This is the home exercise from the Convergence Insufficiency Treatment Trial. It helped 43% of children with a diagnosed convergence problem, while supervised in-office therapy helped 73%. So it is a real treatment for a specific condition, and it is second-best. If close work regularly doubles or aches, get assessed rather than self-treating.',
    setup: 'Sit upright with room to extend one arm straight ahead. Good light on your thumb.',
    howTo: [
      'Extend one arm, thumb up, at eye level. Look at the thumbnail.',
      'Move the thumb towards your nose slowly: five seconds for the whole trip.',
      'The moment it doubles, stop, hold there until it merges, then continue.',
      'If it will not merge, take it back out to where it was single and start again.',
    ],
    bestFor: [
      'Words that swim or double after a page or two',
      'Eye strain concentrated at close range',
      'A diagnosed convergence insufficiency, alongside your clinician\u2019s plan',
    ],
    skipIf: [
      'You have a squint or an eye turn that has been treated. Ask your specialist first.',
      'Double vision appeared suddenly. That needs medical attention today, not exercise.',
      'It gives you headaches or nausea every time.',
    ],
    steps: [
      {
        label: 'Arm out',
        instruction: 'Thumb up at arm\u2019s length, straight ahead at eye level. Look at the nail.',
      },
      {
        label: 'Draw it in',
        instruction:
          'Bring the thumb slowly towards the tip of your nose. Keep it a single, sharp image.',
      },
      {
        label: 'At the nose',
        instruction: 'Rest here. If it split on the way, hold where it was still one.',
      },
      {
        label: 'Push it out',
        instruction: 'Take the thumb slowly back out to arm\u2019s length. Stay with it the whole way.',
      },
      { label: 'Blink', instruction: 'One full blink and let the eyes settle.' },
    ],
  },

  sideways: {
    name: 'Sideways Viewing',
    tagline: 'The full left-to-right sweep, held at each end.',
    what: 'Follow the target all the way to one side, hold, sweep across to the other, hold, and return.',
    why: 'Six small muscles steer each eye, and screen work uses a narrow patch in the middle of their range. Travelling to the far edges and pausing there takes the horizontal pair through everything they have, which is what makes it feel like a stretch.',
    evidenceNote:
      'Sideways viewing is one of the eight steps in the yoga sequence that measurably lowered eye fatigue in a 2016 controlled study. The sequence was tested as a whole, so the effect of this movement on its own is unknown.',
    setup: 'Head straight ahead and still. Phone or screen at arm\u2019s length, centred.',
    howTo: [
      'Keep the head completely still. Only the eyes travel.',
      'Go as far as is comfortable, not as far as possible.',
      'Pause at each end and notice the pull without pushing into it.',
      'Move with the dot rather than jumping ahead of it.',
    ],
    bestFor: ['Stiff, heavy eyes after fixed screen work', 'A warm-up before other movements'],
    skipIf: [
      'You feel dizzy or queasy. Stop, look at something still, and rest.',
      'You have had recent eye surgery, or a retinal problem. Check with your surgeon first.',
    ],
    steps: [
      { label: 'To the left', instruction: 'Follow the dot out to the left. Head still.' },
      { label: 'Hold left', instruction: 'Stay at the edge. Notice the gentle pull.' },
      { label: 'Across', instruction: 'Travel all the way across to the right, evenly.' },
      { label: 'Hold right', instruction: 'Stay here. Breathe out.' },
      { label: 'Back to centre', instruction: 'Bring the eyes home to the middle.' },
      { label: 'Blink', instruction: 'One full blink before the next round.' },
    ],
  },

  'front-sideways': {
    name: 'Front and Sideways',
    tagline: 'Snap out to the edge, back to the middle, and out to the other side.',
    what: 'Jump your gaze between the centre and each side, without drifting in between.',
    why: 'Sweeping and jumping are different jobs. A jump is a single ballistic command that has to land on target and stop dead, and it uses the muscles as brakes as well as motors. Alternating with the centre trains both eyes to arrive together.',
    evidenceNote:
      'Front and sideways viewing is the fourth step of the eight-step yoga sequence tested in 2016, which lowered eye-fatigue scores as a whole. No trial has isolated this movement.',
    setup: 'Head still and level. Sit far enough back that the edges are a real distance apart.',
    howTo: [
      'Let the eyes jump. Do not slide them across.',
      'Land on the dot and stop. No drifting or searching.',
      'Return to the centre each time and settle before the next jump.',
      'Slow down if it feels jerky or you start to lose the target.',
    ],
    bestFor: ['Shifting between screen and paper all day', 'Waking the eyes up in the morning'],
    skipIf: [
      'You get dizzy, nauseous, or a headache builds.',
      'You have vertigo or a vestibular condition, unless your clinician has cleared it.',
    ],
    steps: [
      { label: 'Left', instruction: 'Jump straight out to the left dot. Land and stop.' },
      { label: 'Centre', instruction: 'Back to the middle. Settle.' },
      { label: 'Right', instruction: 'Jump out to the right dot.' },
      { label: 'Centre', instruction: 'Back to the middle.' },
    ],
  },

  updown: {
    name: 'Up and Down Viewing',
    tagline: 'The vertical sweep most screen work never asks for.',
    what: 'Follow the target up, hold, travel all the way down, hold, and return to the middle.',
    why: 'Screens sit below eye level, so the eyes spend the day looking slightly down and almost never up. The upward pair of muscles gets the least use of the six, and this is the movement that gives them their range back.',
    evidenceNote:
      'Up-and-down viewing is one of the eight steps in the 2016 sequence that reduced eye fatigue. Tested as part of the whole, not on its own.',
    setup: 'Sit tall. Chin level and still. It is tempting to nod along.',
    howTo: [
      'The chin stays where it is. Only the eyes rise and fall.',
      'Go to a comfortable edge, then stop.',
      'The upward hold often feels harder. That is usually the point.',
      'Blink at the end of each round.',
    ],
    bestFor: [
      'Laptop and phone posture, where the gaze is always slightly down',
      'A tight, heavy feeling above the eyes',
    ],
    skipIf: [
      'Looking up brings on dizziness or neck pain.',
      'You have had recent eye or retinal surgery, unless cleared.',
    ],
    steps: [
      { label: 'Up', instruction: 'Follow the dot upwards. Chin still.' },
      { label: 'Hold up', instruction: 'Stay at the top edge. Soft face.' },
      { label: 'All the way down', instruction: 'Travel down evenly, past the middle.' },
      { label: 'Hold down', instruction: 'Rest at the bottom.' },
      { label: 'Back to centre', instruction: 'Return to the middle.' },
      { label: 'Blink', instruction: 'One full blink.' },
    ],
  },

  diagonal: {
    name: 'Diagonal Viewing',
    tagline: 'The two corner-to-corner lines, which need the muscles to cooperate.',
    what: 'Travel between opposite corners along one diagonal, then the other.',
    why: 'No single muscle points a diagonal. Getting there means two pairs pulling in a blended ratio, which is a coordination task rather than a stretch. Corners are also the part of the visual field a screen never uses.',
    evidenceNote:
      'Diagonal work is standard in yoga eye routines but has not been tested separately. Expect the honest ceiling for all of these movements: they can loosen and refresh, and they will not sharpen eyesight or change a prescription.',
    setup: 'Head straight and still. Give yourself the full stage. Turn the phone to portrait.',
    howTo: [
      'Move steadily and let the eyes travel through the centre, not around it.',
      'Pause briefly at each corner.',
      'Complete one diagonal fully before starting the other.',
      'Stop if it starts to feel like effort rather than movement.',
    ],
    bestFor: ['Stiffness that the straight lines did not reach', 'Variety when a routine gets stale'],
    skipIf: [
      'Dizziness, queasiness, or a building headache.',
      'You have had recent eye surgery or a retinal condition.',
    ],
    steps: [
      { label: 'To the top right', instruction: 'Follow the dot up to the top-right corner.' },
      { label: 'Hold', instruction: 'Pause in the corner.' },
      { label: 'Down to bottom left', instruction: 'Travel the whole diagonal, through the centre.' },
      { label: 'Hold', instruction: 'Pause in the corner.' },
      { label: 'Back to centre', instruction: 'Return to the middle.' },
      { label: 'Blink', instruction: 'One full blink.' },
      { label: 'To the top left', instruction: 'Now the other diagonal. Up to the top-left corner.' },
      { label: 'Hold', instruction: 'Pause here.' },
      { label: 'Down to bottom right', instruction: 'Travel the full diagonal.' },
      { label: 'Hold', instruction: 'Pause in the corner.' },
      { label: 'Back to centre', instruction: 'Return to the middle.' },
      { label: 'Blink', instruction: 'One full blink.' },
    ],
  },

  rotation: {
    name: 'Rotational Viewing',
    alsoKnownAs: 'Eye circles',
    tagline: 'One slow circle each way, touching every direction in turn.',
    what: 'Trace a full circle with your eyes clockwise, then counter-clockwise.',
    why: 'A circle hands the work smoothly from one muscle to the next, so all six take a turn without any of them jerking. It is the closest thing the eyes have to a joint rotation, and it is the movement people most often say they can feel.',
    evidenceNote:
      'Rotational viewing is one of the eight steps in the 2016 controlled study that lowered eye-fatigue scores. As with the others, the sequence was tested as a whole.',
    setup: 'Head still and level. Screen centred, at a comfortable arm\u2019s length.',
    howTo: [
      'Follow the dot at its own pace. Do not run ahead.',
      'Keep the circle round rather than squared off at the edges.',
      'One direction, then the other, with a blink between.',
      'If it makes you dizzy, do half circles instead.',
    ],
    bestFor: ['A stiff, gritted feeling around the eyes', 'The middle of a long working day'],
    skipIf: [
      'You feel dizzy or motion-sick.',
      'You have vertigo, or recent eye or retinal surgery.',
    ],
    steps: [
      { label: 'Clockwise', instruction: 'Follow the dot around, slowly and evenly. Head still.' },
      { label: 'Blink', instruction: 'One full blink and let the eyes settle.' },
      { label: 'Counter-clockwise', instruction: 'Now the same circle the other way.' },
      { label: 'Blink', instruction: 'One full blink.' },
    ],
  },

  'figure-eight': {
    name: 'Figure Eight',
    alsoKnownAs: 'Lazy eight',
    tagline: 'A long, looping curve that keeps crossing the middle.',
    what: 'Trace a sideways figure eight with your eyes, one direction and then the other.',
    why: 'The eight crosses the centre line again and again, so each eye repeatedly hands the lead to the other. That crossing is the part a plain circle does not train, and it is why the movement feels more like tracking than stretching.',
    evidenceNote:
      'The lazy eight is popular in vision-therapy and classroom programmes, but there is no good trial evidence that it improves comfort or vision in healthy eyes. It is a pleasant tracking drill. Nothing more is claimed here.',
    setup: 'Head still, screen centred. Landscape orientation gives the loops more room.',
    howTo: [
      'Let the eyes glide. The curve should feel continuous, not stepped.',
      'Notice the crossing point in the middle and keep passing through it smoothly.',
      'Reverse direction after each full pass.',
      'Slow is better than large.',
    ],
    bestFor: ['Smooth tracking practice', 'A calmer alternative to the jumping exercises'],
    skipIf: ['Dizziness or motion sickness.', 'Recent eye surgery, unless cleared.'],
    steps: [
      { label: 'Trace it', instruction: 'Follow the dot around the eight. Smooth and unhurried.' },
      { label: 'Blink', instruction: 'One full blink.' },
      { label: 'Reverse', instruction: 'Now trace the same eight backwards.' },
      { label: 'Blink', instruction: 'One full blink.' },
    ],
  },

  square: {
    name: 'Square Trace',
    tagline: 'Four straight edges and four corners, at the outside of your range.',
    what: 'Follow the target around the edge of a square, one way and then the other.',
    why: 'A square holds each direction for a whole edge and then demands a sharp turn, so it combines a sustained pull with a change of direction. The corners sit at the outer limit of comfortable movement, which is where stiffness usually lives.',
    evidenceNote:
      'A traditional shape drill with no trial of its own. Same honest ceiling as the other movements: refreshing, not corrective.',
    setup: 'Head still. Use the largest screen you have to hand if you can.',
    howTo: [
      'Follow the edges rather than cutting corners.',
      'Let the turn at each corner be crisp.',
      'Reverse after each lap.',
      'Shrink the square if the corners feel strained.',
    ],
    bestFor: ['A structured alternative to circles', 'Reaching the edges of the visual field'],
    skipIf: ['Dizziness.', 'Recent eye surgery or a retinal condition.'],
    steps: [
      { label: 'Around', instruction: 'Follow the dot around the square. Edge by edge.' },
      { label: 'Blink', instruction: 'One full blink.' },
      { label: 'Reverse', instruction: 'Now the other way around.' },
      { label: 'Blink', instruction: 'One full blink.' },
    ],
  },

  saccades: {
    name: 'Quick Jumps',
    alsoKnownAs: 'Saccadic shifts',
    tagline: 'Fast, accurate jumps between two points. Play, honestly labelled.',
    what: 'Flick your gaze back and forth between two targets, landing exactly on each.',
    why: 'Reading is thousands of tiny jumps a minute, each one aimed and stopped without conscious effort. Doing it deliberately and larger makes the mechanism briefly noticeable, and it is a genuinely enjoyable way to wake up tired eyes.',
    evidenceNote:
      'Jump drills come from sports-vision and vision-therapy programmes. There is no good evidence they improve comfort or vision in healthy eyes, and the American Academy of Ophthalmology is explicit that vision training is not proven to sharpen eyesight. Included because it is a lively way to break a screen trance, not as treatment.',
    setup: 'Head still and level. Sit back so the two points are properly apart.',
    howTo: [
      'Jump. Do not slide the eyes across.',
      'Land on the dot and hold still until it moves.',
      'Accuracy over speed.',
      'Stop after a few rounds. This one tires quickly.',
    ],
    bestFor: ['A quick wake-up between tasks', 'Breaking out of a screen stare'],
    skipIf: [
      'You get dizzy, nauseous, or a headache.',
      'You have a vestibular condition or a history of visually triggered migraine.',
      'You have photosensitive epilepsy. The fast changes are not worth the risk.',
    ],
    steps: [
      { label: 'Left', instruction: 'Jump to the left dot. Land and hold.' },
      { label: 'Right', instruction: 'Jump to the right dot.' },
      { label: 'Left', instruction: 'And back to the left.' },
      { label: 'Right', instruction: 'And right again.' },
      { label: 'Blink', instruction: 'One full blink and rest.' },
    ],
  },

  trataka: {
    name: 'Steady Gaze',
    alsoKnownAs: 'Trataka',
    tagline: 'Hold one point until the rest of the room goes quiet.',
    what: 'Rest your eyes on a single point without straining, then close them and watch the after-image fade.',
    why: 'This is an attention practice that happens to run through the eyes. Holding one point stops the constant scanning that fills most of a day, and the closed-eye phase gives you something to watch in the dark, which makes resting easier than simply being told to relax.',
    evidenceNote:
      'Small studies have measured real short-term gains in attention and response control right after a trataka session. They are small, mostly young male volunteers, and short-term. Traditional versions use a candle flame and discourage blinking: this one uses a soft dot and asks you to blink whenever you need to, because deliberately not blinking dries the eye.',
    setup: 'Sit comfortably with a straight spine, screen at eye level, room lights low if you can.',
    howTo: [
      'Let the gaze be soft. This is resting on the point, not drilling into it.',
      'Blink whenever you want to. Comfort comes first.',
      'When the mind wanders, come back to the point without commentary.',
      'In the closed phase, watch the after-image without chasing it.',
    ],
    bestFor: ['Winding down in the evening', 'A scattered, over-stimulated mind', 'Before sleep'],
    skipIf: [
      'You have photosensitive epilepsy or migraine triggered by staring at bright points.',
      'Your eyes are dry and sore. Do the blink practice instead.',
      'Fixed staring makes you anxious.',
    ],
    steps: [
      {
        label: 'Steady gaze',
        instruction:
          'Rest your eyes on the point. Soft, not strained. Blink whenever you need to.',
      },
      {
        label: 'Eyes closed',
        instruction: 'Close your eyes and watch the after-image fade in the dark.',
      },
    ],
  },
}
