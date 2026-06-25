import React from 'react';
import { Star, Quote, Award, ThumbsUp, Wrench } from 'lucide-react';
import { VERIFIED_REVIEWS } from '../data';
import { ActiveModal } from '../types';

interface PodiumReviewsProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const PodiumReviews: React.FC<PodiumReviewsProps> = ({ onOpenModal }) => {
  return (
    <section id="reviews" className="bg-[#09090b] py-20 px-4 sm:px-8 lg:px-12 border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] font-mono font-extrabold uppercase tracking-[0.3em] text-[#E10600] mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#E10600]" />
              Социальное доказательство
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black italic uppercase tracking-tighter text-white">
              ГОЛОСА ПОДИУМА: <span className="text-[#E10600]">ОТЗЫВЫ КЛИЕНТОВ</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
            <div className="bg-yellow-500 text-black font-display font-black text-2xl px-3 py-1 rounded italic">
              4.4
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-500 text-yellow-500' : 'fill-yellow-500/40 text-yellow-500/40'}`} />
                ))}
              </div>
              <div className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                818 ОЦЕНОК НА ЯНДЕКС / 2ГИС
              </div>
            </div>
          </div>
        </div>

        {/* 4 Testimonials Grid matching Design HTML Black/40 pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {VERIFIED_REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-black/60 backdrop-blur border-l-4 border-[#E10600] p-6 sm:p-8 relative hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-white text-base sm:text-lg italic">
                      {rev.author}
                    </span>
                    <span className="text-xs font-mono text-[#E10600] bg-[#E10600]/10 px-2 py-0.5 rounded font-bold">
                      {rev.car}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {rev.date}
                  </span>
                </div>

                <div className="inline-block bg-zinc-800 text-zinc-200 text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wide mb-4 rounded">
                  ★ {rev.tag}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-6 font-normal">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <ThumbsUp className="w-3.5 h-3.5 text-emerald-400" />
                  Подтвержденный визит на ТО
                </span>
                {rev.mechanicHighlight && (
                  <span className="text-zinc-300">
                    Мастер: <strong className="text-[#E10600] font-semibold">{rev.mechanicHighlight}</strong>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to leave review or consult */}
        <div className="text-center bg-gradient-to-r from-zinc-900 via-black to-zinc-900 p-8 border border-zinc-800 rounded">
          <h3 className="text-base sm:text-lg font-display font-black uppercase italic text-white mb-2">
            Ваш болид заслуживает такого же отношения
          </h3>
          <p className="text-xs text-zinc-400 mb-6 max-w-xl mx-auto">
            Запишитесь на плановое ТО или быструю замену колодок. Мастера проведут диагностику и согласуют с вами прозрачный расчет перед работой.
          </p>
          <button
            onClick={() => onOpenModal('booking')}
            className="bg-[#E10600] text-black px-8 py-3 text-sm font-display font-black uppercase italic skew-x-[-12deg] hover:bg-white transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <Wrench className="w-4 h-4" />
            <span className="inline-block transform skew-x-[12deg]">Записаться в бокс ТРИАЛ</span>
          </button>
        </div>

      </div>
    </section>
  );
};
