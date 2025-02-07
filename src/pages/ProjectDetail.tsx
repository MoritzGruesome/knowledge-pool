
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projectDetails = {
  "ai-chat-application": {
    title: "AI Chat Application",
    description: "A real-time chat application powered by artificial intelligence",
    fullDescription: `This project implements a sophisticated real-time chat interface that leverages 
    artificial intelligence to provide intelligent responses. Built with React for the frontend and 
    Python for the backend, it utilizes TensorFlow for natural language processing.
    
    Key Features:
    • Real-time message processing
    • Advanced natural language understanding
    • Seamless user interface
    • Scalable architecture`,
    technologies: ["React", "Python", "TensorFlow"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  "data-visualization-dashboard": {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets",
    fullDescription: `This dashboard provides intuitive visualization tools for complex data analysis. 
    Built with D3.js for powerful data visualization capabilities and MongoDB for efficient data storage.
    
    Key Features:
    • Interactive data graphs
    • Real-time data updates
    • Customizable visualizations
    • Advanced filtering options`,
    technologies: ["D3.js", "Node.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  "blockchain-explorer": {
    title: "Blockchain Explorer",
    description: "Tool for exploring and analyzing blockchain transactions",
    fullDescription: `A comprehensive blockchain explorer that allows users to analyze transactions, 
    smart contracts, and blockchain data. Built with Web3.js for blockchain interaction and React 
    for the user interface.
    
    Key Features:
    • Real-time transaction tracking
    • Smart contract analysis
    • Address monitoring
    • Transaction history visualization`,
    technologies: ["Solidity", "Web3.js", "React"],
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost" 
          className="mb-8 text-white hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
        
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        
        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="text-white/80 space-y-4 whitespace-pre-line">
          {project.fullDescription}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
