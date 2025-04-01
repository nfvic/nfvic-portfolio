
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding pt-24"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in [animation-delay:200ms]">
            <h2 className="text-primary font-medium text-xl mb-1">Hello, I'm</h2>
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient">John Doe</span>
            </h1>
          </div>
          
          <div className="animate-fade-in [animation-delay:600ms]">
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-6">
              I create <span className="text-primary">beautiful</span> & <span className="text-primary">functional</span> web experiences
            </h2>
          </div>
          
          <div className="animate-fade-in [animation-delay:800ms]">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              A passionate web developer with a keen eye for detail and a love for creating 
              responsive, user-friendly websites that leave a lasting impression.
            </p>
          </div>
          
          <div className="animate-fade-in [animation-delay:1000ms] flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center sm:text-left"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center sm:text-left"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll to projects section"
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2 text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-0 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
    </section>
  );
};

export default Hero;
