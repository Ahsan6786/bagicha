"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-brand-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Entrance Photo */}
            <div className="relative aspect-[4/5] rounded-[4rem] sm:rounded-[6rem] md:rounded-[8rem] overflow-hidden group shadow-2xl z-10 border border-brand-primary/10 transform-gpu isolate">
              <Image
                src="/enter.png"
                alt="Bagicha Entrance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out will-change-transform"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Decorative overlay for luxury feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/40 to-transparent pointer-events-none mix-blend-multiply" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
            
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-bold tracking-[0.2em] uppercase dark:bg-brand-primary/20">
              {t("ourHeritage")}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-brand-primary italic tracking-tight leading-tight" dangerouslySetInnerHTML={{__html: t("artisanalEarth").replace(' ', ' <br/> ')}}>
            </h2>
            
            <p className="text-lg text-brand-primary/80 leading-relaxed font-light">
              {t("aboutP1")}
            </p>
            
            <p className="text-lg text-brand-primary/80 leading-relaxed font-light">
              {t("aboutP2")}
            </p>
            
            <div className="pt-4 flex items-center gap-4">
              <a 
                href="https://maps.app.goo.gl/322YQHSAX14GrBHv9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent text-brand-primary rounded-full hover:bg-brand-accent/90 transition-colors font-medium text-sm md:text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 border-none dark:text-brand-background"
              >
                <MapPin size={18} />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
