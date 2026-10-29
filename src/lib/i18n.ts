import { en } from '../i18n/en';
import { es } from '../i18n/es';
import type { Dictionary } from '../i18n/types';

export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLocale: Lang = 'es';

const dictionaries: Record<Lang, Dictionary> = { es, en };

export const useTranslations = (lang: Lang): Dictionary => dictionaries[lang];

export const getLangFromUrl = (url: string | URL): Lang => {
  const pathname = typeof url === 'string' ? url : url.pathname;
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
};

const stripLocale = (path: string): string => {
  if (path === '/en' || path === '/en/') return '/';
  if (path.startsWith('/en/')) return path.slice(3);
  return path;
};

export const localizedPath = (path: string, lang: Lang): string => {
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  const bare = stripLocale(withSlash);
  return lang === 'en' ? (bare === '/' ? '/en/' : `/en${bare}`) : bare;
};

export const alternatePath = (url: string | URL, lang: Lang): string => {
  const pathname = typeof url === 'string' ? url : url.pathname;
  return localizedPath(pathname, lang);
};
