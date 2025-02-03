import Breadcrumb from "@/app/blog/components/Breadcrumb";
import ArticleList from "@/app/blog/components/ArticleList";
import { fetchData } from "@/lib/fetchUtils";
import { Article } from "@/app/blog/types/article";

// Define los tipos de parámetros esperados
interface PageParams {
  category: string;
  subcategory: string;
}

// Define las props del componente usando los tipos de Next.js
interface PageProps {
  params: PageParams;
}

export default async function SubCategoryPage({ params }: PageProps) {
  const { subcategory } = params;

  const normalizedSubcategory = decodeURIComponent(subcategory)
    .toLowerCase()
    .trim()
    .replace(/-/g, " ");

  try {
    const articles: Article[] = await fetchData("/api/blog/articles");

    const filteredArticles = articles.filter(
      (article) =>
        article.subCategory?.toLowerCase().trim() === normalizedSubcategory
    );

    return (
      <div className="flex flex-col md:flex-row relative">
        <div className="">
          <h1 className="text-3xl font-bold mb-6 text-yellow-300 pl-8">
            Artículos en {normalizedSubcategory}
          </h1>
          <Breadcrumb />
          {filteredArticles.length > 0 ? (
            <ArticleList articles={filteredArticles} />
          ) : (
            <div className="text-red-400">No se encontraron artículos</div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener los artículos", error);
    return <div className="text-red-500">Error al cargar los artículos</div>;
  }
}
