import React, { useState } from 'react';
import { X, FileText, Copy, Check, Terminal } from 'lucide-react';
import { COPYWRITER_MARKDOWN_DOC } from '../data';

interface CopyDocModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopyDocModal: React.FC<CopyDocModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(COPYWRITER_MARKDOWN_DOC);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border-2 border-[#E10600] rounded-lg shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header Bar */}
        <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#E10600]" />
            <div>
              <h3 className="font-display font-black text-white uppercase italic tracking-tight sm:text-lg">
                Готовый копирайт-документ (Markdown ТЗ)
              </h3>
              <p className="text-[10px] font-mono text-zinc-400">
                Сгенерировано в соответствии с требованиями задачи для автокомплекса ТРИАЛ (Краснодар)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 bg-[#E10600] hover:bg-white hover:text-black text-black font-mono font-black text-xs px-4 py-2 rounded transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-900" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Скопировано в буфер!' : 'Скопировать ТЗ Markdown'}</span>
            </button>

            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white bg-zinc-800 p-2 rounded cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Markdown View */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs text-zinc-300 leading-relaxed bg-[#0c0c0e] select-text">
          <pre className="whitespace-pre-wrap font-mono font-medium text-zinc-300">
            {COPYWRITER_MARKDOWN_DOC}
          </pre>
        </div>

        {/* Modal Footer info */}
        <div className="bg-zinc-900 px-6 py-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>Стиль: Formula-1 Motorsports Pit-Stop Copy</span>
          <span>Формат: Structural Markdown Ready-to-use</span>
        </div>

      </div>
    </div>
  );
};
