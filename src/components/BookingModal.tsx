import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Wrench, Calendar, Phone } from 'lucide-react';
import { ActiveModal } from '../types';

interface BookingModalProps {
  modalType: ActiveModal;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ modalType, onClose }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!modalType || modalType === 'copydoc') return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  const isDiagnostic = modalType === 'diagnostic';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-zinc-950 border-2 border-[#E10600] p-6 sm:p-8 rounded-lg shadow-[0_0_50px_rgba(225,6,0,0.35)] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-900 p-2 rounded-full border border-zinc-800 hover:border-[#E10600] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#E10600] text-black font-display font-black text-[10px] px-2.5 py-1 uppercase tracking-widest mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>{isDiagnostic ? 'Регламентная диагностика' : 'Пит-стоп бронирование'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black italic uppercase text-white mb-2 leading-tight">
              {isDiagnostic ? 'Диагностика Ходовой' : 'Запись на Обслуживание'}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 mb-6 font-medium leading-relaxed">
              Оставьте номер телефона. Администратор Али или мастер Родион свяжется с вами в течение 5 минут для согласования точной стоимости работ и наличия деталей.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div>
                <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                  Ваше имя:
                </label>
                <input
                  type="text"
                  placeholder="например, Александр"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 focus:border-[#E10600] text-white px-4 py-3 rounded text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                  Марка и модель автомобиля:
                </label>
                <input
                  type="text"
                  placeholder="например, Kia Rio или Geely Monjaro"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 focus:border-[#E10600] text-white px-4 py-3 rounded text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-[#E10600] font-bold mb-1">
                  Телефон для связи (обязательно):
                </label>
                <div className="relative flex items-center">
                  <Phone className="absolute left-3.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="tel"
                    required
                    placeholder="+7 (918) 000-00-00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-900 border-2 border-zinc-700 focus:border-[#E10600] text-white pl-10 pr-4 py-3 rounded text-base font-extrabold outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#E10600] text-black py-4 px-6 font-display font-black uppercase italic text-sm tracking-wider skew-x-[-12deg] hover:bg-white transition-all cursor-pointer shadow-lg active:scale-98"
                >
                  <span className="inline-block transform skew-x-[12deg] flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Зафиксировать время в боксе
                  </span>
                </button>
              </div>

              <div className="text-[10px] text-zinc-500 text-center leading-tight">
                Нажимая кнопку, вы подтверждаете согласие с правилами честного ценообразования автокомплекса ТРИАЛ.
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black uppercase italic text-white">
              Заявка принята в бокс!
            </h3>
            <p className="text-sm text-zinc-300 font-mono max-w-md mx-auto">
              Мастер уже проверяет складские остатки по модели <strong className="text-[#E10600]">{carModel || 'вашего авто'}</strong>. Ждите звонка на номер <strong className="text-white">{phone}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-mono font-bold uppercase text-xs px-8 py-3 rounded transition-colors cursor-pointer"
              >
                Вернуться к сайту
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
