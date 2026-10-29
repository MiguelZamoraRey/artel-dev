import { getCollection } from 'astro:content';
import { getMembers, getProjects } from './content';
import type { Lang } from './i18n';

export const loadProjects = async (lang: Lang) => {
  const entries = await getCollection('proyectos');
  return getProjects(entries, lang);
};

export const loadMembers = async (lang: Lang) => {
  const entries = await getCollection('socios');
  return getMembers(entries, lang);
};
