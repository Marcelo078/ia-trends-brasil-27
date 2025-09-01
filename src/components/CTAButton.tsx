import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const CTAButton = ({ href, text, variant = "primary", className = "" }: CTAButtonProps) => {
  const baseClasses = variant === "primary" 
    ? "bg-gradient-to-r from-brasil-orange to-brasil-yellow hover:shadow-[--shadow-cta] transform hover:scale-105 transition-all duration-300 text-white font-bold py-4 px-8 text-lg"
    : "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6";

  return (
    <Button 
      asChild 
      className={`${baseClasses} ${className}`}
    >
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-2"
      >
        {text}
        <ExternalLink className="w-5 h-5" />
      </a>
    </Button>
  );
};

export default CTAButton;