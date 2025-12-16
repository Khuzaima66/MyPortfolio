import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "khuzaima2462@gmail.com",
      href: "mailto:khuzaima2462@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "03126680990",
      href: "tel:03126680990",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rahim Yar Khan",
      href: "#",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to bring your mobile app ideas to life? Let's connect and discuss your project!
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            const gradientClass = contact.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent';

            return (
              <Card
                key={index}
                className="bg-gradient-card border-card-border shadow-card hover:shadow-glow transition-all duration-300 animate-scale-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => contact.href !== '#' && window.open(contact.href, '_self')}
              >
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 ${gradientClass} rounded-full flex items-center justify-center mx-auto mb-4 animate-glow`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{contact.label}</h3>
                  <p className="text-muted-foreground">{contact.value}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <Card className="bg-gradient-card border-card-border shadow-card animate-fade-up">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm passionate about creating innovative mobile applications that deliver exceptional user experiences.
              Whether you're a startup or an established company, I'm here to help bring your vision to life.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 border-0"
                onClick={() => window.open('mailto:khuzaima2462@gmail.com', '_self')}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-card-border hover:bg-card/50 transition-all duration-300"
                onClick={() => window.open('tel:03126680990', '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                size="sm"
                variant="outline"
                className="w-12 h-12 rounded-full border-card-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open("https://github.com/Khuzaima66", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-12 h-12 rounded-full border-card-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/khuzaima-abdul-rehman-b28339234/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;