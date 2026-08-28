import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Calendar, Sparkles } from 'lucide-react';
import { certificationData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 relative bg-dark-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Professional Verification
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Official{' '}
            <span className="text-gradient-purple">Certifications</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Verified skills assessment and technical credentials earned.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="max-w-3xl mx-auto space-y-5">
          {certificationData.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card block p-6 sm:p-8 rounded-3xl border border-purple-500/30 hover:border-purple-500/60 transition-all relative overflow-hidden shadow-2xl group cursor-pointer"
            >
              {/* Top Ambient Glow */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                {/* Icon & Details */}
                <div className="flex items-start gap-4 min-w-0">

                  {/* Certificate Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <BadgeCheck className="w-8 h-8 text-purple-400" />
                  </div>

                  <div className="space-y-1.5 min-w-0">

                    {/* Issuer + Verified */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {cert.issuer}
                      </span>

                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Verified Skill
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Certificate Description */}
                    <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                      {cert.details}
                    </p>

                  </div>
                </div>

                {/* Issued Date */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Issued: {cert.issuedDate}</span>
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}