"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Small delay to allow sheet to close first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Default styles that match server-side rendering
  const headerBgClass = mounted && isScrolled ? 'bg-ivory/90 shadow-md' : 'bg-transparent';
  const textColorClass = mounted && isScrolled ? 'text-forest-green' : 'text-ivory';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 backdrop-blur-sm transition-all duration-200 ${headerBgClass}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-gold" />
          <span className={`text-2xl font-lora font-bold hidden sm:block ${textColorClass}`}>
            Yard Men
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`font-medium text-sm transition-colors duration-200 hover:text-gold ${textColorClass}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Call Now Button */}
        <Button 
          className="hidden md:flex bg-gold hover:bg-gold/90 text-forest-green font-medium"
          onClick={() => window.location.href = 'tel:+15873250786'}
        >
          Call Now
        </Button>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-ivory w-[300px]">
            <nav className="flex flex-col space-y-4 mt-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-forest-green hover:text-gold py-2 text-lg font-medium transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                className="bg-gold hover:bg-gold/90 text-forest-green font-medium mt-4"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = 'tel:+15873250786';
                }}
              >
                Call Now
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}