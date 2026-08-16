import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    category: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    citySlug: z.string(),
    city: z.string(),
    state: z.string(),
    stateAbbr: z.string(),
    stateSlug: z.string(),
    population: z.string(),
    climate: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    services: z.array(z.string()).default([]),
  }),
});

const cityServices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/city-services' }),
  schema: z.object({
    citySlug: z.string(),
    city: z.string(),
    stateAbbr: z.string(),
    service: z.string(),
    serviceLabel: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    readTime: z.string(),
  }),
});

export const collections = { blog, locations, cityServices };
