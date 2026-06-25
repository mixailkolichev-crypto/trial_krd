import React from 'react';
import { MapPin, Phone, Clock, Navigation, ShieldCheck, FileText } from 'lucide-react';
import { CONTACTS_DATA } from '../data';
import { ActiveModal } from '../types';

interface FooterFinishLineProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const FooterFinishLine: React.FC<FooterFinishLineProps> = ({ onOpenModal }) => {
  return (
    <footer id="contacts" className="bg-[#09090b] border-t-4 border-[#E10600] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Interactive Map Mockup & Address info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-[11px] font-mono font-extrabold uppercase tracking-[0.3em] text-[#E10600] mb-2">
                Координаты Пит-Стопа
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black italic uppercase tracking-tighter">
                ФИНИШНАЯ ЧЕРТА: <span className="text-[#E10600]">ГДЕ МЫ НАХОДИМСЯ</span>
              </h2>
            </div>

            <div className="flex items-start gap-4 bg-zinc-900/80 border border-zinc-800 p-6 rounded-lg">
              <MapPin className="w-6 h-6 text-[#E10600] shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-black uppercase text-lg sm:text-xl text-white mb-1">
                  г. Краснодар, ул. Черкасская, 68/1
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-2">
                  Прикубанский округ. Удобный подъезд с ул. Героев-Разведчиков, Восточно-Кругликовской и ул. 40-летия Победы.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Режим работы: Ежедневно 09:00 — 21:00 без перерывов</span>
                </div>
              </div>
            </div>

            {/* Map Mockup Area */}
            <div className="relative h-[320px] bg-zinc-950 border-2 border-zinc-800 rounded-lg overflow-hidden flex items-center justify-center group">
              {/* Styled Fake Grid Map background */}
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px]"></div>
              
              {/* Simulated Roadmap lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-full h-8 bg-zinc-700 -rotate-12 absolute"></div>
                <div className="h-full w-10 bg-zinc-700 rotate-45 absolute"></div>
                <div className="w-full h-4 bg-amber-500/40 rotate-12 absolute"></div>
              </div>

              {/* Center Pin Box */}
              <div className="relative z-10 bg-black/90 border-2 border-[#E10600] p-6 rounded shadow-2xl text-center max-w-sm m-4 transform group-hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-[#E10600] rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(225,6,0,0.8)] animate-bounce">
                  <Navigation className="w-6 h-6 text-black fill-black" />
                </div>
                <h4 className="font-display font-black uppercase italic text-base text-white">
                  АВТОКОМПЛЕКС ТРИАЛ
                </h4>
                <p className="text-[11px] font-mono text-zinc-300 mt-1">
                  ул. Черкасская, 68/1 • Пит-стоп подвески и шиномонтаж
                </p>
                <a
                  href="https://yandex.ru/maps/-/CDu~5I9a"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block bg-[#E10600] text-black font-display font-black uppercase text-[11px] px-4 py-2 italic hover:bg-white transition-colors tracking-wider"
                >
                  Построить маршрут навигатором →
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clickable Phone Numbers & Booking Box */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div>
              <div className="text-[11px] font-mono font-extrabold uppercase tracking-[0.3em] text-zinc-500 mb-4">
                Прямая линия бокса
              </div>
              
              <div className="space-y-4">
                {CONTACTS_DATA.map((item, i) => (
                  <div key={i} className="bg-zinc-950 p-5 border border-zinc-800 hover:border-[#E10600] transition-colors rounded">
                    <div className="text-[10px] font-mono uppercase text-zinc-500 font-bold mb-1">
                      {item.department}
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href={`tel:${item.rawPhone}`}
                        className="text-xl sm:text-2xl font-mono font-extrabold text-white hover:text-[#E10600] tracking-tight transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-5 h-5 text-[#E10600]" />
                        {item.phone}
                      </a>
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-1 rounded">
                        {item.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 border-2 border-[#E10600] rounded text-center">
              <h3 className="font-display font-black uppercase italic text-xl text-white mb-2">
                Готовы записать болид на обслуживание?
              </h3>
              <p className="text-xs text-zinc-400 mb-6 font-medium">
                Оставьте контактный телефон или позвоните нам прямо сейчас. Мастер проконсультирует по наличию деталей и зафиксирует время приема.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenModal('booking')}
                  className="flex-1 bg-[#E10600] text-black py-3.5 px-4 font-display font-black uppercase italic text-xs tracking-wider skew-x-[-10deg] hover:bg-white transition-colors cursor-pointer"
                >
                  <span className="inline-block transform skew-x-[10deg]">Забронировать бокс</span>
                </button>
                <button
                  onClick={() => onOpenModal('copydoc')}
                  className="bg-zinc-800 text-white py-3.5 px-4 font-mono font-bold uppercase text-[11px] hover:bg-zinc-700 transition-colors flex items-center justify-center gap-1.5 rounded"
                >
                  <FileText className="w-4 h-4 text-[#E10600]" />
                  <span>ТЗ Копирайтера</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Footer Bottom Bar matching exact Design HTML bottom footer spec */}
      <div className="h-12 bg-[#E10600] flex flex-wrap items-center justify-between px-4 sm:px-8 text-black overflow-hidden font-display">
        <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-none py-2">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-tighter flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 fill-black text-[#E10600]" />
            No Hidden Costs
          </span>
          <span>•</span>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-tighter">
            No Over-tightening
          </span>
          <span>•</span>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-tighter">
            Precise Torque Specs (Динамометрический ключ)
          </span>
          <span>•</span>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-tighter">
            Original Parts in Stock
          </span>
        </div>
        <div className="text-[10px] sm:text-xs font-black uppercase italic tracking-wider py-1 shrink-0">
          © 2024–2026 ТРИАЛ AUTO COMPLEX. THE CHAMPION'S CHOICE.
        </div>
      </div>
    </footer>
  );
};
