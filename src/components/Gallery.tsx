"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = ["/enter.png", "/interior.png", "/k.png", "/2.png", "/3.png", "/4.png"];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-brand-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-5xl font-serif italic text-brand-primary mb-6">
              A Glimpse of Bagicha
            </h2>
            <p className="text-brand-primary/80 text-lg font-light leading-relaxed">
              Discover the lush greenery, exquisite interiors, and slow-cooked culinary masterpieces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[150px] sm:auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                index === 1 || index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Actual Image */}
              <Image 
                src={src} 
                alt={`Bagicha Gallery ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-110 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
