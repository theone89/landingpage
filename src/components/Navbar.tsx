'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = ['Inicio', 'Servicios', 'Equipo', 'Sucursales', 'Noticias', 'Contacto']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            [Nombre de la Empresa]
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className={`${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}>
                {item}
              </Link>
            ))}
          </div>
          <button className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="block py-2 px-4 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

