import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, Sparkles, Brain, Cpu, Database, Eye, Activity, ShieldCheck } from 'lucide-react';
import NeuralNetworkCanvas from './NeuralNetworkCanvas';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection({ onOpenTerminal }) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6DFF9B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#00D9FF]/4 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber Grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B100D] border border-[#6DFF9B]/25 w-fit mb-6 shadow-[0_0_15px_rgba(109,255,155,0.08)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6DFF9B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6DFF9B]"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[#6DFF9B] tracking-wide uppercase">
                AI & Machine Learning Engineer
              </span>
              <span className="text-xs font-mono text-[#9AA8A2]">·</span>
              <span className="text-xs font-mono text-[#9AA8A2]">Mangaluru, IN</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-1"
            >
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#9AA8A2] uppercase">
                Muhammad Thashreef // Portfolio 2026
              </h2>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold font-display tracking-tight text-[#F4F7F4] leading-[1.08]">
                ARCHITECTING <br />
                <span className="text-gradient-green">INTELLIGENT</span> <br />
                SYSTEMS.
              </h1>
            </motion.div>

            {/* Professional Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#9AA8A2] leading-relaxed max-w-2xl font-light"
            >
              Artificial Intelligence and Machine Learning Engineering candidate at <span className="text-[#F4F7F4] font-medium">Yenepoya Institute of Technology</span>. 
              Engineering production-grade <span className="text-[#6DFF9B] font-medium">prompt-driven AutoML engines</span>, multimodal <span className="text-[#6DFF9B] font-medium">OCR document pipelines</span>, 
              and sub-400ms <span className="text-[#00D9FF] font-medium">autonomous voice assistants</span>.
            </motion.p>

            {/* Engineering Highlights Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 my-8 p-4 rounded-xl bg-[rgba(18,28,21,0.5)] border border-[#6DFF9B]/15 backdrop-blur-md max-w-xl"
            >
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#6DFF9B]">99.2%</div>
                <div className="text-[11px] font-mono text-[#9AA8A2] uppercase tracking-wider mt-0.5">DocTR + Gemini OCR</div>
              </div>
              <div className="border-x border-[#6DFF9B]/15 px-3 sm:px-4">
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#00D9FF]">8+ Algos</div>
                <div className="text-[11px] font-mono text-[#9AA8A2] uppercase tracking-wider mt-0.5">Optuna Bayesian CV</div>
              </div>
              <div className="pl-1 sm:pl-2">
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#F4F7F4]">&lt;400ms</div>
                <div className="text-[11px] font-mono text-[#9AA8A2] uppercase tracking-wider mt-0.5">Groq Llama 3.3 Latency</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#6DFF9B] text-[#050706] font-mono text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#8affb0] hover:shadow-[0_0_25px_rgba(109,255,155,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>EXPLORE SYSTEMS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary CTA: Terminal */}
              <button
                onClick={onOpenTerminal}
                className="group relative inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/30 text-[#6DFF9B] font-mono text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#6DFF9B] hover:bg-[#6DFF9B]/10 hover:shadow-[0_0_20px_rgba(109,255,155,0.15)]"
              >
                <Terminal className="w-4 h-4 text-[#6DFF9B]" />
                <span>OPEN TERMINAL</span>
              </button>

              {/* Tertiary CTA: Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-transparent border border-[rgba(0,217,255,0.25)] text-[#00D9FF] font-mono text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#00D9FF] hover:bg-[#00D9FF]/10"
              >
                <span>GET IN TOUCH</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Neural Network & Floating Glass Panels (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Frame */}
            <div className="relative w-full aspect-square max-w-[480px] rounded-2xl border border-[#6DFF9B]/20 bg-[#0B100D]/50 backdrop-blur-md p-2 shadow-[0_0_50px_rgba(0,0,0,0.8)] hud-corner overflow-visible">
              
              {/* Radar Grid Lines / Technical HUD rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[85%] h-[85%] rounded-full border border-[#6DFF9B]/10 border-dashed animate-[spin_60s_linear_infinite]" />
                <div className="w-[60%] h-[60%] rounded-full border border-[#00D9FF]/10" />
                <div className="w-[35%] h-[35%] rounded-full border border-[#6DFF9B]/15" />
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#6DFF9B]/15 to-transparent" />
                <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#6DFF9B]/15 to-transparent" />
              </div>

              {/* Top HUD Status Bar */}
              <div className="absolute top-3 left-4 right-4 z-20 flex items-center justify-between pointer-events-none text-[10px] font-mono text-[#9AA8A2]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6DFF9B] animate-pulse" />
                  <span>NEURAL_FABRIC_V3</span>
                </div>
                <span className="text-[#6DFF9B]">SYNAPSES: ACTIVE</span>
              </div>

              {/* Interactive Neural Canvas */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#050706]/70">
                <NeuralNetworkCanvas />
              </div>

              {/* Floating Glass Panel 1: Generative AI (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -top-6 -left-6 z-20 p-3.5 rounded-xl bg-[rgba(18,28,21,0.88)] backdrop-blur-xl border border-[#6DFF9B]/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)] animate-float-slow hidden sm:flex items-center gap-3 max-w-[220px]"
              >
                <div className="p-2 rounded-lg bg-[#6DFF9B]/10 border border-[#6DFF9B]/30 text-[#6DFF9B]">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#9AA8A2] uppercase tracking-wider">Generative AI</div>
                  <div className="text-xs font-mono font-bold text-[#F4F7F4]">Gemini & Llama 3.3</div>
                </div>
              </motion.div>

              {/* Floating Glass Panel 2: AutoML & Bayesian Search (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -bottom-6 -left-4 z-20 p-3 rounded-xl bg-[rgba(18,28,21,0.88)] backdrop-blur-xl border border-[#00D9FF]/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)] animate-float-reverse hidden sm:flex items-center gap-3 max-w-[230px]"
              >
                <div className="p-2 rounded-lg bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#9AA8A2] uppercase tracking-wider">AutoML Studio</div>
                  <div className="text-xs font-mono font-bold text-[#F4F7F4]">Optuna Bayesian CV</div>
                </div>
              </motion.div>

              {/* Floating Glass Panel 3: Document Intelligence / OCR (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -top-5 -right-6 z-20 p-3 rounded-xl bg-[rgba(18,28,21,0.88)] backdrop-blur-xl border border-[#6DFF9B]/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)] animate-float-reverse hidden sm:flex items-center gap-3 max-w-[210px]"
              >
                <div className="p-2 rounded-lg bg-[#6DFF9B]/10 border border-[#6DFF9B]/30 text-[#6DFF9B]">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#9AA8A2] uppercase tracking-wider">DocTR OCR Engine</div>
                  <div className="text-xs font-mono font-bold text-[#6DFF9B]">99.2% Extraction</div>
                </div>
              </motion.div>

              {/* Floating Glass Panel 4: Live Telemetry (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute -bottom-6 -right-6 z-20 px-3.5 py-2.5 rounded-xl bg-[rgba(11,16,13,0.92)] backdrop-blur-xl border border-[#6DFF9B]/25 shadow-lg hidden sm:flex items-center gap-2.5 font-mono text-[11px]"
              >
                <Activity className="w-3.5 h-3.5 text-[#6DFF9B] animate-pulse" />
                <span className="text-[#9AA8A2]">SSE STREAM:</span>
                <span className="text-[#6DFF9B] font-semibold">12ms</span>
              </motion.div>

              {/* Bottom HUD Coordinate Info */}
              <div className="absolute bottom-2 left-4 right-4 z-20 flex items-center justify-between pointer-events-none text-[9px] font-mono text-[#9AA8A2]/70">
                <span>LAT: 12.9141° N</span>
                <span>LON: 74.8560° E</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
