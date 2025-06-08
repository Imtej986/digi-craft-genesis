
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@digicraft.agency',
      href: 'mailto:hello@digicraft.agency'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-electric/5 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="text-electric text-glow">Bold</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project 
            and create something extraordinary together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-electric/20 hover:border-electric/60 hover:glow-electric transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm animate-on-scroll cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-electric group-hover:text-electric-foreground transition-all duration-300 hover:glow-electric hover:rotate-12">
                    <info.icon size={20} className="text-electric" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                  <a 
                    href={info.href}
                    className="font-semibold hover:text-electric transition-colors text-glow"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Simple CTA */}
          <div className="text-center animate-on-scroll">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-12 border border-electric/20 glow-electric hover:border-electric/60 hover:glow-electric-intense transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 text-electric text-glow">Start Your Project Today</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                From concept to launch, we'll bring your vision to life with cutting-edge design and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-electric to-electric-dark hover:from-electric-dark hover:to-electric text-electric-foreground font-medium px-10 py-4 rounded-md transition-all duration-300 glow-electric hover:glow-electric-intense hover:scale-105 text-lg">
                  Get in Touch
                </button>
                <button className="border border-electric/50 text-electric hover:bg-electric/10 hover:border-electric font-medium px-10 py-4 rounded-md transition-all duration-300 hover:scale-105 hover:glow-electric text-lg">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
