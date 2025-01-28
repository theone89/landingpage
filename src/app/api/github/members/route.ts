// app/api/github/members/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Define el token en las variables de entorno
  const ORG_NAME = "StrongFreeCode"; // Reemplaza con el nombre de tu organización

  const response = await fetch(
    `https://api.github.com/orgs/${ORG_NAME}/members`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Error al recuperar los miembros de la organización" },
      { status: response.status }
    );
  }

  const members = await response.json();
  return NextResponse.json(members);
}
