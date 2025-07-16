import React from 'react';
import { TranslationProvider } from './hooks/useTranslation';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Steps } from './components/Steps';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Programs />
        <Steps />
        <Gallery />
        <Testimonials />
        <Partners />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </TranslationProvider>
  );
}

export default App;