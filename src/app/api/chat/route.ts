// app/api/chat/route.js
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextRequest, NextResponse } from "next/server";
import systemPrompt from "./data/systemPrompt.json";
// System Prompt (el mismo que usaste para el bot de Telegram)
const systemPromptString = JSON.stringify(systemPrompt);

// Manejar solicitudes POST (para el chatbot web)
export async function POST(request: NextRequest) {
  const { messages } = await request.json(); // Obtener los mensajes del cuerpo de la solicitud

  try {
    // Generar una respuesta en flujo usando OpenAI
    const result = await streamText({
      model: openai("gpt-4-turbo"), // Usar el modelo gpt-4-turbo
      system: systemPromptString, // System prompt
      messages, // Mensajes anteriores del chat
    });

    // Devolver la respuesta en flujo
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Hubo un error al procesar tu mensaje." },
      { status: 500 }
    );
  }
}
