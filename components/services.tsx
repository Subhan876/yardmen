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
    description: 'High-quality fencing solutions for privacy, security, and curb appeal.',
    types: ['Vinyl', 'Wood', 'Farm', 'Cedar', 'Chain Link'],
    image: '/images/fence.jpg'
  },
  {
    id: 'decks',
    title: 'Decks',
    description: 'Custom decks that extend your living space into the outdoors.',
    types: ['Composite', 'Dura', 'Cedar', 'Wood'],
    image: '/images/decks.jpg'
  },
  {
    id: 'concrete',
    title: 'Concrete',
    description: 'Durable concrete solutions for pathways, patios, and more.',
    types: ['Paths', 'Patios', 'Driveways', 'Stamped Concrete'],
    image: '/images/concrete.jpg'
  },
  {
    id: 'pavers',
    title: 'Pavers & Gazebos',
    description: 'Beautiful stone pavers and custom gazebos for outdoor entertainment.',
    types: ['Brick Pavers', 'Stone Pavers', 'Wooden Gazebos', 'Aluminum Gazebos'],
    image: '/images/gazebo.jpg'
  },
  {
    id: 'sod',
    title: 'Sod Installation',
    description: 'Transform your yard with fresh, green sod for instant results.',
    types: ['Kentucky Bluegrass', 'Bermuda', 'Fescue', 'St. Augustine'],
    image: '/images/sod.jpg'
  },
  {
    id: 'rocks',
    title: 'Decorative Rocks & Planters',
    description: 'Add texture and dimension with decorative rocks and custom planters.',
    types: ['River Rock', 'Lava Rock', 'Limestone', 'Custom Planters'],
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
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-lora font-medium text-ivory mb-2">{service.title}</h3>
                      <p className="text-ivory/90 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.types.map((type, index) => (
                          <span key={index} className="text-sm bg-gold/20 text-ivory px-2 py-1 rounded">
                            {type}
                          </span>
                        ))}
                      </div>
                      <Button 
                        className="w-full bg-gold hover:bg-gold/90 text-forest-green"
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