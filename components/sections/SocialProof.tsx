import React from 'react';
import { CaseStudy, Testimonial } from '../../types';

const cases: CaseStudy[] = [
  {
    title: "Школа английского (Казань)",
    before: "23% конверсия, только в раб. время",
    after: "61% конверсия, ответы за 90 сек",
    revenue: "+$6,500 / 3 мес",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Магазин спортпита (Москва)",
    before: "Теряли 40% заявок из-за нагрузки",
    after: "100% обработка, рост чека",
    revenue: "+$4,000 / мес",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "B2B-сервис обучения",
    before: "Теряли ЛПР по вечерам",
    after: "ИИ назначает встречи в календарь",
    revenue: "27 новых клиентов",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-brand-dark mb-16">
          Реальные результаты
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative">
                 <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                   <h3 className="text-white font-bold text-lg">{c.title}</h3>
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 mb-6 flex-1">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">До</p>
                    <p className="text-sm text-gray-600 border-l-2 border-red-300 pl-2">{c.before}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">После</p>
                    <p className="text-sm text-gray-800 border-l-2 border-brand-green pl-2 font-medium">{c.after}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 text-center">
                   <p className="text-brand-green font-bold text-xl">{c.revenue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center relative">
          <span className="text-6xl text-brand-blue/20 font-serif absolute top-4 left-6">"</span>
          <p className="text-xl text-gray-700 italic mb-6 relative z-10">
            "Честно, первую неделю я проверял каждый диалог — боялся, что ИИ ляпнет глупость. Но он отрабатывал возражения лучше, чем мой топ-менеджер. Теперь у меня 3 ИИ-продавца на разных проектах."
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                <img src="https://picsum.photos/100/100?random=4" alt="Reviewer" />
             </div>
             <div className="text-left">
               <p className="font-bold text-brand-dark">Андрей К.</p>
               <p className="text-sm text-gray-500">Владелец сети автосервисов</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};