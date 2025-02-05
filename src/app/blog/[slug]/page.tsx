import { notFound } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  // optionally access and extend (rather than replace) parent metadata
  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error || !article) return notFound();
  return {
    title: article.seo_meta_title,
    description: article.seo_meta_description,
    keywords: article.seo_meta_keywords,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = (await params).slug;

  try {
    // Obtener el artículo desde Supabase
    const { data: article, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", resolvedParams)
      .single();

    if (error || !article) return notFound();

    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Título y metadatos */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {article.title}
        </h1>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <p>
            {article.date} • {article.reading_time}
          </p>
        </div>

        {/* Imagen destacada */}
        <div className="relative w-full h-72 mb-6">
          <Image
            src={article.image ? article.image : "/SFC logo.png"}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Extracto */}
        <p className="text-lg text-gray-700 italic mb-4">{article.excerpt}</p>

        {/* Contenido completo renderizado desde Markdown */}
        <div className="prose prose-lg text-gray-800 leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={`prose prose-lg max-w-none text-gray-900 leading-relaxed space-y-4
    dark:prose-dark
    [&_a]:text-blue-600
    [&_a:hover]:text-blue-700
    [&_a:focus]:text-blue-700
    [&_a]:transition-colors
    dark:[&_a]:text-blue-400
    dark:[&_a:hover]:text-blue-300`}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Autor */}
        <div className="mt-10 flex items-center gap-4 border-t pt-4">
          <Image
            src={article.author_avatar}
            alt={article.author_name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="text-gray-800 text-sm font-medium">
            {article.author_name}
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("No se pudo obtener el artículo", error);
    return notFound();
  }
}
