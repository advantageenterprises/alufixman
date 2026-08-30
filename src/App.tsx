import { useReveal } from '@/hooks/useReveal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-brand-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
