import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { ActiveModal } from '../types';

interface NavbarProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <header className="sticky top-0 z-40 h-20 flex items-center justify-between px-4 sm:px-8 bg-black/95 backdrop-blur-md border-b-2 border-zinc-800 transition-all">
      {/* Brand Logo Racing Style */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-11 h-11 bg-[#E10600] flex items-center justify-center skew-x-[-15deg] shadow-[0_0_15px_rgba(225,6,0,0.5)] group-hover:scale-105 transition-transform">
          <span className="text-3xl font-display font-black italic text-black transform skew-x-[15deg]">T</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display font-black text-2xl leading-none tracking-tighter uppercase italic text-white group-hover:text-[#E10600] transition-colors">
            ТРИАЛ
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#E10600] font-extrabold font-mono">
            Auto Complex
          </span>
        </div>
      </a>

      {/* Navigation Links */}
      <nav className="hidden lg:flex gap-8 text-xs uppercase font-extrabold tracking-widest font-mono">
        <a href="#services" className="text-zinc-300 hover:text-[#E10600] transition-colors flex items-center gap-1">
          <span className="text-[#E10600]">/</span> Пит-Стоп
        </a>
        <a href="#advantages" className="text-zinc-400 hover:text-white transition-colors">
          Преимущества
        </a>
        <a href="#team" className="text-zinc-400 hover:text-white transition-colors">
          Команда
        </a>
        <a href="#reviews" className="text-zinc-400 hover:text-white transition-colors">
          Отзывы
        </a>
        <a href="#contacts" className="text-zinc-400 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      {/* Action Area */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button
          onClick={() => onOpenModal('copydoc')}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-bold uppercase text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-700 rounded hover:border-[#E10600] transition-all"
          title="Открыть полный ТЗ-документ копирайтера (Markdown)"
        >
          <FileText className="w-3.5 h-3.5 text-[#E10600]" />
          <span>UX Copy Doc</span>
        </button>

        <div className="hidden xl:block text-right border-l border-zinc-800 pl-4">
          <div className="text-[10px] text-zinc-500 font-mono font-bold uppercase">Слесарный цех</div>
          <a href="tel:+79180744417" className="text-sm font-extrabold font-mono hover:text-[#E10600] tracking-tight flex items-center justify-end gap-1 transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#E10600]" />
            +7 (918) 074-44-17
          </a>
        </div>

        <button
          onClick={() => onOpenModal('booking')}
          className="bg-[#E10600] text-black px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-display font-black uppercase italic skew-x-[-15deg] shadow-[0_0_20px_rgba(225,6,0,0.4)] hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all cursor-pointer transform active:scale-95"
        >
          <span className="inline-block transform skew-x-[15deg]">Записаться на ТО</span>
        </button>
      </div>
    </header>
  );
};
