// components/Chatbot.tsx
"use client"; // Marca el componente como del lado del cliente
import { useState, useEffect } from "react"; // Importamos useEffect
import { useChat } from "ai/react";
import Image from "next/image";
import { User, X } from "lucide-react"; // Importamos el ícono de cerrar (X)
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useSession, signIn } from "next-auth/react"; // Importamos useSession y signIn

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el chat está abierto
  const [isShaking, setIsShaking] = useState(false); // Estado para controlar la animación de agitación
  const [showInvitation, setShowInvitation] = useState(true); // Estado para controlar la visibilidad del globo de chat
  const { messages, input, handleInputChange, handleSubmit, setMessages } =
    useChat({
      api: "/api/chat",
    });
  const { data: session } = useSession(); // Obtenemos la sesión del usuario

  // Función para generar un ID único
  const generateUniqueId = () => {
    return `message-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // Efecto para cargar la preferencia del usuario desde localStorage
  useEffect(() => {
    const isInvitationHidden = localStorage.getItem("isInvitationHidden");
    if (isInvitationHidden === "true") {
      setShowInvitation(false); // Ocultar el globo de chat si el usuario lo cerró antes
    }
  }, []);

  // Efecto para manejar mensajes de bienvenida o login
  useEffect(() => {
    if (isOpen) {
      if (session) {
        // Si el usuario está logueado, muestra un mensaje de bienvenida
        const welcomeMessage = {
          id: generateUniqueId(), // Usar un ID único
          role: "system",
          content: `¡Bienvenido de nuevo, ${
            session.user?.name || "usuario"
          }! ¿En qué puedo ayudarte hoy?`,
        };
        setMessages((prevMessages) => [welcomeMessage, ...prevMessages]);
      } else {
        // Si el usuario no está logueado, invítalo a loguearse
        const loginMessage = {
          id: generateUniqueId(), // Usar un ID único
          role: "system",
          content: "¡Hola! Por favor, inicia sesión para continuar.",
        };
        setMessages((prevMessages) => [loginMessage, ...prevMessages]);
      }
    }
  }, [isOpen, session, setMessages]);

  // Limpiar mensajes de sistema al cerrar el chat
  useEffect(() => {
    if (!isOpen) {
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.role !== "system")
      );
    }
  }, [isOpen, setMessages]);

  // Función para ocultar el globo de chat y guardar la preferencia en localStorage
  const handleCloseInvitation = () => {
    setShowInvitation(false);
    localStorage.setItem("isInvitationHidden", "true"); // Guardar la preferencia del usuario
  };

  // Animaciones
  const chatButtonVariants = {
    initial: { scale: 1, rotate: 0 }, // Estado inicial
    hover: { scale: 1.1 }, // Animación al pasar el cursor
    tap: { scale: 0.9 }, // Animación al hacer clic
    shake: {
      rotate: [0, -10, 10, -10, 10, 0], // Animación de agitación
      transition: { duration: 0.5 }, // Duración de la animación
    },
  };

  // Efecto para agitar el botón cada cierto tiempo
  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setIsShaking(true); // Activar la animación de agitación
      setTimeout(() => setIsShaking(false), 500); // Desactivar después de 500ms
    }, 10000); // Agitar cada 10 segundos

    return () => clearInterval(shakeInterval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const chatContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const invitationVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed bottom-16 right-6 z-50">
      {/* Botón para abrir/cerrar el chat */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-16 right-6 bg-zaffre-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        variants={chatButtonVariants}
        initial="initial"
        animate={isShaking ? "shake" : "initial"} // Activar la animación de agitación
        whileHover="hover"
        whileTap="tap"
        style={{
          zIndex: 1000, // Asegura que el botón esté siempre encima
        }}
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
      </motion.button>

      {/* Mensaje de invitación cuando el chat está cerrado */}
      {!isOpen && showInvitation && (
        <motion.div
          className="fixed bottom-36 right-6 bg-zaffre-700 text-white p-3 rounded-lg shadow-lg"
          variants={invitationVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          style={{
            position: "fixed",
            zIndex: 999, // Asegura que el globo esté detrás del botón
          }}
        >
          {/* Botón de cerrar (X) */}
          <button
            onClick={handleCloseInvitation}
            className="absolute top-1 right-1 text-white hover:text-gray-200"
          >
            <X className="h-4 w-4" /> {/* Ícono de cerrar */}
          </button>

          {/* Piquito del globo de chat */}
          <div
            className="absolute -bottom-2 right-2 w-4 h-4 bg-zaffre-700 transform rotate-45"
            style={{
              clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>

          {/* Contenido del globo de chat */}
          <TypeAnimation
            sequence={[
              "¿En qué podemos ayudarte?",
              10000,
              "Assistente online 24/7",
              10000,
            ]}
            className="text-xs"
            speed={25}
            repeat={Infinity}
          />
        </motion.div>
      )}

      {/* Contenedor del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-0 mt-4 right-6 w-96 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            variants={chatContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{
              zIndex: 1000, // Asegura que el chat esté encima del botón
              height: "calc(100vh - 8rem)", // Ajusta el alto restando la altura de la barra de navegación
              top: "4rem", // Ajusta la posición para respetar la barra de navegación
            }}
          >
            {/* Encabezado del chat */}
            <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
              <Image
                alt="sfc_imagen"
                width={30}
                height={30}
                quality={100}
                src={"/SFC-logo.svg"}
                className="rounded-full"
              />
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
            <div
              className="h-[calc(100%-8rem)] overflow-y-auto p-4 bg-gray-50"
              style={{
                backgroundImage: `url('/assets/images/sfcnew/sfc_new.png')`,
                backgroundSize: "cover", // Ajusta el tamaño para que cubra todo el contenedor
                backgroundPosition: "center", // Centra la imagen
                backgroundRepeat: "no-repeat", // Evita que se repita
              }}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex flex-col ${
                    message.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {/* Ícono */}
                  <div className="flex items-center justify-center mb-1">
                    {message.role === "user" ? (
                      <User className="h-6 w-6 border border-blue-500 text-blue-500 rounded-full" /> // Ícono del usuario
                    ) : (
                      <Image
                        alt="sfc_imagen"
                        width={25}
                        height={25}
                        quality={100}
                        src={"/SFC-logo.svg"}
                        className="rounded-full"
                      />
                    )}
                  </div>

                  {/* Texto del mensaje */}
                  <div
                    className={`p-3 rounded-lg max-w-xs ${
                      message.role === "user"
                        ? "bg-blue-100 text-blue-900"
                        : "bg-gray-400 text-gray-900"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {/* Mostrar botón de login si el usuario no está logueado */}
              {!session && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => signIn()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Iniciar sesión
                  </button>
                </div>
              )}
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
                disabled={!session} // Deshabilitar el input si no hay sesión
              />

              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={!session} // Deshabilitar el botón si no hay sesión
              >
                Enviar
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
