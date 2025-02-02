import { NextResponse } from "next/server";
import { articles } from "@/app/blog/data/articles";

export async function GET() {
  return NextResponse.json(articles);
}
