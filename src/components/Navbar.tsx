"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importar usePathname
import { Menu, X } from "lucide-react";

// Definir el tipo para los elementos del menú
type NavItem =
  | { name: string; path: string } // Enlace de página
  | { name: string; section: string }; // Enlace de sección

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Obtener la ruta actual

  // Manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alternar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Cerrar el menú móvil al hacer clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Elementos del menú
  const navItems: NavItem[] = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", section: "servicios" },
    { name: "Equipo", section: "equipo" },
    { name: "Sucursales", section: "sucursales" },
    { name: "Noticias", section: "noticias" },
    { name: "Contacto", section: "contacto" },
  ];

  // Determinar el color de los enlaces
  const linkColor =
    pathname === "/" || pathname === "/contacto-patrocinio"
      ? "text-yellow-300"
      : "text-black";

  // Función para generar enlaces dinámicos
  const getLinkHref = (item: NavItem): string => {
    if ("path" in item) {
      return item.path; // Enlace de página normal
    } else if ("section" in item) {
      return pathname === "/" ? `#${item.section}` : `/#${item.section}`; // Enlace de sección
    }
    return "#"; // Enlace por defecto
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 backdrop-blur-md shadow-sm ${
        isScrolled ? "bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold ${linkColor} hover:text-zaffre-900 transition-colors duration-300`}
          >
            StrongFreeCode
          </Link>

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getLinkHref(item)}
                className={`${linkColor} hover:text-zaffre-900 hover:border-b-2 hover:border-zaffre-900 transition-all duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botón del menú móvil */}
          <button
            className="md:hidden text-grape-900 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-opacity-90 backdrop-blur-md shadow-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getLinkHref(item)}
                className={`block py-2 px-4 ${linkColor} hover:bg-zaffre-900 hover:text-white transition-colors duration-300`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
