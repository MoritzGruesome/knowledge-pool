
import ProjectCard from "./ProjectCard";
import mandelbrot from "../assets/mandelbrot.png";
import horror from "../assets/horror.png";
import snake from "../assets/snake.png";
import mnist from "../assets/mnist.png";

const Projects = () => {
  const projects = [
    {
      title: "Generating the Mandelbrot set",
      description: "A real-time chat application powered by artificial intelligence",
      technologies: ["React", "Python", "TensorFlow"],
      imageUrl: mandelbrot,
    },
    {
      title: "Horrorgame in Virtual Reality",
      description: "Interactive dashboard for visualizing complex datasets",
      technologies: ["D3.js", "Node.js", "MongoDB"],
      imageUrl: horror,
    },
    {
      title: "Snake on the Arduino Chipkit",
      description: "Tool for exploring and analyzing blockchain transactions",
      technologies: ["Solidity", "Web3.js", "React"],
      imageUrl: snake,
    },
    {
      title: "Training a Neural Network on MNIST",
      description: "Tool for exploring and analyzing blockchain transactions",
      technologies: ["Solidity", "Web3.js", "React"],
      imageUrl: mnist,
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
