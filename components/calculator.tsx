"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  yardSize: z.string().min(1, {
    message: 'Please enter your yard size.',
  }),
  serviceType: z.string().min(1, {
    message: 'Please select a service type.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function Calculator() {
  const [isCalculating, setIsCalculating] = useState(false);
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yardSize: '',
      serviceType: '',
    },
  });

  function onSubmit(values: FormValues) {
    setIsCalculating(true);
    setEstimate(null);
    
    // Simulate API call delay
    setTimeout(() => {
      const yardSize = parseInt(values.yardSize);
      
      let lowPrice = 0;
      let highPrice = 0;
      
      // Calculate price based on service type using new pricing structure
      switch (values.serviceType) {
        case 'fence':
          lowPrice = yardSize * 35;
          highPrice = yardSize * 65;
          break;
        case 'deck':
          lowPrice = yardSize * 25;
          highPrice = yardSize * 70;
          break;
        case 'concrete':
          lowPrice = yardSize * 10;
          highPrice = yardSize * 30;
          break;
        case 'pavers':
          lowPrice = yardSize * 18;
          highPrice = yardSize * 40;
          break;
        case 'sod':
          lowPrice = yardSize * 1.15;
          highPrice = yardSize * 2.30;
          break;
        case 'rocks':
          lowPrice = yardSize * 4;
          highPrice = yardSize * 18;
          break;
        default:
          lowPrice = yardSize * 10;
          highPrice = yardSize * 30;
      }
      
      const totalLow = Math.round(lowPrice);
      const totalHigh = Math.round(highPrice);
      
      setEstimate({ low: totalLow, high: totalHigh });
      setIsCalculating(false);
    }, 1500);
  }

  return (
    <section id="calculator" className="py-20 bg-forest-green">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-lora font-medium text-ivory mb-6 text-center">
            Get an Instant Estimate
          </h2>
          <p className="text-center text-ivory/80 max-w-3xl mx-auto mb-12">
            Enter your project details below for a quick estimate. For a detailed quote, our experts are ready to visit your property.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card bg-ivory/10 backdrop-blur-md border border-ivory/20 p-8 rounded-lg"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="yardSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ivory">Yard Size (sq ft)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="e.g., 1000" 
                          {...field} 
                          className="bg-ivory/20 border-ivory/30 text-ivory placeholder:text-ivory/50"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ivory">Service Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-ivory/20 border-ivory/30 text-ivory">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="fence">Fencing ($35-$65/sq ft)</SelectItem>
                          <SelectItem value="deck">Deck Installation ($25-$70/sq ft)</SelectItem>
                          <SelectItem value="concrete">Concrete Work ($10-$30/sq ft)</SelectItem>
                          <SelectItem value="pavers">Pavers ($18-$40/sq ft)</SelectItem>
                          <SelectItem value="sod">Sod Installation ($1.15-$2.30/sq ft)</SelectItem>
                          <SelectItem value="rocks">Decorative Rocks ($4-$18/sq ft)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-gold/90 text-forest-green font-medium py-6 text-lg
                    transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                  disabled={isCalculating}
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      <span>Calculating...</span>
                    </div>
                  ) : 'Calculate Estimate'}
                </Button>
              </form>
            </Form>
            
            {estimate && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-center"
              >
                <div className="bg-ivory/10 backdrop-blur-md rounded-lg p-6 border border-ivory/20">
                  <h3 className="text-xl font-medium text-ivory mb-2">Your Estimate</h3>
                  <p className="text-3xl font-bold text-gold mb-4">
                    ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}
                  </p>
                  <p className="text-ivory/80 mb-6">
                    This is a preliminary estimate. Get a precise quote from our experts.
                  </p>
                  <Button
                    className="bg-gold hover:bg-gold/90 text-forest-green font-medium py-6 px-8 text-lg w-full
                      transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Detailed Quote
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}