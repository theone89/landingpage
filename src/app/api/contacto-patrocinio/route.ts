import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Aquí puedes procesar los datos (enviar un correo, guardar en una base de datos, etc.)
  console.log("Datos recibidos:", data);

  // Simular una respuesta exitosa
  return NextResponse.json(
    { message: "Mensaje enviado con éxito" },
    { status: 200 }
  );
}
