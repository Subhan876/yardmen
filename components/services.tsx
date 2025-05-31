"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Fence, Building2, Blocks, Warehouse, Sprout, Mountain, Flower as FlowerBouquet } from 'lucide-react';

const services = [
  {
    id: 'fences',
    title: 'Fences',
    icon: <Fence className="h-6 w-6" />,
    description: 'High-quality fencing solutions for privacy, security, and curb appeal.',
    types: ['Vinyl', 'Wood', 'Farm', 'Cedar', 'Chain Link'],
    image: '/images/fence.jpg'
  },
  {
    id: 'decks',
    title: 'Decks',
    icon: <Building2 className="h-6 w-6" />,
    description: 'Custom decks that extend your living space into the outdoors.',
    types: ['Composite', 'Dura', 'Cedar', 'Wood'],
    image: '/images/decks.jpg'
  },
  {
    id: 'concrete',
    title: 'Concrete',
    icon: <Blocks className="h-6 w-6" />,
    description: 'Durable concrete solutions for pathways, patios, and more.',
    types: ['Paths', 'Patios', 'Driveways', 'Stamped Concrete'],
    image: '/images/concrete.jpg'
  },
  {
    id: 'pavers',
    title: 'Pavers & Gazebos',
    icon: <Warehouse className="h-6 w-6" />,
    description: 'Beautiful stone pavers and custom gazebos for outdoor entertainment.',
    types: ['Brick Pavers', 'Stone Pavers', 'Wooden Gazebos', 'Aluminum Gazebos'],
    image: '/images/gazebo.jpg'
  },
  {
    id: 'sod',
    title: 'Sod Installation',
    icon: <Sprout className="h-6 w-6" />,
    description: 'Transform your yard with fresh, green sod for instant results.',
    types: ['Kentucky Bluegrass', 'Bermuda', 'Fescue', 'St. Augustine'],
    image: '/images/sod.jpg'
  },
  {
    id: 'rocks',
    title: 'Decorative Rocks & Planters',
    icon: <Mountain className="h-6 w-6" />,
    description: 'Add texture and dimension with decorative rocks and custom planters.',
    types: ['River Rock', 'Lava Rock', 'Limestone', 'Custom Planters'],
    image: '/images/decorative.jpg'
  },
  {
    id: 'addons',
    title: 'Backyard Add-Ons',
    icon: <FlowerBouquet className="h-6 w-6" />,
    description: 'Enhance your outdoor space with custom features and plantings.',
    types: ['Planter Boxes', 'Flower Beds', 'Fruit Trees', 'Ornamental Trees'],
    image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

export function Services() {
  const [activeTab, setActiveTab] = useState('fences');
  
  return (
    <section id="services\" className="py-20 bg-ivory">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="text-center text-forest-green/80 max-w-3xl mx-auto mb-12">
            From fencing and decks to sod installation and decorative features, we offer a comprehensive range of professional landscaping services to transform your outdoor space.
          </p>
        </motion.div>

        <Tabs defaultValue="fences" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent h-auto">
            {services.map((service) => (
              <TabsTrigger 
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-forest-green data-[state=active]:text-ivory rounded-md flex items-center gap-2 m-1 px-4 py-2"
              >
                {service.icon}
                <span className="hidden md:inline">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="bg-forest-green/5 p-8 rounded-lg">
                  <h3 className="text-2xl font-lora font-medium mb-4 text-forest-green">{service.title}</h3>
                  <p className="mb-6 text-forest-green/80">{service.description}</p>
                  
                  <h4 className="text-lg font-medium mb-3">Types:</h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {service.types.map((type, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}