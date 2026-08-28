import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  ArrowRight,
  Download,
  Mail,
  Code2,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >

            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide"
            >
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>{personalData.badge}</span>
            </motion.div>

            {/* Greeting + Heading */}
            <div className="space-y-3">
              <span className="text-sm md:text-base font-mono text-slate-400 block tracking-wide">
                Hi, I'm{' '}
                <span className="text-white font-semibold">
                  {personalData.name}
                </span>
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Building{' '}
                <span className="text-gradient-cyan">
                  Secure
                </span>
                ,{' '}
                <span className="text-gradient-purple">
                  High-Performance
                </span>{' '}
                Digital Experiences
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              {personalData.subtext}
            </p>

            {/* Specializations */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-mono text-slate-300">

              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                Android Native
              </span>

              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                React & Full-Stack
              </span>

              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                Cyber Forensics
              </span>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">

              {/* Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download CV */}
              <a
                href="/Shreetej-Zade-CV.pdf"
                download="Shreetej-Zade-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/5 transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>

            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="lg:col-span-5 flex justify-center items-center"
          >

            <div className="relative">

              {/* Large Ambient Glow */}
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-110" />

              {/* Purple Secondary Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full" />

              {/* Photo Outer Ring */}
              <motion.div
                animate={{
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative p-[2px] rounded-full bg-gradient-to-br from-cyan-400/70 via-purple-500/40 to-emerald-400/60 shadow-2xl shadow-cyan-500/20"
              >

                {/* Glass Frame */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden bg-slate-950/80 backdrop-blur-xl">

                  {/* Profile Photo */}
                  <img
                    src="/profile-photo.png"
                    alt="Shreetej Zade - Cyber Forensics and Full-Stack Developer"
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-cyan-400/5 pointer-events-none" />

                </div>
              </motion.div>

              {/* Floating Professional Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2.5 rounded-full bg-slate-950/90 border border-cyan-400/30 backdrop-blur-xl shadow-xl shadow-cyan-500/10"
              >
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/70" />
                  <span>Android</span>
                  <span className="text-slate-600">•</span>
                  <span>Full-Stack</span>
                  <span className="text-slate-600">•</span>
                  <span>Cybersecurity</span>
                </div>
              </motion.div>

              {/* Small Floating Tech Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -top-5 -left-5 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-xl"
              >
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-300">
                  SECURE.DEV
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}