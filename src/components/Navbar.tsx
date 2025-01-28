"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import SfcLogo from "./SfcLogo";
import UserPanel from "./UserPanel";
import { useSession } from "next-auth/react";

type NavItem =
  | { name: string; path: string }
  | { name: string; section: string };

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession(); // Obtener la sesión del usuario

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", section: "servicios" },
    { name: "Equipo", section: "equipo" },
    { name: "Sucursales", section: "sucursales" },
    { name: "Noticias", section: "noticias" },
    { name: "Contacto", section: "contacto" },
  ];

  const linkColor =
    pathname === "/" ||
    pathname === "/contacto-patrocinio" ||
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/recuperar-contrasena"
      ? "text-yellow-300 hover:text-zaffre-900 "
      : "text-black hover:text-grape-500 ";

  const getLinkHref = (item: NavItem): string => {
    if ("path" in item) {
      return item.path;
    } else if ("section" in item) {
      return pathname === "/" ? `#${item.section}` : `/#${item.section}`;
    }
    return "#";
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
            className={`text-2xl font-bold ${linkColor} flex justify-between gap-1 transition-colors duration-300`}
          >
            <SfcLogo
              color={
                pathname === "/" ||
                pathname === "/contacto-patrocinio" ||
                pathname === "/login" ||
                pathname === "/register" ||
                pathname === "/recuperar-contrasena"
                  ? "yellow"
                  : "black"
              }
              className={`w-8 h-8`}
            />{" "}
            StrongFreeCode
          </Link>

          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getLinkHref(item)}
                className={`${linkColor} hover:text-zaffre-900 hover:border-b-2 hover:border-zaffre-900 transition-all duration-300`}
              >
                {item.name}
              </Link>
            ))}
            {/* Mostrar UserPanel si está autenticado, o botón de login si no lo está */}
            {session ? (
              <div className="ml-4">
                <UserPanel />
              </div>
            ) : (
              <Link
                href={"/login"}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Iniciar Sesión
              </Link>
            )}
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
            {/* Mostrar UserPanel si está autenticado, o botón de login si no lo está */}
            {session ? (
              <div className="py-2 px-4">
                <UserPanel />
              </div>
            ) : (
              <Link
                href={"/"}
                className="w-full text-left py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700  hover:text-white transition-colors duration-300"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
