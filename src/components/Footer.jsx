import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Cpu, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050706] border-t border-[#6DFF9B]/15 pt-12 pb-8 overflow-hidden font-mono text-xs">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#6DFF9B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#6DFF9B]/10">
          
          {/* Left: Brand & Coordinates */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6DFF9B] animate-pulse" />
              <span className="font-bold text-sm text-[#F4F7F4] tracking-wider font-display">
                MUHAMMAD THASHREEF
              </span>
              <span className="text-[10px] text-[#00D9FF] px-1.5 py-0.5 rounded bg-[#00D9FF]/10 border border-[#00D9FF]/20">
                AI / ML CANDIDATE
              </span>
            </div>
            <p className="text-[#9AA8A2] text-[11px]">
              Yenepoya Institute of Technology · Mangaluru (12.9141° N, 74.8560° E)
            </p>
          </div>

          {/* Social links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 text-[#9AA8A2] hover:text-[#6DFF9B] hover:border-[#6DFF9B]/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 text-[#9AA8A2] hover:text-[#00D9FF] hover:border-[#00D9FF]/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 text-[#9AA8A2] hover:text-[#6DFF9B] hover:border-[#6DFF9B]/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/30 text-[#6DFF9B] hover:bg-[#6DFF9B]/10 transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[10px]">TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#9AA8A2]">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[#6DFF9B]" />
            <span>Black + Neon Green Glassmorphism Architecture</span>
          </div>
          <div>
            © 2026 Muhammad Thashreef. Built for High-Impact AI Engineering.
          </div>
        </div>

      </div>
    </footer>
  );
}
