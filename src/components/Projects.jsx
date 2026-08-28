import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, QrCode, Smartphone, Globe, Eye } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block">
            Portfolio Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Practical applications built across native Android development and modern responsive web platforms.
          </p>
        </motion.div>

        {/* Responsive Projects Grid: 2-column Desktop, 1-column Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
            >
              {/* Graphic Visual Header (Mockup Frame) */}
              <div className="p-6 bg-gradient-to-b from-dark-900 to-dark-950/90 border-b border-white/10 flex items-center justify-center min-h-[220px] relative overflow-hidden">
                
                {project.imageType === 'phone' ? (
                  /* Synthetic Android Smartphone Graphic Mockup */
                  <div className="w-48 h-56 bg-dark-950 rounded-2xl border-4 border-slate-800 p-2 shadow-2xl relative flex flex-col justify-between group-hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-1 bg-slate-800 rounded-full mx-auto mb-2" />
                    <div className="flex-1 bg-dark-900 rounded-xl p-3 border border-white/10 space-y-2 text-center flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                        <QrCode className="w-6 h-6" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-white block">Attendance Sec</span>
                        <span className="text-[8px] font-mono text-emerald-400 block">QR + Biometric Active</span>
                      </div>
                      <div className="w-full bg-cyan-500/10 border border-cyan-500/30 rounded py-1 text-[8px] font-mono text-cyan-300">
                        Scan Verified
                      </div>
                    </div>
                    <div className="w-5 h-5 rounded-full border border-slate-800 mx-auto mt-1" />
                  </div>
                ) : (
                  /* Synthetic Browser Window Graphic Mockup */
                  <div className="w-full max-w-sm h-48 bg-dark-950 rounded-xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col group-hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-dark-900 border-b border-white/10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <div className="ml-2 px-2 py-0.5 bg-dark-950 rounded text-[9px] font-mono text-slate-400 flex-1 text-center truncate">
                        https://shreetejzade.dev
                      </div>
                    </div>
                    <div className="p-4 flex-1 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 flex flex-col justify-center space-y-2">
                      <div className="w-20 h-2 bg-cyan-400/80 rounded" />
                      <div className="w-32 h-3 bg-white/80 rounded font-bold" />
                      <div className="w-full h-2 bg-slate-700/50 rounded" />
                      <div className="w-3/4 h-2 bg-slate-700/50 rounded" />
                    </div>
                  </div>
                )}

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-dark-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-400 text-slate-950 flex items-center gap-2 shadow-lg hover:bg-cyan-300 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Explore Overview</span>
                  </button>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & Action Buttons */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-400">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Explore Overview</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github || '#'}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => !project.github && e.preventDefault()}
                        className={`p-2 rounded-lg text-slate-400 transition-colors ${
                          project.github ? 'hover:text-white hover:bg-white/10' : 'opacity-50 cursor-not-allowed'
                        }`}
                        title={project.github ? 'GitHub Repository' : 'Code repository link pending'}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
