import { Section } from "./types";

type SectionInfo = {
  name: string;
  slug: string;
  color: string;
};

export const sectionInfo: Record<Section, SectionInfo> = {
  [Section.NEWS]: {
    name: "News",
    slug: "news",
    color: "--gdn-blue",
  },
  [Section.OPINION]: {
    name: "Opinion",
    slug: "opinion",
    color: "--opinion-gray",
  },
  [Section.SPORTS]: {
    name: "Sports",
    slug: "sports",
    color: "--gdn-blue",
  },
  [Section.BEYONDLOYOLA]: {
    name: "Beyond Loyola",
    slug: "bl",
    color: "--bl-yellow",
  },
  [Section.FEATURES]: {
    name: "Features",
    slug: "features",
    color: "--features-green",
  },
  [Section.INQUIRY]: {
    name: "Inquiry",
    slug: "inquiry",
    color: "--inquiry-red",
  },
  [Section.SCITECH]: {
    name: "Science and Technology",
    slug: "scitech",
    color: "--scitech-blue",
  },
};
