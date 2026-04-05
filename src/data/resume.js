// ============================================================
// Stores all content for the Resume page
// ============================================================

export const hero = {
  // ── My profile section ──
  label:    'My Draft Profile',
  title:    'QUICK SWITCH',
  titleAccent: 'SWISS KNIFE.',
  // Photo: replace the src with your own image path, e.g. '/assets/photo.jpg'
  photoSrc: 'medias/me.jpg',
  photoAlt: 'JT — profile photo', //in case my photo file disappears
  status:   'AVAILABLE (LOOKING FOR A SUMMER INTERNSHIP) · IN THE ZONE',
}

export const education = {
  // ── Education card section ──
  university: 'University at Buffalo, The State University of New York',
  location:   'Buffalo, NY      [Willing to relocate for working/learning opportunity]',
  degree:     "Bachelor's in Computer Science",
  graduation: 'MAY 2027',
  gpa:        '3.79 / 4.0',
  courses: [
    'Programing Languages (OCaml) [Favorite]',
    'Data Structures (Java)',
    'Algorithms (Python)',
    'System Programing (C)',
    'Data Models (SQL, PostGres)',
    'Software Engineering Concepts (JS, HTML, CSS,...)',
    'Linear Algebra, Statistics, Calculus 1&2'
  ],
}

export const scoutingReport = {
  // ── Bio section ──
  text: `"A fast-learning versatile developer with a team and championship mindset."
    I am just a little kid from Yaounde, Cameroon who moved to the US to pursue my dreams becoming a voice in the Tech industry. 
    Early on, I was the kid troubleshooting everyone's phone and computer at home, filming and editing videos for his multiple YouTube channels, and spending nights building 
    games on scratch 3d while watching youtube tutorials on how to build games on Unity 3d. 
    This is my life!
    
    I cant talk about my life without mentioning sports! It represents a big chunk of me and has a huge place in my daily life.  I practice and watch Basketball, Football, Tennis...
    A fun fact about me is I was a writer for a french NBA media at 14.`,
}

// ── Languages  ──
export const languages = [
  { lang: 'French',  level: 'Native',  flag: '🇫🇷', bar: 100 },
  { lang: 'English', level: 'Fluent',  flag: '🇺🇸', bar: 95  },
  { lang: 'Spanish', level: 'Just started learning', flag: '🇪🇸', bar: 15 },
]

// ── Work experience entries — most recent first ──
export const workExperience = [
  {
    role:     'Software Engineering Intern',
    company:  'TECH ATHLETICS CORP.',
    period:   '2023 – PRESENT',
    // Add or remove bullet points
    bullets: [
      'Orchestrated microservices for real-time player analytics.',
      'Optimized database queries reducing latency by 40%.',
    ],
  },
  {
    role:     'Full Stack Developer',
    company:  'HOOPMETRIC SYSTEMS',
    period:   '2022 – 2023',
    bullets: [
      'Designed and implemented a responsive dashboard for scout reports.',
      'Integrated 3rd party APIs for global sports data ingestion.',
    ],
  },
]

// ── Certifications — add your badge images in /public/badges/ ──
// imageUrl can be a URL or a local path like '/badges/aws.png'
export const certifications = [
  {
    title:    'AWS Cloud Practitioner',
    issuer:   'Amazon Web Services',
    date:     'JAN 2024',
    imageUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    credlyUrl: 'https://www.credly.com/', // Link to your Credly badge page
  },
  {
    title:    'Google UX Design',
    issuer:   'Google / Coursera',
    date:     'MAR 2024',
    imageUrl: 'https://images.credly.com/size/340x340/images/5b5c5560-9da7-4ae2-8877-9dbe1b7e0c07/blob',
    credlyUrl: 'https://www.credly.com/',
  },
  {
    title:    'React Developer',
    issuer:   'Meta',
    date:     'JUN 2024',
    imageUrl: 'https://images.credly.com/size/340x340/images/9267a387-1a51-4ebe-8c05-976a5ec4c3d0/image.png',
    credlyUrl: 'https://www.credly.com/',
  },
  // ── Add more certifications here ──
  // {
  //   title: 'Your Cert',
  //   issuer: 'Issuing Body',
  //   date: 'MON YEAR',
  //   imageUrl: '/badges/your-badge.png',
  //   credlyUrl: 'https://credly.com/...',
  // }
]

// ── Technical skills — group them however you like ──
export const skills = [
  { icon: '⌨️',  label: 'Python / C++',      category: 'Languages' },
  { icon: '⚛️',  label: 'React / Node.js',    category: 'Frameworks' },
  { icon: '🗄️',  label: 'SQL / NoSQL',        category: 'Databases' },
  { icon: '☁️',  label: 'AWS / Docker',       category: 'Cloud' },
  { icon: '🎨',  label: 'System Design',      category: 'Architecture' },
  { icon: '⚙️',  label: 'Git / Workflows',    category: 'DevOps' },
  { icon: '📊',  label: 'Data Analytics',     category: 'Data' },
  { icon: '🔌',  label: 'RESTful APIs',       category: 'Integration' },
]

// ── Featured projects ──
export const projects = [
  {
    id: 1,
    tag:   'FULL STACK ENGINEERING',
    title: 'FASTBREAK API',
    // Replace with your own images in /public/projects/
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn_MDVfTvXb3FCg82lnqal2YuduNde1LC3_gAHxhLI89_l7Cvfm7w44h4ZzFRZUUk347KsRVGdmsiKyMbc3yKE8hqnk6N76TYtPgBxdqed6qk098H41Xn9krlr83GFwp214jvFfhmuXVXTGCLeYg0sR5ExxPT8GzG8dBEUQjG_WzsUnZaPlA4LHty4uZzmviosHCDiX3-euswMqPlAvXueQAVsleBO2bQPbnCX0uV_BMgQIdUeoVa-relfJIunvHWE9IRiger3-w',
    imageAlt: 'Fastbreak API project visual',
    link: '#',
  },
  {
    id: 2,
    tag:   'MACHINE LEARNING',
    title: 'NEURAL COACH',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfzPCybRkuc2T1o_wAWkelha3WFPjhkTyz48_rxXgs16TvqceC5xrJi3V08wk0GvEpBYYGVE6XQKG1Him4MYNvnqhl1dz3G2fZfg0lPQ2bYSNT0p2NfQS6uZCQfyskpZSKyKNbeqjzrxw5NHitJkw5ShMnxtbLXDfCC-Pwh6Y5yQT4kvShzrvZ9wPg3pNYYzunbJNBoH_fVwTNp41SX21mV_lP38phqwZzOKf3KLeqUpriHi-163ZVSb7YzvUzjyCyoqF-P4qdsg',
    imageAlt: 'Neural Coach project visual',
    link: '#',
  },
  {
    id: 3,
    tag:   'SYSTEMS DESIGN',
    title: 'ARENA CLOUD',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Rm9F-cBxx3dO1QS0I4gN62_hb_VVoQEhqKs4vRP-h5hMqHai8A0tRAOosZ9bYOF5rs5kS17w4XNx4XFQJs1C45ByZjxruE1W8T6O--zXZwEScGif4Gybntjy5vowtLSCIRTcLiMGJhUDEIT1W-rwH6kVOWkQ6pFO4NRIq2hr_m1pZtRA1xG0muTMxHkLewdbL07SqlQ_Nofn8wAQf6AdW3PXknV6vxj642uZKiwriOrgPgIaxBQXr6DHsfH7eJfY4cBQZIU4MQ',
    imageAlt: 'Arena Cloud project visual',
    link: '#',
  },
]
