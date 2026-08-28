import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Coffee, FileCode, Code, Terminal, Smartphone, FileText, Flame, Database,
  Atom, Layout, Palette, Wind, Sparkles, Server, Zap, Globe, GitBranch,
  Box, Layers, Fingerprint, Shield, Lock, Cpu
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { skillCategories, skillsData } from '../data/portfolioData';

const iconMap = {
  Coffee, FileCode, Code, Terminal, Smartphone, FileText, Flame, Database,
  Atom, Layout, Palette, Wind, Sparkles, Server, Zap, Globe, GitBranch,
  Github: GithubIcon, Box, Layers, Fingerprint, Shield, Lock, Cpu
};

const categoryLabels = {
  programming: "Programming",
  android: "Android Native",
  web: "Web Frontend",
  backend: "Backend & DB",
  tools: "Tooling & Environment",
  cybersecurity: "Cybersecurity & Sec"
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12"
        >
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 inline-block">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-purple">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Tools, frameworks, and programming languages I use to build secure applications and digital systems.
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-white shadow-lg shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 border border-cyan-500/40 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComp = iconMap[skill.icon] || Cpu;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  key={`${skill.name}-${skill.category}`}
                  className="glass-card p-5 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-cyan-500/40 group hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all shadow-md shrink-0">
                    <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {categoryLabels[skill.category] || "Technical Core"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
