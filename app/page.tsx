import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Subjects from "@/components/Subjects";
import VideoDemos from "@/components/VideoDemos";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Subjects />
      <VideoDemos />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
