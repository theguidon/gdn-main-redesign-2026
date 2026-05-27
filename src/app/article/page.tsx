"use client";

import Image from "next/image";
import useSWR from "swr";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import styles from "../styles/article.module.css";
import ArticleCard from "@/components/article-card";
import { Spinner } from "@/components/ui/spinner";

function OtherArticleSection() {
  return (
    <section className="mb-8">
      <div className="flex flex-row items-center">
        <h3 className="font-chivo mr-2 font-bold text-[#101212]">
          From Other Staffs
        </h3>
        <div className="h-0 border-black border-b grow" />
      </div>
      <section className="flex w-full overflow-x-scroll columns-[30vw] gap-4">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </section>
    </section>
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface WPResponse {
  title: { rendered: string };
  authors: { display_name: string; [author_k: string]: unknown }[];
  featured_image_url: string;
  [res_k: string]: unknown;
}

export default function ArticlePage() {
  const testUrl = "https://theguidon.com/wp-json/wp/v2/posts/51818";
  const { data, error, isLoading } = useSWR(testUrl, fetcher);
  const rawHTML =
    !data || error ? `<p>Your raw HTML here</p>` : data.content.rendered;

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  } else if (error) {
    return <p>We failed to retrieve your article.</p>;
  } else {
    return (
      <main className="flex flex-col flex-nowrap items-stretch py-8 px-[20%]">
        <section></section>
        <section className="pb-4 pt-6 border-y border-black flex flex-col">
          <h1 className="font-tiempos-headline text-5xl font-bold text-[#101212]">
            {data.title.rendered}
          </h1>
          <section className="flex justify-between mt-3">
            <section>
              <p className="p-0 m-0">
                By{" "}
                <a href="" className="font-bold text-[#1c4480]">
                  {data.authors[0].display_name}
                </a>{" "}
              </p>
              <p className="p-0 m-0 text-[#4c4c4e]">
                Published <span className="font-bold">February 26, 2026</span>{" "}
                at <span className="font-bold">7:00 PM</span>
              </p>
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
            src={data.featured_image_url}
            width={800}
            height={450}
            className="w-full"
            alt="Article image"
          />
          <p className="text-[#4c4c4e] mt-1">
            Photo by <span className="font-bold">RJ Hernandez</span>
          </p>
        </section>
        <section
          className={`my-4 ${styles.articleSection}`}
          dangerouslySetInnerHTML={{ __html: rawHTML }}
        />
        <OtherArticleSection />
        <OtherArticleSection />
      </main>
    );
  }
}
