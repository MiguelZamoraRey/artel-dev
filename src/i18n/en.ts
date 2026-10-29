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
    eyebrow: 'Artel — development cooperative',
    plate: 'Plate I',
    title: 'Software with craft,',
    titleItalic: 'made in common.',
    lead: 'We are a cooperative of people who write software. We work on projects, share ownership and decide as equals. We also incubate our own.',
    footLabel: 'Worker cooperative',
    footLink: 'Read the manifesto',
  },
  manifesto: {
    number: 'I',
    kicker: 'Manifesto',
    title: 'What we stand for.',
    notes: [
      'Every member, one vote.',
      'The books, open inside.',
      'Saying no is also part of the craft.',
    ],
    paragraphs: [
      'We don\'t believe in the company as an end. We believe in work done well, in small teams and in decisions that can be explained. Artel exists so that a group of people can build software without losing their judgement along the way, or the ownership of what they build.',
      'We run as a cooperative: every member has a vote, an agreed salary and access to the accounts. Projects are incubated inside and, when they mature, become initiatives with a life of their own, with their own team and funding. What goes well is shared; what goes badly is borne by everyone.',
      'We don\'t promise speed or disruption. We promise method: clear scope, readable code, honest documentation and a direct relationship with whoever commissions the work. We would rather turn a project down than take it on without being able to look after it.',
    ],
    sign: 'Approved at the assembly.',
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
    title: 'The decision is not delegated.',
    paragraphs: [
      'In a cooperative, ownership and direction go together. Every member has a vote, whatever their seniority or the hours they have put in. Salaries are known inside the house and the accounts are presented at the assembly.',
      'That makes things slower. It also makes them ours.',
    ],
    caption: 'Fig. 4 — Sharing the decision',
  },
  members: {
    title: 'Who we are.',
    intro: 'The people who make up the cooperative.',
    page: {
      title: 'Members.',
      lead: 'The people who make up the cooperative.',
      metaTitle: 'Members — artel',
      metaDescription: 'The people who make up the artel cooperative.',
    },
  },
  join: {
    number: 'IV',
    kicker: 'Join',
    title: 'We are looking for members, not candidates.',
    intro: 'There is no entry template or automatic process. There is a conversation, a trial period and an assembly that decides.',
    requirements: [
      {
        title: 'Craft',
        body: 'You write software in production and can show what you have built. We don\'t ask for a specific language; we ask for judgement.',
      },
      {
        title: 'Participation',
        body: 'You want to decide about the house, not just carry out commissions. Assemblies are part of the work, not a formality.',
      },
      {
        title: 'Commitment',
        body: 'You can dedicate at least two days a week to the common project during the first year.',
      },
      {
        title: 'Contribution',
        body: 'You contribute part of the initial share capital. The amount and terms are agreed with you before joining.',
      },
    ],
    ctaLabel: 'Write to us',
    ctaNote: 'Tell us what you have done and what you would like to do here. We reply within two weeks, even if it is to say no.',
    email: 'hola@artel.dev',
    page: {
      title: 'Join.',
      lead: 'How to become part of the cooperative.',
      metaTitle: 'Join — artel',
      metaDescription: 'How to become a member of the artel cooperative.',
    },
  },
  faq: {
    number: 'V',
    kicker: 'Questions',
    title: 'What people usually ask.',
    items: [
      {
        question: 'What exactly does it mean to be a member?',
        answer: 'Being a member means being an owner. Each member contributes share capital, has a vote at the assembly and takes part in the distribution of results. There is no intermediate category of indefinite collaborator: either you join under the same rules or you don\'t join.',
      },
      {
        question: 'Do you only work on your own projects?',
        answer: 'No. A good part of the work comes from external commissions: digital product, internal tools, maintenance of systems that already exist. That side sustains the house and funds the incubator.',
      },
      {
        question: 'How are profits shared?',
        answer: 'First an agreed reserve is covered at the assembly. The rest is then shared among the members according to the current criteria, which is reviewed every year. The accounts are open to anyone inside.',
      },
      {
        question: 'Can I join without experience in cooperatives?',
        answer: 'Yes. Nobody is born knowing how to read a balance sheet. There is a period of support and training in whatever is needed; what is not negotiable is technical judgement and the willingness to take part in decisions.',
      },
      {
        question: 'What happens if a project doesn\'t work?',
        answer: 'It closes. What has been learned is documented, whatever can be released is released and the loss is borne between the reserve and the members. Closing on time is also part of the craft.',
      },
    ],
    page: {
      title: 'Questions.',
      lead: 'The doubts we hear most often.',
      metaTitle: 'FAQ — artel',
      metaDescription: 'Frequently asked questions about the artel cooperative.',
    },
  },
  contact: {
    number: 'VI',
    kicker: 'Contact',
    title: 'Let\'s talk.',
    intro: 'For commissions, collaborations or any question about the cooperative.',
    emailLabel: 'Write to us',
    email: 'hola@artel.dev',
    note: 'We reply within two weeks, even if it is to say no.',
    page: {
      title: 'Contact.',
      lead: 'Write to us.',
      metaTitle: 'Contact — artel',
      metaDescription: 'Contact the artel cooperative.',
    },
  },
  footer: {
    tagline: 'Software development cooperative.',
    contactLabel: 'Contact',
    documentsLabel: 'Documents',
    documents: ['Bylaws', 'Legal notice', 'Privacy'],
    signature: 'artel — development cooperative',
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
      title: 'artel — software cooperative',
      description: 'Artel is a software development cooperative and a private project incubator. We work on projects, share ownership and decide as equals.',
    },
  },
} as const satisfies Dictionary;
