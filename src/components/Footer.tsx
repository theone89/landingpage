"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email suscrito:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white py-12 z-[10] relative overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sobre Nosotros</h3>
            <p className="mb-4">
              StrongFreeCode ofrece soluciones IT innovadoras y personalizadas,
              diseñadas para impulsar el crecimiento de tu negocio. Con un
              enfoque en la excelencia y el servicio al cliente, estamos
              comprometidos a ser tu aliado tecnológico.
            </p>
            <p>Dirección: Calle sel, 123, 28001 Madrid, España</p>
            <p>Teléfono: +34 91 123 45 67</p>
            <p>Email: info@strongfreecode.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/politica-privacidad"
                  className="hover:text-blue-300"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-condiciones"
                  className="hover:text-blue-300"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="hover:text-blue-300">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/mapa-sitio" className="hover:text-blue-300">
                  Mapa del Sitio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Suscríbete a nuestro Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} StrongFreeCode. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
