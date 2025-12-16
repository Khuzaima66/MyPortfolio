import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Code, 
  Database, 
  Layers, 
  Globe, 
  Palette,
  Server,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "iOS", "Android"],
      color: "primary"
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["JavaScript", "TypeScript"],
      color: "accent"
    },
    {
      title: "State Management",
      icon: Layers,
      skills: ["Redux", "Context API"],
      color: "primary"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["CSS", "HTML"],
      color: "accent"
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["Node.js", "RestAPIs"],
      color: "primary"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["Firebase"],
      color: "accent"
    }
  ];

  const languages = ["English", "Urdu"];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const gradientClass = category.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent';
            
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-card-border shadow-card hover:shadow-glow transition-all duration-300 animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${gradientClass} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-muted/50 text-foreground border-card-border hover:bg-muted transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Languages */}
        <Card className="bg-gradient-card border-card-border shadow-card animate-fade-up">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Languages</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {languages.map((language, index) => (
                <Badge 
                  key={index}
                  className="bg-gradient-primary text-primary-foreground border-0 text-base px-4 py-2"
                >
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        {/* Skill highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center animate-slide-in-left">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Fast Development</h4>
            <p className="text-muted-foreground">Quick turnaround with clean, efficient code</p>
          </div>
          
          <div className="text-center animate-scale-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
              <Palette className="w-8 h-8 text-accent-foreground" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">UI/UX Focus</h4>
            <p className="text-muted-foreground">Beautiful, user-friendly interfaces</p>
          </div>
          
          <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
              <Layers className="w-8 h-8 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Cross Platform</h4>
            <p className="text-muted-foreground">iOS & Android with single codebase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;