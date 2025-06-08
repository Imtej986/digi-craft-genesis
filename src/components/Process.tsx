
import { Search, Lightbulb, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery',
      description: 'We dive deep into your business, audience, and goals to understand what makes you unique.',
      duration: '1 week'
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Strategy',
      description: 'We develop a comprehensive strategy that aligns your brand with your business objectives.',
      duration: '1 week'
    },
    {
      number: '03',
      icon: Palette,
      title: 'Design',
      description: 'Our designers create stunning visuals that capture your brand essence and engage users.',
      duration: '2-3 weeks'
    },
    {
      number: '04',
      icon: Code,
      title: 'Development',
      description: 'We build fast, responsive, and scalable websites using the latest technologies.',
      duration: '3-4 weeks'
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Launch',
      description: 'We deploy your site with comprehensive testing and provide ongoing support.',
      duration: '1 week'
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-electric/5 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-electric">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results, 
            from initial concept to successful launch.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-16 bottom-16 w-px bg-gradient-to-b from-electric via-electric/50 to-electric"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className="bg-card rounded-2xl p-8 border hover:border-electric/40 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-electric">{step.number}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <span className="text-sm text-muted-foreground">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-electric rounded-full flex items-center justify-center text-electric-foreground shadow-lg">
                    <step.icon size={24} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-16 left-1/2 transform -translate-x-px w-px h-16 bg-electric/30"></div>
                  )}
                </div>

                {/* Spacer for desktop layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-electric hover:bg-electric/90 text-electric-foreground font-medium px-8 py-3 rounded-md transition-colors">
                Schedule a Call
              </button>
              <button className="border border-electric text-electric hover:bg-electric hover:text-electric-foreground font-medium px-8 py-3 rounded-md transition-colors">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
