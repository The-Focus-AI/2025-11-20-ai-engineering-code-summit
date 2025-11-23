import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const REPO_ROOT = path.join(process.cwd(), '..');

export interface Frontmatter {
  title?: string;
  description?: string;
  speaker?: string;
  company?: string;
  date?: string;
  time?: string;
  tags?: string[];
  track?: 'Leadership' | 'Engineering';
  topics?: string[];
  [key: string]: any;
}

export interface ContentItem {
  slug: string;
  content: string;
  frontmatter: Frontmatter;
  path: string;
}

export interface Session extends ContentItem {
  day: string;
  track?: string;
  topics?: string[];
}

export interface Theme extends ContentItem {
  day: string;
}

export interface Speaker extends ContentItem { }

function getSlug(filePath: string): string {
  return path.basename(filePath, '.md');
}

function parseFile(filePath: string): ContentItem {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  let data: { [key: string]: any } = {};
  let content = fileContent;

  try {
    const parsed = matter(fileContent);
    data = parsed.data;
    content = parsed.content;
  } catch (e) {
    console.warn(`Failed to parse frontmatter for ${filePath}:`, e);
    // Fallback: treat entire file as content
    content = fileContent;
  }

  // Robust title extraction if missing in frontmatter
  let title = data.title;
  if (!title) {
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match) {
      title = h1Match[1];
    } else {
      title = getSlug(filePath).replace(/-/g, ' ');
    }
  }

  return {
    slug: getSlug(filePath),
    content,
    frontmatter: { ...data, title },
    path: filePath,
  };
}

export function getThemes(): Theme[] {
  const themes: Theme[] = [];
  const files = fs.readdirSync(REPO_ROOT);

  files.forEach(file => {
    if (file.endsWith('-themes.md')) {
      const filePath = path.join(REPO_ROOT, file);
      const item = parseFile(filePath);
      // Extract day from filename (e.g., 2025-11-20-themes.md)
      const dayMatch = file.match(/(\d{4}-\d{2}-\d{2})/);
      themes.push({
        ...item,
        day: dayMatch ? dayMatch[1] : 'Unknown',
      });
    }
  });

  return themes;
}

export function getSessions(): Session[] {
  const sessions: Session[] = [];
  const dirs = fs.readdirSync(REPO_ROOT);

  dirs.forEach(dir => {
    // Check for day directories (YYYY-MM-DD)
    if (dir.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const dayPath = path.join(REPO_ROOT, dir);
      if (fs.statSync(dayPath).isDirectory()) {
        const files = fs.readdirSync(dayPath);
        files.forEach(file => {
          if (file.endsWith('.md') && !file.includes('day-overview')) {
            const filePath = path.join(dayPath, file);
            const item = parseFile(filePath);
            sessions.push({
              ...item,
              day: dir,
              track: item.frontmatter.track,
              topics: item.frontmatter.topics,
            });
          }
        });
      }
    }
  });

  return sessions;
}

export function getTopics(): string[] {
  const sessions = getSessions();
  const topics = new Set<string>();
  sessions.forEach(session => {
    session.frontmatter.topics?.forEach(t => topics.add(t));
  });
  return Array.from(topics).sort();
}

export function getSessionsByTopic(topic: string): Session[] {
  return getSessions().filter(session =>
    session.frontmatter.topics?.includes(topic)
  );
}

export function getSpeakers(): Speaker[] {
  const speakersPath = path.join(REPO_ROOT, 'speakers');
  if (!fs.existsSync(speakersPath)) return [];

  const files = fs.readdirSync(speakersPath);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => parseFile(path.join(speakersPath, file)));
}

export function getExecutiveSynthesis(): ContentItem | null {
  const filePath = path.join(REPO_ROOT, 'executive-synthesis.md');
  if (fs.existsSync(filePath)) {
    return parseFile(filePath);
  }
  return null;
}
