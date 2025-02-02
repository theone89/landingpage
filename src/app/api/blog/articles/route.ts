// app/api/blog/articles/route.ts
import { NextResponse } from "next/server";
import { articles } from "@/app/blog/data/articles";

export async function GET() {
  return NextResponse.json(articles);
}

export async function GET_ARTICLE({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug);
  return article ? NextResponse.json(article) : NextResponse.error();
}
