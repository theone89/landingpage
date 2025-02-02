/* eslint-disable @typescript-eslint/no-explicit-any */
// app/blog/[slug]/layout.tsx
import Breadcrumb from "@/app/blog/components/Breadcrumb";
import Sidebar from "@/app/blog/components/Sidebar";

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  let title = "Artículos Recientes";

  try {
    // Es recomendable usar cache: "no-store" para datos que deben estar siempre actualizados
    const res = await fetch("http://127.0.0.1:3000/api/blog/articles", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error al obtener los artículos");
    }
    const articles = await res.json();
    const article = articles.find((art: any) => art.slug === params.slug);
    if (article) {
      title = article.title;
    }
  } catch (error) {
    console.error("Error fetching article data:", error);
  }

  return (
    <section className="relative ">
      <h1 className="text-3xl font-bold mb-6 text-yellow-300 pl-8">{title}</h1>
      <Breadcrumb />
      {children}
      <Sidebar />
    </section>
  );
}
