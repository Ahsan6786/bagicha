"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/locales/dictionaries";

type Language = "en" | "hi" | "bho" | "mag";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations) => string;
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (isOpen: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDarkMode, setIsDarkModeState] = useState(false);

  // Load saved preference on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("bagicha_lang") as Language;
    if (savedLang && ["en", "hi", "bho", "mag"].includes(savedLang)) {
      setLanguageState(savedLang);
    }
    
    // Load dark mode preference
    const savedTheme = localStorage.getItem("bagicha_theme");
    if (savedTheme === "dark") {
      setIsDarkModeState(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkModeState(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("bagicha_lang", lang);
  };

  const setIsDarkMode = (isDark: boolean) => {
    setIsDarkModeState(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("bagicha_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("bagicha_theme", "light");
    }
  };

  const t = (key: keyof typeof translations) => {
    return translations[key]?.[language] || translations[key]?.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isBookingModalOpen, setIsBookingModalOpen, isDarkMode, setIsDarkMode }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
