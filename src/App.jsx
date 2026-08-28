import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-dark-950 text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background ambient lighting and grid overlay */}
      <BackgroundEffects />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
