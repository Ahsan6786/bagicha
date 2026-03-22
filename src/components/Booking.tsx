"use client";

import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-brand-surface relative z-10 w-full overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-background border border-brand-primary/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 drop-shadow-2xl text-center"
        >
          <span className="text-brand-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Reservations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary italic mb-6">
            Reserve Your Experience
          </h2>
          <p className="text-brand-primary/70 text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto mb-12">
            Escape to the earth's luxury. Complete the fields below to inquire about dining or estates.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium tracking-wide text-brand-primary/80">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-brand-surface border border-brand-primary/10 text-brand-primary px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-medium tracking-wide text-brand-primary/80">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-brand-surface border border-brand-primary/10 text-brand-primary px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all"
                placeholder="jane@example.com"
              />
            </div>

            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="type" className="text-sm font-medium tracking-wide text-brand-primary/80">Inquiry Type</label>
              <select 
                id="type" 
                className="w-full bg-brand-surface border border-brand-primary/10 text-brand-primary px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all appearance-none"
              >
                <option>Reserve a Table</option>
                <option>Book a Stay</option>
                <option>Host an Event</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="date" className="text-sm font-medium tracking-wide text-brand-primary/80">Preferred Date</label>
              <input 
                type="date" 
                id="date" 
                className="w-full bg-brand-surface border border-brand-primary/10 text-brand-primary/60 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all"
              />
            </div>

            <div className="md:col-span-2 pt-6">
              <button 
                type="button"
                className="w-full bg-brand-primary text-brand-surface py-4 rounded-xl font-medium tracking-wide hover:bg-brand-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
