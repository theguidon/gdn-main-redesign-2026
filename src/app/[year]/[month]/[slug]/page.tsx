"use client";

import Image from "next/image";
import useSWR from "swr";
import { use } from "react";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import styles from "@/styles/article.module.css";
import ArticleCard from "@/components/article-card";
import { Article } from "@/lib/types";
import { Spinner } from "@/components/ui/spinner";
import {
  bylinesToP,
  chipFromCategory,
  formatDate,
  printTwoDigit,
} from "@/lib/utils";
import { redirect } from "next/navigation";

function OtherArticleSection({
  title,
  articles,
  isLoading,
}: {
  title: string;
  articles: Article[];
  isLoading: boolean;
}) {
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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface WPResponse {
  title: { rendered: string };
  authors: { display_name: string; [author_k: string]: unknown }[];
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

export default function ArticlePage({
  params,
}: {
  params: Promise<{ year: string; month: string; slug: string }>;
}) {
  const { year, month, slug } = use(params);
  const BASE_URL = "https://theguidon.com/wp-json/wp/v2";
  const {
    data: articleData,
    error: articleError,
    isLoading: isArticleLoading,
  } = useSWR(`${BASE_URL}/posts?slug=${slug}`, fetcher);
  // Uses the same implementation as from the 2022 theme
  // Gets posts in the same category as the article
  // (if there are multiple categories, they get the first)
  const {
    data: relatedArticles,
    error: relatedArticlesError,
    isLoading: isRelatedArticlesLoading,
  } = useSWR(
    () =>
      `${BASE_URL}/posts?categories=${articleData ? articleData[0].categories[0] : "0"}&exclude=${articleData[0].id}&per_page=3`,
    fetcher,
  );

  const {
    data: otherArticles,
    error: otherArticlesError,
    isLoading: isOtherArticlesLoading,
  } = useSWR(
    () =>
      `${BASE_URL}/posts?categories_exclude=${articleData ? articleData[0].categories.join(",") : "0"}&per_page=3`,
    fetcher,
  );
  const rawHTML =
    !articleData || isArticleLoading
      ? `<p>Your raw HTML here</p>`
      : articleData[0].content.rendered;

  if (isArticleLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  } else if (articleError) {
    return <p>We failed to retrieve your article.</p>;
  } else {
    const photographer =
      articleData[0].yoast_head_json.schema["@graph"][2].captionarticle;
    const date = new Date(articleData[0].date);
    const categories = articleData[0].categories;

    if (
      printTwoDigit(date.getMonth() + 1) !== month ||
      date.getFullYear().toString() !== year
    ) {
      redirect(
        `/${date.getFullYear()}/${printTwoDigit(date.getMonth() + 1)}/${slug}`,
      );
    }
    return (
      <main className="flex flex-col flex-nowrap items-stretch py-8 px-[20%]">
        <section className="flex flex-row gap-2 pb-2">
          {categories.map((catID: number) => (
            <div key={catID}>{chipFromCategory(catID)}</div>
          ))}
        </section>
        <section className="pb-4 pt-6 border-y border-black flex flex-col">
          <h1 className="font-tiempos-headline text-5xl font-bold text-[#101212]">
            {articleData[0].title.rendered}
          </h1>
          <section className="flex justify-between mt-3">
            <section>
              <p
                className="p-0 m-0"
                dangerouslySetInnerHTML={{
                  __html: bylinesToP(
                    articleData[0].authors.map(
                      (author: {
                        display_name: string;
                        [ak: string]: unknown;
                      }) => author.display_name,
                    ),
                  ),
                }}
              />
              <p
                className="p-0 m-0 text-[#4c4c4e]"
                dangerouslySetInnerHTML={{
                  __html: formatDate(new Date(articleData[0].date)),
                }}
              />
            </section>
            <section className="flex items-center gap-2">
              <p>Share to: </p>
              <a href="#">
                <FaFacebook color="#1c4480" />
              </a>
              <a href="#">
                <FaXTwitter color="#1c4480" />
              </a>
              <a href="#">
                <FaInstagram color="#1c4480" />
              </a>
            </section>
          </section>
        </section>
        <section className="flex flex-col flex-nowrap items-stretch mt-4 border-black border-b pb-4 mb-8">
          <Image
            src={articleData[0].featured_image_url}
            width={1000}
            height={550}
            className="w-full"
            alt="Article image"
          />
          {photographer && (
            <p className="text-[#4c4c4e] mt-1">
              Photo by{" "}
              <span className="font-bold">
                {articleData[0].yoast_head_json.schema[
                  "@graph"
                ][2].caption.slice("Photo by ".length)}
              </span>
            </p>
          )}
        </section>
        <section
          className={`my-4 ${styles.articleSection}`}
          dangerouslySetInnerHTML={{ __html: rawHTML }}
        />
        {!relatedArticles ? (
          <p>Loading...</p>
        ) : (
          <OtherArticleSection
            title="Related Articles"
            articles={relatedArticles.map((article: WPResponse) => ({
              id: article.id,
              title: article.title.rendered,
              pubDate: new Date(article.date),
              excerpt: article.yoast_head_json.og_description,
              authors: article.authors.map((author) => author.display_name),
              featured_image_url: article.featured_image_url,
              featured_image_caption:
                article.yoast_head_json.schema["@graph"][2].caption,
            }))}
            isLoading={isRelatedArticlesLoading}
          />
        )}
        {!otherArticles ? (
          <p>Loading...</p>
        ) : (
          <OtherArticleSection
            title="From Other Staffs"
            articles={otherArticles.map((article: WPResponse) => ({
              id: article.id,
              title: article.title.rendered,
              pubDate: new Date(article.date),
              excerpt: article.yoast_head_json.og_description,
              authors: article.authors.map((author) => author.display_name),
              featured_image_url: article.featured_image_url,
              featured_image_caption:
                article.yoast_head_json.schema["@graph"][2].caption,
            }))}
            isLoading={isOtherArticlesLoading}
          />
        )}
      </main>
    );
  }
}
