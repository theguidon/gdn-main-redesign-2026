import { bylinesToP } from "@/lib/utils";
import Image from "next/image";

export default function ArticleCard({
  title,
  authors,
  excerpt,
}: {
  title: string;
  authors: string[];
  excerpt: string;
}) {
  return (
    <article className="w-full font-sans">
      <section></section>
      <Image
        src={"https://picsum.photos/350/200"}
        width={350}
        height={200}
        alt="Article image"
        className="w-full my-4"
      />
      <section>
        <h2 className="font-tiempos-headline text-2xl font-bold mb-5">
          {title}
        </h2>
        <p
          className="uppercase text-sm my-4"
          dangerouslySetInnerHTML={{ __html: bylinesToP(authors) }}
        />
        <p className="text-sm text-[#4c4c4e]">{excerpt}</p>
        <p className="text-[#4c4c4e] mt-6 uppercase font-bold">
          February 26, 2026, 7:00 PM
        </p>
      </section>
    </article>
  );
}
