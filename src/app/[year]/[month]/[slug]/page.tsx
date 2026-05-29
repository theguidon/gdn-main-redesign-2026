import Image from "next/image";
import TitleLine from "@/components/title-line";
import { BASE_URL } from "@/lib/constants";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import styles from "@/styles/article.module.css";
import { Suspense } from "react";
import {
  bylinesToP,
  chipFromCategory,
  formatDate,
  printTwoDigit,
} from "@/lib/utils";
import { redirect } from "next/navigation";
import OtherArticleSection from "@/components/article/other-article-section";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ year: string; month: string; slug: string }>;
}) {
  const { year, month, slug } = await params;
  const articleUrl = `${BASE_URL}/posts?slug=${slug}`;
  const articleData = await fetch(articleUrl).then((res) => res.json());
  const relatedUrl = `${BASE_URL}/posts?categories=${articleData ? articleData[0].categories[0] : "0"}&exclude=${articleData[0].id}&per_page=3`;
  const othersUrl = `${BASE_URL}/posts?categories_exclude=${articleData ? articleData[0].categories.join(",") : "0"}&per_page=3`;
  const rawHTML = !articleData
    ? `<p>Your raw HTML here</p>`
    : articleData[0].content.rendered;

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
                    (author: { display_name: string; [ak: string]: unknown }) =>
                      author.display_name,
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
              {articleData[0].yoast_head_json.schema["@graph"][2].caption.slice(
                "Photo by ".length,
              )}
            </span>
          </p>
        )}
      </section>
      <section
        className={`my-4 ${styles.articleSection}`}
        dangerouslySetInnerHTML={{ __html: rawHTML }}
      />
      <TitleLine title="Related Articles" />
      <Suspense fallback={<p>Loading...</p>}>
        <OtherArticleSection link={relatedUrl} />
      </Suspense>
      <TitleLine title="From Other Staffs" />
      <Suspense fallback={<p>Loading...</p>}>
        <OtherArticleSection link={othersUrl} />
      </Suspense>
    </main>
  );
}
