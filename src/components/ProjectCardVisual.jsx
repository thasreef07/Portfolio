import React from 'react';

export default function ProjectCardVisual({ type }) {
  if (type === 'ocr-pipeline') {
    return (
      <div className="relative w-full h-52 bg-[#060A08] rounded-xl overflow-hidden border border-[#6DFF9B]/20 p-4 font-mono select-none">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6DFF9B]/10 rounded-full blur-2xl pointer-events-none" />
        
        {/* Scanning laser beam effect */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#6DFF9B] to-transparent shadow-[0_0_12px_#6DFF9B] animate-[scanline_4s_linear_infinite]" />

        {/* Top Header bar */}
        <div className="flex items-center justify-between text-[10px] text-[#9AA8A2] border-b border-[#6DFF9B]/15 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6DFF9B] animate-pulse" />
            <span className="text-[#6DFF9B]">DocTR OCR + GEMINI MULTIMODAL PARSER</span>
          </div>
          <span className="text-[9px] text-[#00D9FF]">ACCURACY: 99.2%</span>
        </div>

        {/* Document representation */}
        <div className="grid grid-cols-12 gap-3 h-36">
          {/* Scanned page wireframe */}
          <div className="col-span-6 bg-[#0B120E] rounded-lg p-2.5 border border-[#6DFF9B]/15 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-[#6DFF9B]">INPUT: VTU_RESULT_BATCH_01.PDF</span>
                <span className="text-[8px] bg-[#6DFF9B]/10 text-[#6DFF9B] px-1 rounded">300 DPI</span>
              </div>
              
              {/* Highlighted OCR Bounding Boxes */}
              <div className="p-1 rounded bg-[#6DFF9B]/10 border border-[#6DFF9B]/30 text-[9px] text-[#F4F7F4] flex justify-between items-center">
                <span>USN: 4YE23AI***</span>
                <span className="text-[#6DFF9B] text-[8px]">CONF: 0.99</span>
              </div>
              <div className="p-1 rounded bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[9px] text-[#F4F7F4] flex justify-between items-center">
                <span>21AI51 [ADV ML]</span>
                <span className="text-[#00D9FF] text-[8px]">MARKS: 94</span>
              </div>
              <div className="h-1.5 w-3/4 bg-[#6DFF9B]/20 rounded-full" />
              <div className="h-1.5 w-1/2 bg-[#6DFF9B]/15 rounded-full" />
            </div>

            <div className="text-[8px] text-[#9AA8A2] flex justify-between">
              <span>BOUNDING BOXES: 42</span>
              <span className="text-[#6DFF9B]">REGEX VALIDATED</span>
            </div>
          </div>

          {/* Structured Excel Output Grid */}
          <div className="col-span-6 bg-[#0B120E] rounded-lg p-2.5 border border-[#6DFF9B]/15 flex flex-col justify-between">
            <div>
              <div className="text-[9px] text-[#00D9FF] font-semibold mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                STRUCTURED REPORT (XLSX)
              </div>
              
              <div className="text-[8px] space-y-1 text-[#9AA8A2]">
                <div className="grid grid-cols-4 gap-1 font-semibold text-[#F4F7F4] border-b border-[#6DFF9B]/20 pb-0.5">
                  <span>SUB</span>
                  <span>INT</span>
                  <span>EXT</span>
                  <span>RES</span>
                </div>
                <div className="grid grid-cols-4 gap-1 text-[#6DFF9B]">
                  <span>21AI51</span>
                  <span>48</span>
                  <span>46</span>
                  <span>PASS</span>
                </div>
                <div className="grid grid-cols-4 gap-1 text-[#F4F7F4]">
                  <span>21AI52</span>
                  <span>45</span>
                  <span>42</span>
                  <span>PASS</span>
                </div>
                <div className="grid grid-cols-4 gap-1 text-[#F4F7F4]">
                  <span>21AI53</span>
                  <span>49</span>
                  <span>45</span>
                  <span>PASS</span>
                </div>
              </div>
            </div>

            <div className="text-[8px] text-[#6DFF9B] text-right font-medium">
              STATUS: EXPORT READY (OpenPyXL)
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'automl-pipeline') {
    return (
      <div className="relative w-full h-52 bg-[#060A08] rounded-xl overflow-hidden border border-[#00D9FF]/20 p-4 font-mono select-none">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D9FF]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between text-[10px] text-[#9AA8A2] border-b border-[#00D9FF]/15 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
            <span className="text-[#00D9FF]">OPTUNA BAYESIAN OPTIMIZATION ENGINE</span>
          </div>
          <span className="text-[9px] text-[#6DFF9B]">TRIALS: 50 / 50</span>
        </div>

        {/* Visual Charts */}
        <div className="grid grid-cols-12 gap-3 h-36">
          {/* Model Comparison Bars */}
          <div className="col-span-7 bg-[#0B120E] rounded-lg p-2.5 border border-[#00D9FF]/15 flex flex-col justify-between">
            <div className="text-[9px] text-[#9AA8A2] mb-1">TOP VALIDATED ARCHITECTURES</div>
            
            <div className="space-y-1.5 text-[8px]">
              {/* Model 1 */}
              <div>
                <div className="flex justify-between text-[#6DFF9B] font-semibold mb-0.5">
                  <span>XGBoost (Bayesian Tuned)</span>
                  <span>94.8%</span>
                </div>
                <div className="w-full bg-[#121C15] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#6DFF9B] h-full rounded-full" style={{ width: '94.8%' }} />
                </div>
              </div>

              {/* Model 2 */}
              <div>
                <div className="flex justify-between text-[#00D9FF] mb-0.5">
                  <span>LightGBM (5-Fold CV)</span>
                  <span>93.6%</span>
                </div>
                <div className="w-full bg-[#121C15] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#00D9FF] h-full rounded-full" style={{ width: '93.6%' }} />
                </div>
              </div>

              {/* Model 3 */}
              <div>
                <div className="flex justify-between text-[#F4F7F4] mb-0.5">
                  <span>RandomForestClassifier</span>
                  <span>91.2%</span>
                </div>
                <div className="w-full bg-[#121C15] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#F4F7F4]/60 h-full rounded-full" style={{ width: '91.2%' }} />
                </div>
              </div>
            </div>

            <div className="text-[8px] text-[#9AA8A2] flex justify-between pt-1">
              <span>METRIC: ROC_AUC</span>
              <span className="text-[#6DFF9B]">PRUNING: ACTIVE</span>
            </div>
          </div>

          {/* SSE Stream Log */}
          <div className="col-span-5 bg-[#0B120E] rounded-lg p-2.5 border border-[#00D9FF]/15 flex flex-col justify-between text-[8px]">
            <div>
              <div className="text-[#00D9FF] font-semibold mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6DFF9B] animate-ping" />
                SSE LOG STREAM
              </div>
              <div className="space-y-1 text-[#9AA8A2]">
                <div>[00:02] Imputing missing...</div>
                <div>[00:04] 5-Fold split done</div>
                <div className="text-[#6DFF9B]">[00:11] Trial 42: score 0.948</div>
                <div className="text-[#00D9FF]">[00:15] HTML Report Built</div>
              </div>
            </div>
            <div className="text-[8px] text-[#6DFF9B] font-mono">
              OUTPUT: .joblib + report.html
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'voice-agent') {
    return (
      <div className="relative w-full h-52 bg-[#060A08] rounded-xl overflow-hidden border border-[#6DFF9B]/20 p-4 font-mono select-none">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6DFF9B]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between text-[10px] text-[#9AA8A2] border-b border-[#6DFF9B]/15 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6DFF9B] animate-pulse" />
            <span className="text-[#6DFF9B]">GROQ LPU + LLAMA 3.3 VOICE PIPELINE</span>
          </div>
          <span className="text-[9px] text-[#00D9FF]">LATENCY: &lt;380ms</span>
        </div>

        {/* Waveform and System Automation Preview */}
        <div className="grid grid-cols-12 gap-3 h-36">
          {/* Audio Waveform Simulator */}
          <div className="col-span-7 bg-[#0B120E] rounded-lg p-2.5 border border-[#6DFF9B]/15 flex flex-col justify-between">
            <div className="text-[9px] text-[#9AA8A2] flex justify-between">
              <span>SPEECH RECOGNITION STREAM</span>
              <span className="text-[#6DFF9B]">INPUT: 16kHz PCM</span>
            </div>

            {/* Glowing Audio Waveform Bars */}
            <div className="flex items-center justify-center gap-1.5 h-16 px-2">
              {[25, 45, 75, 30, 90, 60, 100, 70, 85, 40, 95, 65, 35, 80, 50, 20].map((h, idx) => (
                <div
                  key={idx}
                  className="w-1.5 rounded-full bg-gradient-to-t from-[#00D9FF] to-[#6DFF9B] transition-all duration-150"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="text-[8px] text-[#9AA8A2] flex justify-between">
              <span>INTENT: "Execute system diagnostic"</span>
              <span className="text-[#6DFF9B]">REASONING: Groq Llama 3.3</span>
            </div>
          </div>

          {/* Desktop Automation Actions */}
          <div className="col-span-5 bg-[#0B120E] rounded-lg p-2.5 border border-[#6DFF9B]/15 flex flex-col justify-between text-[8px]">
            <div>
              <div className="text-[#6DFF9B] font-semibold mb-1">
                DISPATCHED ACTIONS
              </div>
              <div className="space-y-1 text-[#9AA8A2]">
                <div className="p-1 rounded bg-[#6DFF9B]/5 border border-[#6DFF9B]/20 text-[#F4F7F4]">
                  ✓ Launch: IDE Terminal
                </div>
                <div className="p-1 rounded bg-[#00D9FF]/5 border border-[#00D9FF]/20 text-[#00D9FF]">
                  ✓ Query: Documentation
                </div>
                <div className="p-1 rounded bg-[#6DFF9B]/5 border border-[#6DFF9B]/20 text-[#F4F7F4]">
                  ✓ Voice Feedback: TTS OK
                </div>
              </div>
            </div>
            <div className="text-[8px] text-[#9AA8A2] flex justify-between">
              <span>pyautogui</span>
              <span className="text-[#6DFF9B]">MODULAR SKILLS</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default / NLP
  return (
    <div className="relative w-full h-52 bg-[#060A08] rounded-xl overflow-hidden border border-[#00D9FF]/20 p-4 font-mono select-none">
      <div className="flex items-center justify-between text-[10px] text-[#9AA8A2] border-b border-[#00D9FF]/15 pb-2 mb-3">
        <span className="text-[#00D9FF]">TEXT PREPROCESSING & VECTOR SPACE</span>
        <span className="text-[#6DFF9B]">SIMPLILEARN NLP CERTIFIED</span>
      </div>
      <div className="space-y-2 text-[9px] text-[#9AA8A2]">
        <div className="p-2 rounded bg-[#0B120E] border border-[#00D9FF]/20 text-[#F4F7F4]">
          <span className="text-[#00D9FF]">Tokenization Stream:</span> ['neural', 'document', 'extraction', 'optuna', 'bayesian']
        </div>
        <div className="p-2 rounded bg-[#0B120E] border border-[#6DFF9B]/20 text-[#6DFF9B]">
          <span className="text-[#6DFF9B]">TF-IDF Sparse Representation:</span> (10000, 4820) matrix · Cosine Sim: 0.941
        </div>
        <div className="text-[8px] text-[#9AA8A2] flex justify-between pt-1">
          <span>MongoDB Pipeline: Aggregation & Indexing</span>
          <span className="text-[#00D9FF]">10k docs/sec</span>
        </div>
      </div>
    </div>
  );
}
