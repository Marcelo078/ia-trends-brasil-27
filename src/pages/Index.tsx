import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTAButton from "@/components/CTAButton";
import { getFeaturedArticles } from "@/data/articles";
import { TrendingUp, Brain, Zap, Shield, Sparkles, Target } from "lucide-react";

const Index = () => {
  const featuredArticles = getFeaturedArticles();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-accent">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brasil-blue to-brasil-green bg-clip-text text-transparent">
              IA Trends Brasil 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Descubra as <strong>principais tendências</strong> de Inteligência Artificial no Brasil. 
              Oportunidades de negócio, carreira e inovação que vão <strong>transformar seu futuro</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton 
                href="https://lovable.dev/?via=marcelo-barbosa"
                text="Criar Apps com IA Agora"
                variant="primary"
              />
              <CTAButton 
                href="https://go.hotmart.com/E11195793E"
                text="Fórmula Negócio Online"
                variant="secondary"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brasil-blue">20+</div>
                <div className="text-sm text-muted-foreground">Artigos Especializados</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brasil-green">50k+</div>
                <div className="text-sm text-muted-foreground">Leitores Mensais</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brasil-orange">100%</div>
                <div className="text-sm text-muted-foreground">Gratuito</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brasil-yellow">2025</div>
                <div className="text-sm text-muted-foreground">Tendências Atuais</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 bg-gradient-to-r from-brasil-orange to-brasil-yellow">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-semibold text-lg mb-4">
            🚀 <strong>Ganhe R$ 20 e Mais Benefícios</strong> com Nossos Parceiros Financeiros
          </p>
          <CTAButton 
            href="https://renda-boost.lovable.app"
            text="Aproveite esta oferta agora"
            className="bg-white text-brasil-orange hover:bg-gray-100"
          />
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tendências <span className="text-brasil-blue">Mais Quentes</span> de 2025
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore as tecnologias de IA que estão definindo o futuro e criando milhões em oportunidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg border hover:shadow-[--shadow-card] transition-all duration-300 group">
              <Brain className="w-12 h-12 text-brasil-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Agentes de IA</h3>
              <p className="text-muted-foreground">Sistemas autônomos que revolucionam automação empresarial</p>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-[--shadow-card] transition-all duration-300 group">
              <Sparkles className="w-12 h-12 text-brasil-green mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">IA Generativa</h3>
              <p className="text-muted-foreground">Criação de conteúdo automatizada e personalizada</p>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-[--shadow-card] transition-all duration-300 group">
              <Shield className="w-12 h-12 text-brasil-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">IA Ética</h3>
              <p className="text-muted-foreground">Transparência e responsabilidade em sistemas inteligentes</p>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-[--shadow-card] transition-all duration-300 group">
              <Zap className="w-12 h-12 text-brasil-yellow mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Edge AI</h3>
              <p className="text-muted-foreground">Inteligência artificial local e offline</p>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-[--shadow-card] transition-all duration-300 group">
              <TrendingUp className="w-12 h-12 text-brasil-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">IA Multimodal</h3>
              <p className="text-muted-foreground">Sistemas que processam múltiplos tipos de dados</p>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-[--shadow-card] transition-all duration-300 group">
              <Target className="w-12 h-12 text-brasil-green mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">SEO para IA</h3>
              <p className="text-muted-foreground">Otimização para mecanismos de busca com IA</p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton 
              href="https://readdy.ai/invite/Abq8XgpzJGtX"
              text="Crie seus códigos de SaaS em segundos"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4 bg-accent/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Artigos <span className="text-brasil-blue">em Destaque</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conteúdo aprofundado sobre as tendências que estão moldando o futuro da IA no Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                readTime={article.readTime}
                category={article.category}
                publishDate={article.publishDate}
                featured={article.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-brasil-orange">Oportunidades</span> Imperdíveis
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas e cursos para você lucrar com a revolução da IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-lg border bg-card hover:shadow-[--shadow-card] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-brasil-blue">Ferramentas No-Code</h3>
              <p className="text-muted-foreground mb-6">
                Crie aplicativos e SaaS sem programar usando as melhores plataformas de IA
              </p>
              <div className="space-y-3">
                <CTAButton 
                  href="https://lovable.dev/?via=marcelo-barbosa"
                  text="Lovable IA - Criar Apps"
                  className="w-full"
                />
                <CTAButton 
                  href="https://manus.im/invitation/NNBGIDNC6MTV"
                  text="Manus IA - SaaS Instantâneo"
                  className="w-full"
                />
              </div>
            </div>

            <div className="p-8 rounded-lg border bg-card hover:shadow-[--shadow-card] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-brasil-green">Educação e Renda</h3>
              <p className="text-muted-foreground mb-6">
                Aprenda a criar negócios online e gere renda extra com estratégias comprovadas
              </p>
              <div className="space-y-3">
                <CTAButton 
                  href="https://go.hotmart.com/E11195793E"
                  text="Fórmula Negócio Online"
                  className="w-full"
                />
                <CTAButton 
                  href="https://app.monetizze.com.br/r/AWH25502896"
                  text="Carteira de Estudante Digital"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
