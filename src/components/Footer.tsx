'use client'

import { useState } from 'react'
import Link from 'next/link'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para suscribir al newsletter
    console.log('Email suscrito:', email)
    setEmail('')
  }

  const partners = [
    "Empresa Asociada 1",
    "Empresa Asociada 2",
    "Empresa Asociada 3",
    "Empresa Asociada 4",
    "Empresa Asociada 5",
  ]

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sobre Nosotros</h3>
            <p className="mb-4">[Nombre de la Empresa] es líder en soluciones empresariales, comprometida con la innovación y la excelencia en el servicio al cliente.</p>
            <p>Dirección: Calle Ejemplo, 123, 28001 Madrid, España</p>
            <p>Teléfono: +34 91 123 45 67</p>
            <p>Email: info@ejemplo.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/politica-privacidad" className="hover:text-blue-300">Política de Privacidad</Link></li>
              <li><Link href="/terminos-condiciones" className="hover:text-blue-300">Términos y Condiciones</Link></li>
              <li><Link href="/politica-cookies" className="hover:text-blue-300">Política de Cookies</Link></li>
              <li><Link href="/mapa-sitio" className="hover:text-blue-300">Mapa del Sitio</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Suscríbete a nuestro Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Nuestros Asociados</h3>
          <Slider {...sliderSettings}>
            {partners.map((partner, index) => (
              <div key={index} className="text-center px-2">
                <div className="bg-gray-700 p-4 rounded-lg">
                  {partner}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} [Nombre de la Empresa]. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

