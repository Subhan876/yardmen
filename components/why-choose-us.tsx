"use client";

import { motion } from 'framer-motion';
import { Clock, Award, CalendarCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Reliable & Detail-Oriented',
    description: 'We take pride in our precision and reliability. Every project is completed on time, on budget, and with meticulous attention to detail.',
    icon: <Clock className="h-10 w-10 text-gold" />,
  },
  {
    title: 'Referral-Driven Trust',
    description: 'Our business grows through word-of-mouth and referrals from satisfied customers. We value the trust our clients place in us.',
    icon: <Award className="h-10 w-10 text-gold" />,
  },
  {
    title: 'White-Glove Scheduling',
    description: 'We work around your schedule and keep you informed throughout the project. Our process is designed for your convenience.',
    icon: <CalendarCheck className="h-10 w-10 text-gold" />,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose\" className="py-20 bg-ivory">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Why Choose Yard Men</h2>
          <p className="text-center text-forest-green/80 max-w-3xl mx-auto mb-12">
            Discover what sets us apart and why homeowners throughout the region trust us with their outdoor transformations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-white/30 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden">
                <CardHeader className="pb-2">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.1 + 0.3 }}
                    className="mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-forest-green">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-green/80">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}