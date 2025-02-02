import Breadcrumb from "@/app/blog/components/Breadcrumb";
import ArticleList from "@/app/blog/components/ArticleList";
import { fetchData } from "@/lib/fetchUtils";
import { Article } from "../../types/article";

export default async function CategoryPage({
  params,
}: {
  params?: { category?: string };
}) {
  if (!params || !params.category) {
    console.error("Error: params.category es undefined");
    return <div>Error: No se encontró la categoría.</div>;
  }

  const category = params.category.toLowerCase().trim();

  try {
    const articles: Article[] = await fetchData("/api/blog/articles");

    const filteredArticles = articles.filter(
      (article) => article.category?.toLowerCase().trim() === category
    );

    return (
      <div className="flex flex-col md:flex-row relative">
        <div className=" pr-4">
          <h1 className="text-3xl font-bold mb-6 text-yellow-300 pl-8">
            Artículos en la categoría {category}
          </h1>
          <Breadcrumb />
          <ArticleList
            articles={filteredArticles}
            selectedCategory={category}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener los artículos", error);
    return <div>Error al cargar los artículos.</div>;
  }
}
