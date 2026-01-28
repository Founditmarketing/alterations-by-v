import React, { useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AtelierChat from './components/AtelierChat';

const App: React.FC = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200 selection:text-stone-900 pt-[100px] md:pt-[76px]">
      <Navbar onNavigate={scrollToSection} />

      <main>
        <Hero
          onExplore={() => scrollToSection('services')}
          onConsult={() => scrollToSection('contact')}
          onFAQ={() => scrollToSection('faq')}
        />
        <Services onConsult={() => scrollToSection('contact')} />
        <About />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>

      <Footer onNavigate={scrollToSection} />
      <AtelierChat />
    </div>
  );
};

export default App;