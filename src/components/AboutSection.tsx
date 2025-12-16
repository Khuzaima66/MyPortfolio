import { Card } from "@/components/ui/card";
import { Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <Card className="bg-gradient-card border-card-border shadow-card animate-scale-up">
          <div className="p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Objective</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Looking for a challenging role so that I can use my skills and capabilities 
                  through sincere dedication and hard work for successful career. I am passionate 
                  about creating innovative mobile applications that deliver exceptional user 
                  experiences and drive business growth.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-card-border">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="animate-slide-in-left">
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="animate-scale-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-muted-foreground">Skills Mastered</div>
                </div>
                <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-muted-foreground">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;