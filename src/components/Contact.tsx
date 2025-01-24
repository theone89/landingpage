"use client";

import { useState } from "react";
//import {} from "framer-motion";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <section
      id="contacto"
      className="bg-grape-100 py-20 px-4 w-full relative text-yellow-300"
    >
      <h2 className="text-4xl md:text-6xl text-center font-bold mb-4 text-yellow-300">
        Contáctanos
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-grape-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-grape-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md text-grape-100"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600  px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
