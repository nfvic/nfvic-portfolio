
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/80 dark:bg-background/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gradient">Portfolio</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a onClick={() => scrollToSection('home')} className="link-hover cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('projects')} className="link-hover cursor-pointer">Projects</a>
          <a onClick={() => scrollToSection('skills')} className="link-hover cursor-pointer">Skills</a>
          <a onClick={() => scrollToSection('contact')} className="link-hover cursor-pointer">Contact</a>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Navigation */}
        <div 
          className={cn(
            "fixed inset-0 bg-background dark:bg-background z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <button 
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <div className="w-6 h-0.5 bg-foreground rotate-45 absolute"></div>
            <div className="w-6 h-0.5 bg-foreground -rotate-45 absolute"></div>
          </button>
          
          <a onClick={() => scrollToSection('home')} className="text-2xl font-medium link-hover">Home</a>
          <a onClick={() => scrollToSection('projects')} className="text-2xl font-medium link-hover">Projects</a>
          <a onClick={() => scrollToSection('skills')} className="text-2xl font-medium link-hover">Skills</a>
          <a onClick={() => scrollToSection('contact')} className="text-2xl font-medium link-hover">Contact</a>
          <div className="pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
