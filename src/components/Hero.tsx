import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center animate-fade-down">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Computer Science Student
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white/90">
        Passionate about creating innovative solutions through code. Exploring the
        intersection of technology and creativity.
      </p>
      <Button
        onClick={() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group bg-white text-background hover:bg-white/90"
      >
        View My Work
        <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
      </Button>
    </section>
  );
};

export default Hero;