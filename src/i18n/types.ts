import type { ProjectStatus } from '../lib/content';

export interface Dictionary {
  nav: {
    manifesto: string;
    projects: string;
    members: string;
    join: string;
    faq: string;
  };
  common: {
    language: string;
    skip: string;
    navLabel: string;
    homeLabel: string;
    themeLight: string;
    themeDark: string;
    themeLabel: string;
  };
  hero: {
    eyebrow: string;
    plate: string;
    title: string;
    titleItalic: string;
    lead: string;
    footLabel: string;
    footLink: string;
  };
  manifesto: {
    number: string;
    kicker: string;
    title: string;
    notes: readonly [string, string, string];
    paragraphs: readonly [string, string, string];
    sign: string;
    plateCaption: string;
  };
  projects: {
    number: string;
    kicker: string;
    title: string;
    intro: string;
    fig: string;
    link: string;
    status: Record<ProjectStatus, string>;
    detail: {
      back: string;
      year: string;
      status: string;
      stack: string;
      repo: string;
      site: string;
    };
    page: {
      title: string;
      lead: string;
      empty: string;
      emptyCta: string;
      metaTitle: string;
      metaDescription: string;
    };
  };
  panel: {
    number: string;
    kicker: string;
    title: string;
    paragraphs: readonly [string, string];
    caption: string;
  };
  members: {
    title: string;
    intro: string;
    page: {
      title: string;
      lead: string;
      metaTitle: string;
      metaDescription: string;
    };
  };
  join: {
    number: string;
    kicker: string;
    title: string;
    intro: string;
    requirements: readonly { title: string; body: string }[];
    ctaLabel: string;
    ctaNote: string;
    email: string;
    page: {
      title: string;
      lead: string;
      metaTitle: string;
      metaDescription: string;
    };
  };
  faq: {
    number: string;
    kicker: string;
    title: string;
    items: readonly { question: string; answer: string }[];
    page: {
      title: string;
      lead: string;
      metaTitle: string;
      metaDescription: string;
    };
  };
  contact: {
    number: string;
    kicker: string;
    title: string;
    intro: string;
    emailLabel: string;
    email: string;
    note: string;
    page: {
      title: string;
      lead: string;
      metaTitle: string;
      metaDescription: string;
    };
  };
  footer: {
    tagline: string;
    contactLabel: string;
    documentsLabel: string;
    documents: readonly string[];
    signature: string;
  };
  notFound: {
    title: string;
    text: string;
    home: string;
    contact: string;
    english: string;
    metaTitle: string;
    metaDescription: string;
  };
  meta: {
    home: {
      title: string;
      description: string;
    };
  };
}
