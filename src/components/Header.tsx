import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bot, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="p-2 bg-gradient-to-br from-brasil-blue to-brasil-green rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <span className="bg-gradient-to-r from-brasil-blue to-brasil-green bg-clip-text text-transparent">
            IA Trends Brasil
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-brasil-blue transition-colors">
            Início
          </Link>
          <Link to="/categorias" className="text-foreground hover:text-brasil-blue transition-colors">
            Categorias
          </Link>
          <Link to="/sobre" className="text-foreground hover:text-brasil-blue transition-colors">
            Sobre
          </Link>
          <Button 
            asChild 
            variant="default" 
            className="bg-gradient-to-r from-brasil-orange to-brasil-yellow hover:from-brasil-yellow hover:to-brasil-orange transition-all duration-300"
          >
            <a href="https://lovable.dev/?via=marcelo-barbosa" target="_blank" rel="noopener noreferrer">
              <Zap className="w-4 h-4 mr-2" />
              Ferramentas IA
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-foreground hover:text-brasil-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/categorias" 
              className="block text-foreground hover:text-brasil-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
            <Link 
              to="/sobre" 
              className="block text-foreground hover:text-brasil-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Button 
              asChild 
              variant="default" 
              className="w-full bg-gradient-to-r from-brasil-orange to-brasil-yellow"
            >
              <a href="https://lovable.dev/?via=marcelo-barbosa" target="_blank" rel="noopener noreferrer">
                <Zap className="w-4 h-4 mr-2" />
                Ferramentas IA
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;