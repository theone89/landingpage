"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactoPatrocinioPage = () => {
  // Estado para manejar los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Estado para manejar el envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular el envío del formulario (aquí puedes integrar tu backend o servicio de correo)
    try {
      // Ejemplo de envío a un endpoint de API
      const response = await fetch("/api/contacto-patrocinio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" }); // Limpiar el formulario
      } else {
        alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar el formulario.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-bold text-yellow-300 mb-6 text-center">
          ¡Conviértete en un Patrocinador!
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Completa el formulario y nos pondremos en contacto contigo para hablar
          sobre cómo podemos trabajar juntos.
        </p>

        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              ¡Gracias por tu interés!
            </h3>
            <p className="text-gray-300">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo muy
              pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-300 focus:border-yellow-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-300 focus:border-yellow-300"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-300"
              >
                Nombre de la Empresa
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-300 focus:border-yellow-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-300 focus:border-yellow-300"
                placeholder="Cuéntanos más sobre tu interés en patrocinarnos..."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactoPatrocinioPage;
