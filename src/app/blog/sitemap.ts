import { supabase } from "@/lib/supabase";
import type { MetadataRoute } from "next";
import { notFound } from "next/navigation";
import { Article } from "./types/article";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: articles, error } = await supabase.from("articles").select("*");

  if (error || !articles) return notFound();

  // Filtramos solo los artículos publicados
  const publishedArticles = articles.filter(
    (article: Article) => article.status === "published"
  );

  // Función sencilla para reemplazar el carácter "&" por "&amp;"
  const fix = (str: string) => str?.replace(/&/g, "&amp;");

  return [
    {
      url: fix(`${process.env.NEXTAUTH_URL}`),
      lastModified: fix("2021-01-01"),
      changeFrequency: "weekly" as const,
      priority: 0.5,
      images: ["https://strongfreecode.com/og-sfc.png"],
    },
    ...publishedArticles.map((article: Article) => ({
      url: fix(`${process.env.NEXTAUTH_URL}/blog/${article.slug}`),
      lastModified: fix(article.last_update),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: article.image ? [fix(article.image)] : [],
    })),
  ];
}
