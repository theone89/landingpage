import React from "react";
import { Article } from "../types/article";
import Link from "next/link";

interface AsideProps {
  articles: Article[];
}

const Aside: React.FC<AsideProps> = ({ articles }) => {
  // Extraer las etiquetas únicas
  const tagsSet = new Set<string>();
  articles.forEach((article) => {
    if (article.tags && Array.isArray(article.tags)) {
      article.tags.forEach((tag) => tagsSet.add(tag));
    }
  });
  const uniqueTags = Array.from(tagsSet);

  // Extraer categorías y subcategorías
  const categoriesMap: Record<string, Set<string>> = {};
  articles.forEach((article) => {
    if (article.category) {
      if (!categoriesMap[article.category]) {
        categoriesMap[article.category] = new Set();
      }
      if (article.subCategory) {
        categoriesMap[article.category].add(article.subCategory);
      }
    }
  });
  // Convertir el mapa en un arreglo para renderizar
  const categories = Object.entries(categoriesMap).map(
    ([category, subCategoriesSet]) => ({
      category,
      subCategories: Array.from(subCategoriesSet),
    })
  );

  // Lista de enlaces de interés
  const links = [
    { title: "Documentación Oficial", url: "https://reactjs.org" },
    { title: "Tutorial de Next.js", url: "https://nextjs.org/learn" },
    { title: "Guía de Tailwind CSS", url: "https://tailwindcss.com/docs" },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      {/* Sección de Etiquetas */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-yellow-300">
          Etiquetas
        </h2>
        {uniqueTags.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {uniqueTags.map((tag) => (
              <li key={tag}>
                <Link
                  href={`/blog/tag/${encodeURIComponent(tag)}`}
                  className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm hover:underline"
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300">No hay etiquetas disponibles.</p>
        )}
      </div>

      {/* Sección de Categorías y Subcategorías */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-yellow-300">
          Categorías
        </h2>
        {categories.length > 0 ? (
          <ul className="space-y-4">
            {categories.map(({ category, subCategories }) => (
              <li key={category}>
                <h3 className="text-xl font-medium text-yellow-300">
                  <Link
                    href={`/blog/category/${encodeURIComponent(category)}`}
                    className="hover:underline"
                  >
                    {category}
                  </Link>
                </h3>
                {subCategories.length > 0 && (
                  <ul className="ml-4 mt-1 flex flex-wrap gap-2">
                    {subCategories.map((subCategory) => (
                      <li key={subCategory}>
                        <Link
                          href={`/blog/category/${encodeURIComponent(
                            category
                          )}/${encodeURIComponent(subCategory)}`}
                          className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs hover:underline"
                        >
                          {subCategory}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300">No hay categorías disponibles.</p>
        )}
      </div>

      {/* Sección de Enlaces de Interés */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-yellow-300">
          Enlaces de Interés
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {links.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
