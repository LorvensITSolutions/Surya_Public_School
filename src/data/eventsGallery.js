/**
 * Shared event data for home cards and /events-gallery/:eventId pages.
 * Add multiple `images` per event for the gallery carousel.
 */
export const galleryEvents = [
  {
    id: 'annual-day-celebration',
    title: 'Annual Day Celebration',
    category: 'Cultural',
    featured: true,
    summary:
      'Students showcase talent through music, dance, and drama — celebrating creativity and teamwork on our biggest stage of the year.',
    description: [
      'Annual Day brings the whole school together for an evening of performances, awards, and community pride. Families join us to see classrooms come alive as performances, speeches, and cultural items reflect our motto: inspiring ethics and igniting curiosity.',
    ],
    stats: [
      { label: 'Participants', value: 'All grades', subtext: 'Whole-school programme' },
      { label: 'Duration', value: 'Evening', subtext: 'Performances & awards' },
      { label: 'Focus areas', value: '3 pillars', subtext: 'Music, dance, drama' },
    ],
    learnItems: [
      {
        icon: 'music',
        title: 'Stage confidence',
        description: 'Students rehearse and perform in front of a supportive audience.',
      },
      {
        icon: 'users',
        title: 'Teamwork',
        description: 'Group acts and backstage roles build cooperation and trust.',
      },
      {
        icon: 'sparkles',
        title: 'Creative expression',
        description: 'Music, dance, and drama let every child shine in their own way.',
      },
      {
        icon: 'heart',
        title: 'Community pride',
        description: 'Families and staff celebrate growth and school spirit together.',
      },
    ],
    outcome:
      'Annual Day closes with applause, awards, and a shared sense of belonging—reminding students that effort, ethics, and curiosity are worth celebrating.',
    images: [
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778756372/Screenshot_2026-05-14_162917_zxufz1.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778824798/ChatGPT_Image_May_15_2026_11_29_32_AM_afzvwv.png',
    ],
    coverImage:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778756372/Screenshot_2026-05-14_162917_zxufz1.png',
  },
  {
    id: 'self-cooking-day',
    title: 'Self–Cooking Day',
    category: 'Activity',
    featured: false,
    summary:
      'Hands-on cooking builds life skills, hygiene habits, and confidence as students prepare and share simple meals together.',
    description: [
      'Activity-based learning extends to the kitchen: students follow recipes, measure ingredients, and understand nutrition in a safe, guided setting. The day ends with a shared tasting—reinforcing collaboration and respect for food and culture.',
    ],
    stats: [
      { label: 'Participants', value: '120+', subtext: 'Students per session' },
      { label: 'Duration', value: 'Full day', subtext: 'Prep to shared tasting' },
      { label: 'Focus areas', value: '3 core', subtext: 'Skills, hygiene, nutrition' },
    ],
    learnItems: [
      {
        icon: 'utensils',
        title: 'Kitchen skills',
        description: 'Measuring, mixing, and simple prep in a supervised setting.',
      },
      {
        icon: 'droplet',
        title: 'Hygiene habits',
        description: 'Hand washing, clean workspaces, and safe food handling.',
      },
      {
        icon: 'leaf',
        title: 'Nutrition awareness',
        description: 'Balanced plates and understanding what fuels the body.',
      },
      {
        icon: 'users',
        title: 'Collaboration',
        description: 'Teams plan, cook, and serve together with respect.',
      },
    ],
    outcome:
      'The day ends with a shared tasting—reinforcing collaboration and respect for food and culture.',
    images: [
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778756112/Screenshot_2026-05-14_162502_gdivax.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778824228/413410a3-56f0-4e46-aee5-0b56cfc788db_fghe87.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778824216/ChatGPT_Image_May_15_2026_11_19_07_AM_bnuekl.png',
    ],
    coverImage:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778756112/Screenshot_2026-05-14_162502_gdivax.png',
  },
  {
    id: 'unity-in-diversity',
    title: 'Unity in Diversity',
    category: 'National',
    featured: false,
    summary:
      'Students learn about India’s regions, languages, and traditions — building respect and belonging in our diverse community.',
    description: [
      'Class displays, dress themes, and short presentations help children appreciate unity without losing local identity. Teachers connect themes to values of empathy and national integration.',
    ],
    stats: [
      { label: 'Participants', value: 'All classes', subtext: 'Cross-grade displays' },
      { label: 'Duration', value: 'Full day', subtext: 'Presentations & exhibits' },
      { label: 'Focus areas', value: '4 themes', subtext: 'Regions, language, dress, values' },
    ],
    learnItems: [
      {
        icon: 'globe',
        title: 'Regional awareness',
        description: 'Maps, flags, and stories from across India come alive in class.',
      },
      {
        icon: 'message',
        title: 'Language & culture',
        description: 'Greetings, songs, and phrases celebrate linguistic diversity.',
      },
      {
        icon: 'heart',
        title: 'Empathy',
        description: 'Students listen and learn from peers’ backgrounds with respect.',
      },
      {
        icon: 'users',
        title: 'Belonging',
        description: 'Unity is taught as strength in difference, not sameness.',
      },
    ],
    outcome:
      'Children leave with pride in their roots and openness to others—building a school culture where every background is welcomed.',
    images: [
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778756267/Screenshot_2026-05-14_162718_iwkxlm.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778824355/ChatGPT_Image_May_15_2026_11_22_09_AM_olujjs.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778825183/ChatGPT_Image_May_15_2026_11_36_16_AM_pg58w2.png',
    ],
    coverImage:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778756267/Screenshot_2026-05-14_162718_iwkxlm.png',
  },
  {
    id: 'christmas-celebration',
    title: 'Christmas Celebration',
    category: 'Festival',
    featured: false,
    summary:
      'Carols, craft, and a spirit of giving—students celebrate the season with joy and reflection.',
    description: [
      'Decorated campus corners, choir performances, and classroom activities make the festival meaningful and inclusive. We emphasise kindness, sharing, and gratitude alongside the festive fun.',
    ],
    stats: [
      { label: 'Participants', value: 'Whole school', subtext: 'Carols & classroom craft' },
      { label: 'Duration', value: 'Half day', subtext: 'Morning programme' },
      { label: 'Focus areas', value: '3 values', subtext: 'Joy, giving, gratitude' },
    ],
    learnItems: [
      {
        icon: 'music',
        title: 'Carols & choir',
        description: 'Students practise and perform seasonal music together.',
      },
      {
        icon: 'sparkles',
        title: 'Creative craft',
        description: 'Cards, décor, and art projects brighten classrooms and homes.',
      },
      {
        icon: 'heart',
        title: 'Kindness & sharing',
        description: 'Acts of giving connect the festival to everyday values.',
      },
      {
        icon: 'users',
        title: 'Inclusive celebration',
        description: 'Every child takes part regardless of personal tradition.',
      },
    ],
    outcome:
      'The celebration closes with carols and smiles—reminding students that festivals are as much about character as they are about fun.',
    images: [
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778758475/ChatGPT_Image_May_14_2026_05_03_57_PM_oe6vqu.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778824980/ChatGPT_Image_May_15_2026_11_32_54_AM_pt4ecb.png',
    ],
    coverImage:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778758475/ChatGPT_Image_May_14_2026_05_03_57_PM_oe6vqu.png',
  },
 
  {
    id: 'Ramappa, Laknavaram & Samakka saraakka',
    title: 'Ramappa, Laknavaram & Samakka saraakka',
    category: 'Excursion',
    featured: false,
    summary:
      'A guided heritage visit connects classroom history with real monuments and conservation awareness.',
    description: [
      'Students observe architecture, ask questions on site, and document learning through sketches and journals. Such visits deepen appreciation for local history and responsible tourism.',
    ],
    stats: [
      { label: 'Participants', value: 'Upper grades', subtext: 'Supervised groups' },
      { label: 'Duration', value: 'Full day', subtext: 'Travel & on-site learning' },
      { label: 'Focus areas', value: '3 lenses', subtext: 'History, art, conservation' },
    ],
    learnItems: [
      {
        icon: 'landmark',
        title: 'Living history',
        description: 'Monuments make textbook timelines tangible and memorable.',
      },
      {
        icon: 'sparkles',
        title: 'Observation skills',
        description: 'Sketches and journals train careful looking and note-taking.',
      },
      {
        icon: 'leaf',
        title: 'Conservation',
        description: 'Students discuss protecting heritage for future generations.',
      },
      {
        icon: 'users',
        title: 'Responsible tourism',
        description: 'Respectful behaviour on site is part of the learning plan.',
      },
    ],
    outcome:
      'Students return with sketches, questions, and pride in local heritage—linking classroom history to the monuments in their own region.',
    images: [
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778758746/ChatGPT_Image_May_14_2026_05_08_53_PM_ixw2vg.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778828137/IMG_0865.jpg_dpxggu.jpg',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778827331/ChatGPT_Image_May_15_2026_12_10_29_PM_w3n51b.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778827011/ChatGPT_Image_May_15_2026_12_05_09_PM_bazsif.png',

    ],
    coverImage:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778758746/ChatGPT_Image_May_14_2026_05_08_53_PM_ixw2vg.png',
  },
  {
    id: 'singareni-coal-mining-visit',
    title: 'Singareni coal mining visit',
    category: 'Excursion',
    featured: false,
    summary:
      'Field learning introduces older students to industry, safety, and environment themes beyond the textbook.',
    description: [
      'Supervised visits follow strict safety briefings and tie back to science and social studies outcomes. Reflection sessions help students connect observations to classroom concepts.',
    ],
    stats: [
      { label: 'Participants', value: 'Senior classes', subtext: 'Briefed student groups' },
      { label: 'Duration', value: 'Full day', subtext: 'Site tour & reflection' },
      { label: 'Focus areas', value: '3 topics', subtext: 'Industry, safety, environment' },
    ],
    learnItems: [
      {
        icon: 'hard-hat',
        title: 'Safety first',
        description: 'Briefings and PPE rules are non-negotiable on every visit.',
      },
      {
        icon: 'globe',
        title: 'Industry awareness',
        description: 'Students see how resources and jobs shape the region.',
      },
      {
        icon: 'leaf',
        title: 'Environment',
        description: 'Discussions cover land use, energy, and responsible practice.',
      },
      {
        icon: 'message',
        title: 'Reflection',
        description: 'Post-visit sessions link observations to science and civics.',
      },
    ],
    outcome:
      'Reflection sessions turn a day in the field into lasting understanding—connecting industry, safety, and environment to what students study in class.',
    images: [
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778759664/Our_students_in_field_visit_hjejmt.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778827596/Screenshot_2026-05-15_121606_jhivg5.png',
    ],
    coverImage:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778759664/Our_students_in_field_visit_hjejmt.png',
  },
  {
    id: 'Bathukamma festival',
    title: 'Bathukamma festival',
    category: 'Festival',
    featured: false,
    summary:
      'Students learn about the Bathukamma festival and its significance in Telugu culture.',
    description: [
      'Students learn about the Bathukamma festival and its significance in Telugu culture.',
    ],
    stats: [
      { label: 'Participants', value: 'Whole school', subtext: 'Bathukamma festival' },
      { label: 'Duration', value: 'Full day', subtext: 'Bathukamma festival' },
      { label: 'Focus areas', value: '3 topics', subtext: 'Bathukamma festival' },
    ],
    learnItems: [
      { icon: 'heart', title: 'Bathukamma festival', description: 'Bathukamma festival' },
    ],
    outcome:
      'Students learn about the Bathukamma festival and its significance in Telugu culture.',
    images: [
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778829812/ChatGPT_Image_May_15_2026_12_53_25_PM_boh0ne.png',
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778829320/ChatGPT_Image_May_15_2026_12_45_11_PM_itnoeo.png',
    ],
    coverImage:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778829812/ChatGPT_Image_May_15_2026_12_53_25_PM_boh0ne.png',
  }
]

export function getEventById(id) {
  return galleryEvents.find((e) => e.id === id) ?? null
}
