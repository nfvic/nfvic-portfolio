
import React from 'react';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "GraphQL", level: 60 },
      { name: "PostgreSQL", level: 70 },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Figma", level: 75 },
      { name: "AWS", level: 60 },
      { name: "Testing", level: 70 },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">My Skills</h2>
        <p className="text-muted-foreground text-lg mb-16 text-center max-w-2xl mx-auto">
          I've worked with a wide range of technologies in web development,
          constantly learning and improving my skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-bold mb-4 text-center">{skillGroup.category}</h3>
              
              <div className="space-y-5">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
