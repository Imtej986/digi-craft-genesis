
import { Palette, Brain, Box, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Custom Web Design',
      description: 'Bespoke digital experiences tailored to your industry and brand identity.',
      features: ['UI/UX Design', 'Responsive Design', 'Brand Integration']
    },
    {
      icon: Brain,
      title: 'Brand Strategy',
      description: 'Strategic positioning and messaging that resonates with your target audience.',
      features: ['Market Research', 'Brand Positioning', 'Content Strategy']
    },
    {
      icon: Box,
      title: 'Interactive Experiences',
      description: 'Engaging user experiences with modern animations and interactions.',
      features: ['Micro-interactions', 'Scroll Animations', 'Interactive Elements']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for conversions and search engines.',
      features: ['SEO Optimization', 'Core Web Vitals', 'Analytics Setup']
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What We <span className="text-electric text-glow">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine strategic thinking with technical excellence to create 
            digital experiences that drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:border-electric/60 transition-all duration-300 hover:shadow-lg hover:shadow-electric/20 hover:scale-105 hover:glow-electric bg-card/50 backdrop-blur-sm animate-on-scroll cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-electric group-hover:text-electric-foreground transition-all duration-300 group-hover:glow-electric group-hover:rotate-12">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-electric transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3 group-hover:glow-electric"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-electric/20 glow-electric animate-on-scroll">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2 text-glow">$25k</div>
              <div className="text-muted-foreground">Avg. Project Value</div>
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2 text-glow">4-8</div>
              <div className="text-muted-foreground">Weeks Delivery</div>
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2 text-glow">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2 text-glow">250%</div>
              <div className="text-muted-foreground">Avg. ROI Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
