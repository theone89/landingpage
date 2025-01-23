// app/api/telegram/route.js
import { NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { z } from 'zod';

// Configurar el bot de Telegram
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Esquema para validar el mensaje del usuario
const userMessageSchema = z.object({
    text: z.string().min(1, 'El mensaje no puede estar vacío'),
});

// System Prompt
const systemPrompt = `
Rol del Asistente Virtual de StrongFreeCode
El Asistente Virtual de StrongFreeCode está diseñado para proporcionar asistencia exclusiva en temas relacionados con los servicios y productos de StrongFreeCode. El asistente debe responder únicamente a consultas relacionadas con estos temas y ofrecer una experiencia precisa, útil y centrada en el usuario.

Funciones Específicas del Asistente
- Soporte Técnico: Proporcionar asistencia en la resolución de problemas técnicos específicos relacionados con los productos y servicios de StrongFreeCode.
- Información de Productos: Proporcionar detalles sobre las características, funcionalidades y beneficios de los productos y servicios de StrongFreeCode.
- Consultas Generales: Responder preguntas frecuentes relacionadas con los servicios de StrongFreeCode.
- Sugerencias y Feedback: Recibir y documentar las opiniones y sugerencias de los usuarios para la mejora continua de los servicios y productos.

Detección de Interés del Usuario
- Si el usuario muestra interés en un servicio, el asistente deberá:
- Proporcionar los contactos de la compañía.
- Enviar el enlace de contacto de la web.

Informar al usuario que será transferido a un operador del departamento comercial.
Directrices de Respuesta
- Foco Exclusivo: El asistente debe responder únicamente a consultas relacionadas con StrongFreeCode.
- Claridad y Precisión: Las respuestas deben ser claras, precisas y relevantes.
- Empatía y Profesionalismo: Mantener un tono amigable y profesional en todas las interacciones y pude responder con emoticones.
- Actualización Constante: Asegurarse de que la información proporcionada esté siempre actualizada.

Ejemplo de Inicio de Interacción
¡Bienvenido a StrongFreeCode!

Hola, soy el Asistente Virtual de StrongFreeCode. Estoy aquí para ayudarte con todo lo relacionado con nuestra plataforma. ¿Cómo puedo ayudarte hoy?
`;

// Lista de servicios de StrongFreeCode
const services = [
    {
        category: "Desarrollo y Diseño Web",
        items: [
            {
                name: "Desarrollo de Sitios Web Personalizados",
                description: "Creación de sitios web adaptados a las necesidades específicas del cliente.",
            },
            {
                name: "Diseño Web Responsivo",
                description: "Garantizar que los sitios funcionen perfectamente en dispositivos móviles, tablets y desktops.",
            },
            {
                name: "Desarrollo de E-commerce",
                description: "Implementación de tiendas online utilizando plataformas como Shopify, WooCommerce o soluciones personalizadas.",
            },
            {
                name: "Desarrollo Frontend y Backend",
                description: "Creación de interfaces atractivas (Frontend) y sistemas robustos para la gestión de datos (Backend).",
            },
            {
                name: "Integración de APIs y Servicios de Terceros",
                description: "Conexión con sistemas de pago, CRM, servicios de envío, etc.",
            },
        ],
    },
    {
        category: "Optimización y Mantenimiento",
        items: [
            {
                name: "Optimización de Velocidad y Rendimiento",
                description: "Mejorar la carga de páginas y optimizar el código para SEO y rendimiento.",
            },
            {
                name: "Mantenimiento y Actualización de Sitios Web",
                description: "Corrección de errores, actualizaciones de seguridad y mejoras periódicas.",
            },
            {
                name: "Migración de Sitios Web",
                description: "Traslado de sitios entre servidores o de tecnologías obsoletas a más modernas.",
            },
        ],
    },
    {
        category: "Soluciones Empresariales",
        items: [
            {
                name: "Desarrollo de Aplicaciones Web Progresivas (PWAs)",
                description: "Apps web rápidas y con funcionalidad offline.",
            },
            {
                name: "Sistemas de Gestión de Contenidos (CMS)",
                description: "Implementación de plataformas como WordPress, Joomla o CMS personalizados.",
            },
            {
                name: "Desarrollo de Portales Corporativos",
                description: "Soluciones para empresas que necesitan sistemas internos como intranets o dashboards.",
            },
        ],
    },
    {
        category: "Marketing y Optimización Digital",
        items: [
            {
                name: "SEO Técnico",
                description: "Mejora de la estructura y el código para aumentar la visibilidad en buscadores.",
            },
            {
                name: "Implementación de Herramientas de Analítica Web",
                description: "Configuración de Google Analytics, Tag Manager y otras herramientas de seguimiento.",
            },
        ],
    },
    {
        category: "Innovación Tecnológica",
        items: [
            {
                name: "Aplicaciones con IA y Machine Learning",
                description: "Desarrollo de soluciones con aprendizaje automático, como chatbots o sistemas de recomendación.",
            },
            {
                name: "Desarrollo con Blockchain",
                description: "Integración de tecnología blockchain para sistemas seguros y transparentes.",
            },
            {
                name: "Implementación de Microservicios",
                description: "Estructura modular para sistemas escalables y flexibles.",
            },
            {
                name: "Automatización de Procesos",
                description: "Implementación de herramientas para optimizar tareas repetitivas.",
            },
        ],
    },
    {
        category: "Soporte Técnico y Formación",
        items: [
            {
                name: "Soporte Técnico Continuo",
                description: "Ayuda a los clientes con problemas técnicos relacionados con sus sitios o aplicaciones.",
            },
            {
                name: "Capacitación y Formación",
                description: "Enseñanza de tecnologías web para empresas o equipos internos.",
            },
        ],
    },
];

// Función para generar una respuesta usando OpenAI
async function generateOpenAIResponse(prompt) {
    const { text } = await generateText({
        model: openai('gpt-4o-mini'), // Usar el modelo gpt-3.5-turbo
        messages: [
            { role: 'system', content: systemPrompt }, // System prompt
            { role: 'user', content: prompt }, // Mensaje del usuario
        ],
    });

    return text;
}

// Manejar mensajes recibidos
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    try {
        // Validar el mensaje del usuario
        const { text: userMessage } = userMessageSchema.parse({ text });

        // Si el usuario pregunta por los servicios, responder con la lista de servicios
        if (userMessage.toLowerCase().includes("servicios")) {
            const servicesList = services
                .map(
                    (category) =>
                        `**${category.category}**:\n${category.items
                            .map((item) => `- ${item.name}: ${item.description}`)
                            .join('\n')}`
                )
                .join('\n\n');
            bot.sendMessage(chatId, `Estos son nuestros servicios:\n\n${servicesList}`);
            return;
        }

        // Generar una respuesta usando OpenAI
        const response = await generateOpenAIResponse(userMessage);

        // Enviar la respuesta al usuario en Telegram
        bot.sendMessage(chatId, response);
    } catch (error) {
        console.error('Error:', error);
        bot.sendMessage(chatId, 'Hubo un error al procesar tu mensaje. Inténtalo de nuevo.');
    }
});

// Manejar solicitudes POST (para webhooks)
export async function POST(request) {
    const body = await request.json();
    bot.processUpdate(body); // Procesar la actualización recibida
    return NextResponse.json({ message: 'Webhook recibido' });
}

// Manejar solicitudes GET (opcional)
export async function GET() {
    return NextResponse.json({ message: 'Bot de Telegram con IA configurado' });
}