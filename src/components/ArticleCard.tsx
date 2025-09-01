import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  publishDate: string;
  featured?: boolean;
}

const ArticleCard = ({ 
  id, 
  title, 
  description, 
  readTime, 
  category, 
  publishDate, 
  featured = false 
}: ArticleCardProps) => {
  return (
    <Card className={`group hover:shadow-[--shadow-card] transition-all duration-300 hover:-translate-y-1 ${featured ? 'border-brasil-blue' : ''}`}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={featured ? "default" : "secondary"} className={featured ? "bg-brasil-blue" : ""}>
            {category}
          </Badge>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {publishDate}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </div>
          </div>
        </div>
        <CardTitle className="group-hover:text-brasil-blue transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link 
          to={`/artigo/${id}`} 
          className="inline-flex items-center gap-2 text-brasil-blue hover:text-brasil-green font-semibold transition-colors duration-300"
        >
          Ler artigo completo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;