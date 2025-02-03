import Breadcrumb from "@/app/blog/components/Breadcrumb";
import ArticleList from "@/app/blog/components/ArticleList";
import { fetchData } from "@/lib/fetchUtils";
import { Article } from "@/app/blog/types/article";

export default async function SubCategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const resolvedParamsCategory = await params;

  if (!resolvedParamsCategory?.subcategory) {
    console.error("Error: params.subcategory es undefined o vacío.");
    return <div>Error: No se encontró la subcategoría.</div>;
  }

  const subcategory = decodeURIComponent(
    resolvedParamsCategory.subcategory.toLowerCase().trim()
  );

  try {
    // Obtiene los artículos antes de renderizar el componente
    const articles: Article[] = await fetchData("/api/blog/articles");

    const filteredArticles = articles.filter(
      (article) => article.subCategory?.toLowerCase().trim() === subcategory
    );

    return (
      <div className="flex flex-col md:flex-row relative">
        <div className="">
          <h1 className="text-3xl font-bold mb-6 text-yellow-300 pl-8">
            Artículos en la subcategoría {subcategory}
          </h1>
          <Breadcrumb />
          <ArticleList
            articles={filteredArticles}
            selectedSubCategory={subcategory}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener los artículos", error);
    return <div>Error al cargar los artículos.</div>;
  }
}
