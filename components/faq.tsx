"use client";

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What's the best time of year to install sod?",
    answer: "The ideal time to install sod is during the spring or fall when temperatures are cooler and rainfall is more consistent. However, with proper irrigation, sod can be installed any time during the growing season. We recommend avoiding installation during extreme heat or freezing conditions for optimal results."
  },
  {
    question: "How long does a fence installation typically take?",
    answer: "The timeline for fence installation depends on several factors including the length, type, and complexity of the project. A standard residential fence installation typically takes 2-5 days. Factors that might extend this timeline include difficult terrain, weather delays, or custom design elements."
  },
  {
    question: "What's your service area?",
    answer: "We currently serve the greater metropolitan area and surrounding suburbs within a 50-mile radius. This includes all major neighborhoods and adjacent communities. For projects outside this range, please contact us for special arrangements."
  },
  {
    question: "Do you provide ongoing maintenance services?",
    answer: "Yes, we offer comprehensive maintenance packages for all our landscaping projects. This includes seasonal care, pruning, fertilization, and general upkeep. We can customize a maintenance schedule based on your specific needs and property requirements."
  },
  {
    question: "How should I prepare my yard before you arrive?",
    answer: "For most projects, we handle all necessary preparation. However, it's helpful if you can clear the work area of personal items, mark any irrigation lines or utilities you're aware of, and ensure we have access to the project area. We'll provide specific preparation instructions based on your project before we begin work."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we stand behind our craftsmanship with a comprehensive warranty. All installations come with a 1-year workmanship warranty, and most materials have manufacturer warranties ranging from 5-25 years depending on the product. We'll provide detailed warranty information specific to your project in your contract."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, checks, and electronic transfers. For larger projects, we typically require a deposit to secure your spot on our schedule, with the remaining balance due upon completion. We can also discuss payment plans for qualifying projects."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-20 bg-ivory">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-center text-forest-green/80 max-w-3xl mx-auto mb-12">
            Find answers to common questions about our services, processes, and what to expect when working with Yard Men.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="glass-card overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-forest-green hover:text-forest-green/80 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-forest-green/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}