import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MouseSpotlight from './components/MouseSpotlight';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import PlaygroundSection from './components/PlaygroundSection';
import EducationSection from './components/EducationSection';
import TerminalSection from './components/TerminalSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  const scrollToTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050706] text-[#F4F7F4] selection:bg-[#6DFF9B]/25 selection:text-[#6DFF9B]">
      {/* Dynamic ambient mouse-following spotlight lighting */}
      <MouseSpotlight />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onOpenTerminal={scrollToTerminal} />

        {/* Flagship Projects Section (2-Column Grid) */}
        <ProjectsSection />

        {/* Technical Skills & Engineering Arsenal */}
        <SkillsSection />

        {/* Live Interactive AI Playground (OCR Simulator + AutoML Optimizer) */}
        <PlaygroundSection />

        {/* Education & Verified Certifications */}
        <EducationSection />

        {/* Interactive Telemetry & Diagnostic Terminal */}
        <TerminalSection />

        {/* Contact & Dispatch Message Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
