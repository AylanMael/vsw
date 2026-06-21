export interface BlogSectionCallout {
  type: "tip" | "warn" | "example" | "info";
  title: string;
  text: string;
}

export interface BlogSection {
  id: string;
  heading: string;
  content?: string[];
  list?: string[];
  callout?: BlogSectionCallout;
  internalLink?: {
    text: string;
    url: string;
  };
}

export interface BlogPostAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  category: string;
  tags: string[];
  date: string;
  updatedDate?: string;
  readTime: string;
  author: BlogPostAuthor;
  introduction?: string;
  summary?: string;
  sections?: BlogSection[];
  faq?: BlogFaqItem[];
  relatedSlugs?: string[];
  content?: string[];
  internalLink?: {
    text?: string;
    url?: string;
    type?: string;
  };
}
