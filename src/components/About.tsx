
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a results-driven mobile app developer with a strong focus on Flutter. Over the last 3+ years, 
                I have led and contributed to the development of multiple mobile applications from the ground up, 
                including healthcare, finance, and community platforms.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I also have experience with backend and frontend technologies like Go, Django, Firebase, Supabase, 
                Next.js, and Tailwind CSS. My passion lies in creating user-centric mobile solutions that make a 
                real impact in people's lives.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Apps Published</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-card rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary">BK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
