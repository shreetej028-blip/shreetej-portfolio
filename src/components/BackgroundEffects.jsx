import React, { useEffect, useState } from 'react';

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-dark-950">
      {/* Fine cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      {/* Radial spotlight tracking cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.07), transparent 80%)`,
        }}
      />

      {/* Top ambient glow blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Top vignetting shadow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-dark-950 via-dark-950/70 to-transparent pointer-events-none" />
      
      {/* Bottom vignetting shadow */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent pointer-events-none" />
    </div>
  );
}
