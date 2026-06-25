import React from 'react';
import { Star, ShieldCheck, Zap, Gauge, Wrench, CheckCircle2 } from 'lucide-react';
import { ActiveModal } from '../types';

interface HeroProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[640px] bg-carbon border-b-4 border-[#E10600] overflow-hidden flex flex-col justify-center pt-8 pb-16 px-4 sm:px-8 lg:px-12">
      {/* Background Subtle Checkered Grid */}
      <div className="absolute inset-0 bg-checkered opacity-60 pointer-events-none"></div>
      
      {/* Red Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E10600]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E10600]/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Giant Background Watermark Text */}
      <div className="absolute right-[-40px] bottom-6 text-[120px] sm:text-[180px] lg:text-[240px] font-display font-black italic text-white/[0.03] select-none pointer-events-none tracking-tighter uppercase leading-none">
        TRIAL RACING
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Racing Pitch */}
        <div className="lg:col-span-8 flex flex-col items-start">
          
          {/* Rating Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6 bg-zinc-900/90 border border-zinc-700 p-1.5 pr-4 rounded-full shadow-lg">
            <div className="bg-[#E10600] text-black font-display font-black text-xs px-2.5 py-1 uppercase rounded-full flex items-center gap-1 shadow">
              <Star className="w-3.5 h-3.5 fill-black text-black" />
              <span>4.4 / 5.0</span>
            </div>
            <span className="text-xs text-zinc-300 font-mono font-bold uppercase tracking-wider">
              818 оценок • 362 отзыва на картах
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="hidden sm:inline-block text-[11px] text-emerald-400 font-mono font-semibold">
              Боксы открыты прямо сейчас
            </span>
          </div>

          {/* Main Racing H1 Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[0.95] italic uppercase mb-6 tracking-tighter text-white">
            АВТОСЕРВИС ТРИАЛ: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#E10600]">
              ПИТ-СТОП ТВОЕЙ МАШИНЫ
            </span> <br />
            <span className="text-[#E10600] underline decoration-white/20 underline-offset-8">В КРАСНОДАРЕ</span>
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-300 max-w-2xl text-base sm:text-lg leading-relaxed mb-8 font-medium border-l-2 border-[#E10600] pl-4">
            Быстрее. Точнее. Надежнее. Обслуживаем гражданские болиды любой сложности: от <strong className="text-white">Lada</strong> до <strong className="text-white">Mercedes, BMW, Geely и Toyota</strong>. Сход-развал 3D, автоэлектрика, запчасти в наличии и Детейлинг мойка под одной крышей на <span className="text-white font-semibold">ул. Черкасская, 68/1</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button
              onClick={() => onOpenModal('diagnostic')}
              className="w-full sm:w-auto bg-[#E10600] border-2 border-[#E10600] text-black px-8 py-4 text-base font-display font-black uppercase italic skew-x-[-12deg] shadow-[0_0_30px_rgba(225,6,0,0.45)] hover:bg-white hover:border-white hover:text-black transition-all cursor-pointer transform active:scale-95 text-center"
            >
              <span className="inline-block transform skew-x-[12deg] flex items-center justify-center gap-2">
                <Wrench className="w-5 h-5" />
                Пройти диагностику подвески
              </span>
            </button>

            <button
              onClick={() => onOpenModal('booking')}
              className="w-full sm:w-auto border-2 border-zinc-600 bg-zinc-900/80 backdrop-blur text-white px-7 py-4 text-sm font-display font-black uppercase italic skew-x-[-12deg] hover:border-[#E10600] hover:bg-zinc-800 transition-all cursor-pointer text-center"
            >
              <span className="inline-block transform skew-x-[12deg]">
                Записаться на ТО со склада
              </span>
            </button>
          </div>

          {/* Trust Micro-Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-zinc-800/80 w-full font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E10600] shrink-0" />
              <span>Честный чек: цена фиксируется <strong className="text-zinc-200">ДО</strong> старта</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E10600] shrink-0" />
              <span>Динамометрическая затяжка <strong className="text-zinc-200">без перетяжки</strong></span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E10600] shrink-0" />
              <span>Склад <strong className="text-zinc-200">5000+</strong> запчастей в наличии</span>
            </div>
          </div>

        </div>

        {/* Right Column: High-Octane Emergency Banner */}
        <div className="lg:col-span-4 w-full">
          <div className="relative bg-gradient-to-br from-zinc-900 to-black p-8 border-2 border-zinc-800 hover:border-[#E10600] shadow-2xl transition-all group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E10600]/10 rounded-bl-full pointer-events-none group-hover:bg-[#E10600]/20 transition-colors"></div>
            
            <div className="inline-flex items-center gap-1.5 bg-[#E10600] text-black font-display font-black text-[11px] px-3 py-1 uppercase tracking-widest mb-4">
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Срочный пит-стоп</span>
            </div>

            <h3 className="text-2xl font-display font-black italic uppercase text-white mb-3 leading-tight">
              Устраним поломку ходовой за <span className="text-[#E10600]">1-2 часа</span>
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-medium">
              Стучит рычаг? Пропала зарядка генератора? Принимаем транзитных водителей и городских автолюбителей без очередей. Чистая ремзона, крепкий кофе и детали со склада день в день.
            </p>

            <div className="bg-black/60 border border-zinc-800 p-4 rounded mb-6 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400">Средняя скорость ТО:</span>
                <span className="text-white font-bold bg-zinc-800 px-2 py-0.5 rounded text-[11px]">25 — 45 мин</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400">Гарантия на работы:</span>
                <span className="text-emerald-400 font-bold">Официальная 100%</span>
              </div>
            </div>

            <button
              onClick={() => onOpenModal('booking')}
              className="w-full bg-white text-black py-3 px-4 font-display font-black uppercase italic text-xs tracking-wider hover:bg-[#E10600] hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2 shadow"
            >
              <span>Вызвать мастера в бокс</span>
              <Gauge className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
