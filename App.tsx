import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { Story } from './components/sections/Story';
import { Solution } from './components/sections/Solution';
import { Offer } from './components/sections/Offer';
import { SocialProof } from './components/sections/SocialProof';
import { Urgency } from './components/sections/Urgency';
import { FAQ } from './components/sections/FAQ';
import { ChatWidget } from './components/ChatWidget';
import { Button } from './components/ui/Button';
import { ModalProvider, useModal } from './contexts/ModalContext';
import { LeadModal } from './components/ui/LeadModal';

// Wrapper for the Final CTA to access context
const FinalCTA: React.FC = () => {
  const { openModal } = useModal();
  return (
    <section className="py-24 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-bold text-brand-dark mb-12">Последний вопрос к вам</h2>
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-8 mb-12">
          <div className="flex-1 bg-gray-100 p-8 rounded-2xl opacity-70">
            <h3 className="font-bold text-xl mb-4 text-gray-600">Путь А ❌</h3>
            <p className="text-gray-500">Те же упущенные лиды по ночам, усталость и зависимость от людей.</p>
          </div>
          <div className="flex-1 bg-white p-8 rounded-2xl border-2 border-brand-green shadow-xl">
            <h3 className="font-bold text-xl mb-4 text-brand-green">Путь Б ✅</h3>
            <p className="text-gray-800">Стабильный поток лидов 24/7, клиенты довольны, вы свободны.</p>
          </div>
        </div>
        <Button variant="success" pulse className="text-xl px-12 py-5" onClick={() => openModal('final_cta')}>
           Запустить ИИ-продавца сейчас
        </Button>
      </div>
    </section>
  );
};

function App() {
  return (
    <ModalProvider>
      <Layout>
        <Hero />
        <Story />
        <Solution />
        <Offer />
        <SocialProof />
        <Urgency />
        <FAQ />
        <FinalCTA />
        <ChatWidget />
        <LeadModal />
      </Layout>
    </ModalProvider>
  );
}

export default App;