import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { useModal } from '../../contexts/ModalContext';
import { Check, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Offer: React.FC = () => {
  const [missedLeads, setMissedLeads] = useState(10);
  const avgCheck = 500;
  const lostRevenue = missedLeads * avgCheck;
  const aiCost = 197;
  const savings = lostRevenue - aiCost;
  const { openModal } = useModal();

  return (
    <section id="offer" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-brand-dark mb-12">
          Полная система, готовая к запуску
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Value Stack */}
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-brand-green p-6 shadow-md rounded-r-xl">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xl text-brand-dark">ОСНОВА: ИИ-Продавец 24/7</h3>
                <span className="text-gray-400 line-through font-semibold">$4,500</span>
              </div>
              <p className="text-sm text-gray-600">Персональная настройка, интеграция с CRM, безлимитные диалоги.</p>
            </div>
            
            {[
              { title: "БОНУС 1: База знаний + скрипты", val: "$800", desc: "Шаблоны для 15 ниш, работа с возражениями." },
              { title: "БОНУС 2: Аналитическая панель", val: "$600", desc: "Отчёты по конверсии, топ вопросов клиентов." },
              { title: "БОНУС 3: А/Б тестирование", val: "$500", desc: "Тестирование разных скриптов, автоподбор." },
              { title: "БОНУС 4: Онбординг-сессия", val: "$300", desc: "Разбор вашей ниши с экспертом (60 мин)." },
            ].map((bonus, idx) => (
              <div key={idx} className="bg-white border-l-4 border-gray-200 p-6 shadow-sm rounded-r-xl opacity-90">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-brand-dark flex items-center gap-2">
                    <Check size={18} className="text-brand-green" /> {bonus.title}
                  </h3>
                  <span className="text-gray-400 line-through font-semibold">{bonus.val}</span>
                </div>
                <p className="text-sm text-gray-500">{bonus.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing Card & ROI */}
          <div className="flex flex-col gap-8">
            <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-brand-green text-xs font-bold px-3 py-1 rounded-bl-lg">
                 POPULAR
               </div>
               <div className="flex justify-between items-end mb-6 border-b border-gray-700 pb-6">
                 <div>
                   <p className="text-gray-400 text-sm mb-1">Общая ценность: <span className="line-through">$6,700</span></p>
                   <p className="font-display font-bold text-3xl">Ваша инвестиция:</p>
                 </div>
                 <div className="text-right">
                    <div className="text-5xl font-bold text-brand-green">$197<span className="text-lg text-white font-normal">/мес</span></div>
                 </div>
               </div>

               <Button variant="success" fullWidth pulse className="mb-6 text-xl" onClick={() => openModal('offer_pricing')}>
                 → Купить агента за $197
               </Button>
               
               <p className="text-center text-sm text-gray-400 mb-6">
                 Первый месяц — тестовый. Не подошло — отменяете без объяснений.
               </p>

               <div className="bg-gray-800 p-4 rounded-xl">
                 <h4 className="font-bold text-sm mb-3 text-center uppercase tracking-wider text-gray-400">ROI Калькулятор</h4>
                 <div className="space-y-4">
                   <div>
                     <label className="text-xs text-gray-400 block mb-2">Сколько лидов вы упускаете в месяц? (Слайдер: {missedLeads})</label>
                     <input 
                       type="range" 
                       min="1" 
                       max="50" 
                       value={missedLeads} 
                       onChange={(e) => setMissedLeads(parseInt(e.target.value))}
                       className="w-full accent-brand-green h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                     />
                   </div>
                   <div className="flex justify-between text-sm">
                      <span>Средний чек: <strong>${avgCheck}</strong></span>
                      <span className="text-red-400">Потери: ${lostRevenue.toLocaleString()}</span>
                   </div>
                   <div className="pt-2 border-t border-gray-700 text-center">
                      <p className="text-sm">ИИ спасает выручку. Ваша выгода:</p>
                      <p className="text-2xl font-bold text-brand-green">+${savings.toLocaleString()}/мес</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Guarantee */}
            <div className="bg-[#E6EFFF] p-6 rounded-2xl border-2 border-brand-green flex flex-col md:flex-row items-center gap-6">
               <ShieldCheck size={64} className="text-brand-green flex-shrink-0" />
               <div>
                 <h4 className="font-bold text-xl text-brand-dark mb-2">ГАРАНТИЯ "НУЛЕВОГО РИСКА"</h4>
                 <p className="text-sm text-gray-700">
                   Тестируйте 7 дней. Если не подойдет — напишите "Не подошло", и мы вернем 100% денег в течение 24 часов. Бонус 1 (скрипты) остается у вас.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};