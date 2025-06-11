
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Hageregna Equb",
      description: "Traditional group savings platform enabling communities to manage collective financial goals",
      url: "https://play.google.com/store/apps/details?id=com.ekub.app&hl=en",
      category: "Finance"
    },
    {
      name: "Dr Link Pro",
      description: "Telemedicine app for doctors to provide remote healthcare services",
      url: "https://play.google.com/store/apps/details?id=com.comfy.providerTeleMedicine&hl=en",
      category: "Healthcare"
    },
    {
      name: "Dr Link Client",
      description: "Patient-side telemedicine app for accessing healthcare services remotely",
      url: "https://play.google.com/store/apps/details?id=com.hakime.clientTeleMedicine&hl=en",
      category: "Healthcare"
    },
    {
      name: "BEmONC",
      description: "Emergency obstetric care support app for healthcare professionals",
      url: "https://play.google.com/store/apps/details?id=com.cofix.app&hl=en",
      category: "Healthcare"
    },
    {
      name: "CEmONC",
      description: "Advanced maternal health tool for medical professionals",
      url: "https://play.google.com/store/apps/details?id=com.cmonc.app&hl=en",
      category: "Healthcare"
    },
    {
      name: "Women's Health Guide",
      description: "Comprehensive pregnancy and maternal care education platform",
      url: "https://play.google.com/store/apps/details?id=com.acsis.pregnancy&hl=en",
      category: "Healthcare"
    },
    {
      name: "Ho-Faydaa",
      description: "Maternal health app in Afaan Oromo language for local communities",
      url: "https://play.google.com/store/apps/details?id=com.babybookao.pregnancy&hl=en",
      category: "Healthcare"
    }
  ];

  return (
    <section className="py-20 bg-muted/50" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">My Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border bg-card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    View on Play Store
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
