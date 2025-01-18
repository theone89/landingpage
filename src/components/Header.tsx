import Link from "next/link";

export default function Header() {
  return (
    <header
      id="inicio"
      className="bg-blue-600 text-white py-20 px-4 text-center mt-16"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Bienvenidos a StrongFreeCode
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Solucion IT al alcance de tus manos
      </p>
      <Link
        href="#contacto"
        className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
      >
        ¡Contáctanos Ahora!
      </Link>
    </header>
  );
}
