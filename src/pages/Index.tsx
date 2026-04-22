import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Exams } from "@/components/sections/Exams";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";

/**
 * CareerChoice360 — Landing Page
 * Modern Corporate aesthetic. Composed from modular sections.
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Exams />
        <About />
        <Process />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
