import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Building } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
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
            Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education <span className="text-gradient-cyan">Background</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Formal technical qualification in Cyber Forensics and Computer Engineering.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-md">
                    {edu.icon === 'GraduationCap' ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-400">
                    {edu.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Building className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                {edu.score && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                    <span>Diploma Percentage:</span>
                    <span className="text-sm">{edu.score}</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2 border-t border-white/10">
                  {edu.details}
                </p>
              </div>

              <div className="pt-2 text-right">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Verified Academic Degree
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
