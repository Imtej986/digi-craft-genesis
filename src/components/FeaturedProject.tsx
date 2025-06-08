
import { ExternalLink, ArrowRight, Zap, Smartphone, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedProject = () => {
  const metrics = [
    { label: 'Conversion Rate', value: '+340%', icon: TrendingUp },
    { label: 'Mobile Users', value: '78%', icon: Smartphone },
    { label: 'Page Speed', value: '0.8s', icon: Zap },
  ];

  const techStack = ['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'Node.js'];

  return (
    <section id="work" className="py-24 bg-gradient-to-br from-slate/5 to-gold/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Rebuilding Trust,
            <br />
            One <span className="text-electric">Pixel</span> at a Time.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How we transformed a traditional roofing company into a digital powerhouse 
            with a custom web experience that drives $2M+ in annual revenue.
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-electric/10 text-electric px-4 py-2 rounded-full text-sm font-medium">
              Featured Case Study
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold">
              Summit Roofing Co.
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A century-old roofing company needed to compete in the digital age. 
              We created an immersive web experience that showcases their craftsmanship 
              through interactive 3D models, drone footage, and testimonials that build trust.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-electric">$15,000</div>
                <div className="text-sm text-muted-foreground">Project Investment</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-electric">6 weeks</div>
                <div className="text-sm text-muted-foreground">Delivery Time</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-card border rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Button className="bg-electric hover:bg-electric/90 text-electric-foreground font-medium">
              View Live Site
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </div>

          <div className="relative">
            {/* Main project image placeholder */}
            <div className="relative bg-gradient-to-br from-slate to-electric/20 rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                alt="Summit Roofing website on desktop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium">Desktop Experience</div>
              </div>
            </div>

            {/* Mobile view */}
            <div className="absolute -bottom-8 -right-8 w-32 h-56 bg-card border rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=400&q=80"
                alt="Summit Roofing mobile view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-electric/20 hover:border-electric/40 transition-colors">
              <CardContent className="p-6 text-center">
                <metric.icon size={32} className="text-electric mx-auto mb-4" />
                <div className="text-3xl font-bold text-electric mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="bg-card rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-center mb-8">Transformation</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4 text-muted-foreground">Before</h5>
              <div className="bg-muted/50 rounded-lg p-6 space-y-2">
                <div className="text-sm text-muted-foreground">• Outdated WordPress template</div>
                <div className="text-sm text-muted-foreground">• 12-second load time</div>
                <div className="text-sm text-muted-foreground">• 2.3% conversion rate</div>
                <div className="text-sm text-muted-foreground">• Mobile-unfriendly design</div>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-electric">After</h5>
              <div className="bg-electric/10 rounded-lg p-6 space-y-2">
                <div className="text-sm">• Custom React application</div>
                <div className="text-sm">• 0.8-second load time</div>
                <div className="text-sm">• 8.1% conversion rate</div>
                <div className="text-sm">• Mobile-first responsive design</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            className="border-electric text-electric hover:bg-electric hover:text-electric-foreground font-medium px-8 py-3"
          >
            See More Projects
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
