"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, Menu, Phone, User, UserPlus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import SfcLogo from "./SfcLogo";
import UserPanel from "./UserPanel";

type NavItemType =
  | { name: string; path: string }
  | { name: string; section: string };

const NavItems: NavItemType[] = [
  { name: "Inicio", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Servicios", section: "servicios" },
  { name: "Equipo", section: "equipo" },
  { name: "Sucursales", section: "sucursales" },
  { name: "Noticias", section: "noticias" },
  { name: "Contacto", section: "contacto" },
];

const NavLogo = ({ pathname }: { pathname: string }) => {
  const logoColor = [
    "/",
    "/contacto-patrocinio",
    "/login",
    "/register",
    "/recuperar-contrasena",
  ].includes(pathname)
    ? "yellow"
    : "yellow";

  return (
    <Link
      href="/"
      className="text-2xl font-bold flex items-center gap-1 transition-colors duration-300"
    >
      <SfcLogo color={logoColor} className="w-8 h-8" />
      <span className="text-yellow-300 hover:text-zaffre-900">
        StrongFreeCode
      </span>
    </Link>
  );
};

const NavItem = ({
  item,
  pathname,
  closeMenu,
  className,
}: {
  item: NavItemType;
  pathname: string;
  closeMenu?: () => void;
  className?: string;
}) => {
  const linkColor = [
    "/",
    "/contacto-patrocinio",
    "/login",
    "/register",
    "/recuperar-contrasena",
  ].includes(pathname)
    ? "text-yellow-300 hover:text-zaffre-900"
    : "text-yellow-300 hover:text-zaffre-800";

  const handleSectionClick = (section: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${section}`;
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu?.();
  };

  const href = "path" in item ? item.path : `/#${item.section}`;

  return (
    <Link
      href={href}
      onClick={(e) => {
        if ("section" in item) {
          e.preventDefault();
          handleSectionClick(item.section);
        }
        closeMenu?.();
      }}
      className={`${linkColor} hover:border-b-2 hover:border-zaffre-900 transition-all duration-300 ${
        className ?? ""
      }`}
    >
      {item.name}
    </Link>
  );
};

const UserAuthDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-yellow-300 hover:text-zaffre-900 transition-colors duration-300 flex items-center"
      >
        <User className="ml-2" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 bg-white shadow-lg rounded-lg w-48 z-10"
          >
            <ul className="space-y-2">
              <li>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center p-2 hover:bg-grape-600 hover:text-white rounded-t-lg"
                >
                  <LogIn className="mr-2" size={18} /> Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center p-2 hover:bg-grape-600 hover:text-white"
                >
                  <UserPlus className="mr-2" size={18} /> Registrarse
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/+522296110304"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center p-2 hover:bg-grape-600 hover:text-white rounded-b-lg"
                >
                  <Phone className="mr-2" size={18} /> Contáctenos
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopNav = ({ pathname }: { pathname: string }) => {
  const { data: session } = useSession();

  return (
    <div className="hidden md:flex items-center space-x-4">
      {NavItems.map((item) => (
        <NavItem key={item.name} item={item} pathname={pathname} />
      ))}
      {session ? <UserPanel /> : <UserAuthDropdown />}
    </div>
  );
};

const MobileNav = ({
  pathname,
  isOpen,
  closeMenu,
}: {
  pathname: string;
  isOpen: boolean;
  closeMenu: () => void;
}) => {
  const { data: session } = useSession();

  return (
    <div className="md:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-opacity-90 bg-zaffre-100 rounded-b-lg backdrop-blur-md shadow-md flex flex-col"
          >
            {NavItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                pathname={pathname}
                closeMenu={closeMenu}
                className="block py-2 px-4 hover:bg-zaffre-900 hover:text-white"
              />
            ))}
            {session && (
              <div className="py-2 px-4 text-center text-yellow-500">
                {session.user?.name}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 backdrop-blur-md shadow-sm ${
        isScrolled ? "bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLogo pathname={pathname} />

          <DesktopNav pathname={pathname} />

          <div className="flex items-center gap-4 md:hidden">
            {session ? <UserPanel /> : <UserAuthDropdown />}
            <button
              className="text-grape-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <MobileNav
          pathname={pathname}
          isOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
}
