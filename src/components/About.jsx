import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Smartphone, Code2, Cpu, CheckCircle } from 'lucide-react';
import { personalData, aboutHighlights } from '../data/portfolioData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Smartphone: Smartphone,
  Code2: Code2,
  Cpu: Cpu,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Background & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Combining formal computer engineering fundamentals with specialized cyber forensics and full-stack software development.
          </p>
        </motion.div>

        {/* Top Split Layout: Bio Card & Key Education Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>TECHNICAL PROFILE</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Engineering Secure & Scalable Applications
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.aboutBio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                My objective is to bridge native mobile applications and modern web platforms with robust backend architectures and proactive security practices—building software that is practical, performant, and resilient.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Focus</h4>
                  <p className="text-xs text-slate-400">Android & Full-Stack Web</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Specialization</h4>
                  <p className="text-xs text-slate-400">Cyber Forensics & Sec</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Academic Focus Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-white/10 flex flex-col justify-center"
          >
            <h4 className="text-base font-bold text-white tracking-wide uppercase font-mono text-cyan-400 border-b border-white/10 pb-3">
              Academic Credentials
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 uppercase">Bachelor of Technology</span>
                <h5 className="text-sm font-bold text-white">Cyber Forensics & Information Security</h5>
                <p className="text-xs text-slate-400">Ajeenkya DY Patil University, Pune</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase">Diploma Degree</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    83.47%
                  </span>
                </div>
                <h5 className="text-sm font-bold text-white">Computer Engineering</h5>
                <p className="text-xs text-slate-400">Takshashila Polytechnic, Amravati</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Feature Cards Grid (4 Core Pillars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutHighlights.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-6 rounded-2xl border ${item.border} hover:border-cyan-400/40 transition-all group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
