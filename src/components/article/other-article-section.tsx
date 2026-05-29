"use client";

import ArticleCard from "@/components/article-card";
import { Article, WPResponse } from "@/lib/types";
import { Spinner } from "@/components/ui/spinner";
import useSWR from "swr";
import { JSONFetcher, WPResponseToArticle } from "@/lib/utils";

export default function OtherArticleSection({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  const { data, error, isLoading } = useSWR(link, JSONFetcher);
  const articles = (data as WPResponse[]).map((wpRes: WPResponse) =>
    WPResponseToArticle(wpRes),
  );

  if (error) {
    return (
      <section className="mb-8">
        <div className="flex flex-row items-center">
          <h3 className="font-chivo mr-2 font-bold text-[#101212]">{title}</h3>
          <div className="h-0 border-black border-b grow" />
        </div>
        <p>Failed to load articles.</p>
      </section>
    );
  }
  return (
    <section className="mb-8">
      <div className="flex flex-row items-center">
        <h3 className="font-chivo mr-2 font-bold text-[#101212]">{title}</h3>
        <div className="h-0 border-black border-b grow" />
      </div>
      {isLoading ? (
        <section className="w-full h-20 flex items-center justify-center">
          <Spinner />
        </section>
      ) : (
        <section className="flex w-full overflow-x-scroll columns-[30vw] gap-4">
          {articles.map((article: Article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </section>
      )}
    </section>
  );
}
