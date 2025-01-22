// app/api/telegram/route.js
import { NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN; // Usa una variable de entorno para el token
const bot = new TelegramBot(token, { polling: true });

// Manejar mensajes recibidos
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Responder al mensaje
    bot.sendMessage(chatId, `Recibí: ${text}`);
});

// Exportar una función GET o POST para que Next.js no marque la ruta como estática
export async function GET() {
    return NextResponse.json({ message: 'Bot de Telegram configurado' });
}

export async function POST() {
    return NextResponse.json({ message: 'Bot de Telegram configurado' });
}