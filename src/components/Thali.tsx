"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Thali() {
  const [showSecondThali, setShowSecondThali] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Auto-transition between the two thalis every 4 seconds
    const interval = setInterval(() => {
      setShowSecondThali((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="thali" className="py-24 md:py-48 bg-brand-surface relative overflow-hidden flex flex-col items-center justify-start min-h-[100vh]">
      <div className="container mx-auto px-6 text-center z-20 relative">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-brand-accent text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 block drop-shadow-sm">
            {t("culinaryMasterpiece")}
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-brand-primary italic mb-16 drop-shadow-lg">
            {t("theRoyalThalis")}
          </h2>
        </div>
      </div>

      {/* Massive Thali Image - Static size, perfectly centered */}
      <div className="relative flex items-center justify-center w-[95vw] h-[95vw] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] z-10 drop-shadow-[0_45px_65px_rgba(15,61,46,0.35)]">
        
        {/* First Thali */}
        <motion.div 
          animate={{ opacity: showSecondThali ? 0 : 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* thali1.png has more transparent padding, so we scale it up to match thali2.png */}
          <div className="relative w-full h-full scale-[1.65]">
            <Image
              src="/thali1.png"
              alt="The Mithila Thali"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>
        </motion.div>
        
        {/* Second Thali */}
        <motion.div 
          animate={{ opacity: showSecondThali ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/thali2.png"
            alt="The Magadh Thali"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </motion.div>

        {/* Dynamic Badge for Thali Names */}
        <div className="absolute -bottom-4 md:-bottom-12 left-1/2 -translate-x-1/2 w-64 h-12 flex items-center justify-center z-30">
          <div className="absolute inset-0 bg-brand-surface/80 backdrop-blur-md border border-brand-primary/10 rounded-full drop-shadow-lg" />
          <motion.span 
            animate={{ opacity: showSecondThali ? 0 : 1 }} 
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute font-serif text-lg md:text-xl italic text-brand-primary tracking-wide whitespace-nowrap"
          >
            {t("mithilaThali")}
          </motion.span>
          <motion.span 
            animate={{ opacity: showSecondThali ? 1 : 0 }} 
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute font-serif text-lg md:text-xl italic text-brand-primary tracking-wide whitespace-nowrap"
          >
            {t("magadhThali")}
          </motion.span>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-20 relative mt-24 md:mt-32">
        <p className="text-brand-primary/90 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto bg-brand-surface/70 backdrop-blur-xl p-8 rounded-[2rem] border border-brand-primary/10 shadow-2xl">
          {t("thaliDesc")}
        </p>
      </div>
      
      {/* Decorative background radial blur to pop the image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[900px] md:h-[900px] bg-gradient-to-tr from-brand-accent/20 to-brand-primary/10 rounded-full blur-[120px] -z-0 pointer-events-none" />
    </section>
  );
}
