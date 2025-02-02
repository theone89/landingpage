import React from "react";
import ArticleList from "./components/ArticleList";
import { Article } from "./types/article";
import { fetchData } from "../../lib/fetchUtils"; // Importa la función de utilidad
import Breadcrumb from "./components/Breadcrumb";

// El componente ahora es asincrónico
export default async function Blog() {
  try {
    // Usamos la función de utilidad para obtener los artículos
    const articles: Article[] = await fetchData("/api/blog/articles");

    return (
      <div className="flex flex-col md:flex-row relative ">
        <div className="md:w-2/3 pr-4">
          <h1 className="text-3xl font-bold mb-6 text-yellow-300 pl-8">
            Artículos Recientes
          </h1>
          <Breadcrumb />
          <ArticleList articles={articles} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener los artículos", error);
    return <div>Error al cargar los artículos.</div>;
  }
}
