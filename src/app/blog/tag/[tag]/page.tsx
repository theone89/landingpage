import Breadcrumb from "@/app/blog/components/Breadcrumb";
import ArticleList from "@/app/blog/components/ArticleList";
import { fetchData } from "@/lib/fetchUtils";
import { Article } from "../../types/article";

// Este es un componente asíncrono en Next.js 14
export default async function TagPage({ params }: { params: { tag: string } }) {
  // Esperamos el valor de los parámetros dinámicos
  const { tag } = await params;

  try {
    // Usamos la función de utilidad para obtener los artículos
    const articles: Article[] = await fetchData("/api/blog/articles");

    // Filtramos los artículos por la etiqueta seleccionada
    const filteredArticles = articles.filter((article) =>
      article.tags.includes(tag)
    );

    return (
      <div className="flex flex-col md:flex-row relative">
        <div className="md:w-2/3 pr-4">
          <h1 className="text-3xl font-bold mb-6 text-yellow-300 pl-8">
            Artículos sobre #{tag}
          </h1>
          <Breadcrumb />
          <ArticleList articles={filteredArticles} selectedTag={tag} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener los artículos", error);
    return <div>Error al cargar los artículos.</div>;
  }
}
