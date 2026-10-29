import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['incubacion', 'desarrollo', 'publico', 'pausado']),
    year: z.number(),
    stack: z.array(z.string()),
    repo: z.url().optional(),
    url: z.url().optional(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

const socios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/socios' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.url() })).optional(),
    order: z.number(),
  }),
});

export const collections = { proyectos, socios };
