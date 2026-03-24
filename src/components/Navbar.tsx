"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "bho", label: "भोजपुरी" },
  { code: "mag", label: "मगही" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const { language, setLanguage, t, setIsBookingModalOpen } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("estate"), href: "/#about" },
    { name: t("tour"), href: "/tour" },
    { name: t("experiences"), href: "/#experiences" },
    { name: t("gallery"), href: "/#gallery" },
  ];

  const currentLangLabel = LANGUAGES.find(l => l.code === language)?.label || "EN";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-background/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
        <Link href="/" className="relative w-36 h-12 md:w-56 md:h-16 flex items-center justify-start">
          <Image 
            src="/logo.png" 
            alt="Bagicha Logo" 
            fill 
            className="object-contain object-left mix-blend-multiply drop-shadow-sm brightness-110 saturate-150"
            sizes="250px"
            priority 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-brand-primary/80 hover:text-brand-primary font-serif italic tracking-wide transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1 text-sm font-medium text-brand-primary/80 hover:text-brand-primary transition-colors uppercase"
            >
              {currentLangLabel} <ChevronDown size={14} className={`transition-transform ${isLangMenuOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 bg-brand-surface border border-brand-primary/10 rounded-xl shadow-2xl py-2 min-w-[120px] max-w-[150px] overflow-hidden"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${language === lang.code ? 'bg-brand-primary/5 font-bold text-brand-primary' : 'text-brand-primary/70 hover:bg-brand-primary/5 hover:text-brand-primary'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="px-6 py-2.5 bg-brand-primary text-brand-background rounded-full hover:bg-brand-primary/90 transition-all font-medium text-sm tracking-wide cursor-pointer"
          >
            {t("bookStay")}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-2 z-50">
          <button
            className={`p-2 transition-colors ${!isScrolled && !isMobileMenuOpen ? "text-[#fdfbf7] drop-shadow-md" : "text-brand-primary"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-background shadow-lg border-t border-brand-primary/10 flex flex-col items-center py-8 gap-6 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif text-brand-primary italic tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 mt-4 border-t border-brand-primary/10 pt-6">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${language === lang.code ? 'bg-brand-primary text-brand-background' : 'bg-brand-primary/5 text-brand-primary hover:bg-brand-primary/10'}`}
                >
                  {lang.label.slice(0, 3)}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-4 w-full px-8">
              <a
                href="https://maps.app.goo.gl/322YQHSAX14GrBHv9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-8 py-3 bg-brand-accent text-brand-primary dark:text-brand-background rounded-full font-medium text-sm tracking-wide"
              >
                Get Directions
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full text-center px-8 py-3 bg-brand-primary text-brand-background rounded-full font-medium text-sm tracking-wide cursor-pointer"
              >
                {t("bookStay")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
