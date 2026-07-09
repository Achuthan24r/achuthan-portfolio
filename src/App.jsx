import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalaxyBackground from './components/GalaxyBackground';
import ResumeDocument from './components/ResumeDocument';

function App() {
  useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-transparent font-sans relative overflow-x-hidden text-white">
      <GalaxyBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
      
      {/* Hidden print element containing the formatted CV */}
      <div className="print-only hidden">
        <ResumeDocument />
      </div>
    </div>
  );
}

export default App;
