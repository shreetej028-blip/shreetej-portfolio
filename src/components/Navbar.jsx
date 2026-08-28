import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Mail, ChevronRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cvUrl = `${import.meta.env.BASE_URL}Shreetej-Zade-CV.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);

        if (sectionEl) {
          const top = sectionEl.offsetTop;

          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center">
                <span className="font-bold font-mono text-cyan-400 text-sm group-hover:scale-105 transition-transform">
                  SZ
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Shreetej Zade
              </span>

              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-mono hidden sm:inline">
                Cyber Forensics & Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full"
                      transition={{
                        type: 'spring',
                        duration: 0.5,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">

            {/* CV Button */}
            <a
              href={cvUrl}
              download="Shreetej-Zade-CV.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>CV</span>
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label={
              mobileMenuOpen ? 'Close menu' : 'Open menu'
            }
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-cyan-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-950/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden mt-3 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">

              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.substring(1);

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>

                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                );
              })}

              <div className="pt-4 grid grid-cols-2 gap-3 border-t border-white/10">

                {/* Mobile CV */}
                <a
                  href={cvUrl}
                  download="Shreetej-Zade-CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 border border-white/10"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  Download CV
                </a>

                {/* Mobile Contact */}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}