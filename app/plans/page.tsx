import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Plans from '@/components/Plans';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Plans & Pricing | MathMentor',
  description: 'Explore flexible tutoring plans for IGCSE, GCSE, SAT, and A-Level Mathematics. Individual, small group, or large group classes.',
};

export default function PlansPage() {
  return (
    <main>
      <Navbar />
      <Plans />
      <Contact />
      <Footer />
    </main>
  );
}
