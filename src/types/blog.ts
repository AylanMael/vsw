export interface BlogCallout {
  type: 'tip' | 'warn' | 'example' | 'info';
  title: string;
  text: string;
}

export interface BlogInternalLink {
  text: string;
  url: string;
}

export interface BlogSection {
  id: string;
  heading: string;
  content: string[];
  list?: string[];
  callout?: BlogCallout;
  internalLink?: BlogInternalLink;
}

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  tags: string[];
  date: string;
  updatedDate?: string;
  readTime: string;
  author: BlogAuthor;
  introduction: string;
  sections?: BlogSection[];
  content?: string[]; // fallback Simple paragraph array for migrating existing blog items
  faq: BlogFaqItem[];
  relatedSlugs?: string[];
  summary?: string;
  internalLink?: string | BlogInternalLink;
  internalLinkLabel?: string;
}
