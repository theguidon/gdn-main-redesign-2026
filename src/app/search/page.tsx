import "../globals.css";

import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/article-card";
import type { Article } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const article: Article = {
  id: 1,
  title: "Nunc venenatis dolor eget varius rutrum maecenas.",
  featured_image_url: "https://picsum.photos/350/",
  featured_image_caption: "blabla",
  excerpt:
    "MAURIS LUCTUS, urna eu ullamcorper accumsan, dui nibh ullamcorper velit, sed sollicitudin odio lectus ac eros. Phasellus quis lectus et nisi consectetur euismod. Proin tempor, eros non mattis congue, diam urna hendrerit augue, sit amet posuere arcu augue sed ex. Pellentesque pellentesque ex tempor, vestibulum nunc consequat, pharetra lectus. Mauris at ornare est, suscipit tristique ipsum. Nunc et elementum ligula. Aenean at sagittis ex, sit amet convallis mauris.",
  authors: ["BYLINE", "BYLINE"],
  pubDate: new Date(),
  categories: ["news"],
};

export default function SearchPage() {
  return (
    <main>
      <div className="w-full" id="SearchBar">
        <div className="flex h-48 w-full items-center justify-center bg-[#1c4880] px-6">
          <div className="flex h-14 w-full max-w-xl items-center justify-center gap-2 rounded-xs border-0 bg-white p-3">
            <SearchIcon className="font-black text-[#1c4480]" />
            <Input
              id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="text-base text-[#101212] border-0 placeholder:text-[#7b7f86] focus-visible:ring-0"
            />
          </div>
        </div>
      </div>

      <div className="px-20 pb-6 flex flex-col items-center" id="Content">
        <div
          className="w-full flex flex-col items-center py-6 gap-y-4 border-b border-[#101212] font-tiempos-headline"
          id="SearchResult"
        >
          <h3 className="text-base">Showing Search Results for:</h3>
          <h1 className="text-4xl font-bold text-[#1c4480]">Query</h1>
        </div>

        <div className="grid grid-cols-2 gap-6 py-6" id="ArticleGrid">
          <div className="w-xl">
            <ArticleCard article={article}></ArticleCard>
          </div>
          <div className="w-xl">
            <ArticleCard article={article}></ArticleCard>
          </div>
          <div className="w-xl">
            <ArticleCard article={article}></ArticleCard>
          </div>
          <div className="w-xl">
            <ArticleCard article={article}></ArticleCard>
          </div>
        </div>

        <Button>Load More Results</Button>
      </div>
    </main>
  );
}
