
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      <iframe src='https://my.spline.design/radialglass-Jsd7fTj3Kpptsfnoxrj11Iel/' className='absolute right-2' width='100%' height='100%'></iframe>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-4 h-4 bg-electric rounded-full animate-float opacity-60 glow-electric"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-neon rounded-full animate-float opacity-40 glow-electric" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-copper rounded-full animate-float opacity-50 glow-electric" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-electric rounded-full animate-float opacity-80 glow-electric" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-electric/30 rounded-full px-6 py-3 mb-8 hover:border-electric/60 hover:glow-electric transition-all duration-300 cursor-pointer">
            <Sparkles size={16} className="text-electric animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Premium Digital Experiences
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
            We Craft Digital
            <br />
            <span className="text-electric text-glow">Experiences</span>
            <br />
            that Build Brands.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Custom websites for high-ticket clients — from roofers to retailers.
            <br />
            Starting at <span className="text-electric font-semibold text-glow">$10,000</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToWork}
              className="bg-gradient-to-r from-electric to-electric-dark hover:from-electric-dark hover:to-electric text-electric-foreground font-medium px-8 py-3 text-lg glow-electric hover:glow-electric-intense hover:scale-105 transition-all duration-300"
            >
              See the Work
            </Button>
            <Button 
              variant="outline" 
              className="border-electric/50 text-electric hover:bg-electric/10 hover:border-electric font-medium px-8 py-3 text-lg hover:scale-105 hover:glow-electric transition-all duration-300"
            >
              Start a Project
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce hover:text-electric hover:scale-110 transition-all cursor-pointer" onClick={scrollToWork}>
            <ArrowDown size={24} className="text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-0 w-32 h-32 border border-electric/20 rotate-45 hidden lg:block animate-pulse glow-electric"></div>
      <div className="absolute bottom-1/4 left-0 w-24 h-24 border border-neon/20 rotate-12 hidden lg:block animate-pulse glow-electric"></div>
    </section>
  );
};

export default Hero;
