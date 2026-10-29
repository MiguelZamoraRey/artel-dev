import type { Lang } from './i18n';

export type ProjectStatus = 'incubacion' | 'desarrollo' | 'publico' | 'pausado';

export interface ProjectData {
  title: string;
  summary: string;
  status: ProjectStatus;
  year: number;
  stack: string[];
  repo?: string;
  url?: string;
  order: number;
  draft?: boolean;
}

export interface ProjectEntry {
  id: string;
  data: ProjectData;
}

export interface ProjectView {
  slug: string;
  data: ProjectData;
}

export interface MemberLink {
  label: string;
  url: string;
}

export interface MemberData {
  name: string;
  role: string;
  bio: string;
  links?: MemberLink[];
  order: number;
}

export interface MemberEntry {
  id: string;
  data: MemberData;
}

export interface MemberView {
  slug: string;
  data: MemberData;
}

const splitId = (id: string): { locale: string; slug: string } => {
  const clean = id.replace(/\.md$/, '');
  const [locale, ...rest] = clean.split('/');
  return { locale, slug: rest.join('/') };
};

export const getProjects = (entries: readonly ProjectEntry[], lang: Lang): ProjectView[] => {
  const bySlug = new Map<string, ProjectEntry>();

  for (const entry of entries) {
    const { locale, slug } = splitId(entry.id);
    if (!slug || entry.data.draft || locale !== 'es') continue;
    bySlug.set(slug, entry);
  }

  if (lang === 'en') {
    for (const entry of entries) {
      const { locale, slug } = splitId(entry.id);
      if (!slug || entry.data.draft || locale !== 'en') continue;
      bySlug.set(slug, entry);
    }
  }

  return [...bySlug.entries()]
    .map(([slug, entry]) => ({ slug, data: entry.data }))
    .sort((a, b) => a.data.order - b.data.order);
};

export const getMembers = (entries: readonly MemberEntry[], lang: Lang): MemberView[] => {
  const bySlug = new Map<string, MemberEntry>();

  for (const entry of entries) {
    const { locale, slug } = splitId(entry.id);
    if (!slug || locale !== 'es') continue;
    bySlug.set(slug, entry);
  }

  if (lang === 'en') {
    for (const entry of entries) {
      const { locale, slug } = splitId(entry.id);
      if (!slug || locale !== 'en') continue;
      bySlug.set(slug, entry);
    }
  }

  return [...bySlug.entries()]
    .map(([slug, entry]) => ({ slug, data: entry.data }))
    .sort((a, b) => a.data.order - b.data.order);
};
