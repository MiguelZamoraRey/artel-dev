import { describe, expect, it } from 'vitest';
import { alternatePath, getLangFromUrl, localizedPath } from './i18n';

describe('localizedPath', () => {
  it('keeps Spanish paths without a prefix', () => {
    expect(localizedPath('/', 'es')).toBe('/');
    expect(localizedPath('/proyectos/', 'es')).toBe('/proyectos/');
  });

  it('prefixes English paths', () => {
    expect(localizedPath('/', 'en')).toBe('/en/');
    expect(localizedPath('/proyectos/', 'en')).toBe('/en/proyectos/');
  });

  it('strips an existing English prefix', () => {
    expect(localizedPath('/en/', 'es')).toBe('/');
    expect(localizedPath('/en/proyectos/', 'es')).toBe('/proyectos/');
  });
});

describe('getLangFromUrl', () => {
  it('detects English from the prefix', () => {
    expect(getLangFromUrl('/en/')).toBe('en');
    expect(getLangFromUrl('/en/proyectos/taller/')).toBe('en');
    expect(getLangFromUrl('/en')).toBe('en');
  });

  it('defaults to Spanish', () => {
    expect(getLangFromUrl('/')).toBe('es');
    expect(getLangFromUrl('/proyectos/')).toBe('es');
  });
});

describe('alternatePath', () => {
  it('builds the path in the other language', () => {
    expect(alternatePath('/proyectos/taller/', 'en')).toBe('/en/proyectos/taller/');
    expect(alternatePath('/en/proyectos/taller/', 'es')).toBe('/proyectos/taller/');
    expect(alternatePath('/', 'en')).toBe('/en/');
    expect(alternatePath('/en/', 'es')).toBe('/');
  });
});
