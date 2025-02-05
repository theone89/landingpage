import { supabase } from "@/lib/supabase";
import type { MetadataRoute } from "next";
import { notFound } from "next/navigation";
import { Article } from "./blog/types/article";

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
      url: "https://strongfreecode.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: ["https://strongfreecode.com/og-sfc.png"],
    },
    {
      url: "https://strongfreecode.com/politica-privacidad",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://strongfreecode.com/terminos-condiciones",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://strongfreecode.com/contacto-patrocinio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://strongfreecode.com/login",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
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
