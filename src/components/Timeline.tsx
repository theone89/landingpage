export default function Timeline() {
  const milestones = [
    { year: 2010, event: 'Fundación de la empresa' },
    { year: 2015, event: 'Expansión a mercados internacionales' },
    { year: 2018, event: 'Lanzamiento de producto estrella' },
    { year: 2020, event: 'Apertura de nuevas oficinas' },
    { year: 2023, event: 'Reconocimiento como líder del sector' },
  ]

  return (
    <section className="py-20 px-4 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestra Trayectoria</h2>
      <div className="max-w-4xl mx-auto">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-8">
            <div className="flex-none w-24 mr-4 text-right">
              <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
            </div>
            <div className="flex-grow pl-4 border-l-4 border-blue-600">
              <p className="text-lg">{milestone.event}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

