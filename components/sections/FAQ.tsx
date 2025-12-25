import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../../types';

const faqData: FAQItem[] = [
  { question: "Что если ИИ ответит глупость?", answer: "У вас есть режим 'модерация' на первые 2 недели — каждое сообщение ИИ отправляется только после вашего подтверждения. Также ИИ не фантазирует — если нет ответа в базе, он передает диалог человеку." },
  { question: "Мой бизнес специфичный. Сработает?", answer: "Мы уже настроили ИИ для 40+ ниш. Если у вас есть повторяющиеся вопросы и услуги — ИИ справится. Мы адаптируем скрипты под вас." },
  { question: "Сложно ли интегрировать с сайтом?", answer: "Мы внедряем виджет за 2-4 часа. От вас нужен только доступ. Программист не требуется." },
  { question: "Можно ли изменить скрипты потом?", answer: "Да, через личный кабинет вы можете править базу знаний как Google Doc. Глобальные доработки раз в месяц бесплатно." },
  { question: "Почему так дёшево?", answer: "Потому что это ПО, а не человек. Мы масштабируем технологию, а вы получаете качество топ-менеджера по цене кофейни." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center text-brand-dark mb-12">
          Частые вопросы
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-800">{item.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};