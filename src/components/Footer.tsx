
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const footerLinks = {
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Work', href: '#work' },
      { name: 'Process', href: '#process' },
      { name: 'Contact', href: '#contact' },
    ],
    Services: [
      { name: 'Web Design', href: '#services' },
      { name: 'Brand Strategy', href: '#services' },
      { name: 'Interactive Experiences', href: '#services' },
      { name: 'SEO & Performance', href: '#services' },
    ],
    Resources: [
      { name: 'Case Studies', href: '#work' },
      { name: 'Blog', href: '#' },
      { name: 'Design System', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-electric/20">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-grotesk font-bold text-3xl mb-4 hover:scale-105 transition-transform cursor-pointer">
              <span className="text-electric text-glow">DC</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We craft digital experiences that build brands and drive results. 
              Specializing in premium web design for high-ticket clients.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center text-electric hover:bg-electric hover:text-electric-foreground transition-all duration-300 hover:glow-electric hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-electric">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-electric transition-all duration-200 hover:translate-x-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-electric/20">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Digi Craft. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-electric transition-colors hover:scale-105">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-electric transition-colors hover:scale-105">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-electric transition-colors hover:scale-105">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
