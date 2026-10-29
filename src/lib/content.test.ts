import { describe, expect, it } from 'vitest';
import { getMembers, getProjects } from './content';
import type { MemberEntry, ProjectEntry } from './content';

const project = (id: string, overrides: Partial<ProjectEntry['data']> = {}): ProjectEntry => ({
  id,
  data: {
    title: 'Proyecto',
    summary: 'Resumen',
    status: 'desarrollo',
    year: 2025,
    stack: [],
    order: 1,
    draft: false,
    ...overrides,
  },
});

const member = (id: string, overrides: Partial<MemberEntry['data']> = {}): MemberEntry => ({
  id,
  data: {
    name: 'Nombre',
    role: 'Rol',
    bio: 'Bio',
    order: 1,
    ...overrides,
  },
});

describe('getProjects', () => {
  it('sorts by order and excludes drafts', () => {
    const entries = [
      project('es/b', { order: 2 }),
      project('es/a', { order: 1 }),
      project('es/c', { order: 3, draft: true }),
    ];

    expect(getProjects(entries, 'es').map((item) => item.slug)).toEqual(['a', 'b']);
  });

  it('uses the English translation when it exists', () => {
    const entries = [
      project('es/a', { title: 'A', order: 1 }),
      project('en/a', { title: 'A EN', order: 1 }),
    ];

    expect(getProjects(entries, 'en')[0]?.data.title).toBe('A EN');
  });

  it('falls back to Spanish when the English version is missing', () => {
    const entries = [
      project('es/a', { title: 'A', order: 1 }),
      project('es/b', { title: 'B', order: 2 }),
      project('en/b', { title: 'B EN', order: 2 }),
    ];

    const result = getProjects(entries, 'en');

    expect(result.map((item) => item.slug)).toEqual(['a', 'b']);
    expect(result[0]?.data.title).toBe('A');
    expect(result[1]?.data.title).toBe('B EN');
  });
});

describe('getMembers', () => {
  it('sorts by order and falls back to Spanish', () => {
    const entries = [
      member('es/b', { name: 'B', order: 2 }),
      member('es/a', { name: 'A', order: 1 }),
      member('en/b', { name: 'B EN', order: 2 }),
    ];

    const result = getMembers(entries, 'en');

    expect(result.map((item) => item.slug)).toEqual(['a', 'b']);
    expect(result[0]?.data.name).toBe('A');
    expect(result[1]?.data.name).toBe('B EN');
  });
});
