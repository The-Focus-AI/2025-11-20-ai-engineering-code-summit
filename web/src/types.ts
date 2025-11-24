export type TrackType = 'LEADERSHIP' | 'ENGINEERING';

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  imageUrl: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
}

export interface Article {
  id: string;
  track: TrackType;
  order: number; // For sequencing within the track
  title: string;
  subtitle: string;
  author: string;
  category: string;
  readTime: string;
  content: string; // Markdown-like content
  imageUrl: string;
  contributorIds: string[]; // Speakers associated with this theme
}

export interface SavedItem {
  id: string;
  type: 'article' | 'speaker';
  title: string;
  timestamp: number;
}

export enum ViewState {
  HOME = 'HOME',
  TRACK = 'TRACK',
  ARTICLE = 'ARTICLE',
  SPEAKER = 'SPEAKER',
  SPEAKER_DETAIL = 'SPEAKER_DETAIL',
  RESEARCH = 'RESEARCH'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}