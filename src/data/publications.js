// ============================================================
// data/publications.js — ALL content for the Publications page
// Edit articles here without touching the layout
// ============================================================

export const pubMeta = {
  label:    'THE SCOUTING REPORT',
  title:    'EDITORIAL',
  titleAccent: 'PERFORMANCE',
  subtitle: 'Analyzing the intersection of elite athletics, technical precision, and cultural impact.',
}

// ── Articles — most recent / featured first ──
export const articles = [
  {
    id: 1,
    featured: true, // shows as the big hero card
    tag:     'Featured Publication / 2024',
    number:  '01',
    title:   'THE BIOMECHANICS OF THE STEP-BACK: A KINETIC ANALYSIS',
    excerpt: 'An in-depth study on the physiological and physics-based advantages of the modern step-back jumper in high-stakes professional play.',
    readLabel: 'READ FULL REPORT',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn_MDVfTvXb3FCg82lnqal2YuduNde1LC3_gAHxhLI89_l7Cvfm7w44h4ZzFRZUUk347KsRVGdmsiKyMbc3yKE8hqnk6N76TYtPgBxdqed6qk098H41Xn9krlr83GFwp214jvFfhmuXVXTGCLeYg0sR5ExxPT8GzG8dBEUQjG_WzsUnZaPlA4LHty4uZzmviosHCDiX3-euswMqPlAvXueQAVsleBO2bQPbnCX0uV_BMgQIdUeoVa-relfJIunvHWE9IRiger3-w',
    imageAlt: 'Empty basketball court with cinematic light',
    link: '#',
  },
  {
    id: 2,
    featured: false,
    tag:     'Statistical Review',
    date:    'OCT 14, 2023',
    title:   'Digital Arenas: The Rise of Virtual Performance Tracking',
    excerpt: 'Exploring how wearable tech is bridging the gap between raw talent and data-driven excellence in the modern draft cycle.',
    readLabel: 'VIEW ARTICLE',
    imageSrc: null,
    link: '#',
    wide: true, // spans 2 columns in the grid
    icon: 'monitoring',
  },
  {
    id: 3,
    featured: false,
    tag:     'Opinion Piece',
    date:    'SEP 22, 2023',
    title:   'The Psychology of the Clutch Moment',
    excerpt: 'A deep dive into neural mapping during the final 2 minutes of Game 7 scenarios.',
    readLabel: 'READ MORE',
    imageSrc: null,
    link: '#',
    icon: 'psychology',
  },
  {
    id: 4,
    featured: false,
    tag:     'Project Log',
    title:   'Isolation Offense Dynamics',
    readLabel: 'OPEN',
    imageSrc: null,
    link: '#',
    highlight: true, // renders with primary-container background
    acronym: 'ISO',
  },
  {
    id: 5,
    featured: false,
    tag:     'Material Science',
    date:    'AUG 05, 2023',
    title:   'From Court to Lab: The Evolution of Grip Technology',
    excerpt: 'Analyzing synthetic vs. natural leather performance under varying arena humidity levels.',
    readLabel: 'READ ARTICLE',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfzPCybRkuc2T1o_wAWkelha3WFPjhkTyz48_rxXgs16TvqceC5xrJi3V08wk0GvEpBYYGVE6XQKG1Him4MYNvnqhl1dz3G2fZfg0lPQ2bYSNT0p2NfQS6uZCQfyskpZSKyKNbeqjzrxw5NHitJkw5ShMnxtbLXDfCC-Pwh6Y5yQT4kvShzrvZ9wPg3pNYYzunbJNBoH_fVwTNp41SX21mV_lP38phqwZzOKf3KLeqUpriHi-163ZVSb7YzvUzjyCyoqF-P4qdsg',
    imageAlt: 'Close-up of athletic footwear mesh',
    link: '#',
    readTime: '8 MIN READ',
    wide: true,
  },
]
