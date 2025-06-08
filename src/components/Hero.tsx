
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-4 h-4 bg-electric rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-neon rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-copper rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles size={16} className="text-electric" />
            <span className="text-sm font-medium text-muted-foreground">
              Premium Digital Experiences
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 animate-fade-in">
            We Craft Digital
            <br />
            <span className="text-electric">Experiences</span>
            <br />
            that Build Brands.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Custom websites for high-ticket clients — from roofers to retailers.
            <br />
            Starting at <span className="text-foreground font-semibold">$10,000</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              onClick={scrollToWork}
              className="bg-electric hover:bg-electric/90 text-electric-foreground font-medium px-8 py-3 text-lg animate-pulse-electric"
            >
              See the Work
            </Button>
            <Button 
              variant="outline" 
              className="border-electric text-electric hover:bg-electric hover:text-electric-foreground font-medium px-8 py-3 text-lg"
            >
              Start a Project
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce" onClick={scrollToWork}>
            <ArrowDown size={24} className="text-muted-foreground cursor-pointer hover:text-electric transition-colors" />
          </div>
        </div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-0 w-32 h-32 border border-electric/20 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-0 w-24 h-24 border border-neon/20 rotate-12 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
