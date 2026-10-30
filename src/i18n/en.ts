import type { Dictionary } from './types';

export const en = {
  nav: {
    manifesto: 'Manifesto',
    projects: 'Projects',
    members: 'Members',
    join: 'Join',
    faq: 'FAQ',
  },
  common: {
    language: 'Language',
    skip: 'Skip to content',
    navLabel: 'Main',
    homeLabel: 'artel, home',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeLabel: 'Dark theme',
  },
  hero: {
    eyebrow: 'Artel — development community',
    plate: 'Plate I',
    title: 'Projects of our own,',
    titleItalic: 'made in common.',
    lead: 'We are a community of people who build software. We work on projects, share what we learn and share ideas among equals. We also incubate projects of our own.',
    footLabel: 'Development community',
    footLink: 'Read the manifesto',
  },
  manifesto: {
    number: 'I',
    kicker: 'Manifesto',
    title: 'What we stand for.',
    notes: [
      'Fellowship in the age of AI.',
      'Creation as a means of emancipation.',
      'Commitment and fairness.',
    ],
    paragraphs: [
      'AI is here to stay, and now more than ever we need communities and teams that share knowledge and can build together. Artel exists so that a group of people can develop software without losing their judgement along the way, or the ownership of what they build.',
      'We operate by sharing what we know and forming teams to develop our own projects. Our aim is to build large, solid, innovative applications and bring them to market without losing control or ownership along the way.',
      'Artel is not just another incubator: it is a community in which we put the wellbeing of every member first, on equal terms. Every project begins with a commitment to the project and to the fair sharing of its future profits.',
    ],
    sign: 'The three pillars.',
    plateCaption: 'Pl. I — Branch study.',
  },
  projects: {
    number: 'II',
    kicker: 'Projects',
    title: 'Three projects underway.',
    intro: 'Some are born inside and are looking for a team. Others already have clients. All of them can be told without embellishment.',
    fig: 'Fig.',
    link: 'View project',
    status: {
      incubacion: 'Incubating',
      desarrollo: 'In development',
      publico: 'Private beta',
      pausado: 'Paused',
    },
    detail: {
      back: 'Back to projects',
      year: 'Year',
      status: 'Status',
      stack: 'Stack',
      repo: 'Repository',
      site: 'Website',
    },
    page: {
      title: 'Projects.',
      lead: 'The projects artel incubates and maintains.',
      metaTitle: 'Projects — artel',
      metaDescription: 'The projects artel incubates and maintains.',
    },
  },
  panel: {
    number: 'III',
    kicker: 'Members',
    title: 'Founders and workers.',
    paragraphs: [
      'At Artel we believe projects fail for lack of funding, of multidisciplinary skills or of management. By working together and sharing tools, contacts and knowledge, we get past those barriers.',
      'Each project runs as a cooperative: every member commits to a piece of work and a level of dedication, and receives a share of the project in proportion. All members of the project are equal.',
    ],
    caption: 'Fig. 4 — Sharing the decision',
  },
  members: {
    title: 'Who we are.',
    intro: 'The people who make up the community.',
    page: {
      title: 'Members.',
      lead: 'The people who make up the community.',
      metaTitle: 'Members — artel',
      metaDescription: 'The people who make up the artel community.',
    },
  },
  join: {
    number: 'IV',
    kicker: 'Join',
    title: 'We are looking for colleagues, not candidates.',
    intro: 'There is no entry template and no automatic process. There is a conversation, and an assembly that decides.',
    requirements: [
      {
        title: 'Introduction',
        body: 'What you can bring to this community and what you want the community to bring you. You can come from any trade in IT (business, UX/UI, design, frontend, backend).',
      },
      {
        title: 'Values',
        body: 'The community has very clear values about how projects are run and how work and profits are shared. We are not a recruitment agency.',
      },
      {
        title: 'Dedication',
        body: 'Without work there is nothing to take part in. We understand that, when we start a project, the members agree on a commitment of time.',
      },
      {
        title: 'Community',
        body: 'We understand that the way we work does not look like the company you work for, or like other projects you have taken part in: the community is the pillar that makes Artel possible.',
      },
    ],
    ctaLabel: 'Write to us',
    ctaNote: 'Tell us what you have done and what you would like to do here. We will always reply, even if it is to say no.',
    email: 'hola@artel.dev',
    page: {
      title: 'Join.',
      lead: 'How to join the community.',
      metaTitle: 'Join — artel',
      metaDescription: 'How to join the artel community.',
    },
  },
  faq: {
    number: 'V',
    kicker: 'Questions',
    title: 'What people usually ask.',
    items: [
      {
        question: 'What exactly does it mean to join the community?',
        answer: 'In the community you will find other people like you, eager to work, to start their own projects and to join the ones they like most. Being part of the community does not mean being part of a project.',
      },
      {
        question: 'Do you only work on your own projects?',
        answer: 'Yes. The idea behind this community is to take ownership of what we work on and share it among the members. If we don\'t build our own projects, we will always depend on other people\'s work.',
      },
      {
        question: 'How are profits shared in the projects?',
        answer: 'When a project is founded, levels of dedication are agreed, and profits are shared accordingly. We believe the ideal is for everyone to put in the same effort and receive the same benefit, but each person\'s personal life does not always allow it.',
      },
      {
        question: 'What happens if a project doesn\'t work?',
        answer: 'It closes. What has been learned is documented, whatever can be released is released and the loss is borne by the members. Closing on time is also part of the job.',
      },
    ],
    page: {
      title: 'Questions.',
      lead: 'The doubts we hear most often.',
      metaTitle: 'FAQ — artel',
      metaDescription: 'Frequently asked questions about the artel community.',
    },
  },
  contact: {
    number: 'VI',
    kicker: 'Contact',
    title: 'Let\'s talk.',
    intro: 'For commissions, collaborations or any question about the community.',
    emailLabel: 'Write to us',
    email: 'hola@artel.dev',
    note: 'We reply within two weeks, even if it is to say no.',
    page: {
      title: 'Contact.',
      lead: 'Write to us.',
      metaTitle: 'Contact — artel',
      metaDescription: 'Contact the artel community.',
    },
  },
  footer: {
    tagline: 'Software development community.',
    contactLabel: 'Contact',
    documentsLabel: 'Documents',
    documents: ['Bylaws', 'Legal notice', 'Privacy'],
    signature: 'artel — development community',
  },
  notFound: {
    title: 'Page not found.',
    text: 'The page you are looking for does not exist or has moved.',
    home: 'Back to home',
    contact: 'Contact',
    english: 'Spanish',
    metaTitle: 'Page not found — artel',
    metaDescription: 'The page you are looking for does not exist.',
  },
  meta: {
    home: {
      title: 'artel — development community',
      description: 'Artel is a software development community and a private project incubator. We work on cooperative projects, share ownership and decide as equals.',
    },
  },
} as const satisfies Dictionary;
