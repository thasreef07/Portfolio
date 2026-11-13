import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, Sparkles, Download, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentStatus, setSentStatus] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate dispatch
    setSentStatus('dispatching');
    setTimeout(() => {
      setSentStatus('success');
      // trigger mailto for reliable user communication
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050706] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#6DFF9B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#00D9FF]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-[#6DFF9B]/25 text-[#6DFF9B] font-mono text-xs mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#F4F7F4] tracking-tight">
            Initialize <span className="text-gradient-green">Connection</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9AA8A2] font-light">
            Open for AI & Machine Learning Engineering roles, innovative research collaborations, and production system builds.
          </p>
        </div>

        {/* 2-Column Glass Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Contact Card */}
            <div className="rounded-2xl bg-[rgba(18,28,21,0.72)] backdrop-blur-xl border border-[#6DFF9B]/25 p-6 sm:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.5)] space-y-6">
              
              <div>
                <span className="text-xs font-mono text-[#6DFF9B] uppercase tracking-wider">
                  Direct Coordinates
                </span>
                <h3 className="text-2xl font-bold font-display text-[#F4F7F4] mt-1">
                  Muhammad Thashreef
                </h3>
                <p className="text-xs font-mono text-[#00D9FF] mt-0.5">
                  AI & ML Engineer · Mangaluru, Karnataka
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-3 font-mono text-xs">
                {/* Email with copy button */}
                <div className="p-3 rounded-xl bg-[#0B100D] border border-[#6DFF9B]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-[#6DFF9B]/10 text-[#6DFF9B] flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-[#9AA8A2] uppercase">Email Channel</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-[#F4F7F4] hover:text-[#6DFF9B] transition-colors truncate">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-[#121F17] text-[#6DFF9B] hover:bg-[#6DFF9B]/20 transition-colors ml-2 flex-shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#6DFF9B]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3 rounded-xl bg-[#0B100D] border border-[#6DFF9B]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF] flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#9AA8A2] uppercase">Direct Phone</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-[#F4F7F4] hover:text-[#00D9FF] transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#00D9FF] px-2 py-0.5 rounded bg-[#00D9FF]/10">IN (+91)</span>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-[#0B100D] border border-[#6DFF9B]/20 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#6DFF9B]/10 text-[#6DFF9B] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#9AA8A2] uppercase">Geographic Hub</div>
                    <div className="text-[#F4F7F4]">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-[#6DFF9B]/15">
                <div className="text-xs font-mono text-[#9AA8A2] uppercase tracking-wider mb-3">
                  Verified Networks
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#0B100D] border border-[#6DFF9B]/25 hover:border-[#6DFF9B] text-[#F4F7F4] hover:text-[#6DFF9B] transition-all flex items-center gap-2.5 font-mono text-xs"
                  >
                    <Github className="w-4 h-4 text-[#6DFF9B]" />
                    <span className="truncate">github/{personalInfo.githubHandle}</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#0B100D] border border-[#00D9FF]/25 hover:border-[#00D9FF] text-[#F4F7F4] hover:text-[#00D9FF] transition-all flex items-center gap-2.5 font-mono text-xs"
                  >
                    <Linkedin className="w-4 h-4 text-[#00D9FF]" />
                    <span className="truncate">linkedin/thashreef</span>
                  </a>
                </div>
              </div>

              {/* Status callout */}
              <div className="p-3 rounded-xl bg-[#0D1611] border border-[#6DFF9B]/20 text-[11px] font-mono text-[#9AA8A2] flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6DFF9B] animate-pulse" />
                  Availability:
                </span>
                <span className="text-[#6DFF9B] font-semibold">Immediate for AI/ML Roles</span>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Dispatch Terminal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[rgba(18,28,21,0.72)] backdrop-blur-xl border border-[#6DFF9B]/25 p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              
              <div className="flex items-center justify-between border-b border-[#6DFF9B]/15 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-[#F4F7F4]">
                    Dispatch Encrypted Message
                  </h3>
                  <p className="text-xs font-mono text-[#9AA8A2] mt-0.5">
                    Direct routing to Muhammad Thashreef's primary inbox
                  </p>
                </div>
                <span className="text-xs font-mono text-[#6DFF9B] px-2.5 py-1 rounded bg-[#6DFF9B]/10 border border-[#6DFF9B]/20">
                  PROTOCOL: SMTP_DIRECT
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[#9AA8A2] uppercase tracking-wider mb-1.5">
                      Your Identity / Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Alex Vance"
                      className="w-full px-4 py-3 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 text-[#F4F7F4] placeholder-[#9AA8A2]/40 focus:border-[#6DFF9B] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[#9AA8A2] uppercase tracking-wider mb-1.5">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.ai"
                      className="w-full px-4 py-3 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 text-[#F4F7F4] placeholder-[#9AA8A2]/40 focus:border-[#6DFF9B] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[#9AA8A2] uppercase tracking-wider mb-1.5">
                    Mission / Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="AI/ML Engineering Opportunity / Project Architecture"
                    className="w-full px-4 py-3 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 text-[#F4F7F4] placeholder-[#9AA8A2]/40 focus:border-[#6DFF9B] focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#9AA8A2] uppercase tracking-wider mb-1.5">
                    Payload / Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Thashreef, I reviewed your Convert.ai and AutoML architectures..."
                    className="w-full px-4 py-3 rounded-lg bg-[#0B100D] border border-[#6DFF9B]/20 text-[#F4F7F4] placeholder-[#9AA8A2]/40 focus:border-[#6DFF9B] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#9AA8A2]">
                    Latency: &lt;100ms · End-to-end routing
                  </span>
                  <button
                    type="submit"
                    disabled={sentStatus === 'dispatching'}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#6DFF9B] text-[#050706] font-mono text-xs font-bold tracking-wider hover:bg-[#8affb0] transition-all hover:shadow-[0_0_20px_rgba(109,255,155,0.35)] disabled:opacity-50"
                  >
                    <span>{sentStatus === 'dispatching' ? 'DISPATCHING...' : sentStatus === 'success' ? 'DISPATCHED!' : 'DISPATCH MESSAGE'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
