
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProject from '@/components/FeaturedProject';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <FeaturedProject />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
