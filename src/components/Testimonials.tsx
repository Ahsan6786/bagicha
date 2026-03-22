"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arjun Verma",
    role: "Culinary Critic",
    quote: "The Champaran handi lamb at Bagicha is an absolute revelation. Authentic, slow-cooked perfection set amidst breathtaking greenery.",
  },
  {
    name: "Meera S.",
    role: "Travel Journalist",
    quote: "The fusion of rural Bihar's raw charm with such elevated luxury is unmatched. Sleeping in the Mitti Vibe suites was deeply grounding.",
  },
  {
    name: "Rajesh & Priya",
    role: "Event Hosts",
    quote: "We hosted our anniversary under the Lantern Trail. The artisanal touch in every corner made the evening unforgettable.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-background border-t border-brand-primary/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary italic mb-6">
              Voices of the Estate
            </h2>
            <div className="w-16 h-1 bg-brand-secondary/30 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-brand-surface rounded-[2rem] p-8 md:p-10 border border-brand-primary/5 hover:border-brand-primary/10 hover:drop-shadow-xl transition-all duration-300"
            >
              <div className="text-4xl font-serif text-brand-accent/40 mb-4">"</div>
              <p className="text-brand-primary/80 font-light text-lg leading-relaxed mb-8 italic">
                {t.quote}
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-serif text-brand-primary text-xl">{t.name}</h4>
                  <p className="text-brand-primary/60 text-xs font-bold uppercase tracking-widest mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
