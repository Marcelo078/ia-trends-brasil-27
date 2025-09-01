import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { getArticleById } from "@/data/articles";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-8">O artigo que você procura não existe ou foi removido.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-brasil-blue hover:text-brasil-green">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-brasil-blue hover:text-brasil-green transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar aos artigos
            </Link>
          </div>

          {/* Article Meta */}
          <div className="mb-8">
            <Badge className="mb-4 bg-brasil-blue">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {article.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} de leitura
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {article.keywords.slice(0, 3).join(", ")}
              </div>
            </div>
          </div>

          {/* Top CTA */}
          <div className="bg-gradient-to-r from-brasil-orange to-brasil-yellow p-6 rounded-lg mb-8 text-center">
            <p className="text-white font-semibold mb-4">
              💡 Antes de começar: Conheça as melhores ferramentas de IA para seus projetos
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton 
                href="https://lovable.dev/?via=marcelo-barbosa"
                text="Aproveite esta oferta agora"
                className="bg-white text-brasil-orange hover:bg-gray-100"
              />
              <CTAButton 
                href="https://readdy.ai/invite/Abq8XgpzJGtX"
                text="Crie SaaS com IA"
                className="bg-white text-brasil-orange hover:bg-gray-100"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/^# /gm, '<h1 class="text-3xl font-bold mt-8 mb-4">')
                  .replace(/^## /gm, '<h2 class="text-2xl font-semibold mt-6 mb-3">')
                  .replace(/^### /gm, '<h3 class="text-xl font-medium mt-4 mb-2">')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^([^<])/gm, '<p class="mb-4">$1')
                  .replace(/<p class="mb-4">(<h[1-6])/g, '$1')
                  .replace(/(<\/h[1-6]>)<\/p>/g, '$1')
              }}
            />
          </div>

          {/* Middle CTA */}
          <div className="my-12 p-8 bg-accent rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-brasil-blue">
              🚀 Transforme Conhecimento em Renda
            </h3>
            <p className="text-muted-foreground mb-6">
              Aprenda a criar negócios digitais lucrativos com as estratégias mais atuais do mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                href="https://go.hotmart.com/E11195793E"
                text="Fórmula Negócio Online"
              />
              <CTAButton 
                href="https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB"
                text="Hospedagem Premium"
                variant="secondary"
              />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-brasil-blue to-brasil-green rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              ✨ Comece Hoje Mesmo sua Jornada na IA
            </h3>
            <p className="mb-6 opacity-90">
              Não perca tempo! As oportunidades em IA estão crescendo exponencialmente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                href="https://manus.im/invitation/NNBGIDNC6MTV"
                text="Clique aqui e garanta já"
                className="bg-white text-brasil-blue hover:bg-gray-100"
              />
              <CTAButton 
                href="https://renda-boost.lovable.app"
                text="Ganhar R$ 20 Agora"
                className="bg-white text-brasil-green hover:bg-gray-100"
              />
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="font-semibold mb-2">Gostou do artigo?</h4>
                <p className="text-sm text-muted-foreground">
                  Compartilhe com amigos e colegas que também se interessam por IA
                </p>
              </div>
              <div className="flex gap-3">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                >
                  Twitter
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(`${article.title} - ${window.location.href}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Article;