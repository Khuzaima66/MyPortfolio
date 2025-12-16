import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    description: "A full-featured React Native e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React Native", "Redux", "Firebase", "Stripe API"],
    image: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Cross-platform social media management app with real-time analytics, post scheduling, and multi-account support.",
    technologies: ["React Native", "TypeScript", "AsyncStorage", "REST API"],
    image: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "Health and fitness tracking application with workout planning, progress monitoring, and social features.",
    technologies: ["React Native", "SQLite", "Push Notifications", "Google Fit API"],
    image: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Food Delivery Platform",
    description: "Complete food delivery solution with real-time tracking, payment processing, and restaurant management system.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    image: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of mobile applications built with React Native, showcasing innovative solutions and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full bg-gradient-card border-card-border shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  {/* <div className="flex gap-4 pt-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" size="sm" className="flex items-center gap-2 border-primary/20 hover:border-primary hover:bg-primary/10">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="sm" className="flex items-center gap-2 bg-gradient-primary hover:shadow-primary">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-gradient-primary hover:shadow-primary">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;