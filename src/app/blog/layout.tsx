import { fetchData } from "@/lib/fetchUtils";
import Aside from "./components/Aside";
import { Article } from "./types/article";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articles: Article[] = await fetchData("/api/blog/articles");
  return (
    <section className="relative py-24 flex flex-wrap">
      {/* Artículos en la parte principal */}
      <div className="md:w-2/3 pr-4">{children}</div>

      {/* Aside en la parte lateral izquierda */}
      <aside className="md:w-1/3 pl-4 mt-6 md:mt-0">
        <Aside articles={articles} />
      </aside>
    </section>
  );
}
