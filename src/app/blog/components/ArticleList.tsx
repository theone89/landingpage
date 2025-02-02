"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Article } from "../types/article";

interface ArticleListProps {
  articles: Article[];
  selectedCategory?: string; // Nuevo filtro por categoría
  selectedTag?: string; // Filtro por etiqueta
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ArticleList({
  articles,
  selectedCategory,
  selectedTag,
}: ArticleListProps) {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  // Filtrar artículos por categoría y/o etiqueta
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory
      ? article.category === selectedCategory
      : true;
    const matchesTag = selectedTag ? article.tags.includes(selectedTag) : true;
    return matchesCategory && matchesTag;
  });

  return (
    <>
      {filteredArticles.length === 0 ? (
        <p className="text-center text-gray-500">
          No hay artículos disponibles para este filtro.
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-lg shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden cursor-pointer relative"
              onClick={() => handleClick(article.slug)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start text-gray-400 text-xs mb-2">
                  <span>{article.date}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag}`}
                      className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      #{tag}
                    </Link>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-sm text-blue-500 font-medium hover:text-blue-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Leer más →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
