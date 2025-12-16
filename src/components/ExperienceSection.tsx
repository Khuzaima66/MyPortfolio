import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "XpertSpot System",
      position: "React Native Developer",
      period: "Nov 2023 - Present",
      location: "Remote",
      description: "Experienced React Native Developer with a year of hands-on experience creating mobile applications at XperSpot. Skilled in developing smooth, high-performance apps for both iOS and Android platforms.",
      responsibilities: [
        "Built mobile applications using React Native, JavaScript, and TypeScript with React Native, ensuring smooth functionality and optimized performance across iOS and Android.",
        "Collaborated with designers and backend developers to create seamless and visually appealing cross-platform alignment with project requirements.",
        "Integrated third-party APIs and libraries to extend app functionalities, enhancing the user experience with minimal loading times and efficient data handling.",
        "Managed state efficiently using Redux and Context API to ensure data consistency and improve app performance throughout user code reviews.",
        "Debugged and troubleshooted issues across various devices, ensuring stability and compatibility through regular testing and"
      ],
      isCurrentJob: true
    },
    {
      company: "Graphics Cell",
      position: "React Native Intern",
      period: "Aug 2023 - October 2023",
      location: "On-site",
      description: "Internship focused on mobile app development and learning industry best practices.",
      responsibilities: [
        "Develop mobile applications using React Native",
        "Leverage native APIs integration",
        "Build reusable components and libraries for future use"
      ],
      isCurrentJob: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                        <h3 className="text-2xl font-bold text-primary mb-2">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-xl font-semibold text-foreground mb-2">
                          <Building2 className="w-5 h-5" />
                          {exp.company}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        {exp.isCurrentJob && (
                          <Badge className="bg-gradient-accent text-accent-foreground border-0">
                            Current
                          </Badge>
                        )}
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;