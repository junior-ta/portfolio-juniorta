//  Stores all content for the Resume page

export const hero = {
  // ── My profile section ──
  label:    'My Draft Profile',
  title:    'QUICK TWITCH',
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
    role:     'Machine Learning Research Assistant ',
    company:  'Canon Stroke and Vascular Research Center.',
    period:   'May 2025 – PRESENT',
    bullets: [
      'Implemented image processing, data augmentation, and CNN training techniques to improve classification of vascular structures.',
      'Engineered a U-Net architecture to isolate aneurism from DSA images, peaking at a 0.81 Dice score and faster inference.',
      'Refactored thousands of lines of Machine learning training code to make training loops and architectures easily customizable.',
    ],
  },

    {
    role:     'IBM Z Student Ambassador & Club President',
    company:  'IBM Z Student Ambassador program by Your Big Year.',
    period:   'April 2025 – PRESENT',
    bullets: [
      'Led 15+ hands-on workshops on COBOL, JCL, Linux/USS, DB2, and IBM Z mainframe systems, introducing students to enterprise-scale computing and systems architecture. ',
      'Founded and lead a student organization by planning technical events, coordinating weekly executive board meetings, and driving student adoption of the IBM Z Xplore platform. ',
      'Earned 5+ IBM digital badges and translated complex systems concepts into clear technical presentations and peer mentorship. ',
    ],
  },

    {
    role:     'International Ambassador Leader',
    company:  'University at Buffalo International Admissions.',
    period:   'Novemebr 2023 – PRESENT',
    bullets: [
      'Engaged with over 200 prospective international students through panels, events, and campus tours.',
      'Produced, edited, and selected engaging video content for Instagram and TikTok to support international student outreach; one Instagram Reel garnered over 1.3 million interactions. ',
      'Collaborated with 10 ambassadors to plan and execute strategic year-round campaigns and events that boosted international student recruitment and global enrollment by 12%. ',
    ],
  },

    {
    role:     'Conference Host (Summer) and Student Assistant (Fall & Spring)',
    company:  'University at Buffalo Campus Living.',
    period:   'May 2024 – PRESENT',
    bullets: [
      'Collaborated with a team of 21 student staff to make the summer programs’ experience great.',
      'Used a large database of students and guests hosted by StarRezWeb to perform check-ins/outs, issue keys, and resolve operational issues.',
      'Sorted and distributed incoming mail and packages with attention to detail, while maintaining confidentiality and ensuring compliance with campus housing policies. ',
    ],
  },

  {
    role:     'Intramurals Referee',
    company:  'University at Buffalo Recreation.',
    period:   'January 2024 – December 2024',
    bullets: [
      'Official referee for the competitive and recreational soccer intramural league of the University at Buffalo.',
    ],
  },

  {
    role:     'Software Developer Intern (2 months immersion program for highschoolers)',
    company:  'Expert 3DEV Sarl.',
    period:   'July 2022 – August 2022',
    bullets: [
      'Gained hands-on experience in collaborative development, utilizing Git and GitHub for version control, code sharing, and teamwork on collective projects.',
      'Strengthened critical thinking skills through active mentorship and challenge-solving.',
      'Built a basic inventory management system using Visual Basic and SQL.',
    ],
  },
]

//Certifications──
export const certifications = [
  {
    title:    'IBM Z Xplore - Advanced',
    issuer:   'IBM',
    date:     'May 2025',
    imageUrl: 'https://images.credly.com/size/680x680/images/9dde9b48-6cec-4bc4-ab33-ffeac5c681c3/image.png',
    credlyUrl: 'https://www.credly.com/earner/earned/badge/5a17af02-b017-4c84-865e-2372af7d8d63',
  },
  {
    title:    'Enterprise Design Thinking Practitioner',
    issuer:   'IBM',
    date:     'October 2025',
    imageUrl: 'https://images.credly.com/size/680x680/images/520b12b6-dac0-4731-a4f6-e41427201422/BadgeEmblem_EnterpriseDesignThinkingPractitioner.png',
    credlyUrl: 'https://www.credly.com/earner/earned/badge/f941b39f-c231-49dd-8aee-78b7c81b63bb',
  },
  {
    title:    'IBM Z and LinuxONE Community Contributor - 2025 (Level 1)',
    issuer:   'IBM',
    date:     'December 2025',
    imageUrl: 'https://images.credly.com/size/680x680/images/23f1ef9b-33f5-4d62-b153-fc5f0683cb0e/IBM_20Z_20and_20LinuxONE_20Community_20Contributor_202025_20Level_201.png',
    credlyUrl: 'https://www.credly.com/earner/earned/badge/75aec416-740d-4c68-aff9-55d626369d17',
  },
  {
    title:    'IBM Z Day 2025 - AI & Data',
    issuer:   'IBM',
    date:     'December 2025',
    imageUrl: 'https://images.credly.com/size/680x680/images/6723c6fb-7220-4861-81e0-defe48981ba1/IBM_20Z_20Day_202025_20AI_20and_20Data.png',
    credlyUrl: 'https://www.credly.com/earner/earned/badge/0b02845a-bdb5-44a2-9177-f9aebff70a5d',
  },
]

// ── Technical skills — group them however you like ──
export const skills = [
  { icon: '⌨️',  label: 'Python/ Java/ Javascript/ C/ Cobol/ OCaml',      category: 'Languages' },
  { icon: '🖥️',  label: 'JCL/ DB2/ SQL/ Cobol/ Linux/ Zowe',      category: 'Mainframes' },
  { icon: '⚛️',  label: 'ML Algos/ Deep Neural Networks & CNN/ PyTorch/ Scitkit-Learn/ LLMs',    category: 'AI/ML' },
  { icon: '📊',  label: 'DBMS/ Pandas/ Numpy/ Power BI/ Streamlit/ MatPlot, Seaborn...',     category: 'Data' },
  { icon: '🗄️',  label: 'SQL / PostGreSQL',        category: 'Databases' },
  { icon: '☁️',  label: 'GCP / AWS/ Docker',       category: 'Cloud' },
  { icon: '⚙️',  label: 'Git / Workflows',    category: 'DevOps' },

]

// ── Featured projects ──
export const projects = [
  //AI short video maker, NBA DATA GROUND (ADD THE ML PROJECT, AND VISUALIZAIONS FROM 460 CLASS), UNET FOR BREAST TUMORS, PEREZ WEBSITE, MEMOREY ALLOCATOR, INSTANT MESSEMGER)
  {
    id: 1,
    tag:   'GPT WRAPER WEBAPP',
    title: 'AI Short Video Maker',
    imageSrc: '/medias/proj1.png', 
    imageAlt: 'visual',
    demoUrl:   'https://automated-tech-reels-generator.streamlit.app/',
    githubUrl: 'https://github.com/junior-ta/AI-educational-video-generator', 
  },
  {
    id: 2,
    tag:   'DATA VISUALIZATION WEBAPP',
    title: 'NBA DATA GROUND',
    imageSrc: 'medias/proj2.png',
    imageAlt: 'visual',
    demoUrl:   'https://my-nba-data-analysis-portfolio.streamlit.app/',
    githubUrl: 'https://github.com/junior-ta/NBA-Data-Analytics-Web-App',
  },
  {
    id: 3,
    tag:   'FULL STACK E-STORE WEBSITE',
    title: 'CAMER MARKETPLACE',
    imageSrc: 'medias/proj3.png',
    imageAlt: 'visual',
    demoUrl:   '#',
    githubUrl: 'https://github.com/junior-ta/camer-marketplace',
  },
    {
    id: 4,
    tag:   'MY MEMORY ALLOCATOR in C',
    title: 'MALLOC',
    imageSrc: 'medias/proj4.png',
    imageAlt: 'Arena Cloud project visual',
    demoUrl:   'https://github.com/ub-cse220-s25/pa4-malloc-junior-ta',
    githubUrl: 'https://github.com/ub-cse220-s25/pa4-malloc-junior-ta',
  },
    {
    id: 5,
    tag:   'AN INSTANT MESSENGER in C',
    title: 'IMeSSAGE',
    imageSrc: 'medias/proj5.jpg',
    imageAlt: 'Arena Cloud project visual',
    demoUrl:   'https://github.com/ub-cse220-s25/pa3-im-junior-ta/tree/main',
    githubUrl: 'https://github.com/ub-cse220-s25/pa3-im-junior-ta/tree/main',
  },
]
