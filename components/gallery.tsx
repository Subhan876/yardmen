"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

const galleryItems = [
  {
    id: 1,
    category: 'fences',
    title: 'Cedar Privacy Fence',
    description: 'Custom 6-foot cedar privacy fence with lattice top',
    image: '/images/fence.webp'
  },
  {
    id: 2,
    category: 'decks',
    title: 'Composite Deck',
    description: 'Modern composite deck with built-in seating and planters',
    image: '/images/decks.webp'
  },
  {
    id: 3,
    category: 'concrete',
    title: 'Stamped Concrete Patio',
    description: 'Stamped concrete patio with custom coloring and border',
    image: '/images/concrete.webp'
  },
  {
    id: 4,
    category: 'pavers',
    title: 'Brick Paver Walkway',
    description: 'Herringbone pattern brick paver walkway with landscape lighting',
    image: '/images/gazebo.webp'
  },
  {
    id: 5,
    category: 'sod',
    title: 'New Sod Installation',
    description: 'Complete yard renovation with premium Kentucky bluegrass sod',
    image: '/images/sod.webp'
  },
  {
    id: 6,
    category: 'rocks',
    title: 'River Rock Border',
    description: 'River rock garden border with drought-resistant plants',
    image: '/images/decorative.webp'
  },
  {
    id: 7,
    category: 'addons',
    title: 'Custom Planter Boxes',
    description: 'Cedar planter boxes with seasonal flowers',
    image: 'https://images.pexels.com/photos/9320384/pexels-photo-9320384.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 8,
    category: 'fences',
    title: 'Vinyl Ranch Fencing',
    description: 'White vinyl ranch-style fencing for large property',
    image: '/images/fence.webp'
  }
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'fences', name: 'Fences' },
  { id: 'decks', name: 'Decks' },
  { id: 'concrete', name: 'Concrete' },
  { id: 'pavers', name: 'Pavers' },
  { id: 'sod', name: 'Sod' },
  { id: 'rocks', name: 'Rocks' },
  { id: 'addons', name: 'Add-Ons' }
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | { 
    image: string; 
    title: string; 
    description: string; 
  }>(null);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-forest-green/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Project Gallery</h2>
          <p className="text-center text-forest-green/80 max-w-3xl mx-auto mb-8">
            Browse through our portfolio of completed projects to get inspired for your own outdoor transformation.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={
                selectedCategory === category.id 
                  ? "bg-forest-green text-ivory" 
                  : "bg-transparent text-forest-green border-forest-green/30"
              }
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => setSelectedImage({
                  image: item.image,
                  title: item.title,
                  description: item.description
                })}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-ivory text-lg font-medium">{item.title}</h3>
                    <p className="text-ivory/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        {selectedImage && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>{selectedImage.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}