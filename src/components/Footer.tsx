"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-surface pt-24 pb-12 rounded-t-[3rem] mt-[-2rem] relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="relative w-48 h-16 md:w-56 md:h-20 mb-6">
              <Image 
                src="/logo.png" 
                alt="Bagicha Logo" 
                fill 
                className="object-contain object-left invert opacity-90"
                sizes="250px"
              />
            </div>
            <p className="text-brand-surface/70 font-light max-w-md leading-relaxed">
              An artisanal oasis that seamlessly bridges the raw, earthly soul of rural Bihar with uncompromising luxury. 
            </p>
          </div>
          
          <div>
            <h4 className="font-serif italic text-xl mb-6 text-brand-accent">Explore</h4>
            <ul className="space-y-4 font-light text-brand-surface/70">
              <li><Link href="#about" className="hover:text-brand-accent transition-colors">Our Estate</Link></li>
              <li><Link href="#experiences" className="hover:text-brand-accent transition-colors">Experiences</Link></li>
              <li><Link href="#gallery" className="hover:text-brand-accent transition-colors">Gallery</Link></li>
              <li><Link href="#booking" className="hover:text-brand-accent transition-colors">Reservations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif italic text-xl mb-6 text-brand-accent">Visit Us</h4>
            <address className="not-italic space-y-4 font-light text-brand-surface/70">
              <p>Mithila Heritage Lane,<br/>Bihar, India</p>
              <p className="pt-2">namaste@bagicha.com<br/>+91 90310 06387</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-surface/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-surface/50 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} Bagicha Artisanal Estates. Handcrafted in the heart of the village.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-brand-surface/50 hover:text-brand-accent transition-colors text-sm uppercase tracking-widest font-bold">
              Instagram
            </Link>
            <Link href="#" className="text-brand-surface/50 hover:text-brand-accent transition-colors text-sm uppercase tracking-widest font-bold">
              Facebook
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
