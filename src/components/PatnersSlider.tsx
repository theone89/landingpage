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

  return (
    <div className="border-t border-gray-700 pt-8 my-8 relative">
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
            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center">
              {/* Usar el componente Image de Next.js para el logotipo */}
              <motion.div
                className="relative w-24 h-24 mb-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill // Hace que la imagen ocupe todo el espacio del contenedor
                  className="object-contain" // Ajusta la imagen dentro del contenedor
                />
              </motion.div>
              {/* Mostrar el nombre del partner */}
              <p className="text-white">{partner.name}</p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
