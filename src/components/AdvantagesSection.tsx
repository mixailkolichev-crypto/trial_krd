import React from 'react';
import { Zap, ShieldCheck, PackageCheck, Users, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { OBJECTION_HANDLING_FAQS } from '../data';
import { ActiveModal } from '../types';

interface AdvantagesSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="advantages" className="bg-black py-20 px-4 sm:px-8 lg:px-12 border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-[11px] font-mono font-extrabold uppercase tracking-[0.3em] text-zinc-500 mb-3">
            Победа в деталях
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black italic uppercase tracking-tighter text-white mb-4">
            ПОЧЕМУ КОМАНДА «ТРИАЛ» <span className="text-[#E10600]">ВЫИГРЫВАЕТ ГОНКУ</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base italic font-medium leading-relaxed">
            Анализ 800+ отзывов доказал: водители ценят честность, строгий динамометрический регламент и отсутствие скрытых накруток в чеке.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Pillar 1 */}
          <div className="bg-zinc-950 p-8 border border-zinc-800 hover:border-[#E10600] transition-all relative overflow-hidden group">
            <div className="w-12 h-12 bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center mb-6 group-hover:bg-[#E10600] group-hover:text-black transition-colors text-[#E10600]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black uppercase text-xl italic text-white mb-3 tracking-tight">
              Скорость Формулы-1
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal mb-4">
              Ремонтируем подвеску и генераторы за <strong className="text-white">1–2 часа</strong>. Работаем в выходные и официальные праздничные дни, когда остальные автосервисы закрыты. Спасаем транзитных водителей на пути из Москвы или Крыма.
            </p>
            <div className="text-[10px] font-mono font-bold text-[#E10600] uppercase tracking-wider flex items-center gap-1">
              <span>Прием без очередей</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-zinc-950 p-8 border border-zinc-800 hover:border-[#E10600] transition-all relative overflow-hidden group">
            <div className="w-12 h-12 bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center mb-6 group-hover:bg-[#E10600] group-hover:text-black transition-colors text-[#E10600]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black uppercase text-xl italic text-white mb-3 tracking-tight">
              Честный Чек ДО старта
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal mb-4">
              Стоимость слесарных работ и запчастей согласовывается в подробном заказ-наряде <strong className="text-white">ДО</strong> того, как гаечный ключ прикоснется к авто. Никакого двойного тарифа или навязывания ненужных замен.
            </p>
            <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
              <span>Прозрачная детализация</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-zinc-950 p-8 border border-zinc-800 hover:border-[#E10600] transition-all relative overflow-hidden group">
            <div className="w-12 h-12 bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center mb-6 group-hover:bg-[#E10600] group-hover:text-black transition-colors text-[#E10600]">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black uppercase text-xl italic text-white mb-3 tracking-tight">
              Запчасти на Складе
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal mb-4">
              Забудьте об ожидании доставки неделями. Собственный склад автокомплекса насчитывает <strong className="text-white">5000+ наименований</strong> для европейских, японских, корейских и китайских пассажирских авто прямо в боксе.
            </p>
            <div className="text-[10px] font-mono font-bold text-[#E10600] uppercase tracking-wider flex items-center gap-1">
              <span>Оригиналы и аналоги</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-zinc-950 p-8 border border-zinc-800 hover:border-[#E10600] transition-all relative overflow-hidden group">
            <div className="w-12 h-12 bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center mb-6 group-hover:bg-[#E10600] group-hover:text-black transition-colors text-[#E10600]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black uppercase text-xl italic text-white mb-3 tracking-tight">
              Команда Именных Профи
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal mb-4">
              Постоянный штат квалифицированных механиков (Али, Родион, Эмиль, Александр, Максим). Мастера не прячутся за стойкой: мы наглядно покажем люфт на подъемнике и объясним суть проблемы простым языком.
            </p>
            <div className="text-[10px] font-mono font-bold text-[#E10600] uppercase tracking-wider flex items-center gap-1">
              <span>Защита репутации 4.4★</span>
            </div>
          </div>

        </div>

        {/* Counter-Attack Pain Points / Objection Handling Box */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-800">
            <AlertTriangle className="w-6 h-6 text-[#E10600]" />
            <div>
              <h3 className="font-display font-black uppercase italic text-2xl text-white">
                Жесткий контроль регламента бокса
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Развеиваем главные страхи автовладельцев при обращении в автосервис
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OBJECTION_HANDLING_FAQS.map((faq, i) => (
              <div key={i} className="space-y-2">
                <h4 className="text-sm sm:text-base font-display font-bold text-white flex items-start gap-2 italic">
                  <span className="text-[#E10600] font-mono font-black shrink-0">Q{i+1}:</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed pl-6 border-l border-zinc-800">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Вы получаете гарантийный талон и кассовый чек на каждое ТО</span>
            </div>
            <button
              onClick={() => onOpenModal('booking')}
              className="bg-[#E10600] text-black px-6 py-2.5 font-display font-black uppercase italic text-xs tracking-wider skew-x-[-12deg] hover:bg-white transition-colors cursor-pointer"
            >
              <span className="inline-block transform skew-x-[12deg]">Рассчитать стоимость ТО</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
