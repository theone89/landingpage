import { notFound } from "next/navigation";
import Image from "next/image";
import { fetchData } from "@/lib/fetchUtils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  try {
    const articles = await fetchData("/api/blog/articles");

    const article = articles.find((a: { slug: string }) => a.slug === slug);

    if (!article) return notFound();

    return (
      <div className="max-w-3xl ml-8 p-6 relative bg-white my-24 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-500 text-sm">
          {article.date} • {article.readingTime}
        </p>
        <div className="relative w-full h-64 my-4">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover  rounded-lg"
          />
        </div>
        <p className="text-gray-700">{article.excerpt}</p>
        <div className="mt-6">
          {article.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("No se pudo obtener el artículo", error);
    return notFound();
  }
}
