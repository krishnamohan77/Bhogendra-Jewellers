import React, { useEffect } from 'react';
import { SHOP_NAME, ABOUT_US_TEXT } from '../constants';
import { CloseIcon, JewelIcon } from './icons';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-lg m-auto relative transform animate-slide-up p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close about us section"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col items-center text-center">
            <JewelIcon className="h-12 w-12 text-amber-500 mb-4" />
            <h2 id="about-modal-title" className="text-3xl font-bold font-serif text-slate-900">{`About ${SHOP_NAME}`}</h2>
            <div className="w-20 h-0.5 bg-amber-400 my-4"></div>
            <p className="text-slate-600 leading-relaxed">
              {ABOUT_US_TEXT}
            </p>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default AboutModal;