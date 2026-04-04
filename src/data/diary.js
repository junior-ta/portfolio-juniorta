// ============================================================
// data/diary.js — ALL content for the Life Diary page
// Add entries to the `posts` array — newest first
// ============================================================

export const diaryMeta = {
  label:    'ARCHIVE 01 // THE PROCESS',
  title:    'LIFE',
  titleAccent: 'DIARY',
  subtitle: 'Unfiltered thoughts on basketball culture, the psychology of elite performance, and the daily grind behind the JT project.',
}

// ── Posts — add new entries at the top of this array ──
export const posts = [
  {
    id: 1,
    tag:     'LATEST ENTRY',
    date:    'MARCH 14, 2024',
    title:   'THE SILENCE OF AN EMPTY GYM.',
    excerpt: `There's a specific frequency to a gym at 4 AM. No crowd, no shot clock buzzer, just the rhythmic vibration of the ball hitting hardwood. Today we analyze why this isolation is the birthplace of mastery...`,
    readLabel: 'READ INVESTIGATION',
    featured: true,
    imageSrc: null, // no image for featured lead story
    categories: [],
  },
  {
    id: 2,
    tag:     'TECHNICAL BREAKDOWN',
    date:    'FEB 28, 2024',
    title:   'KINETIC CHAIN REACTION IN THE MODERN STEP-BACK.',
    excerpt: `Modern biomechanics are changing how we teach the jumper. It's no longer just about the lift — it's about the deceleration force.`,
    readLabel: 'READ MORE',
    featured: false,
    imageSrc: null,
    categories: [],
  },
  {
    id: 3,
    tag:     'PERSONAL PHILOSOPHY',
    date:    'FEB 15, 2024',
    title:   'THE SCRAPBOOK METHOD: COACHING BY INSTINCT.',
    excerpt: 'Why analog notes still beat digital spreadsheets when it comes to player psychology.',
    readLabel: 'READ MORE',
    featured: false,
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfzPCybRkuc2T1o_wAWkelha3WFPjhkTyz48_rxXgs16TvqceC5xrJi3V08wk0GvEpBYYGVE6XQKG1Him4MYNvnqhl1dz3G2fZfg0lPQ2bYSNT0p2NfQS6uZCQfyskpZSKyKNbeqjzrxw5NHitJkw5ShMnxtbLXDfCC-Pwh6Y5yQT4kvShzrvZ9wPg3pNYYzunbJNBoH_fVwTNp41SX21mV_lP38phqwZzOKf3KLeqUpriHi-163ZVSb7YzvUzjyCyoqF-P4qdsg',
    imageAlt: 'Scrapbook and basketball diagrams',
    categories: [],
  },
  {
    id: 4,
    tag:     'SERIES: CULTURE SHOCK',
    date:    'FEB 01, 2024',
    title:   'FROM THE STREETS TO THE STADIUM: THE EVOLUTION OF SNEAKER TECH.',
    excerpt: `Exploring the intersection of high-fashion aesthetics and professional-grade performance engineering. How the 2024 draft class is redefining brand loyalty.`,
    readLabel: 'READ MORE',
    featured: false,
    imageSrc: null,
    categories: ['CULTURE', 'TECH'],
  },
  {
    id: 5,
    tag:     'PSYCHOLOGY',
    date:    'JAN 12, 2024',
    title:   'THE ART OF THE TRASH TALK.',
    excerpt: 'A deep dive into the psychological warfare waged between players during high-stakes games.',
    readLabel: 'READ MORE',
    featured: false,
    imageSrc: null,
    categories: [],
    compact: true, // renders as a smaller list item
  },
  {
    id: 6,
    tag:     'PLAYLIST',
    date:    'JAN 05, 2024',
    title:   'PRE-GAME FOCUS VOL. 4',
    excerpt: 'The sonic environment for peak cognitive performance.',
    readLabel: 'VIEW',
    featured: false,
    imageSrc: null,
    categories: [],
    compact: true,
    icon: '🎧',
  },
  {
    id: 7,
    tag:     'ANALYTICS',
    date:    'DEC 20, 2023',
    title:   'THE VALUE OF THE EXTRA PASS.',
    excerpt: 'Quantifying unselfishness through advanced assist metrics.',
    readLabel: 'VIEW',
    featured: false,
    imageSrc: null,
    categories: [],
    compact: true,
    icon: '📈',
  },
]
