import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Layers, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Dark frosted Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#030504]/90 backdrop-blur-md transition-opacity cursor-pointer"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#09110D] border border-[#6DFF9B]/40 shadow-[0_25px_80px_rgba(0,0,0,0.98),0_0_35px_rgba(109,255,155,0.18)] z-10 font-sans text-[#F4F7F4] scrollbar-thin">
        
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0A140F] border-b border-[#6DFF9B]/25 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#6DFF9B]/15 border border-[#6DFF9B]/30 text-[#6DFF9B] text-xs font-mono font-semibold uppercase">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-[#9AA8A2]">
              {project.date}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#121F17] border border-[#6DFF9B]/30 text-[#9AA8A2] hover:text-[#6DFF9B] hover:border-[#6DFF9B] transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 bg-[#09110D]">
          
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#F4F7F4]">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6DFF9B] font-mono font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#0E1A13] border border-[#6DFF9B]/25">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#6DFF9B]">{m.value}</div>
                <div className="text-[11px] font-mono text-[#9AA8A2] uppercase mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#9AA8A2] mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-[#122218] text-[#6DFF9B] border border-[#6DFF9B]/30"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* The Engineering Challenge & Problem */}
          <div className="space-y-2 p-5 rounded-xl bg-[#0D1812] border border-[#00D9FF]/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D9FF] flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00D9FF]" />
              The Problem & Engineering Bottlenecks
            </h4>
            <p className="text-sm text-[#9AA8A2] leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Solution & Pipeline Architecture */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#6DFF9B] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#6DFF9B]" />
              System Architecture & Pipeline Flow
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.caseStudy.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0E1B14] border border-[#6DFF9B]/20 hover:border-[#6DFF9B]/45 transition-colors"
                >
                  <div className="font-mono text-xs font-bold text-[#6DFF9B] mb-1">
                    {item.step}
                  </div>
                  <div className="text-xs text-[#9AA8A2] leading-relaxed font-sans">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F7F4] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6DFF9B]" />
              Key Implementation Features
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#9AA8A2]">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6DFF9B] mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Statement */}
          <div className="p-4 rounded-xl bg-[#0E1C15] border-l-4 border-[#6DFF9B] text-xs sm:text-sm text-[#F4F7F4] font-mono">
            <span className="text-[#6DFF9B] font-bold">MEASURED OUTCOME: </span>
            {project.caseStudy.impact}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#6DFF9B]/20">
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#122218] border border-[#6DFF9B]/35 text-xs font-mono text-[#6DFF9B] hover:bg-[#6DFF9B]/20 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>REPOSITORY / GITHUB</span>
              </a>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#6DFF9B] text-[#050706] text-xs font-mono font-semibold hover:bg-[#8affb0] transition-colors shadow-[0_0_15px_rgba(109,255,155,0.3)]"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
