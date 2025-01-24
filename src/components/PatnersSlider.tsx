"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Partner } from "@/data/patnersData";
import { motion } from "framer-motion";

interface PartnersSectionProps {
  partners: Partner[]; // Array de partners
}

const PartnersSection = ({ partners }: PartnersSectionProps) => {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Oculta las flechas en dispositivos móviles
        },
      },
    ],
  };

  // Animación para los elementos del carrusel
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Función para manejar el clic en el botón de patrocinio
  const handleSponsorClick = () => {
    // Aquí puedes redirigir a un formulario, enviar un correo, etc.
    window.location.href = "/contacto-patrocinio"; // Cambia la URL según tu necesidad
  };

  return (
    <div className="border-t border-gray-700 pt-8 my-8 mx-12 relative">
      <h3 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300 text-center">
        Nuestros Asociados
      </h3>
      <Slider {...sliderSettings}>
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="text-center px-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-transparent p-4 rounded-lg flex flex-col items-center justify-center">
              {/* Usar el componente Image de Next.js para el logotipo */}
              <motion.div
                className="relative w-24 h-24 mb-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  quality={100}
                  fill // Hace que la imagen ocupe todo el espacio del contenedor
                  className="rounded-full object-cover" // Ajusta la imagen dentro del contenedor
                />
              </motion.div>
              {/* Mostrar el nombre del partner como un enlace a su sitio web */}
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-yellow-300 transition-colors duration-300"
              >
                {partner.name}
              </a>
              {/* Mostrar el slogan del partner */}
              <p className="text-gray-200 text-sm mt-2">{partner.slogan}</p>
            </div>
          </motion.div>
        ))}
      </Slider>

      {/* Llamada a la acción para patrocinar */}
      <div className="text-center mt-12">
        <motion.button
          onClick={handleSponsorClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300"
        >
          ¡Conviértete en un Patrocinador!
        </motion.button>
        <p className="text-gray-300 mt-4 text-sm">
          Únete a nuestra comunidad de asociados y lleva tu marca al siguiente
          nivel.
        </p>
      </div>
    </div>
  );
};

export default PartnersSection;
