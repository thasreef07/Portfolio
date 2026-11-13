import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2, Minimize2, Trash2 } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

export default function TerminalSection({ isModal = false, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "THASHREEF OS v3.2.0 [AI-KERNEL: ONLINE]" },
    { type: 'system', text: "Type 'help' to inspect available system telemetry commands." },
    { type: 'prompt', cmd: 'whoami' },
    { type: 'response', text: terminalCommands.whoami },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdToRun) => {
    const rawCmd = (cmdToRun || input).trim();
    if (!rawCmd) return;

    const lower = rawCmd.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let response = terminalCommands[lower];
    if (!response) {
      response = `Command not recognized: '${rawCmd}'. Type 'help' for available diagnostic commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'prompt', cmd: rawCmd },
      { type: 'response', text: response }
    ]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const chipCommands = ['whoami', 'projects', 'convert-ai', 'automl', 'jarvis', 'skills', 'edu', 'contact'];

  return (
    <section id="terminal" className={`relative ${isModal ? 'p-0' : 'py-20'} overflow-hidden`}>
      <div className={`${isModal ? 'w-full' : 'max-w-5xl mx-auto px-4 sm:px-6'}`}>
        {!isModal && (
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-[#6DFF9B]/20 text-[#6DFF9B] font-mono text-xs mb-3">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>INTERACTIVE TELEMETRY CONSOLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F4F7F4]">
              System Diagnostic <span className="text-gradient-green">Shell</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9AA8A2] max-w-xl mx-auto font-light">
              Interact directly with Muhammad Thashreef's engineering environment. Query models, test pipelines, and inspect project architectures.
            </p>
          </div>
        )}

        {/* Terminal Window */}
        <div className="rounded-xl border border-[#6DFF9B]/30 bg-[#070B09]/95 backdrop-blur-xl shadow-[0_12px_45px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0B100D] border-b border-[#6DFF9B]/20 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block" />
              <span className="ml-2 text-xs text-[#9AA8A2]">thashreef@neural-core:~</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#6DFF9B]/80 font-mono hidden sm:inline">
                STATUS: READY [200 OK]
              </span>
              <button
                onClick={() => setHistory([])}
                className="p-1 hover:text-[#6DFF9B] text-[#9AA8A2] transition-colors"
                title="Clear terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Suggested Quick Commands */}
          <div className="px-4 py-2 bg-[#0B100D]/60 border-b border-[#6DFF9B]/10 flex items-center gap-2 overflow-x-auto text-[11px]">
            <span className="text-[#9AA8A2] whitespace-nowrap">Quick dispatch:</span>
            {chipCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-[#121C15] text-[#6DFF9B] hover:bg-[#6DFF9B]/20 border border-[#6DFF9B]/20 whitespace-nowrap transition-colors"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Output Screen */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 min-h-[320px] max-h-[460px] overflow-y-auto space-y-3 cursor-text scrollbar-thin"
          >
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'system' && (
                  <div className="text-[#9AA8A2]/80 italic">{item.text}</div>
                )}
                {item.type === 'prompt' && (
                  <div className="flex items-center gap-2 text-[#F4F7F4]">
                    <span className="text-[#6DFF9B] font-bold">thashreef@neural-core:~$</span>
                    <span className="text-[#00D9FF]">{item.cmd}</span>
                  </div>
                )}
                {item.type === 'response' && (
                  <pre className="mt-1 text-[#9AA8A2] whitespace-pre-wrap font-mono text-[12px] sm:text-[13px] bg-[#0B100D]/40 p-3 rounded border-l-2 border-[#6DFF9B]/50">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Current Active Input Prompt */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[#6DFF9B] font-bold whitespace-nowrap">thashreef@neural-core:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or click a command..."
                className="flex-1 bg-transparent border-none outline-none text-[#F4F7F4] placeholder-[#9AA8A2]/40 font-mono text-xs sm:text-sm focus:ring-0"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => handleCommand()}
                className="p-1 rounded text-[#6DFF9B] hover:bg-[#6DFF9B]/20 transition-colors"
                title="Execute"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Footer info bar */}
          <div className="px-4 py-2 bg-[#0B100D] border-t border-[#6DFF9B]/15 text-[11px] text-[#9AA8A2] flex justify-between">
            <span>Kernel: AI-Linux x86_64</span>
            <span className="text-[#6DFF9B]">Python 3.11 · PyTorch 2.4 · FastAPI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
