import Image from 'next/image'

export default function News() {
  const news = [
    { title: 'Lanzamiento de nuevo producto', date: '2023-06-15', image: '/placeholder.svg?height=200&width=300' },
    { title: 'Expansión a nuevos mercados', date: '2023-05-20', image: '/placeholder.svg?height=200&width=300' },
    { title: 'Reconocimiento internacional', date: '2023-04-10', image: '/placeholder.svg?height=200&width=300' },
  ]

  return (
    <section id="noticias" className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Últimas Noticias</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {news.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

