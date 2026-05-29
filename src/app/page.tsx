import Image from "next/image";

export default function Home() {
  const BASE_URL = "https://theguidon.com/wp-json/wp/v2/posts";
  const latest_articles = fetch(`${BASE_URL}?per_page=4`).then((res) =>
    res.json(),
  );
  return <main className="flex flexcol items-stretch px-1/5 py-10"></main>;
}
