import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fetchGithubMembers, TeamMember } from "@/lib/github";
import { Loader2 } from "lucide-react"; // Importar el ícono de carga

export default function Team() {
  const [team] = useState<TeamMember[]>([
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
      image: "/assets/images/sfcnew/sfc_new.png", // Placeholder si no hay imagen
    },
  ]);

  const [githubMembers, setGithubMembers] = useState<TeamMember[]>([]);
  const [visibleCount, setVisibleCount] = useState(3); // Número de miembros visibles inicialmente
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const buttonRef = useRef<HTMLButtonElement>(null); // Referencia para el botón

  useEffect(() => {
    const loadGithubMembers = async () => {
      const members = await fetchGithubMembers();
      setGithubMembers(members);
    };

    loadGithubMembers();
  }, []);

  const handleToggleMembers = async () => {
    setIsLoading(true); // Iniciar el estado de carga

    // Simular una espera (puedes eliminar esto si no es necesario)
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (visibleCount < team.length + githubMembers.length) {
      setVisibleCount((prevCount) => prevCount + 3); // Mostrar más
    } else {
      setVisibleCount(3); // Regresar al estado inicial
      buttonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      }); // Mover la vista al botón
    }

    setIsLoading(false); // Terminar el estado de carga
  };

  const visibleMembers = [
    ...team,
    ...githubMembers.slice(0, visibleCount - team.length),
  ];

  return (
    <section id="equipo" className="py-20 px-4 relative">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300 text-center">
        Nuestro Equipo
      </h2>
      <p className="text-xl md:text-2xl mb-8 text-center text-white">
        Conoce a los líderes que hacen posible nuestros logros.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {visibleMembers.map((member, index) => (
          <div
            key={index}
            className="text-center shadow-black p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
          >
            <Image
              src={member.image || "/assets/images/sfcnew/sfc_new.png"}
              alt={member.name}
              width={200}
              height={200}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-300"
            />
            <h3 className="text-xl font-semibold mb-2 text-yellow-200">
              <a
                href="mailto:contacto@strongfreecode.com"
                className="hover:underline"
              >
                {member.name}
              </a>
            </h3>
            <p className="text-gray-400">{member.position}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {" "}
        {/* Ajustar alineación con flexbox */}
        <button
          ref={buttonRef} // Asignar referencia al botón
          onClick={handleToggleMembers}
          className={`flex items-center justify-center gap-2 bg-yellow-300 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition-colors ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={isLoading} // Desactivar el botón mientras carga
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" /> Cargando...
            </>
          ) : visibleCount < team.length + githubMembers.length ? (
            "Cargar más"
          ) : (
            "Mostrar menos"
          )}
        </button>
      </div>
    </section>
  );
}
