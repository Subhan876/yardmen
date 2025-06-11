"use client";

import { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';

export function About() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.8 });
    };
    animation();
  }, [animate, scope]);

  return (
    <section id="about" className="py-20 bg-forest-green/5">
      <div className="container">
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
        >
          <h2 className="section-title">Our Story</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Yard Men team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded-lg">
              <p className="text-forest-green font-bold text-xl">15+ Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-forest-green/80">
              Founded in 2010, Yard Men began with a simple mission: to provide exceptional landscaping services that transform ordinary outdoor spaces into extraordinary environments where families can create lasting memories.
            </p>
            
            <p className="text-lg text-forest-green/80">
              What started as a small team with a single truck has grown into a full-service landscaping company with a reputation for quality, reliability, and attention to detail. Our founder, who began mowing lawns as a teenager, built this company on the principles of hard work, honest pricing, and treating every yard as if it were our own.
            </p>
            
            <p className="text-lg text-forest-green/80">
              Today, our team of skilled professionals brings decades of combined experience to every project. We remain committed to our founding values while embracing innovative techniques and sustainable practices that benefit both our clients and the environment.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-forest-green font-bold text-xl">1000+</span>
                </div>
                <span className="text-forest-green font-medium">Projects Completed</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-forest-green font-bold text-xl">98%</span>
                </div>
                <span className="text-forest-green font-medium">Customer Satisfaction</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-forest-green font-bold text-xl">15+</span>
                </div>
                <span className="text-forest-green font-medium">Years of Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}