import React, { useState, useRef } from 'react';
import { ArrowUpRight, Github, Sparkles, ExternalLink, ChevronRight, Layers } from 'lucide-react';
import ProjectCardVisual from './ProjectCardVisual';

export default function ProjectCard({ project, onSelect }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.18s ease-out',
      }}
      className="group relative rounded-2xl bg-[rgba(18,28,21,0.72)] backdrop-blur-xl border border-[#6DFF9B]/20 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#6DFF9B]/55 hover:shadow-[0_0_30px_rgba(109,255,155,0.18)] flex flex-col justify-between overflow-hidden"
    >
      {/* Glare spotlight following mouse */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(109, 255, 155, ${glare.opacity}), transparent 60%)`,
        }}
      />

      {/* Top Header details */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider bg-[#6DFF9B]/10 text-[#6DFF9B] border border-[#6DFF9B]/25 uppercase">
              {project.badge}
            </span>
            <span className="text-[11px] font-mono text-[#9AA8A2]">
              {project.date}
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#00D9FF]">
            {project.category}
          </span>
        </div>

        {/* Large Custom Visual Preview */}
        <div className="mb-5 rounded-xl overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
          <ProjectCardVisual type={project.visualType} />
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F4F7F4] group-hover:text-[#6DFF9B] transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-[#00D9FF] mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-sm text-[#9AA8A2] leading-relaxed mb-4 font-light">
          {project.description}
        </p>

        {/* Key Metrics Chips */}
        <div className="grid grid-cols-3 gap-2 mb-5 p-2.5 rounded-lg bg-[#0B100D]/80 border border-[#6DFF9B]/15">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xs sm:text-sm font-mono font-bold text-[#6DFF9B]">{m.value}</div>
              <div className="text-[9px] font-mono text-[#9AA8A2] uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Neon Green Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#121F17] text-[#6DFF9B] border border-[#6DFF9B]/20 group-hover:border-[#6DFF9B]/35 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-4 border-t border-[#6DFF9B]/15 flex items-center justify-between mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9AA8A2] hover:text-[#6DFF9B] transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>Source Code</span>
        </a>

        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#6DFF9B]/10 hover:bg-[#6DFF9B] text-[#6DFF9B] hover:text-[#050706] border border-[#6DFF9B]/30 hover:border-[#6DFF9B] text-xs font-mono font-medium tracking-wide transition-all duration-200 shadow-[0_0_15px_rgba(109,255,155,0.1)]"
        >
          <span>Deep-Dive Case Study</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
