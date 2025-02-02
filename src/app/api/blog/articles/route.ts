// app/api/blog/articles/[slug]/route.ts
import { NextResponse } from "next/server";
import { articles } from "@/app/blog/data/articles";

// Esta es la ruta para obtener todos los artículos
export async function GET() {
  return NextResponse.json(articles);
}

// Esta es la ruta para obtener un artículo específico usando el slug
export async function GET_ARTICLE({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug);
  return article ? NextResponse.json(article) : NextResponse.error();
}
