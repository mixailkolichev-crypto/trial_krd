import React from 'react';
import { UserCheck, Shield, Wrench, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';
import { ActiveModal } from '../types';

interface TeamPitProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const TeamPit: React.FC<TeamPitProps> = ({ onOpenModal }) => {
  return (
    <section id="team" className="bg-black py-20 px-4 sm:px-8 lg:px-12 border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-[11px] font-mono font-extrabold uppercase tracking-[0.3em] text-[#E10600] mb-3">
            Элита автослесарного цеха
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black italic uppercase tracking-tighter text-white mb-4">
            КОМАНДА БОКСА: <span className="text-[#E10600]">ИМЕННЫЕ МАСТЕРА</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base italic font-medium leading-relaxed">
            В ТРИАЛЕ вы общаетесь не с безликим приемщиком, а с конкретными специалистами. Именно их имена клиенты чаще всего выделяют в 5-звездочных отзывах.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-800 hover:border-[#E10600] p-8 relative flex flex-col justify-between transition-all duration-300 group overflow-hidden shadow-xl"
            >
              {/* Top Accent Racing Tag */}
              <div className="absolute top-0 right-0 bg-[#E10600] text-black font-display font-black text-[10px] px-3 py-1 uppercase tracking-widest italic rounded-bl">
                {member.badge}
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center group-hover:border-[#E10600] transition-colors text-[#E10600]">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-2xl uppercase italic text-white leading-none mb-1">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-[#E10600] font-bold">
                      {member.role}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-zinc-400 mb-4 bg-black/50 p-2.5 border-l-2 border-zinc-700 rounded">
                  <span className="text-zinc-500 font-bold uppercase">Специфика:</span> {member.specialty}
                </div>

                <p className="text-xs text-zinc-300 italic leading-relaxed mb-6">
                  «{member.quote}»
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1 text-zinc-400 font-bold">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  {member.experience}
                </span>
                <button
                  onClick={() => onOpenModal('booking')}
                  className="text-white hover:text-[#E10600] underline decoration-zinc-700 underline-offset-4 cursor-pointer font-bold transition-colors"
                >
                  Записаться к мастеру →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Parts Guarantee Banner */}
        <div className="bg-carbon border-2 border-zinc-800 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Wrench className="w-10 h-10 text-[#E10600] shrink-0" />
            <div>
              <h4 className="font-display font-black uppercase italic text-xl text-white">
                Запчасти для европейских, азиатских и отечественных авто
              </h4>
              <p className="text-xs text-zinc-400 font-medium mt-1">
                Китайские бренды (Chery, Geely, Haval, Changan), Корея, Япония, VAG, BMW, Mercedes и Lada. Все фильтра, колодки и масла в наличии.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenModal('booking')}
            className="shrink-0 bg-[#E10600] text-black px-7 py-3.5 font-display font-black uppercase italic text-xs tracking-wider skew-x-[-12deg] hover:bg-white transition-colors cursor-pointer"
          >
            <span className="inline-block transform skew-x-[12deg]">Проверить наличие запчасти</span>
          </button>
        </div>

      </div>
    </section>
  );
};
