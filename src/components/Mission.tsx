export default function Mission() {
  return (
    <section className="bg-gray-200 py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestra Misión, Visión y Objetivos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Misión</h3>
            <p>
              Proporcionar soluciones innovadoras que impulsen el éxito de
              nuestros clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Visión</h3>
            <p>
              Ser el referente líder en soluciones empresariales a nivel global.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Objetivos</h3>
            <ul className="list-disc list-inside">
              <li>Innovación</li>
              <li>Calidad</li>
              <li>Satisfacción del Cliente</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
