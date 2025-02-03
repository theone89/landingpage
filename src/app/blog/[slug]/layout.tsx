import { notFound } from "next/navigation";
import Breadcrumb from "@/app/blog/components/Breadcrumb";
import { supabase } from "@/lib/supabase";
import { Article } from "../types/article";

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  let title = "Artículos Recientes";
  const slug = (await params).slug;
  try {
    const { data, error } = await supabase.from("articles").select("*");

    if (error) {
      throw error;
    }

    const articles: Article[] = data || [];

    const article = articles.find((a: { slug: string }) => a.slug === slug);

    if (!article) {
      return notFound();
    }
    title = article.title;
  } catch (error) {
    console.error("Error fetching article data:", error);
    return notFound();
  }

  return (
    <section className="relative">
      <h1 className="text-3xl font-bold mb-6 text-yellow-300 pl-8">{title}</h1>
      <Breadcrumb />
      {children}
    </section>
  );
}
