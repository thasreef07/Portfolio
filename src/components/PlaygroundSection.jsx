import React, { useState } from 'react';
import { Play, Sparkles, Sliders, CheckCircle2, RotateCw, FileSpreadsheet, Eye, Terminal } from 'lucide-react';

export default function PlaygroundSection() {
  // Tab selector
  const [activeTab, setActiveTab] = useState('ocr');

  // OCR state
  const [ocrScanning, setOcrScanning] = useState(false);
  const [ocrCompleted, setOcrCompleted] = useState(true);

  // AutoML state
  const [trials, setTrials] = useState(35);
  const [optimizing, setOptimizing] = useState(false);

  const runOcrSimulation = () => {
    setOcrScanning(true);
    setOcrCompleted(false);
    setTimeout(() => {
      setOcrScanning(false);
      setOcrCompleted(true);
    }, 1200);
  };

  const sampleSubjects = [
    { code: '21AI51', name: 'Automated Machine Learning', int: 49, ext: 48, total: 97, grade: 'S+' },
    { code: '21AI52', name: 'Deep Computer Vision & OCR', int: 47, ext: 45, total: 92, grade: 'S' },
    { code: '21AI53', name: 'Natural Language Processing', int: 48, ext: 46, total: 94, grade: 'S+' },
    { code: '21AI54', name: 'Database Management Systems', int: 46, ext: 44, total: 90, grade: 'S' },
  ];

  // Dynamic metrics based on AutoML slider
  const currentAccuracy = (91.2 + (trials / 100) * 4.6).toFixed(2);
  const selectedModel = trials > 60 ? 'XGBoost (Ensemble Optimized)' : trials > 25 ? 'LightGBM Regressor' : 'Random Forest Classifier';
  const timeElapsed = (trials * 0.12).toFixed(1);

  return (
    <section id="playground" className="relative py-24 bg-[#050706] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#6DFF9B]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D9FF]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-[#6DFF9B]/25 text-[#6DFF9B] font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE INTERACTIVE BENCHMARK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#F4F7F4] tracking-tight">
            AI Engineering <span className="text-gradient-green">Playground</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9AA8A2] font-light">
            Test simulated inference directly in the browser. Experience the document intelligence OCR flow and AutoML Bayesian optimization in action.
          </p>

          {/* Module Switcher Buttons */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-[#0B100D] border border-[#6DFF9B]/20">
            <button
              onClick={() => setActiveTab('ocr')}
              className={`px-5 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'ocr'
                  ? 'bg-[#6DFF9B] text-[#050706] font-semibold shadow-[0_0_15px_rgba(109,255,155,0.3)]'
                  : 'text-[#9AA8A2] hover:text-[#F4F7F4]'
              }`}
            >
              1. Convert.ai OCR Pipeline
            </button>
            <button
              onClick={() => setActiveTab('automl')}
              className={`px-5 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'automl'
                  ? 'bg-[#00D9FF] text-[#050706] font-semibold shadow-[0_0_15px_rgba(0,217,255,0.3)]'
                  : 'text-[#9AA8A2] hover:text-[#F4F7F4]'
              }`}
            >
              2. AutoML Studio Optimizer
            </button>
          </div>
        </div>

        {/* TAB 1: OCR Pipeline Simulator */}
        {activeTab === 'ocr' && (
          <div className="rounded-2xl bg-[rgba(18,28,21,0.72)] backdrop-blur-xl border border-[#6DFF9B]/25 p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 border-b border-[#6DFF9B]/15 pb-4">
              <div>
                <span className="text-xs font-mono text-[#6DFF9B] uppercase tracking-wider">
                  Convert.ai Document Parser Engine
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F7F4]">
                  Automated Academic Scorecard Extractor
                </h3>
              </div>
              
              <button
                onClick={runOcrSimulation}
                disabled={ocrScanning}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6DFF9B] text-[#050706] text-xs font-mono font-semibold hover:bg-[#8affb0] transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(109,255,155,0.3)]"
              >
                <RotateCw className={`w-3.5 h-3.5 ${ocrScanning ? 'animate-spin' : ''}`} />
                <span>{ocrScanning ? 'RUNNING OCR & GEMINI...' : 'TRIGGER EXTRACTION SIMULATION'}</span>
              </button>
            </div>

            {/* Playground Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left: Input Scanned Document with Scanning Overlay */}
              <div className="lg:col-span-5 relative bg-[#070C09] rounded-xl border border-[#6DFF9B]/20 p-5 overflow-hidden font-mono text-xs">
                {/* Laser scanline */}
                {ocrScanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#6DFF9B] to-transparent shadow-[0_0_15px_#6DFF9B] animate-[scanline_1.5s_linear_infinite] z-20" />
                )}

                <div className="flex items-center justify-between text-[11px] text-[#9AA8A2] mb-3 border-b border-[#6DFF9B]/15 pb-2">
                  <span>INPUT: sample_vtu_marksheet.pdf</span>
                  <span className="text-[#6DFF9B]">300 DPI</span>
                </div>

                <div className="space-y-3 bg-[#0B130E] p-4 rounded-lg border border-[#6DFF9B]/10">
                  <div className="text-[10px] text-[#9AA8A2]">VISHVESHVARAYA TECHNOLOGICAL UNIVERSITY</div>
                  <div className="p-2 rounded bg-[#6DFF9B]/10 border border-[#6DFF9B]/30 flex justify-between items-center text-[#F4F7F4]">
                    <span>STUDENT: MUHAMMAD THASHREEF</span>
                    <span className="text-[#6DFF9B] text-[10px]">USN: 4YE23AI001</span>
                  </div>

                  <div className="space-y-1.5 text-[11px] text-[#9AA8A2]">
                    <div className="flex justify-between border-b border-[#6DFF9B]/10 pb-1">
                      <span>21AI51 - Automated ML</span>
                      <span className="text-[#6DFF9B]">97 / 100 [PASS]</span>
                    </div>
                    <div className="flex justify-between border-b border-[#6DFF9B]/10 pb-1">
                      <span>21AI52 - Deep Vision OCR</span>
                      <span className="text-[#6DFF9B]">92 / 100 [PASS]</span>
                    </div>
                    <div className="flex justify-between border-b border-[#6DFF9B]/10 pb-1">
                      <span>21AI53 - NLP Systems</span>
                      <span className="text-[#6DFF9B]">94 / 100 [PASS]</span>
                    </div>
                    <div className="flex justify-between">
                      <span>21AI54 - DBMS</span>
                      <span className="text-[#6DFF9B]">90 / 100 [PASS]</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-[#9AA8A2]">
                  <span>Pre-processed: PyMuPDF</span>
                  <span className="text-[#00D9FF]">DocTR + Gemini Vision: Ready</span>
                </div>
              </div>

              {/* Middle: Pipeline Transformation Indicator */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center text-center font-mono text-xs text-[#9AA8A2] space-y-2 py-4">
                <div className="w-10 h-10 rounded-full bg-[#0B100D] border border-[#6DFF9B]/30 flex items-center justify-center text-[#6DFF9B]">
                  <RotateCw className={`w-5 h-5 ${ocrScanning ? 'animate-spin text-[#6DFF9B]' : 'text-[#9AA8A2]'}`} />
                </div>
                <span className="text-[11px]">Regex Structuring</span>
                <span className="text-[10px] text-[#6DFF9B]">OpenPyXL Export</span>
              </div>

              {/* Right: Clean Output Structured Excel Preview */}
              <div className="lg:col-span-5 bg-[#070C09] rounded-xl border border-[#00D9FF]/20 p-5 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-[#00D9FF] mb-3 border-b border-[#00D9FF]/20 pb-2">
                  <span className="flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    OUTPUT: VTU_ANALYSIS_STRUCTURED.XLSX
                  </span>
                  <span className="text-[#6DFF9B]">99.2% ACCURACY</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px]">
                    <thead>
                      <tr className="border-b border-[#6DFF9B]/20 text-[#6DFF9B]">
                        <th className="py-1.5 px-2">Code</th>
                        <th className="py-1.5 px-2">Subject</th>
                        <th className="py-1.5 px-2">Int</th>
                        <th className="py-1.5 px-2">Ext</th>
                        <th className="py-1.5 px-2">Tot</th>
                        <th className="py-1.5 px-2">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#6DFF9B]/10 text-[#F4F7F4]">
                      {sampleSubjects.map((sub, i) => (
                        <tr key={i} className="hover:bg-[#6DFF9B]/5">
                          <td className="py-1.5 px-2 text-[#6DFF9B]">{sub.code}</td>
                          <td className="py-1.5 px-2 text-[#9AA8A2] truncate max-w-[120px]">{sub.name}</td>
                          <td className="py-1.5 px-2">{sub.int}</td>
                          <td className="py-1.5 px-2">{sub.ext}</td>
                          <td className="py-1.5 px-2 font-bold text-[#F4F7F4]">{sub.total}</td>
                          <td className="py-1.5 px-2 text-[#6DFF9B] font-semibold">{sub.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3 border-t border-[#6DFF9B]/15 flex items-center justify-between text-[10px] text-[#9AA8A2]">
                  <span>Status: Validation Complete</span>
                  <span className="text-[#6DFF9B]">0 Schema Discrepancies</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: AutoML Hyperparameter Optimizer */}
        {activeTab === 'automl' && (
          <div className="rounded-2xl bg-[rgba(18,28,21,0.72)] backdrop-blur-xl border border-[#00D9FF]/25 p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 border-b border-[#00D9FF]/15 pb-4">
              <div>
                <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider">
                  AutoML Studio · Bayesian Optimizer
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F7F4]">
                  Interactive Optuna 5-Fold Cross-Validation Sweep
                </h3>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#0B100D] border border-[#00D9FF]/30 font-mono text-xs text-[#00D9FF]">
                Selected: {selectedModel}
              </div>
            </div>

            {/* Slider Control */}
            <div className="p-5 rounded-xl bg-[#090E0B] border border-[#00D9FF]/20 mb-6">
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-[#F4F7F4] flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-[#00D9FF]" />
                  Optuna Optimization Trials:
                </span>
                <span className="text-[#00D9FF] font-bold text-sm">{trials} Trials</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={trials}
                onChange={(e) => setTrials(Number(e.target.value))}
                className="w-full accent-[#00D9FF] bg-[#121E17] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#9AA8A2] mt-1">
                <span>5 Trials (Fast Baseline)</span>
                <span>50 Trials (Balanced)</span>
                <span>100 Trials (Deep Bayesian Convergence)</span>
              </div>
            </div>

            {/* Metrics Output Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
              <div className="p-4 rounded-xl bg-[#0B120E] border border-[#6DFF9B]/20 text-center">
                <div className="text-xs text-[#9AA8A2] uppercase">Cross-Validation Score</div>
                <div className="text-2xl font-bold text-[#6DFF9B] mt-1">{currentAccuracy}%</div>
                <div className="text-[10px] text-[#9AA8A2] mt-0.5">5-Fold Stratified CV</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0B120E] border border-[#00D9FF]/20 text-center">
                <div className="text-xs text-[#9AA8A2] uppercase">Time Elapsed</div>
                <div className="text-2xl font-bold text-[#00D9FF] mt-1">{timeElapsed}s</div>
                <div className="text-[10px] text-[#9AA8A2] mt-0.5">FastAPI Async Workers</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0B120E] border border-[#6DFF9B]/20 text-center">
                <div className="text-xs text-[#9AA8A2] uppercase">Candidate Models</div>
                <div className="text-2xl font-bold text-[#F4F7F4] mt-1">8 Algorithms</div>
                <div className="text-[10px] text-[#6DFF9B] mt-0.5">Automated Preprocessing</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
