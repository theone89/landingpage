import { Metadata } from "next";
import Aside from "./components/Aside";
import { Article } from "./types/article";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: {
    template: "%s | Blog | StrongFreeCode",
    default: "Blog | StrongFreeCode",
  },
};
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, error } = await supabase.from("articles").select("*");

  if (error) {
    throw error;
  }

  const articles: Article[] = data || [];

  return (
    <section className="relative py-24 flex flex-wrap">
      <div className="md:w-2/3 ">{children}</div>
      {/* Aside en la parte lateral izquierda */}
      <aside className="md:w-1/3 w-full pl-4 mt-6 md:mt-0 hidden md:block">
        <Aside articles={articles} />
      </aside>
    </section>
  );
}
