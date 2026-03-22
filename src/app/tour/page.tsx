import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TourPage() {
  return (
    <main className="relative bg-brand-background min-h-screen flex flex-col pt-24">
      <Navbar />
      
      <div className="container mx-auto px-6 max-w-6xl flex-grow flex flex-col items-center justify-center py-12 md:py-20 z-10 relative">
        <div className="w-full flex justify-start mb-8 md:mb-12">
          <Link 
            href="/" 
            className="group flex items-center text-brand-secondary hover:text-brand-primary transition-colors uppercase tracking-widest text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Roots
          </Link>
        </div>

        <div className="text-center mb-12 w-full">
          <span className="text-brand-accent text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block">
            A Cinematic Journey
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-primary italic mb-6">
            Watch Our Tour
          </h1>
          <p className="text-brand-primary/80 max-w-2xl mx-auto font-light leading-relaxed">
            Step inside the world of Bagicha before you even arrive. Experience the essence of rural Bihar elevated into an ultra-luxury haven, curated just for you.
          </p>
        </div>

        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-brand-primary/10 relative border border-brand-primary/10">
          <iframe 
            className="w-full h-full absolute inset-0"
            src="https://www.youtube.com/embed/9yq74HaA5tQ?autoplay=1&mute=1&loop=1&playlist=9yq74HaA5tQ" 
            title="Bagicha Tour" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
