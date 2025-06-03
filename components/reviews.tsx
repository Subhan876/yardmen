"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Mustafa Rao',
    rating: 5,
    text: 'I recently got my fence and deck done from these guys and was very happy with the experience, would definitely recommend.'
  },
  {
    name: 'Walid Rana',
    rating: 5,
    text: 'Gave this new and upcoming landscaping company a try after getting ridiculous quotes from other landscaping companies and I can definitely recommend these guys for the job. Shahab and Syed were very professional and helpful in their work — "from the free quotes to the attention to detail." 5/5 I would recommend these guys for your landscaping needs.'
  },
  {
    name: 'Ashu Mendhiratta',
    rating: 5,
    text: 'Highly recommended. One hundred percent genuine, very polite and listen to you. Syed has done a wonderful landscaping. He planted a new tree of my choice and beautiful flowerbed.'
  },
  {
    name: 'Umer Azeem',
    rating: 5,
    text: 'Quality work with the best price.'
  },
  {
    name: 'Subatin Khan',
    rating: 5,
    text: 'Your men did an incredible job from start to finish. They were on time, respectful, and worked with care and attention to detail. What really stood out was how professional and kind they were throughout the entire process. Highly recommended!'
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-20 bg-forest-green text-ivory">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-ivory">Customer Testimonials</h2>
          <p className="text-center text-ivory/80 max-w-3xl mx-auto mb-12">
            Read what our satisfied customers have to say about their experience working with Yard Men.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden py-10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.5 }}
                className="glass-card bg-ivory/10 p-8 md:p-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex mb-4">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-gold fill-gold"
                      />
                    ))}
                  </div>
                  <p className="text-ivory/90 italic text-lg mb-6 font-inter">
                    {reviews[currentIndex].text}
                  </p>
                  <h3 className="text-xl font-medium font-lora text-gold">
                    {reviews[currentIndex].name}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 md:-translate-x-10 bg-forest-green/80 hover:bg-forest-green text-ivory rounded-full p-2 focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 md:translate-x-10 bg-forest-green/80 hover:bg-forest-green text-ivory rounded-full p-2 focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold' : 'bg-ivory/30 hover:bg-ivory/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quote Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Button
            className="bg-gold hover:bg-gold/90 text-forest-green font-medium text-lg px-12 py-6
              transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Free Quote Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}