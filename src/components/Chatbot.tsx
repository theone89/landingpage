// components/Chatbot.jsx
"use client"; // Marca el componente como del lado del cliente
import { useState } from "react";
import { useChat } from "ai/react";
import Image from "next/image";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el chat está abierto
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón para abrir/cerrar el chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Contenedor del chat */}
      {isOpen && (
        <div className="mt-4 w-96 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {/* Encabezado del chat */}
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Chat de Soporte</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Contenedor de mensajes */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 p-3 rounded-lg  ${
                  message.role === "user"
                    ? "bg-blue-100 text-blue-900 ml-auto max-w-xs"
                    : "bg-gray-400 text-gray-900 mr-auto max-w-xs"
                }`}
              >
                {message.role === "user" ? (
                  "User: "
                ) : (
                  <Image
                    alt="sfc_imagen"
                    width={25}
                    height={25}
                    quality={100}
                    src={"/assets/images/SFC StrongFreeCode (light).jpg"}
                    className="rounded-full"
                  />
                )}
                {message.content}
              </div>
            ))}
          </div>

          {/* Formulario de entrada */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 p-4 border-t border-gray-200"
          >
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
