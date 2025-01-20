import Link from "next/link";
import MessageHeader from "./MenssageHeader";

export default function Header() {
  return (
    <header
      id="inicio"
      className=" text-white py-32 px-4  text-center mt-16 z-[10] relative h-screen"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Bienvenidos a{" "}
        <span className="text-yellow-300 animate-pulse transition-shadow duration-5000  ">
          StrongFreeCode
        </span>
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Solucion IT al alcance de tus manos
      </p>
      <div className="mb-24 h-24  text-xs md:text-md">
        <MessageHeader />
      </div>
      <Link
        href="#contacto"
        className="bg-white  text-grape-300 px-6 py-3 rounded-full text-lg font-semibold hover:bg-grape-100 hover:text-grape-900 transition duration-300"
      >
        ¡Contáctanos Ahora!
      </Link>
    </header>
  );
}
