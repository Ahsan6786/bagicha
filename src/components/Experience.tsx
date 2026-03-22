"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t("luxuryInterior"),
      subtitle: t("theAmbience"),
      desc: t("luxuryDesc"),
      image: "/interior.png",
      colSpan: "md:col-span-12",
      height: "h-[300px] sm:h-[400px] md:h-[600px]",
      featured: true
    },
    {
      title: t("charpaiLounge"),
      subtitle: t("signatureOutdoor"),
      desc: t("charpaiDesc"),
      image: "/k.png",
      colSpan: "md:col-span-12",
      height: "h-[300px] sm:h-[400px] md:h-[600px]",
    },
  ];

  return (
    <section id="experiences" className="py-24 md:py-32 px-6 bg-brand-surface relative z-10 w-full dark:bg-brand-background/50">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              {t("curatedEscapes")}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-brand-primary italic mb-6">
              {t("craftedExperiences")}
            </h2>
            <div className="w-24 h-1 bg-brand-secondary/30 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* The Grid layout starts here */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-24 w-full">
          
          {/* Featured Full Width: Luxury Interior */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col gap-6 ${experiences[0].colSpan}`}
          >
            <div className={`relative w-full ${experiences[0].height} rounded-[4rem] sm:rounded-[6rem] md:rounded-[8rem] overflow-hidden group shadow-lg isolate transform-gpu`}>
              <Image 
                src={experiences[0].image as string} 
                alt={experiences[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out will-change-transform"
                sizes="100vw"
              />
            </div>
            <div className="px-4 text-center md:text-left max-w-3xl mx-auto md:mx-0">
              <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                {experiences[0].subtitle}
              </span>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-primary italic mb-4">
                {experiences[0].title}
              </h3>
              <p className="text-brand-primary/70 font-light text-base md:text-lg leading-relaxed max-w-2xl">
                {experiences[0].desc}
              </p>
            </div>
          </motion.div>

          {/* Large Main Card: Charpai Lounge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`flex flex-col gap-6 ${experiences[1].colSpan}`}
          >
            <div className={`relative w-[calc(100%+3rem)] -mx-6 md:w-full md:mx-0 ${experiences[1].height} rounded-none md:rounded-[8rem] overflow-hidden group shadow-md isolate transform-gpu`}>
              <Image 
                src={experiences[1].image as string} 
                alt={experiences[1].title}
                fill
                className="object-cover scale-[1.05] group-hover:scale-[1.10] transition-transform duration-[2.5s] ease-out will-change-transform"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
            <div className="px-4 text-center md:text-left max-w-3xl mx-auto md:mx-0">
              <span className="text-brand-accent text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                {experiences[1].subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-primary italic mb-4">
                {experiences[1].title}
              </h3>
              <p className="text-brand-primary/70 font-light text-sm md:text-lg leading-relaxed max-w-2xl">
                {experiences[1].desc}
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
