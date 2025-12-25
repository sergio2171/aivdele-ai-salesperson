import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { useModal } from '../../contexts/ModalContext';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const { openModal } = useModal();
  
  useEffect(() => {
    const sequence = [
      { role: 'user', text: 'Сколько стоит корп. пакет на 50 человек?', delay: 1000 },
      { role: 'ai', text: 'Здравствуйте! Пакет на 50 сотрудников стоит $3,500. В него входит полный доступ 24/7 и персональный менеджер.', delay: 2500 },
      { role: 'user', text: 'А скидка есть?', delay: 4000 },
      { role: 'ai', text: 'Да, при оплате сегодня действует скидка 10%. Итого: $3,150. Оформить счет?', delay: 5500 },
      { role: 'user', text: 'Давайте.', delay: 7000 },
      { role: 'ai', text: 'Отлично! Ссылка на оплату сформирована: [Ссылка]. Ждем вас!', delay: 8500 },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runSequence = () => {
      setMessages([]);
      let currentTime = 0;
      sequence.forEach((msg) => {
        currentTime += msg.delay;
        const t = setTimeout(() => {
          setMessages(prev => [...prev, { role: msg.role as 'user' | 'ai', text: msg.text }]);
        }, msg.delay);
        timeouts.push(t);
      });
    };

    runSequence();
    const loop = setInterval(runSequence, 12000); 

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-hero-gradient text-white flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-8 z-10"
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight">
              Ваши клиенты пишут <br/><span className="text-yellow-300">в 3 ночи.</span> <br/>Кто им отвечает?
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-light">
              ИИ-продавец, который знает ваш бизнес лучше любого стажёра — и конвертирует заявки в продажи, пока вы спите.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => openModal('hero_main')} variant="success" pulse className="text-lg">
                → Купить агента за $197
              </Button>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-200">
               <div className="flex items-center gap-2">
                 <CheckCircle size={16} className="text-brand-green" />
                 <span>Настройка за 48 часов</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle size={16} className="text-brand-green" />
                 <span>Возврат денег без вопросов</span>
               </div>
            </div>

            <div className="pt-4 border-t border-white/20">
              <p className="font-semibold text-sm">
                <span className="text-brand-green text-lg font-bold">847</span> компаний уже используют · 
                <span className="text-brand-green text-lg font-bold ml-1">91%</span> продлевают
              </p>
            </div>
          </motion.div>

          {/* Right Column - Chat Demo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-5/12 relative z-10"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900 max-w-sm mx-auto md:mr-0 h-[500px] flex flex-col">
              <div className="bg-gray-100 p-4 border-b border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-purple-600 flex items-center justify-center text-white">
                   <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">ИИ-Продавец</p>
                  <p className="text-brand-green text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <div className="flex-1 p-4 bg-gray-50 overflow-y-auto space-y-4 flex flex-col">
                {messages.map((msg, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-white text-gray-800 self-start rounded-tl-none shadow-sm' 
                        : 'bg-brand-blue text-white self-end rounded-tr-none shadow-md'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
                {messages.length % 2 !== 0 && messages.length < 6 && (
                   <div className="text-gray-400 text-xs self-end animate-pulse">ИИ печатает...</div>
                )}
              </div>
              <div className="p-3 bg-white border-t border-gray-200">
                <div className="h-10 bg-gray-100 rounded-full w-full"></div>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 cursor-pointer"
          onClick={() => document.getElementById('pain-points')?.scrollIntoView({behavior: 'smooth'})}
        >
          <ArrowDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};