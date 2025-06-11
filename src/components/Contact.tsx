
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-muted/50" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Mail className="h-6 w-6 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Feel free to reach out for collaboration or opportunities</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:bilisakumera@gmail.com')}
                >
                  bilisakumera@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Phone className="h-6 w-6 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Available for calls and meetings</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('tel:+251955026097')}
                >
                  +251955026097
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Linkedin className="h-6 w-6 text-primary" />
                  LinkedIn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Connect with me professionally</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://www.linkedin.com/in/bilisa-kumera/', '_blank')}
                >
                  LinkedIn Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Github className="h-6 w-6 text-primary" />
                  GitHub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Check out my code and projects</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://github.com/Bilisa-Kumera', '_blank')}
                >
                  GitHub Profile
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Let's Build Something Amazing Together</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Whether you have a mobile app idea 
              or need an experienced Flutter developer for your team, I'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
