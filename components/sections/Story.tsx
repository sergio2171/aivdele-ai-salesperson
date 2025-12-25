import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, Frown, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '09:00', leads: 12 },
  { name: '12:00', leads: 18 },
  { name: '15:00', leads: 15 },
  { name: '18:00', leads: 8 },
  { name: '21:00', leads: 24 },
  { name: '00:00', leads: 14 },
  { name: '03:00', leads: 9 },
];

export const Story: React.FC = () => {
  return (
    <section id="pain-points" className="py-24 bg-[#F7FAFC] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-6">
            Вы узнаете себя в этом?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-500 relative"
          >
            <div className="absolute -top-6 -left-6 bg-red-100 p-4 rounded-full">
              <AlertTriangle className="text-red-500 w-8 h-8" />
            </div>
            <p className="text-lg text-gray-700 italic leading-relaxed mb-6">
              "Вторник, 14:37. Я на встрече с поставщиком. Телефон вибрирует. Потенциальный клиент в чате: <span className="font-semibold text-gray-900">'Сколько стоит корпоративный пакет на 50 человек?'</span>
              <br/><br/>
              Я не могу ответить прямо сейчас. Мысленно помечаю — ответить через час.
              <br/><br/>
              18:40. Вспоминаю про сообщение. Открываю чат. <span className="bg-red-50 text-red-700 px-1 rounded">Клиент ушёл. Без следа.</span> Может, к конкурентам. Может, передумал. 50 человек × средний чек.
              <br/><br/>
              Считаю упущенную выручку. Становится горько."
            </p>
            <p className="text-right text-gray-500 font-medium">— Из дневника владельца бизнеса</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
             <h3 className="text-2xl font-bold text-brand-dark">Окно упущенных возможностей</h3>
             <p className="text-gray-600">Красным выделены часы, когда вы спите или заняты, а клиенты пишут.</p>
             <div className="h-64 bg-white p-4 rounded-xl shadow-md">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis hide />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                    <Bar dataKey="leads" radius={[4, 4, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={(index >= 4 || index === 6) ? '#FF6B6B' : '#CBD5E0'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <TrendingDown size={40} className="text-red-500" />, 
              title: "40-60% лидов", 
              desc: "Вы теряете просто потому, что не отвечаете в течение 5 минут." 
            },
            { 
              icon: <Clock size={40} className="text-blue-500" />, 
              title: "8 vs 24 часа", 
              desc: "Ваши продавцы работают 8 часов. Клиенты приходят 24 часа." 
            },
            { 
              icon: <Frown size={40} className="text-purple-500" />, 
              title: "Бесконечный найм", 
              desc: "Наняли нового менеджера? Через 2 месяца он увольняется — и вы снова на старте." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};