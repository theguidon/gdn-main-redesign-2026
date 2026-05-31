import Image from "next/image";
import { BASE_URL } from "@/lib/constants";
import {
  WPResponseToArticle,
  bylinesToP,
  formatDate,
  chipFromCategory,
} from "@/lib/utils";
import TitleLine from "@/components/title-line";
import { Article, WPResponse } from "@/lib/types";

function ArticleRow({ article }: { article: Article }) {
  return (
    <section className="w-full grid grid-cols-2 gap-8">
      <Image
        className="my-4 object-cover w-full"
        src={article.featured_image_url}
        alt={article.title}
        width={435}
        height={243}
      />
      <section>
        <section>
          {article.categories.map((catID: number) => (
            <div key={catID}>{chipFromCategory(catID)}</div>
          ))}
        </section>
        <h1 className={"font-tiempos-headline font-bold text-3xl"}>
          {article.title}
        </h1>
        <p
          className="p-0 m-0 uppercase"
          dangerouslySetInnerHTML={{
            __html: bylinesToP(article.authors),
          }}
        />
        <p>{article.excerpt || ""}</p>
      </section>
    </section>
  );
}

export default async function Home() {
  const fetchData = await fetch(`${BASE_URL}/posts?per_page=4`).then((res) =>
    res.json(),
  );
  const latestArticles: Article[] = (fetchData as WPResponse[]).map(
    WPResponseToArticle,
  );

  const featuredArticle = latestArticles[0];

  return (
    <main className="flex flex-col items-stretch px-[5vw] py-10 min-h-screen">
      <section className="flex flex-row items-stretch gap-0 min-h-[500px] bg-(--off-white)">
        <Image
          src={featuredArticle.featured_image_url}
          alt={featuredArticle.title}
          width={800}
          height={700}
          className={"object-cover grow w-[50%]"}
        />
        <section className={"w-2/5 px-10 py-8"}>
          <section className="flex flex-row gap-2 mt-10 mb-4">
            {featuredArticle.categories.map((catID: number) => (
              <div key={catID}>{chipFromCategory(catID)}</div>
            ))}
          </section>
          <h1 className={"font-tiempos-headline text-4xl font-bold"}>
            {featuredArticle.title}
          </h1>
          <section className={"my-3 text-lg"}>
            <p
              className="p-0 m-0 uppercase"
              dangerouslySetInnerHTML={{
                __html: bylinesToP(featuredArticle.authors),
              }}
            />
            <p
              className="p-0 m-0 text-[#4c4c4e] uppercase"
              dangerouslySetInnerHTML={{
                __html: formatDate(new Date(featuredArticle.pubDate)),
              }}
            />
          </section>
          <p className="text-lg">{featuredArticle.excerpt || ""}</p>
        </section>
      </section>
      <section className={"my-8 flex flex-row gap-8"}>
        <section className={"flex flex-col grow py-4 gap-4"}>
          <TitleLine title={"Latest Stories"} />
          {latestArticles.slice(1).map((article: Article) => (
            <ArticleRow article={article} key={article.id} />
          ))}
        </section>
        <section className={"w-3/5 py-4 px-4 bg-light-gray"}>
          <TitleLine title={"Top Stories"} />
        </section>
      </section>
    </main>
  );
}
