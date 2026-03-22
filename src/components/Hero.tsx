"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, setIsBookingModalOpen } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the hero content
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Subtle parallax for the tree frame
  const yTree = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85svh] md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-background pt-24 md:pt-20"
    >
      {/* 
        Tree Branch Frame 
        We use an absolute div that stretches to the top/left/right 
        to act like a natural frame.
      */}
      <motion.div 
        style={{ y: yTree }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex"
      >
        <Image 
          src="/tree.jpg"
          alt="Lush green tree branch frame"
          fill
          className="object-contain sm:object-cover object-top opacity-95 block mix-blend-multiply"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        {/* Soft gradient overlay to fade out the hard bottom edge of the image if any */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-background/90" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-start h-full pt-16 md:pt-24 lg:pt-32">
        {/* The word Bagicha isolated between the branches */}
        <motion.h1 
          style={{ y: yContent, opacity: opacityContent }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-serif text-brand-primary leading-[1] italic tracking-tight drop-shadow-lg text-center w-full"
        >
          {t("bagicha")}
        </motion.h1>

        {/* Resort & Restaurant text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-3xl font-serif italic text-brand-accent mb-8 md:mb-10 tracking-widest mt-[-0.5rem] md:mt-[-1rem]"
        >
          Resort & Restaurant
        </motion.p>

        {/* The rest of the content pushed down below the branches */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="flex flex-col items-center text-center mt-[15vh] sm:mt-[20vh] md:mt-[25vh] pb-12 z-40 relative"
        >
          <span className="inline-block mb-4 md:mb-6 tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase text-brand-secondary bg-brand-background/50 backdrop-blur-sm px-4 py-1.5 rounded-full">
            {t("graminLuxe")}
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-serif text-brand-secondary mb-6 md:mb-8 italic drop-shadow-sm">
            {t("whereRootsMeet")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-brand-primary/90 max-w-xs sm:max-w-md md:max-w-2xl mx-auto font-light leading-relaxed mb-8 md:mb-12 bg-brand-background/30 backdrop-blur-md rounded-2xl p-4 md:p-0 md:bg-transparent md:backdrop-blur-none">
            {t("heroDesc")}
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 w-full px-4 max-w-sm mx-auto">
            <div className="flex flex-col sm:flex-row w-full gap-3 md:gap-4">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="flex-1 px-6 py-3 md:py-4 bg-brand-primary text-brand-background rounded-full text-sm md:text-base font-medium hover:bg-brand-primary/90 transition-colors cursor-pointer overflow-hidden group relative shadow-xl text-center"
              >
                <span className="relative z-10">{t("bookStay")}</span>
              </button>
              <Link 
                href="/tour"
                className="flex-1 px-6 py-3 md:py-4 bg-brand-accent text-brand-primary dark:text-brand-background rounded-full text-sm md:text-base font-medium hover:bg-brand-accent/90 transition-colors overflow-hidden group relative shadow-xl text-center"
              >
                <span className="relative z-10">{t("watchTour")}</span>
              </Link>
            </div>
            <Link 
              href="#menu"
              className="w-full px-6 py-3 md:py-4 border border-brand-primary bg-brand-background/80 backdrop-blur-sm text-brand-primary rounded-full text-sm md:text-base font-medium hover:bg-brand-muted transition-colors text-center"
            >
              {t("viewMenu")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
