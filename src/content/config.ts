// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// Define a schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    author: z.string(),
    showToc: z.boolean().default(false),
    emoji: z.string().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': blogCollection,
};