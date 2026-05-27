import Image from "next/image";

export default function ArticleCard() {
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
          AEWU-Ateneo tensions deepen due to longstanding labor disputes
        </h2>
        <p className="uppercase text-sm my-4">
          By <span className="font-bold text-[#1c4480]">Roi Manimtim</span> and{" "}
          <span className="font-bold text-[#1c4480]">Andie Manlusoc</span>
        </p>
        <p className="text-sm text-[#4c4c4e]">
          WITH THE labor dispute between the Ateneo Employees and Workers’ Union
          (AEWU) and the University administration still unresolved, the
          Department of Labor and Employment (DOLE) assumed jurisdiction over
          the case on December 1, 2025.
        </p>
        <p className="text-[#4c4c4e] mt-6 uppercase font-bold">
          February 26, 2026, 7:00 PM
        </p>
      </section>
    </article>
  );
}
