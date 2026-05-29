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
  slug: string;
  [key: string]: unknown;
}

export interface WPResponse {
  title: { rendered: string };
  authors: { display_name: string; [author_k: string]: unknown }[];
  slug: string;
  featured_image_url: string;
  date: string;
  excerpt: { rendered: string; [excerpt_k: string]: unknown };
  yoast_head_json: {
    og_description: string;
    schema: {
      "@graph": {
        2: { caption: string; [graph_k: string]: unknown };
      };
      [schema_k: string]: unknown;
    };
    [yoast_k: string]: unknown;
  };
  [res_k: string]: unknown;
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
