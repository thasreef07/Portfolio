import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, Layers, Award, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection = 'hero' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Core', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills & Tech', href: '#skills' },
    { name: 'Education & Certs', href: '#education' },
    { name: 'Interactive Lab', href: '#playground' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050706]/95 backdrop-blur-md border-b border-[#6DFF9B]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
          : 'bg-[#050706]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Signature */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/30 group-hover:border-[#6DFF9B] transition-colors shadow-inner">
              <span className="font-mono font-bold text-sm text-[#6DFF9B] tracking-wider">MT</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#6DFF9B] animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#6DFF9B]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-wider text-[#F4F7F4] uppercase font-display group-hover:text-[#6DFF9B] transition-colors">
                  THASHREEF
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#6DFF9B]/10 text-[#6DFF9B] border border-[#6DFF9B]/20">
                  AI / ML
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#9AA8A2]">
                12.9141° N · Mangaluru
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0B100D]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#6DFF9B]/20 shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-mono text-[#9AA8A2] hover:text-[#6DFF9B] hover:bg-[#6DFF9B]/10 rounded-full transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 text-[#9AA8A2] hover:text-[#6DFF9B] hover:border-[#6DFF9B]/50 transition-all hover:shadow-[0_0_15px_rgba(109,255,155,0.2)]"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 text-[#9AA8A2] hover:text-[#00D9FF] hover:border-[#00D9FF]/50 transition-all hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wide text-[#050706] bg-[#6DFF9B] hover:bg-[#85ffad] rounded-lg shadow-[0_0_20px_rgba(109,255,155,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <span>INITIALIZE CHAT</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/25 text-[#6DFF9B] hover:bg-[#6DFF9B]/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Full Dark Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 top-[65px] bg-[#030604]/90 backdrop-blur-md z-40 transition-opacity"
          />

          {/* Drawer content */}
          <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#060B08] border-b border-[#6DFF9B]/30 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.95)] z-50 transition-all">
            <div className="flex flex-col gap-2.5">
              <div className="text-[11px] font-mono text-[#9AA8A2] uppercase tracking-wider mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6DFF9B] animate-pulse" />
                  Navigation Matrix
                </span>
                <span className="text-[#6DFF9B] text-[10px]">7 ENDPOINTS</span>
              </div>
              
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-xs font-mono text-[#F4F7F4] bg-[#0A120D] hover:bg-[#121F17] hover:text-[#6DFF9B] rounded-xl transition-all border border-[#6DFF9B]/15 hover:border-[#6DFF9B]/40 flex items-center justify-between"
                >
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-[#6DFF9B] font-bold">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-[#6DFF9B]/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-[#0A120D] border border-[#6DFF9B]/25 text-[#6DFF9B]"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-[#0A120D] border border-[#6DFF9B]/25 text-[#00D9FF]"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-xs font-mono text-[#050706] bg-[#6DFF9B] rounded-lg font-bold shadow-[0_0_15px_rgba(109,255,155,0.4)]"
                >
                  CONTACT // REACH OUT
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
