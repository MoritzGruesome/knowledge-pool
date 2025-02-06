import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "Data Structures", level: 85 },
    { name: "Algorithms", level: 80 },
  ];

  return (
    <section className="py-20 animate-fade-up">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Technical Skills
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-white/90">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2 bg-white/10" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;