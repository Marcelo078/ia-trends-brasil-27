import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { Brain, Target, Sparkles, Shield } from "lucide-react";
import { useEffect } from "react";

const Sobre = () => {
  useEffect(() => {
    document.title = "Sobre | IA Trends Brasil";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre o <span className="text-brasil-blue">IA Trends Brasil</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              O portal brasileiro de referência sobre tendências e oportunidades em Inteligência Artificial.
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-12">
            <p>
              O <strong>IA Trends Brasil</strong> nasceu da missão de democratizar o conhecimento sobre
              Inteligência Artificial no Brasil. Acreditamos que toda pessoa, empresa ou empreendedor merece
              entender — e aproveitar — a maior transformação tecnológica da nossa geração.
            </p>
            <p>
              Produzimos conteúdo aprofundado, baseado em dados, com foco prático em oportunidades reais para o
              mercado brasileiro: carreira, negócios, ferramentas, automação e muito mais.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 border rounded-lg">
              <Brain className="w-10 h-10 text-brasil-blue mb-3" />
              <h2 className="text-xl font-bold mb-2">Conteúdo Profundo</h2>
              <p className="text-muted-foreground">
                Artigos extensos com pesquisa, dados, cases brasileiros e FAQ detalhada.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Target className="w-10 h-10 text-brasil-green mb-3" />
              <h2 className="text-xl font-bold mb-2">Foco em Oportunidades</h2>
              <p className="text-muted-foreground">
                Cada artigo aponta caminhos reais para você lucrar ou se posicionar com IA.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Sparkles className="w-10 h-10 text-brasil-orange mb-3" />
              <h2 className="text-xl font-bold mb-2">Atualização Constante</h2>
              <p className="text-muted-foreground">
                Acompanhamos a velocidade da IA e revisamos conteúdos regularmente.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Shield className="w-10 h-10 text-brasil-yellow mb-3" />
              <h2 className="text-xl font-bold mb-2">Curadoria Confiável</h2>
              <p className="text-muted-foreground">
                Recomendamos apenas ferramentas e cursos que entregam valor real.
              </p>
            </div>
          </section>

          <section className="p-8 bg-gradient-to-r from-brasil-blue to-brasil-green rounded-lg text-white text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Comece Agora sua Jornada com IA</h2>
            <p className="mb-6 opacity-90">
              Explore nossas ferramentas recomendadas e dê o primeiro passo hoje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="https://lovable.dev/?via=marcelo-barbosa"
                text="Criar Apps com IA"
                className="bg-white text-brasil-blue hover:bg-gray-100"
              />
              <CTAButton
                href="https://readdy.ai/invite/Abq8XgpzJGtX"
                text="Crie SaaS com IA"
                className="bg-white text-brasil-green hover:bg-gray-100"
              />
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quer Falar Conosco?</h2>
            <p className="text-muted-foreground">
              Sugestões, parcerias ou dúvidas? Conecte-se através das nossas redes ou pelo rodapé do site.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
