import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, CheckCircle2, Cpu, Smartphone, Database, Lock, Code } from 'lucide-react';

const terminalLines = [
  { text: "$ init --user Shreetej-Zade", color: "text-slate-300", delay: 300 },
  { text: "> Loading Cyber Forensics Core...", color: "text-cyan-400", delay: 800 },
  { text: "> Android SDK .............. ONLINE", color: "text-emerald-400", icon: true, delay: 1400 },
  { text: "> React 18 Engine .......... ONLINE", color: "text-emerald-400", icon: true, delay: 1900 },
  { text: "> Firebase Authentication .. ONLINE", color: "text-emerald-400", icon: true, delay: 2400 },
  { text: "> MySQL & SQLite Engines ... ONLINE", color: "text-emerald-400", icon: true, delay: 2900 },
  { text: "> Information Security Layer ACTIVE", color: "text-purple-400", icon: true, delay: 3400 },
  { text: "$ status --ready", color: "text-amber-300 font-bold", delay: 3900 },
];

export default function TerminalWidget() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < terminalLines.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Glow shadow behind terminal */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-70" />

      <div className="relative rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-dark-900/80 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              shreetej@security-node:~
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Shield className="w-3 h-3" /> SECURE_ENV
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 font-mono text-xs space-y-2.5 min-h-[260px] bg-dark-950/90 text-slate-200">
          {terminalLines.slice(0, visibleCount).map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between"
            >
              <span className={line.color}>{line.text}</span>
              {line.icon && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-2" />
              )}
            </motion.div>
          ))}

          {/* Cursor line */}
          <div className="flex items-center gap-1 text-cyan-400 pt-1">
            <span>&gt;</span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Technical Feature Badges Footer */}
        <div className="grid grid-cols-4 border-t border-white/10 bg-dark-900/60 p-3 text-center text-[10px] font-mono text-slate-400">
          <div className="flex flex-col items-center gap-1 border-r border-white/10 pr-2">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Android</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-r border-white/10 px-2">
            <Code className="w-3.5 h-3.5 text-purple-400" />
            <span>Full-Stack</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-r border-white/10 px-2">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Forensics</span>
          </div>
          <div className="flex flex-col items-center gap-1 pl-2">
            <Database className="w-3.5 h-3.5 text-blue-400" />
            <span>SQL/Firebase</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
