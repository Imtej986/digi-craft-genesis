
import { Star, Users, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, Summit Roofing',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b55c?auto=format&fit=crop&w=150&q=80',
      quote: 'Digi Craft transformed our century-old business into a modern powerhouse. Our leads increased by 340% in just 3 months.',
      rating: 5
    },
    {
      name: 'Marcus Chen',
      role: 'Founder, TechFlow Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      quote: 'The attention to detail and technical expertise is unmatched. They delivered exactly what we envisioned and more.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Marketing Director, GreenSpace',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      quote: 'Working with Digi Craft was seamless. They understood our vision and brought it to life beautifully.',
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Target, value: '$2M+', label: 'Revenue Generated' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why <span className="text-electric">Digi Craft</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just another web agency. We're your strategic partner 
            in digital transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Stats */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Proven Results</h3>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="border-electric/20">
                  <CardContent className="p-6 text-center">
                    <stat.icon size={32} className="text-electric mx-auto mb-4" />
                    <div className="text-3xl font-bold text-electric mb-2">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-background rounded-2xl p-6 border">
              <h4 className="font-bold mb-4">What Sets Us Apart</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Industry-specific expertise across 12+ verticals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Average project ROI of 250% within 6 months</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Dedicated project manager and direct designer access</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">30-day post-launch support and optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Client Success Stories</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-electric/20">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-gold fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
