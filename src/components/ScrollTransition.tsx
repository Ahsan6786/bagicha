"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ScrollTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="w-full h-[30vh] md:h-[40vh] bg-brand-background flex items-center justify-center relative overflow-hidden">
       {/* Faded track */}
       <div className="w-[1px] md:w-[2px] h-full bg-brand-primary/10 absolute top-0" />
       
       {/* Animated growing line */}
       <motion.div 
         className="w-[1px] md:w-[2px] bg-brand-accent absolute top-0 rounded-full"
         style={{ height }}
       />

       {/* Floating badge */}
       <motion.div 
         initial={{ opacity: 0, scale: 0.8 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: false, margin: "-10%" }}
         transition={{ duration: 0.6 }}
         className="px-6 py-2 bg-brand-background border border-brand-accent/30 rounded-full text-brand-accent text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase z-10 drop-shadow-sm backdrop-blur-md"
       >
         {t("theRoyalFeast")}
       </motion.div>
    </div>
  );
}
