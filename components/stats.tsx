"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Trophy, CheckCircle2 } from 'lucide-react';

const stats = [
  {
    title: "Years of Experience",
    value: "15+",
    icon: <Calendar className="h-8 w-8 text-gold" />,
    description: "Serving our community since 2010"
  },
  {
    title: "Projects Completed",
    value: "1000+",
    icon: <Trophy className="h-8 w-8 text-gold" />,
    description: "Transforming yards across the region"
  },
  {
    title: "Customer Satisfaction",
    value: "100%",
    icon: <CheckCircle2 className="h-8 w-8 text-gold" />,
    description: "Our commitment to excellence"
  }
];

export function Stats() {
  return (
    <section className="py-16 bg-forest-green text-ivory">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-ivory/10 backdrop-blur-md border-ivory/20 text-center h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                <CardContent className="pt-6">
                  <motion.div 
                    className="flex justify-center mb-4"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: index * 0.2 + 0.2
                    }}
                  >
                    <div className="bg-gold/10 p-4 rounded-full">
                      {stat.icon}
                    </div>
                  </motion.div>
                  <motion.h3 
                    className="text-4xl font-bold text-gold mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <motion.h4 
                    className="text-xl font-medium text-[#f5f5ef] mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {stat.title}
                  </motion.h4>
                  <motion.p 
                    className="text-ivory/80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {stat.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}