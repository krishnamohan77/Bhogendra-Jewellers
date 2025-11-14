import React, { useEffect } from 'react';
import { SHOP_NAME, CONTACT_PHONE, WHATSAPP_NUMBER } from '../constants';
import { CloseIcon, PhoneIcon, WhatsAppIcon, MailIcon } from './icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="contact-modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-md m-auto relative transform animate-slide-up p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close contact section"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col items-center text-center">
            <h2 id="contact-modal-title" className="text-3xl font-bold font-serif text-slate-900">Contact Us</h2>
            <p className="text-slate-500 mt-2 mb-6">We'd love to hear from you. Reach out to us through any of the channels below.</p>
            <div className="w-full space-y-4">
                <a href={`tel:${CONTACT_PHONE}`} className="w-full flex items-center space-x-4 p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                    <PhoneIcon className="h-6 w-6 text-amber-500" />
                    <div className="text-left">
                        <span className="font-semibold text-slate-800">Call Us</span>
                        <p className="text-slate-600">{CONTACT_PHONE}</p>
                    </div>
                </a>
                 <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center space-x-4 p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                    <WhatsAppIcon className="h-6 w-6 text-green-500" />
                    <div className="text-left">
                        <span className="font-semibold text-slate-800">Chat on WhatsApp</span>
                        <p className="text-slate-600">Get instant assistance</p>
                    </div>
                </a>
                 <a href="mailto:contact@bhogendra.com" className="w-full flex items-center space-x-4 p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                    <MailIcon className="h-6 w-6 text-blue-500" />
                    <div className="text-left">
                        <span className="font-semibold text-slate-800">Email Us</span>
                        <p className="text-slate-600">contact@bhogendra.com</p>
                    </div>
                </a>
            </div>
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

export default ContactModal;
