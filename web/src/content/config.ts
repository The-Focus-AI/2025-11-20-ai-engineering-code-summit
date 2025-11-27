import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Speakers collection - loads from ./speakers/*.md (symlinked directory)
const speakers = defineCollection({
  loader: glob({ pattern: '**/[!R]*.md', base: './src/content/speakers' }),
  schema: z.object({
    name: z.string(),
    company: z.string(),
    company_url: z.string().optional(),
    role: z.string(),
    session: z.string().optional(),
    session_file: z.string().optional(),
    linkedin: z.string().nullable().optional(),
    twitter: z.string().nullable().optional(),
    twitter_url: z.string().nullable().optional(),
    github: z.string().nullable().optional(),
    github_url: z.string().nullable().optional(),
    website: z.string().nullable().optional(),
  })
});

// Articles collection - loads from theme files in both day directories
// Note: generateId prevents Astro from trying to process images as content assets
const articles = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/articles',
    generateId: ({ entry }: any) => entry
  }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    header_image: z.string().optional(),
    topics: z.array(z.string()).optional(),
    key_speakers: z.array(z.string()).optional(),
    key_insights: z.array(z.string()).optional(),
    edited: z.boolean().optional(),
  })
});

// Sessions collection - loads session files with speaker names
// Note: Some files (lunch, expo, afterparty) will be filtered out in the pages
// Note: generateId replaces slashes with dashes to create valid URL parameters
const sessions = defineCollection({
  loader: glob({
    pattern: '2025-11-2[0-9]/11-2[0-9]-[0-9][0-9]-[0-9][0-9]-*.md',
    base: '..',
    generateId: ({ entry }: any) => entry.replace(/\//g, '--')
  }),
  schema: z.object({
    title: z.string().optional(),
    speaker: z.string().optional(),
    company: z.string().optional(),
    track: z.string().optional(),
    topics: z.array(z.string()).optional(),
  })
});

// About page - single markdown file
const about = defineCollection({
  loader: glob({
    pattern: 'about.md',
    base: '..',
    generateId: () => 'about'
  }),
  schema: z.object({
    brand: z.string().optional(),
    project: z.string().optional(),
    doc_no: z.string().optional(),
    event: z.string().optional(),
    dates: z.string().optional(),
    attended_dates: z.string().optional(),
    location: z.string().optional(),
    website: z.string().optional(),
    format: z.string().optional(),
    focus: z.string().optional(),
    diagram: z.string().optional(),
  })
});

// Bio/Author page - single markdown file
const bio = defineCollection({
  loader: glob({
    pattern: 'bio.md',
    base: '..',
    generateId: () => 'bio'
  }),
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    company: z.string().optional(),
    company_url: z.string().optional(),
    tagline: z.string().optional(),
    services: z.array(z.string()).optional(),
    website: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    diagram: z.string().optional(),
  })
});

export const collections = {
  speakers,
  articles,
  sessions,
  about,
  bio,
};
