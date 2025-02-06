import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const ProjectCard = ({ title, description, technologies, imageUrl }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:scale-105 hover:shadow-xl bg-secondary/10 border-secondary/20">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;