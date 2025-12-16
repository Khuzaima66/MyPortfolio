import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "ADP (Double Computer Math)",
      institution: "Islamia University of Bahawalpur",
      year: "2022",
      type: "Bachelor's Degree",
      location: "Bahawalpur",
      description: "Advanced Diploma Program focusing on Computer Science and Mathematics"
    },
    {
      degree: "ICS (Physics Math Computer)",
      institution: "Khawaja Fareed College",
      year: "2018",
      type: "Intermediate",
      location: "Punjab",
      description: "Intermediate in Computer Science with Physics and Mathematics"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`relative animate-fade-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-primary rounded-full border-4 border-background shadow-glow hidden md:block"></div>
                
                <Card className="ml-0 md:ml-20 bg-gradient-card border-card-border shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary mb-1">{edu.degree}</h3>
                            <p className="text-lg font-semibold text-foreground">{edu.institution}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-gradient-accent text-accent-foreground border-0">
                          {edu.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Educational highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="bg-gradient-card border-card-border shadow-card animate-slide-in-left">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <span className="text-2xl font-bold text-primary-foreground">CS</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Computer Science</h4>
              <p className="text-muted-foreground">Strong foundation in programming and software development</p>
            </div>
          </Card>
          
          <Card className="bg-gradient-card border-card-border shadow-card animate-slide-in-right">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <span className="text-2xl font-bold text-accent-foreground">Math</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Mathematics</h4>
              <p className="text-muted-foreground">Analytical thinking and problem-solving skills</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;