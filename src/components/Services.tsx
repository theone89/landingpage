//import InteractiveBackground from "./InteractiveBackground";

import ServiceCards from "./ServiceCards";

export default function Services() {
  const services = [
    { name: "Consultoría", icon: "📊" },
    { name: "Desarrollo de Software", icon: "💻" },
    { name: "Marketing Digital", icon: "📱" },
    { name: "Gestión de Proyectos", icon: "📅" },
  ];

  return (
    <section id="servicios" className="px-4 relative my-0">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl text-center font-bold mb-4 text-yellow-300">
          Nuestros Servicios
        </h2>
        <p className="text-xl text-center md:text-2xl mb-8 text-grape-900">
          Ofrecemos una gama completa de servicios empresariales adaptados a tus
          necesidades.
        </p>
        <ServiceCards />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
