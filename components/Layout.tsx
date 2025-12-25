import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { useModal } from '../contexts/ModalContext';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [showSticky, setShowSticky] = useState(false);
  const { openModal } = useModal();
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky after hero (approx 800px) and hide near footer
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      if (scrollY > 600 && (scrollY + winHeight) < (docHeight - 600)) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brand-text">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-blue origin-left z-50" style={{ scaleX }} />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all py-2">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
             {/* Logo with error fallback */}
             <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
               {!logoError ? (
                  <img 
                    src="image.png" 
                    alt="ИИ-Продавец Лого" 
                    className="w-full h-full object-contain"
                    onError={() => setLogoError(true)}
                  />
               ) : (
                  <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AI</span>
                  </div>
               )}
             </div>
             <span className="font-display font-bold text-lg text-brand-dark hidden md:block">ИИ-Продавец</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <button onClick={() => scrollToSection('pain-points')} className="hover:text-brand-blue">Проблемы</button>
            <button onClick={() => scrollToSection('offer')} className="hover:text-brand-blue">Решение</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-brand-blue">FAQ</button>
          </nav>
          <Button variant="primary" className="py-2 px-4 text-sm" onClick={() => openModal('header')}>
            Купить агента за $197
          </Button>
        </div>
      </header>

      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="italic text-lg text-white mb-4">P.S. Помните: каждый час без автоматизации продаж — это упущенные деньги.</p>
          </div>
          <div className="flex justify-center gap-8 text-sm mb-8">
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Оферта</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 ИИ-Продавец 24/7. Все права защищены.</p>
        </div>
      </footer>

      {/* Sticky Bottom CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 100 }}
        className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-top z-30 md:hidden"
      >
        <Button variant="success" fullWidth onClick={() => openModal('sticky_mobile')}>
          Купить агента за $197 →
        </Button>
      </motion.div>
    </div>
  );
};