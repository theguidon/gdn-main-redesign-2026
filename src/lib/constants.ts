import { Section } from "./types";

export const BASE_URL = "https://theguidon.com/wp-json/wp/v2";

export const TOP_POSTS_URL =
  "https://theguidon.com/wp-json/wordpress-popular-posts/v1/popular-posts";

type SectionInfo = {
  name: string;
  slug: string;
  color: string;
};

export const sectionInfo: Record<Section, SectionInfo> = {
  [Section.NEWS]: {
    name: "News",
    slug: "news",
    color: "var(--gdn-blue)",
  },
  [Section.OPINION]: {
    name: "Opinion",
    slug: "opinion",
    color: "var(--opinion-gray)",
  },
  [Section.SPORTS]: {
    name: "Sports",
    slug: "sports",
    color: "var(--gdn-blue)",
  },
  [Section.BEYONDLOYOLA]: {
    name: "Beyond Loyola",
    slug: "bl",
    color: "var(--bl-yellow)",
  },
  [Section.FEATURES]: {
    name: "Features",
    slug: "features",
    color: "var(--features-green)",
  },
  [Section.INQUIRY]: {
    name: "Inquiry",
    slug: "inquiry",
    color: "var(--inquiry-red)",
  },
  [Section.SCITECH]: {
    name: "Science and Technology",
    slug: "scitech",
    color: "var(--scitech-blue)",
  },
};
