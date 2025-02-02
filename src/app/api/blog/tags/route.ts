// app/api/blog/tags/route.ts
import { NextResponse } from "next/server";
import { articles } from "@/app/blog/data/articles";

export async function GET() {
  // Extraer los tags únicos de todos los artículos
  const tags = Array.from(new Set(articles.flatMap((article) => article.tags)));
  return NextResponse.json(tags);
}
