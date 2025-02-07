"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Article } from "../types/article";

interface ArticleListProps {
  articles: Article[];
  selectedCategory?: string;
  selectedTag?: string;
  selectedsub_category?: string; // Agregado para filtrar por subcategoría
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function useOutsideAlerter(
  ref: React.RefObject<HTMLDivElement | null>,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

interface ArticleCardProps {
  article: Article;
  onClick: (slug: string) => void;
}

function ArticleCard({ article, onClick }: ArticleCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(tooltipRef, () => setShowTooltip(false));

  const extraTags = article.tags.slice(2);

  return (
    <motion.div
      key={article.id}
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer relative flex flex-col overflow-hidden"
      onClick={() => onClick(article.slug)}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
          <span>{article.date}</span>
          <span>{article.reading_time}</span>
        </div>
        <h2 className="text-md font-semibold text-gray-900 mb-2 hover:text-yellow-500 transition-colors duration-300">
          {article.title}
        </h2>
        <div className="flex flex-wrap gap-3 mb-4 relative">
          {article.tags.slice(0, 2).map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag}`}
              className="text-xs bg-gray-100 px-1 py-1 rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              #{tag}
            </Link>
          ))}
          {extraTags.length > 0 && (
            <span
              className="text-xs bg-blue-100 px-3 py-1 rounded-full text-gray-500 cursor-pointer relative"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip((prev) => !prev);
              }}
            >
              +{extraTags.length}
              {showTooltip && (
                <div
                  ref={tooltipRef}
                  className="absolute z-10 bottom-full left-0 mb-2 w-max bg-zaffre-900 border border-gray-200 rounded shadow-lg p-2"
                >
                  {extraTags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/blog/tag/${tag}`}
                      className="block text-xs text-blue-600 hover:text-blue-800 transition-colors py-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-600 mb-4 flex-1">{article.excerpt}</p>
        <div className="flex justify-between items-start text-center"></div>
        <Link
          href={`/blog/${article.slug}`}
          className="text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Leer más →
        </Link>
      </div>
    </motion.div>
  );
}

export default function ArticleList({
  articles,
  selectedCategory,
  selectedTag,
  selectedsub_category, // Agregado para filtrar por subcategoría
}: ArticleListProps) {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory
      ? article.category === selectedCategory
      : true;
    const matchesTag = selectedTag ? article.tags.includes(selectedTag) : true;
    const matchessub_category = selectedsub_category
      ? article.sub_category === selectedsub_category
      : true;
    return matchesCategory && matchesTag && matchessub_category;
  });

  return (
    <>
      {filteredArticles.length === 0 ? (
        <p className="text-center text-gray-400">
          No hay artículos disponibles para este filtro.
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4 md:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={handleClick}
            />
          ))}
        </motion.div>
      )}
    </>
  );
}
