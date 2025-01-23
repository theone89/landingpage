import ServiceCards from "./ServiceCards";

export default function Services() {
  return (
    <section
      id="servicios"
      className="px-4 relative mt-24 pt-16" // Añade pt-16 (64px) para compensar la barra de navegación
      aria-labelledby="services-heading"
    >
      <div className="relative z-10">
        <h2
          id="services-heading"
          className="text-4xl md:text-6xl text-center font-bold mb-4 text-yellow-300"
        >
          Nuestros Servicios
        </h2>
        <p className="text-xl text-center md:text-2xl mb-8 text-grape-900">
          Ofrecemos una gama completa de servicios empresariales adaptados a tus
          necesidades.
        </p>
        <ServiceCards />
      </div>
    </section>
  );
}
