import { Article } from "@/lib/types";
import { bylinesToP } from "@/lib/utils";
import Image from "next/image";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="w-full font-sans h-[500px] relative">
      <section></section>
      <Image
        src={article.featured_image_url ?? "https://picsum.photos/350/200"}
        width={350}
        height={200}
        alt="Article image"
        className="w-full my-4 h-[200px] object-cover"
      />
      <section>
        <h2 className="font-tiempos-headline text-2xl font-bold mb-5">
          {article.title}
        </h2>
        <p
          className="uppercase text-sm my-4"
          dangerouslySetInnerHTML={{ __html: bylinesToP(article.authors) }}
        />
        <p className="text-sm text-[#4c4c4e]">{article.excerpt ?? ""}</p>
      </section>
      <p className="text-[#4c4c4e] mt-6 uppercase font-bold absolute bottom-0">
        February 26, 2026, 7:00 PM
      </p>
    </article>
  );
}
