import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Sparkles, FolderGit2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Computer Vision & OCR', 'Automated ML & Systems', 'Autonomous Agents'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-[#050706] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6DFF9B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00D9FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-[#6DFF9B]/25 text-[#6DFF9B] font-mono text-xs mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FLAGSHIP ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#F4F7F4] tracking-tight">
              Featured <span className="text-gradient-green">AI Systems</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9AA8A2] max-w-xl font-light">
              High-performance machine learning platforms, computer vision pipelines, and intelligent autonomous agents engineered for real-world impact.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  activeFilter === cat
                    ? 'bg-[#6DFF9B] text-[#050706] font-semibold border-[#6DFF9B] shadow-[0_0_15px_rgba(109,255,155,0.3)]'
                    : 'bg-[#0B100D] text-[#9AA8A2] border-[#6DFF9B]/20 hover:border-[#6DFF9B]/40 hover:text-[#F4F7F4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Case Study Deep Dive Modal */}
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
