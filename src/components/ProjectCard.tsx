
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  videoUrl?: string;
}

const ProjectCard = ({ title, description, technologies, imageUrl, videoUrl }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card 
          className="overflow-hidden transition-all hover:scale-105 hover:shadow-xl bg-white/5 backdrop-blur-sm border-white/10 cursor-pointer" 
          onClick={() => navigate(`/project/${title}`)}
        >
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle className="text-white">{title}</CardTitle>
            <CardDescription className="text-white/80">{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/10 text-white">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      {videoUrl && (
        <HoverCardContent className="w-full max-w-md border-none bg-transparent p-0">
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full rounded-lg shadow-xl"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export default ProjectCard;
