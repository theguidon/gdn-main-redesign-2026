export interface Article {
  id: number;
  title: string;
  featured_image_url: string;
  featured_image_caption: string;
  excerpt?: string;
  content?: string;
  authors: string[];
  pubDate: Date;
  categories: string[];
  [key: string]: unknown;
}

export type ArticleSummary = Omit<Article, "content">;
export enum Sections {
  NEWS,
  OPINION,
  SPORTS,
  BEYONDLOYOLA,
  FEATURES,
  INQUIRY,
  SCITECH,
}
