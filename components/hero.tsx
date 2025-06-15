"use client";

import { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.8 });
    };
    animation();
  }, [animate, scope]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: "url('/images/hero-section.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/90 via-forest-green/80 to-black/90 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="container relative z-20 text-center px-6 pt-32 pb-20">
        <motion.div
          ref={scope}
          initial={{ opacity: 0, y: 50 }}
          className="space-y-8 max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-lora font-bold text-ivory leading-tight">
            We Build It Right,
            <span className="block text-gold mt-2">Right From the Start</span>
          </h1>
          
          {/* Enhanced Subheadline */}
          <p className="text-xl md:text-2xl text-ivory/90 max-w-3xl mx-auto mb-8 font-inter backdrop-blur-sm">
            Transform Your Yard with Calgary&apos;s Trusted Landscaping Experts
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              className="bg-gold hover:bg-gold/90 text-forest-green font-medium text-lg px-8 py-6 w-full sm:w-auto
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              className="bg-ivory/10 hover:bg-ivory/20 backdrop-blur-md text-ivory border-ivory/30 font-medium 
                text-lg px-8 py-6 w-full sm:w-auto transform transition-all duration-300 
                hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Calculate Estimate
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {['15+ Years Experience', '1000+ Projects Completed', '100% Satisfaction'].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <span className="text-ivory/80 font-inter text-sm md:text-base">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{ 
          delay: 1.1,
          repeat: Infinity, 
          duration: 2
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a 
          href="#why-choose"
          className="text-ivory/90 hover:text-gold transition-colors p-2"
          aria-label="Scroll to learn more"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </motion.div>
    </section>
  );
}