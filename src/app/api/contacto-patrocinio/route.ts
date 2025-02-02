/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json(
    { message: "Mensaje enviado con éxito" },
    { status: 200 }
  );
}
