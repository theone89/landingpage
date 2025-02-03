import React from "react";
import ArticleList from "./components/ArticleList";
import { Article } from "./types/article";
import { fetchData } from "../../lib/fetchUtils";
import Breadcrumb from "./components/Breadcrumb";

export default async function Blog() {
  try {
    const articles: Article[] = await fetchData("/api/blog/articles");

    return (
      <div className="">
        <div className="">
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
