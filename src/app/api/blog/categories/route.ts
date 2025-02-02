// app/api/blog/categories/route.ts
import { NextResponse } from "next/server";
import { categories } from "@/app/blog/data/categories";

export async function GET() {
  return NextResponse.json(categories);
}

export async function GET_CATEGORY({ params }: { params: { slug: string } }) {
  const category = categories.find((category) => category.slug === params.slug);
  return category ? NextResponse.json(category) : NextResponse.error();
}
