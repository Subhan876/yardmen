"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    id: 'fences',
    title: 'Fences',
    image: '/images/fence.jpg'
  },
  {
    id: 'decks',
    title: 'Decks',
    image: '/images/decks.jpg'
  },
  {
    id: 'pavers',
    title: 'Pavers & Gazebos',
    image: '/images/gazebo.jpg'
  },
  {
    id: 'sod',
    title: 'Sod Installation',
    image: '/images/sod.jpg'
  },
  {
    id: 'rocks',
    title: 'Decorative Rocks & Planters',
    image: '/images/decorative.jpg'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-ivory">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="text-center text-forest-green/80 max-w-3xl mx-auto mb-12">
            From fencing and decks to sod installation and decorative features, we offer a comprehensive range of professional landscaping services.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-lora font-medium text-ivory mb-6">{service.title}</h3>
                      <Button 
                        className="w-full bg-gold hover:bg-gold/90 text-forest-green font-medium
                          transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}