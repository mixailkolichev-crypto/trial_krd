import React from 'react';
import { Disc, Wrench, Zap, Gauge, Sparkles, ArrowUpRight, Clock, Check } from 'lucide-react';
import { CORE_SERVICES } from '../data';
import { ServiceCard, ActiveModal } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceCard) => void;
  onOpenModal: (modal: ActiveModal) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService, onOpenModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Disc': return <Disc className="w-6 h-6 text-[#E10600]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#E10600]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#E10600]" />;
      case 'Gauge': return <Gauge className="w-6 h-6 text-[#E10600]" />;
      default: return <Sparkles className="w-6 h-6 text-[#E10600]" />;
    }
  };

  return (
    <section id="services" className="bg-[#0F0F0F] border-b border-zinc-800 py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background Subtle Grid Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[11px] font-mono font-extrabold uppercase tracking-[0.3em] text-[#E10600] mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#E10600]"></span>
              Регламент работ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black italic uppercase tracking-tighter text-white">
              МЕНЮ ПИТ-СТОПА <span className="text-[#E10600]">УСЛУГ</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm leading-relaxed italic font-medium">
            Обслуживаем гражданские болиды с регламентом Формулы-1. Оригинальные запчасти и проверенные аналоги всегда в наличии на складе в боксе.
          </p>
        </div>

        {/* 5-Column High-Octane Grid matching Design HTML pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 border border-zinc-800 bg-black/60 shadow-2xl">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group border-b md:border-b-0 md:border-r border-zinc-800 p-6 sm:p-8 flex flex-col justify-between hover:bg-[#E10600]/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Hover Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#E10600] transition-colors"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#E10600] font-display font-black text-3xl sm:text-4xl italic tracking-tighter group-hover:scale-110 transition-transform">
                    {service.number}
                  </span>
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded group-hover:border-[#E10600] transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <h3 className="font-display font-black uppercase text-base sm:text-lg mb-2 italic text-white group-hover:text-[#E10600] transition-colors flex items-center justify-between">
                  <span>{service.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#E10600]" />
                </h3>

                <div className="text-xs font-semibold text-zinc-300 mb-4 pb-3 border-b border-zinc-800/80">
                  {service.subtitle}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Specs list */}
                <div className="space-y-1.5 mb-6">
                  {service.keySpecs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] font-mono text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-[#E10600] shrink-0 mt-0.5" />
                      <span className="leading-tight">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Footer speed & parts tag */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Clock className="w-3 h-3 text-[#E10600]" />
                    {service.pitStopSpeed}
                  </span>
                  {service.partsInStock ? (
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                      Запчасти на складе
                    </span>
                  ) : (
                    <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                      Детейлинг бокс
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pit Stop Bottom Action Banner */}
        <div className="mt-10 p-6 sm:p-8 bg-zinc-900 border-l-4 border-[#E10600] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-display font-black uppercase italic text-white mb-1">
              Нужно нестандартное слесарное обслуживание или дефектовка?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              Мастера бокса бесплатно осмотрят ходовую на подъемнике перед началом работ. Никаких навязанных замен.
            </p>
          </div>
          <button
            onClick={() => onOpenModal('booking')}
            className="shrink-0 bg-[#E10600] text-black px-6 py-3 font-display font-black uppercase italic text-xs tracking-wider skew-x-[-12deg] hover:bg-white transition-colors cursor-pointer"
          >
            <span className="inline-block transform skew-x-[12deg]">Бесплатная консультация мастера</span>
          </button>
        </div>

      </div>
    </section>
  );
};
