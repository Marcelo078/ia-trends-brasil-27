import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles, getAllCategories } from "@/data/articles";
import { useEffect } from "react";

const Categorias = () => {
  const categories = getAllCategories();

  useEffect(() => {
    document.title = "Categorias | IA Trends Brasil";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Categorias de <span className="text-brasil-blue">Conteúdo</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore nossos artigos organizados pelos principais temas de IA no Brasil
          </p>
        </div>

        {categories.map((cat) => {
          const items = articles.filter((a) => a.category === cat);
          return (
            <section key={cat} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2">
                <span className="text-brasil-blue">{cat}</span>{" "}
                <span className="text-sm text-muted-foreground font-normal">
                  ({items.length} artigo{items.length > 1 ? "s" : ""})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((a) => (
                  <ArticleCard
                    key={a.id}
                    id={a.id}
                    title={a.title}
                    description={a.description}
                    readTime={a.readTime}
                    category={a.category}
                    publishDate={a.publishDate}
                    featured={a.featured}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Categorias;
