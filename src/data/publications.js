// ALL content for the Publications page

export const pubMeta = {
  label:    'SCOUTING REPORTS',
  title:    'EDITORIAL',
  titleAccent: 'PERFORMANCE',
  subtitle: 'Publications I made or Im featured on.',
}

//most recent / featured first
export const articles = [
  {
    id: 1,
    featured: true, // shows as the big hero card
    tag:     'Featured Publication / 2026',
    number:  '01',
    title:   'I am a Mainframer: Junior Tadiffo',
    excerpt: 'I was invited to talk about my mainframe passion with the GOAT Steven Dickens.',
    readLabel: 'Watch the episode',
    imageSrc: 'medias/podcast.jpg',
    imageAlt: 'thumbnail',
    link: 'https://openmainframeproject.org/blog/i-am-a-mainframer-junior-tadiffo/',
  },
  {
    id: 2,
    featured: false,
    tag:     'Campus Ambassador Spotlight',
    date:    'Aug 4, 2025',
    title:   'GloBulls Student Spotlight: Meet Junior',
    excerpt: 'Thinking about computer science, student life, or what it’s like to study in Buffalo? Connect with me, I’m always happy to share more about my journey at UB..',
    readLabel: 'VIEW ARTICLE',
    imageSrc: 'medias/globulls.png',
    link: 'https://www.buffalo.edu/admissions/visit/ambassadors.html?ub_medium=product&ub_source=Embedded%20University%20Buddy%20Cards&ub_campaign=&ub_content=&invite_id=',
    wide: true, // spans 2 columns in the grid
  },
    {
    id: 3,
    featured: false,
    tag:     'Document',
    title:   'My Resume',
    readLabel: 'OPEN',
    imageSrc: null,
    link: 'medias/JUNIOR TADIFFO dmai resume.pdf',
    highlight: true, // renders with primary-container background
    acronym: 'ISO',
  },
  {
    id: 4,
    featured: false,
    tag:     'OLD BASKETBALL ARTICLES',
    date:    'OCT 15, 2020',
    title:   'Ja Morant et Brandon Clarke, le duo le plus ‘flashy’ de la ligue ?',
    excerpt: 'Les Memphis Grizzlies se sont inclinés face au Portland Trail Blazers à l’occasion du ‘play in tournament’ offrant une place pour les play-offs 2020. Toutefois ils ont fait une excellente saison régulière, attendus dans les bas fonds de la redoutable conférence ouest, ils ont surperformé à l’image de leur coach et de leur duo de rookie Ja Morant(rookie of the year) et Brandon Clarke.',
    readLabel: 'READ MORE',
    imageSrc: null,
    link: 'https://clutchtime.fr/ja-morant-et-brandon-clarke-le-duo-le-plus-flashy-de-la-ligue/',
    icon: 'basketball',
  },
  {
    id: 5,
    featured: false,
    tag:     'OLD BASKETBALL ARTICLES',
    date:    'JUL 31, 2020',
    title:   'Une nouvelle lineup pour les 76ers, Brown tente le tout pour le tout',
    excerpt: 'Attendus comme gros favoris au titre en début de saison, les 76ers en sont bien loin. Siégeant à la 6e place de la conférence Est et produisant un jeu pas très esthétique, les yeux seront alors rivés sur l’équipe de Brett Brown lors de la reprise à Orlando, d’autant plus que le sélectionneur de l’Australie a dévoilé un tout nouveau cinq majeur pour le retour de la NBA',
    readLabel: 'READ MORE',
    imageSrc: null,
    link: 'https://clutchtime.fr/une-nouvelle-lineup-pour-les-76ers-brown-tente-le-tout-pour-le-tout/',
    icon: 'basketball',
  },
  {
    id: 6,
    featured: false,
    tag:     'OLD BASKETBALL ARTICLES',
    date:    'JUL 9, 2020',
    title:   'Matisse Thybulle, Le Diamant À Polir Des 76ers.',
    excerpt: 'Si l’arrêt de la saison NBA a été désavantageux pour les franchises contenders comme les Lakers ou les Bucks, on ne pourra pas en dire autant pour les 76ers qui peuvent remercier le dieu du basket car entre la mauvaise dynamique de l’équipe et la blessure de Ben Simmons, c’était presque blasphémé de les donner vainqueur du trophée Larry O’Brien. Mais dans cette saison plutôt décevante des Sixers on peut tirer quelques satisfactions. L’une d’elle fut la bonne et prometteuse saison du rookie Matisse Thybulle.',
    readLabel: 'READ MORE',
    imageSrc: null,
    link: 'https://clutchtime.fr/matisse-thybulle-le-diamant-a-polir-des-76ers/',
    icon: 'basketball',
  },

]
