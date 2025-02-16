
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mandelbrot from "../assets/mandelbrot.png";
import horror from "../assets/horror.png";
import snake from "../assets/snake.png";
import mnist from "../assets/mnist.png";

const projectDetails = {
  "Generating the Mandelbrot set": {
    title: "Generating the Mandelbrot set",
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
    imageUrl: mandelbrot,
  },
  "Horrorgame in Virtual Reality": {
    title: "Horrorgame in Virtual Reality",
    description: "Interactive dashboard for visualizing complex datasets",
    fullDescription: `This dashboard provides intuitive visualization tools for complex data analysis. 
    Built with D3.js for powerful data visualization capabilities and MongoDB for efficient data storage.
    
    Key Features:
    • Interactive data graphs
    • Real-time data updates
    • Customizable visualizations
    • Advanced filtering options`,
    technologies: ["D3.js", "Node.js", "MongoDB"],
    imageUrl: horror,
  },
  "Snake on the Arduino Chipkit": {
    title: "Snake on the Arduino Chipkit",
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
    imageUrl: snake,
  },
  "Training a Neural Network on MNIST": {
    title: "Training a Neural Network on MNIST",
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
    imageUrl: mnist,
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
