import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ScrollTransition from "@/components/ScrollTransition";
import Experience from "@/components/Experience";
import Thali from "@/components/Thali";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-brand-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <ScrollTransition />
      <Thali />
      <Menu />
      <Experience />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
