// app/api/telegram/route.js
import { NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';
//const TELEGRAM_BOT_TOKEN = '6637251130:AAFB-ZykZe1JmPCgK9HaO_joZMqgJbKz_0A'
const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN; // Usa una variable de entorno para el token
const bot = new TelegramBot(token, { polling: true });

// Manejar mensajes recibidos
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    console.log('Mensaje recibido:', text);
    // Responder al mensaje
    bot.sendMessage(chatId, `Recibí al server: ${text}`);
});


/* // Manejar el comando /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '¡Hola! Soy tu bot de Telegram.');
});

// Manejar el comando /help
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Puedes usar los comandos /start y /help.');
});

// Manejar mensajes normales
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (!text.startsWith('/')) {
        bot.sendMessage(chatId, `Dijiste: ${text}`);
    }
}); */


// Exportar una función GET o POST para que Next.js no marque la ruta como estática
export async function GET() {
    return NextResponse.json({ message: 'Bot de Telegram configurado' });
}

export async function POST() {
    return NextResponse.json({ message: 'Bot de Telegram configurado' });
}