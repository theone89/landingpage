"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  CommandLineIcon,
  ArrowsPointingInIcon,
  ChartBarIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  GlobeAltIcon,
  NewspaperIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  ChartPieIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    category: "Desarrollo y Diseño Web",
    items: [
      {
        name: "Desarrollo de Sitios Web Personalizados",
        icon: CodeBracketIcon,
        description:
          "Creación de sitios web adaptados a las necesidades específicas del cliente.",
      },
      {
        name: "Diseño Web Responsivo",
        icon: DevicePhoneMobileIcon,
        description:
          "Garantizar que los sitios funcionen perfectamente en dispositivos móviles, tablets y desktops.",
      },
      {
        name: "Desarrollo de E-commerce",
        icon: ShoppingCartIcon,
        description:
          "Implementación de tiendas online utilizando plataformas como Shopify, WooCommerce o soluciones personalizadas.",
      },
      {
        name: "Desarrollo Frontend y Backend",
        icon: CommandLineIcon,
        description:
          "Creación de interfaces atractivas (Frontend) y sistemas robustos para la gestión de datos (Backend).",
      },
      {
        name: "Integración de APIs y Servicios de Terceros",
        icon: ArrowsPointingInIcon,
        description:
          "Conexión con sistemas de pago, CRM, servicios de envío, etc.",
      },
    ],
  },
  {
    category: "Optimización y Mantenimiento",
    items: [
      {
        name: "Optimización de Velocidad y Rendimiento",
        icon: ChartBarIcon,
        description:
          "Mejorar la carga de páginas y optimizar el código para SEO y rendimiento.",
      },
      {
        name: "Mantenimiento y Actualización de Sitios Web",
        icon: ArrowPathIcon,
        description:
          "Corrección de errores, actualizaciones de seguridad y mejoras periódicas.",
      },
      {
        name: "Migración de Sitios Web",
        icon: CloudArrowUpIcon,
        description:
          "Traslado de sitios entre servidores o de tecnologías obsoletas a más modernas.",
      },
    ],
  },
  {
    category: "Soluciones Empresariales",
    items: [
      {
        name: "Desarrollo de Aplicaciones Web Progresivas (PWAs)",
        icon: GlobeAltIcon,
        description: "Apps web rápidas y con funcionalidad offline.",
      },
      {
        name: "Sistemas de Gestión de Contenidos (CMS)",
        icon: NewspaperIcon,
        description:
          "Implementación de plataformas como WordPress, Joomla o CMS personalizados.",
      },
      {
        name: "Desarrollo de Portales Corporativos",
        icon: BuildingOfficeIcon,
        description:
          "Soluciones para empresas que necesitan sistemas internos como intranets o dashboards.",
      },
    ],
  },
  {
    category: "Marketing y Optimización Digital",
    items: [
      {
        name: "SEO Técnico",
        icon: MagnifyingGlassIcon,
        description:
          "Mejora de la estructura y el código para aumentar la visibilidad en buscadores.",
      },
      {
        name: "Implementación de Herramientas de Analítica Web",
        icon: ChartPieIcon,
        description:
          "Configuración de Google Analytics, Tag Manager y otras herramientas de seguimiento.",
      },
    ],
  },
  {
    category: "Innovación Tecnológica",
    items: [
      {
        name: "Aplicaciones con IA y Machine Learning",
        icon: CpuChipIcon,
        description:
          "Desarrollo de soluciones con aprendizaje automático, como chatbots o sistemas de recomendación.",
      },
      {
        name: "Desarrollo con Blockchain",
        icon: CubeTransparentIcon,
        description:
          "Integración de tecnología blockchain para sistemas seguros y transparentes.",
      },
      {
        name: "Implementación de Microservicios",
        icon: ServerStackIcon,
        description: "Estructura modular para sistemas escalables y flexibles.",
      },
      {
        name: "Automatización de Procesos",
        icon: Cog6ToothIcon,
        description:
          "Implementación de herramientas para optimizar tareas repetitivas.",
      },
    ],
  },
  {
    category: "Soporte Técnico y Formación",
    items: [
      {
        name: "Soporte Técnico Continuo",
        icon: CommandLineIcon,
        description:
          "Ayuda a los clientes con problemas técnicos relacionados con sus sitios o aplicaciones.",
      },
      {
        name: "Capacitación y Formación",
        icon: AcademicCapIcon,
        description:
          "Enseñanza de tecnologías web para empresas o equipos internos.",
      },
    ],
  },
];

interface ServiceCardProps {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  icon: Icon,
  description,
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden group border-b-2 border-black"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
    >
      <Icon className="h-12 w-12 text-blue-500 mb-4 group-hover:opacity-0 transition-opacity duration-300" />
      <h3 className="text-lg font-semibold text-gray-800 group-hover:opacity-0 transition-opacity duration-300">
        {name}
      </h3>
      <div className="absolute inset-0 p-6 bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center">
        <Icon className="" />
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const ServiceCards = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Desarrollo y Diseño Web"
  );

  useEffect(() => {
    const categories = [
      "Todos",
      ...services.map((category) => category.category),
    ];
    let index = categories.indexOf(selectedCategory);

    const interval = setInterval(() => {
      index = (index + 1) % categories.length;
      setSelectedCategory(categories[index]);
    }, 10000);

    return () => clearInterval(interval);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "Todos"
              ? "bg-gradient-to-r border-b-2  from-blue-500 via-purple-500 to-pink-500 text-white "
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedCategory("Todos")}
        >
          Todos
        </button>
        {services.map((category) => (
          <button
            key={category.category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category.category
                ? "bg-gradient-to-r border-b-2  from-blue-500 via-purple-500 to-pink-500 text-white "
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedCategory(category.category)}
          >
            {category.category}
          </button>
        ))}
      </div>
      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {services.map(
            (category) =>
              (selectedCategory === "Todos" ||
                selectedCategory === category.category) &&
              category.items.map((service) => (
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  icon={service.icon}
                  description={service.description}
                />
              ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceCards;
