import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Generating the Mandelbrot set",
      description: "A real-time chat application powered by artificial intelligence",
      technologies: ["React", "Python", "TensorFlow"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "Horrorgame in Virtual Reality",
      description: "Interactive dashboard for visualizing complex datasets",
      technologies: ["D3.js", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "Snake on the Arduino Chipkit",
      description: "Tool for exploring and analyzing blockchain transactions",
      technologies: ["Solidity", "Web3.js", "React"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      title: "Training a Neural Network on MNIST",
      description: "Tool for exploring and analyzing blockchain transactions",
      technologies: ["Solidity", "Web3.js", "React"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
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