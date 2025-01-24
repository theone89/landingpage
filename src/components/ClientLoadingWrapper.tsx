// app/components/ClientLoadingWrapper.tsx
"use client"; // Marca este componente como "use client"

import { useEffect, useState } from "react";
import Loading from "@/components/Loading"; // Ajusta la ruta según tu estructura

export default function ClientLoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    // Verificar si la página ya está cargada
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {!isPageLoaded && <Loading />}{" "}
      {/* Mostrar el loading hasta que la página esté cargada */}
      {isPageLoaded && children}{" "}
      {/* Mostrar el contenido cuando la página esté cargada */}
    </>
  );
}
