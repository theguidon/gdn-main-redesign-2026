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
export enum Section {
  NEWS = 3,
  OPINION = 5,
  SPORTS = 4,
  BEYONDLOYOLA = 11,
  FEATURES = 6,
  INQUIRY = 7,
  SCITECH = 2005,
}
