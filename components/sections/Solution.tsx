import React from 'react';
import { motion } from 'framer-motion';
import { UserX, MessageSquareX, ZapOff, BrainCircuit, Database, MessageSquare, TrendingUp, Sun, Briefcase, Smile, DollarSign } from 'lucide-react';

const Step = ({ number, title, desc, icon }: { number: string, title: string, desc: string, icon: React.ReactNode }) => (
  <div className="flex gap-6 relative">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl z-10 relative">
      {number}
    </div>
    <div className="pb-12 border-l-2 border-brand-blue/20 ml-[-2.25rem] pl-12 last:border-0">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="mb-4 text-brand-blue">{icon}</div>
        <h4 className="text-xl font-bold mb-2 text-brand-dark">{title}</h4>
        <ul className="text-gray-600 space-y-2 list-disc list-inside">
          {desc.split('\n').map((line, i) => (
             line.trim() !== '' && <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const Solution: React.FC = () => {
  return (
    <>
      {/* False Paths */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-brand-dark mb-16">
            Почему "обычные решения" не работают
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                icon: <UserX size={32} />, 
                title: "Найм людей", 
                failures: ["Обучение 3-6 месяцев", "Текучка кадров", "Человеческий фактор", "ФОТ от $2,000/мес"] 
              },
              { 
                icon: <MessageSquareX size={32} />, 
                title: "Примитивные боты", 
                failures: ["'Нажмите 1 для цены'", "Не понимают контекст", "Раздражают клиентов", "Требуют разработчиков"] 
              },
              { 
                icon: <ZapOff size={32} />, 
                title: "Без автоматизации", 
                failures: ["Вы отвечаете сами по ночам", "Выгорание и стресс", "Бизнес зависит от вас", "Потеря клиентов"] 
              }
            ].map((path, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-6 text-gray-500 mx-auto">
                  {path.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-6">{path.title}</h3>
                <ul className="space-y-3">
                  {path.failures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-red-500 font-bold">✕</span> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="bg-[#E6EFFF] p-6 rounded-xl border-l-4 border-brand-blue max-w-3xl mx-auto">
            <p className="text-lg text-brand-blue italic font-medium text-center">
              "Проблема не в инструментах. Проблема в том, что никто не совмещал интеллект человека с выносливостью машины — до сегодняшнего дня."
            </p>
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="py-24 bg-gradient-to-b from-[#F7FAFC] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-brand-dark mb-4">
            Как работает ИИ-продавец
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Уникальный механизм, который делает его неотличимым от вашего лучшего сотрудника.
          </p>

          <div className="max-w-4xl mx-auto">
            <Step 
              number="1" 
              icon={<Database size={32} />}
              title="Глубокое обучение за 48 часов" 
              desc={`Загружаем все ваши продукты, цены и услуги\nСкармливаем скрипты продаж и частые вопросы\nИзучаем кейсы и отзывы\nРезультат: Знает бизнес как ветеран`}
            />
            <Step 
              number="2" 
              icon={<MessageSquare size={32} />}
              title="Умная коммуникация" 
              desc={`Понимает естественный язык (не кнопки!)\nЗадаёт уточняющие вопросы для квалификации\nВыявляет боли и подбирает решение\nОтрабатывает возражения`}
            />
            <Step 
              number="3" 
              icon={<TrendingUp size={32} />}
              title="Непрерывное обучение" 
              desc={`Анализирует каждый диалог\nУчится на успешных сделках\nАдаптируется под новые продукты`}
            />
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-white p-6 rounded-xl shadow-lg border border-brand-green/30 max-w-2xl">
               <h4 className="font-bold text-lg mb-2">Интерактивное Демо</h4>
               <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                 Попробуйте пообщаться с нашим агентом прямо сейчас в чате справа внизу - обратите внимание, как он умело ведет к покупке, разумно отвечает, попробуйте поставить его в тупик нестандартными вопросами и Вы удивитесь его разумности.
                 <br/><br/>
                 Такой агент может работать на Вас!
               </p>
               <div className="text-brand-blue animate-bounce">↘</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projection (Point B) */}
      <section className="py-24 bg-brand-green/5 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-brand-dark mb-16">
            Понедельник через 3 месяца
          </h2>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto">
             <div className="mb-10 text-center md:text-left">
               <p className="text-xl text-gray-700">
                 Утро. Вы открываете CRM. За выходные вы не написали ни одного сообщения, но видите:
               </p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
               {[
                 { val: "47", label: "Новых обращений" },
                 { val: "31", label: "Квалифицированных" },
                 { val: "12", label: "Встреч согласовано" },
                 { val: "3", label: "Купили сразу", hl: true },
               ].map((stat, idx) => (
                 <div key={idx} className={`text-center p-4 rounded-xl ${stat.hl ? 'bg-brand-green/10 border border-brand-green' : 'bg-gray-50'}`}>
                   <div className={`text-3xl md:text-5xl font-bold mb-2 ${stat.hl ? 'text-brand-green' : 'text-brand-dark'}`}>
                     {stat.val}
                   </div>
                   <div className="text-sm text-gray-600">{stat.label}</div>
                 </div>
               ))}
             </div>

             <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: <Sun className="text-yellow-500"/>, text: "Спокойствие" },
                  { icon: <Briefcase className="text-blue-500"/>, text: "Уверенность" },
                  { icon: <Smile className="text-green-500"/>, text: "Свобода" },
                  { icon: <DollarSign className="text-purple-500"/>, text: "Гордость" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-center gap-2 bg-white border border-gray-100 shadow-sm p-3 rounded-lg">
                    {s.icon} <span className="font-semibold">{s.text}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </>
  );
};