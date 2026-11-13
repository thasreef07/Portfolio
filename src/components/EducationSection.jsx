import React from 'react';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, BookOpen, ShieldCheck } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 bg-[#050706] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#6DFF9B]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-[#6DFF9B]/25 text-[#6DFF9B] font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#F4F7F4] tracking-tight">
            Education & <span className="text-gradient-green">Certifications</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9AA8A2] font-light">
            Rigorous engineering degree combined with verified certifications from leading technology institutions.
          </p>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Degree & Coursework (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-[rgba(18,28,21,0.72)] backdrop-blur-xl border border-[#6DFF9B]/25 p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Top Accent */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#6DFF9B]/15 text-[#6DFF9B] border border-[#6DFF9B]/30 uppercase">
                  CURRENT ENROLLMENT
                </span>
                <span className="text-xs font-mono text-[#00D9FF] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
              </div>

              {/* Degree Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F4F7F4] leading-snug">
                {education.degree}
              </h3>
              
              <div className="mt-2 text-sm text-[#6DFF9B] font-mono font-medium">
                {education.institution}
              </div>
              
              <div className="mt-1 flex items-center gap-1.5 text-xs text-[#9AA8A2] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#00D9FF]" />
                {education.location}
              </div>

              {/* Coursework List */}
              <div className="mt-6 pt-5 border-t border-[#6DFF9B]/15">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F7F4] flex items-center gap-2 mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-[#6DFF9B]" />
                  Core Academic Rigor
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {education.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/15 text-xs font-mono text-[#9AA8A2] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6DFF9B]" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status summary */}
              <div className="mt-6 p-3 rounded-xl bg-[#0F1712] border border-[#6DFF9B]/20 text-xs font-mono text-[#9AA8A2] flex items-center justify-between">
                <span>Degree Progress:</span>
                <span className="text-[#6DFF9B] font-bold">3rd Year (Active)</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Industry Certifications Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#9AA8A2] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6DFF9B]" />
                Industry Certifications & Achievements
              </span>
              <span className="text-xs font-mono text-[#6DFF9B]">4 Verified</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl bg-[rgba(18,28,21,0.72)] backdrop-blur-xl border border-[#6DFF9B]/20 p-5 shadow-[0_4px_20px_0_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#6DFF9B]/50 hover:shadow-[0_0_20px_rgba(109,255,155,0.15)] flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Issuer & Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#6DFF9B] group-hover:text-[#8affb0]">
                        {cert.issuer}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#6DFF9B]/10 text-[#6DFF9B] border border-[#6DFF9B]/20 uppercase">
                        {cert.date}
                      </span>
                    </div>

                    {/* Certification Title */}
                    <h4 className="text-base font-bold font-display text-[#F4F7F4] leading-snug mb-1 group-hover:text-[#6DFF9B] transition-colors">
                      {cert.title}
                    </h4>

                    <div className="text-[11px] font-mono text-[#00D9FF] mb-2.5">
                      {cert.focus}
                    </div>

                    <p className="text-xs text-[#9AA8A2] leading-relaxed font-light mb-4">
                      {cert.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-3 border-t border-[#6DFF9B]/10 flex flex-wrap gap-1.5">
                    {cert.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#0B100D] text-[#9AA8A2] border border-[#6DFF9B]/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Callout */}
            <div className="p-4 rounded-xl bg-[#0B100D] border border-[#00D9FF]/20 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2.5 text-[#F4F7F4]">
                <Award className="w-4 h-4 text-[#00D9FF]" />
                <span>IIT Bombay Git Training & Simplilearn Certified Candidate</span>
              </div>
              <span className="text-[#00D9FF] font-semibold hidden sm:inline">AUTHENTICATED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
