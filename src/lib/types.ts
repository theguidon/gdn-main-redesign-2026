export interface Article {
  id: number;
  title: string;
  featured_image_url: string;
  excerpt?: string;
  content?: string;
  authors: string[];
  pubDate: Date;
  categories: string[];
  [key: string]: unknown;
}
