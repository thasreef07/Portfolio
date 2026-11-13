import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Code2, CheckCircle2, Shield, Flame, Sparkles } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0: return <Cpu className="w-5 h-5 text-[#6DFF9B]" />;
      case 1: return <Code2 className="w-5 h-5 text-[#00D9FF]" />;
      case 2: return <Database className="w-5 h-5 text-[#6DFF9B]" />;
      default: return <Terminal className="w-5 h-5 text-[#00D9FF]" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#050706] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#6DFF9B]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00D9FF]/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-[#6DFF9B]/25 text-[#6DFF9B] font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#F4F7F4] tracking-tight">
            Technical Proficiency & <span className="text-gradient-green">Core Stack</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9AA8A2] font-light">
            Rigorous mathematical foundation combined with modern AI architectures, systems programming, and high-concurrency deployment.
          </p>
        </div>

        {/* 4-Column / 2x2 Grid of Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {skillsCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="group relative rounded-2xl bg-[rgba(18,28,21,0.72)] backdrop-blur-xl border border-[#6DFF9B]/20 p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-[#6DFF9B]/50 hover:shadow-[0_0_25px_rgba(109,255,155,0.15)] flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-5 border-b border-[#6DFF9B]/15 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/25">
                      {getCategoryIcon(catIdx)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-[#F4F7F4] group-hover:text-[#6DFF9B] transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#9AA8A2]">
                        {category.skills.length} SPECIALIZED MODULES
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#6DFF9B]/10 text-[#6DFF9B] border border-[#6DFF9B]/25 uppercase">
                    {category.badge}
                  </span>
                </div>

                {/* Skill Bars & Details */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group/item p-2.5 rounded-lg bg-[#0B100D]/60 hover:bg-[#0B100D] border border-transparent hover:border-[#6DFF9B]/30 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                        <span className="text-[#F4F7F4] font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6DFF9B]" />
                          {skill.name}
                        </span>
                        <span className="text-[#6DFF9B] font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Meter bar */}
                      <div className="w-full bg-[#121A15] h-1.5 rounded-full overflow-hidden mb-1.5">
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: catIdx % 2 === 0
                              ? 'linear-gradient(90deg, #6DFF9B 0%, #00D9FF 100%)'
                              : 'linear-gradient(90deg, #00D9FF 0%, #6DFF9B 100%)',
                          }}
                        />
                      </div>

                      <div className="text-[11px] text-[#9AA8A2] font-mono">
                        {skill.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-[#6DFF9B]/10 flex items-center justify-between text-[11px] font-mono text-[#9AA8A2]">
                <span>BENCHMARK: 2026</span>
                <span className="text-[#6DFF9B]">OPTIMIZED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Development Tooling & Ecosystem Banner */}
        <div className="rounded-2xl bg-[rgba(18,28,21,0.6)] backdrop-blur-xl border border-[#6DFF9B]/20 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-[#6DFF9B] uppercase tracking-wider mb-1 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#6DFF9B]" />
                Development Toolchain & Environments
              </div>
              <h4 className="text-xl font-bold font-display text-[#F4F7F4]">
                Battle-Tested Workflow & Engineering Tools
              </h4>
              <p className="text-sm text-[#9AA8A2] mt-1 max-w-xl font-light">
                Leveraging industry-standard version control, GPU-accelerated computing nodes, and reproducible notebooks.
              </p>
            </div>

            {/* Tool Chips */}
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Git (IIT Bombay)', badge: 'Certified', color: '#6DFF9B' },
                { name: 'GitHub Actions', badge: 'CI/CD', color: '#00D9FF' },
                { name: 'VS Code', badge: 'IDE Core', color: '#6DFF9B' },
                { name: 'Google Colab Pro', badge: 'GPU Node', color: '#00D9FF' },
                { name: 'Jupyter Notebook', badge: 'Research', color: '#6DFF9B' },
                { name: 'Linux / Bash', badge: 'System', color: '#00D9FF' },
                { name: 'MongoDB Compass', badge: 'NoSQL GUI', color: '#6DFF9B' },
                { name: 'FastAPI Swagger', badge: 'API Docs', color: '#00D9FF' },
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 flex items-center gap-2 text-xs font-mono text-[#F4F7F4] hover:border-[#6DFF9B]/50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tool.color }} />
                  <span>{tool.name}</span>
                  <span className="text-[10px] text-[#9AA8A2] bg-[#121C15] px-1.5 py-0.5 rounded border border-[#6DFF9B]/15">
                    {tool.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
