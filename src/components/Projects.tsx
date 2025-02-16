
import ProjectCard from "./ProjectCard";
import mandelbrot from "../assets/mandelbrot.png";
import horror from "../assets/horror.png";
import snake from "../assets/snake.png";
import mnist from "../assets/mnist.png";
import Dijkstra from "../assets/Dijkstra.jpeg";
import Asteroids from "../assets/Asteroids.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Exploring the Mandelbrot set",
      description: "Generating a graphical representation of the Mandelbrot set",
      technologies: ["Elixir"],
      imageUrl: mandelbrot,
    },
    {
      title: "Horrorgame in Virtual Reality",
      description: "Creating a virtual-reality based horrorgame",
      technologies: ["C#", "Unity"],
      imageUrl: horror,
    },
    {
      title: "Snake on the Arduino Chipkit",
      description: "creating a snake-inspired game running on arduino",
      technologies: ["C", "Arduino"],
      imageUrl: snake,
    },
    {
      title: "Implementing a neural network from scratch",
      description: "Training a neural network on hand-written digits using MNIST",
      technologies: ["Python", "NumPy", "MNIST"],
      imageUrl: mnist,
    },
    {
      title: "Path finding using Dijkstra's algorithm",
      description: "Implementation of Dijkstra's algorithm for finding shortest paths in graphs",
      technologies: ["Java"],
      imageUrl: Dijkstra,
    },
    {
      title: "Teaching Asteroids using reinforcement learning",
      description: "Training an AI agent to play the classic Asteroids game using Deep Q-learning",
      technologies: ["Python", "PyTorch", "NumPy"],
      imageUrl: Asteroids,
    },
  ];

  return (
    <section id="projects" className="py-20 animate-fade-up">
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
