"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Menu() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="py-24 md:py-32 bg-brand-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              {t("viewMenu")}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-brand-primary italic mb-6">
              Menu
            </h2>
            <div className="w-24 h-1 bg-brand-secondary/30 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-[3/4] md:aspect-auto md:min-h-[800px] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-brand-primary/10"
        >
          <Image
            src="/menu.png"
            alt="Bagicha Menu"
            fill
            className="object-contain md:object-cover bg-brand-surface"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
