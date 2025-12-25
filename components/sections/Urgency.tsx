import React from 'react';
import { Clock } from 'lucide-react';

export const Urgency: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-yellow-400">
           <Clock className="animate-pulse" />
           <span className="font-bold uppercase tracking-widest text-sm">Ограниченное предложение</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Почему нужно действовать сейчас
        </h3>
        <p className="text-gray-300 mb-8">
          Мы физически можем качественно запустить только 15 новых клиентов в месяц (персональная настройка требует времени экспертов).
        </p>
        
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6">
          <div className="flex justify-between text-sm mb-2 font-bold">
            <span>Занято мест: 11 / 15</span>
            <span className="text-red-400">Осталось 4 слота на январь</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full w-[73%] transition-all duration-1000"></div>
          </div>
        </div>
        
        <p className="text-sm text-gray-400">
          После заполнения слотов — лист ожидания на следующий месяц.
        </p>
      </div>
    </section>
  );
};