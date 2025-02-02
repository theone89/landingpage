import Breadcrumb from "@/app/blog/components/Breadcrumb";
import ArticleList from "@/app/blog/components/ArticleList";
import { fetchData } from "@/lib/fetchUtils";
import { Article } from "@/app/blog/types/article";

export default async function SubCategoryPage({
  params,
}: {
  params?: { subcategory?: string };
}) {
  if (!params || !params.subcategory) {
    console.error("Error: params.subcategory es undefined o vacío.");
    return <div>Error: No se encontró la subcategoría.</div>;
  }

  const subcategory = params.subcategory.toLowerCase().trim();

  try {
    // Obtener artículos desde el servidor
    const articles: Article[] = await fetchData("/api/blog/articles");

    console.log("Subcategorías disponibles:", [
      ...new Set(articles.map((a) => a.subCategory)), // Subcategorías únicas
    ]);
    console.log("Buscando subcategoría:", subcategory);

    // Filtrar artículos por subcategoría
    const filteredArticles = articles.filter(
      (article) => article.subCategory?.toLowerCase().trim() === subcategory
    );

    console.log("Artículos filtrados:", filteredArticles);

    if (filteredArticles.length === 0) {
      return (
        <div>
          <h2>
            No hay artículos disponibles en la subcategoría {subcategory}.
          </h2>
        </div>
      );
    }

    return (
      <div className="flex flex-col md:flex-row relative">
        <div className=" pr-4">
          <h1 className="text-3xl font-bold mb-6 text-yellow-300 pl-8">
            Artículos en la subcategoría {subcategory}
          </h1>
          <Breadcrumb />
          <ArticleList
            articles={filteredArticles}
            selectedSubCategory={subcategory} // Pasar subcategoría como parámetro
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener los artículos", error);
    return <div>Error al cargar los artículos.</div>;
  }
}
