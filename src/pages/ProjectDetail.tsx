
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mandelbrot from "../assets/mandelbrot.png";
import horror from "../assets/horror.png";
import snake from "../assets/snake.png";
import mnist from "../assets/mnist.png";
import Dijkstra from "../assets/Dijkstra.jpeg";
import Asteroids from "../assets/Asteroids.jpeg";

const projectDetails = {
  "Exploring the Mandelbrot set": {
    title: "Exploring the Mandelbrot set",
    description: "Generating a graphical representation of the Mandelbrot set",
    fullDescription: `In this project I generated the an image based on the Mandelbrot set. The image was generated by scaling the colour of each pixel in the frame based on the depth of search at this particular complex number. The code was written as a part of a course in functional programming that I took in my bachelors degree The code written by me is commented. 
    
    The files can be found here:`,
    
     
    
    
    
    technologies: ["Elixir"],
    imageUrl: mandelbrot,
  },
  "Horrorgame in Virtual Reality": {
    title: "Creating a virtual-reality based horrorgame",
    description: "Interactive dashboard for visualizing complex datasets",
    fullDescription: `In this project, I worked in a team of 7 people to create a horrorgame. We worked on it for 4 weeks, through which I was the product owner, responsible for maintining a vision for the game. The concept of the game was to create a cheap entry to Virtual reality based games. The game was made to be played on a phone, where you would look around by moving your phone and press a button to move forward in the direction of view. You play as a ghost hunter inspired by "spökjakten" in sweden, who is trying to build his brand on social media. The game takes place in a haunted asylum in which the player goes live on stream. During the stream the player must both find and avoid monsters of different types. Filming monsters increase the number of viewers on the stream thus increasing likes (which is the points system), The player is directed by the live chat about which monsters they want to see. Filming monsters of interest gains more views and filming no monsters loses views. The link to the github page of the game can be found here:

    `,
    technologies: ["C#", "Unity"],
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
  "Implementing a neural network from scratch": {
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
  "Path finding using Dijkstra's algorithm": {
    title: "Path finding using Dijkstra's algorithm",
    description: "Implementation of Dijkstra's algorithm for finding shortest paths in graphs",
    fullDescription: `A Python implementation of Dijkstra's algorithm for finding the shortest paths in weighted graphs. 
    The project includes visualization of the path-finding process using NetworkX and Matplotlib.
    
    Key Features:
    • Interactive graph creation
    • Real-time path visualization
    • Support for weighted edges
    • Performance optimization techniques`,
    technologies: ["Python", "NetworkX", "Matplotlib"],
    imageUrl: Dijkstra,
  },
  "Teaching Asteroids using reinforcement learning": {
    title: "Teaching Asteroids using reinforcement learning",
    description: "Training an AI agent to play the classic Asteroids game using deep reinforcement learning",
    fullDescription: `An implementation of deep reinforcement learning to teach an AI agent to play the classic 
    Asteroids game. The project uses PyTorch for the neural network and OpenAI Gym for the game environment.
    
    Key Features:
    • Deep Q-Learning implementation
    • Custom Asteroids environment
    • Performance metrics tracking
    • Visualization of learning progress`,
    technologies: ["Python", "PyTorch", "OpenAI Gym"],
    imageUrl: Asteroids,
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
