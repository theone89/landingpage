import { NextResponse } from "next/server";
import { articles } from "@/app/blog/data/articles";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(article);
}
