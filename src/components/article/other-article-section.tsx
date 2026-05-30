"use client";

import ArticleCard from "@/components/article-card";
import { Article, WPResponse } from "@/lib/types";
import { Spinner } from "@/components/ui/spinner";
import useSWR from "swr";
import { JSONFetcher, WPResponseToArticle } from "@/lib/utils";

export default function OtherArticleSection({ link }: { link: string }) {
  const { data, error, isLoading } = useSWR(link, JSONFetcher);

  if (error) {
    return <p>Failed to load articles.</p>;
  } else if (isLoading) {
    return (
      <section className="w-full h-20 flex items-center justify-center">
        <Spinner />
      </section>
    );
  } else {
    const articles = (data as WPResponse[]).map((wpRes: WPResponse) =>
      WPResponseToArticle(wpRes),
    );

    return (
      <section className="flex w-full overflow-x-scroll columns-[30vw] gap-4 mb-8">
        {articles.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>
    );
  }
}
