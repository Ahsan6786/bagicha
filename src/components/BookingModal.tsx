"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingModal() {
  const { t, isBookingModalOpen, setIsBookingModalOpen } = useLanguage();

  const closeModal = () => {
    setIsBookingModalOpen(false);
  };

  const phoneNumber = "+919031006387";
  const displayPhone = "+91 90310 06387";

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-brand-background rounded-[2rem] shadow-2xl overflow-hidden border border-brand-primary/10"
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-brand-primary/60 hover:text-brand-primary hover:bg-brand-primary/5 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="pt-10 pb-6 px-8 text-center border-b border-brand-primary/10">
              <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                {t("ourHeritage") || "Reservations"}
              </span>
              <h3 className="text-3xl font-serif text-brand-primary italic">
                {t("bookStay")}
              </h3>
            </div>

            {/* Body */}
            <div className="p-8 flex flex-col gap-4">
              <p className="text-center text-brand-primary/70 text-sm mb-4">
                Choose your preferred way to contact us for bookings and inquiries.
              </p>

              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-brand-primary/20 hover:bg-brand-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold text-brand-primary">Call Us</div>
                  <div className="text-brand-primary/70 text-sm">{displayPhone}</div>
                </div>
              </a>

              <a 
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#25D366]/30 hover:bg-[#25D366]/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="font-semibold text-brand-primary">WhatsApp</div>
                  <div className="text-brand-primary/70 text-sm">{displayPhone}</div>
                </div>
              </a>
            </div>
            
            {/* Footer decoration */}
            <div className="h-2 w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary opacity-20" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
