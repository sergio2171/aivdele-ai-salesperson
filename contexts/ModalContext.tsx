import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isModalOpen: boolean;
  openModal: (source?: string) => void;
  closeModal: () => void;
  leadSource: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadSource, setLeadSource] = useState('unknown');

  const openModal = (source: string = 'generic') => {
    setLeadSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, leadSource }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};