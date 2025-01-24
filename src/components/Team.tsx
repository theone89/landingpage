import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "Franklin Campos Alvarez",
      position: "CEO",
      image: "/assets/images/franklin.jpg",
    },
    {
      name: "Yunior Tellez Valladares",
      position: "CTO",
      image: "/assets/images/yunior.jpg",
    },
    {
      name: "Liset Labrada Fonseca",
      position: "CFO",
      //image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <section id="equipo" className="py-20 px-4 relative">
      <h2 className="text-4xl md:text-6xl font-bold mb-4  text-yellow-300 text-center ">
        Nuestro Equipo
      </h2>
      <p className="text-xl md:text-2xl mb-8 text-center text-white">
        Conoce a los líderes que hacen posible nuestros logros.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.image || "/assets/images/Strong_Free CODE(black).jpg"}
              alt={member.name}
              width={200}
              height={200}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover    border-4 border-blue-100"
            />
            <h3 className="text-xl font-semibold mb-2 text-grape-900">
              {member.name}
            </h3>
            <p className="text-gray-200">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
