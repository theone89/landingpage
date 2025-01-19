//import InteractiveBackground from "./InteractiveBackground";

export default function Services() {
  const services = [
    { name: "Consultoría", icon: "📊" },
    { name: "Desarrollo de Software", icon: "💻" },
    { name: "Marketing Digital", icon: "📱" },
    { name: "Gestión de Proyectos", icon: "📅" },
  ];

  return (
    <section id="servicios" className="px-4 relative my-32">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-grape-900">
          Nuestros Servicios
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-grape-900">
          Ofrecemos una gama completa de servicios empresariales adaptados a tus
          necesidades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
