
import React from 'react';

const Skills = () => {
  const skills = [
    { name: "Flutter & Dart", level: 95 },
    { name: "Firebase / Supabase", level: 90 },
    { name: "Go", level: 85 },
    { name: "Django", level: 80 },
    { name: "REST APIs", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Git & GitHub", level: 95 },
    { name: "Google Play Store Deployment", level: 100 }
  ];

  return (
    <section className="py-20 bg-background" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills & Technologies</h2>
          
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              Passionate about mobile development and always learning new technologies to deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
