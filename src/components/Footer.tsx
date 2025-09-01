import { Link } from "react-router-dom";
import { Bot, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-brasil-blue to-brasil-green rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-brasil-blue to-brasil-green bg-clip-text text-transparent">
                IA Trends Brasil
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Seu portal de referência sobre tendências e oportunidades em Inteligência Artificial no Brasil.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-brasil-blue transition-colors">
                Início
              </Link>
              <Link to="/categorias" className="block text-sm text-muted-foreground hover:text-brasil-blue transition-colors">
                Categorias
              </Link>
              <Link to="/sobre" className="block text-sm text-muted-foreground hover:text-brasil-blue transition-colors">
                Sobre
              </Link>
            </div>
          </div>

          {/* Ferramentas Recomendadas */}
          <div>
            <h3 className="font-semibold mb-4">Ferramentas IA</h3>
            <div className="space-y-2">
              <a 
                href="https://lovable.dev/?via=marcelo-barbosa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-brasil-blue transition-colors"
              >
                Lovable IA
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://readdy.ai/invite/Abq8XgpzJGtX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-brasil-blue transition-colors"
              >
                Readdy IA
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://manus.im/invitation/NNBGIDNC6MTV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-brasil-blue transition-colors"
              >
                Manus IA
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Oportunidades */}
          <div>
            <h3 className="font-semibold mb-4">Oportunidades</h3>
            <div className="space-y-2">
              <a 
                href="https://renda-boost.lovable.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-brasil-blue transition-colors"
              >
                Renda Extra
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://go.hotmart.com/E11195793E" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-brasil-blue transition-colors"
              >
                Negócio Online
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-brasil-blue transition-colors"
              >
                Hospedagem
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 IA Trends Brasil. Todos os direitos reservados.</p>
          <p className="mt-2">
            Conectando você às melhores oportunidades em Inteligência Artificial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;