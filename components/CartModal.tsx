import React, { useEffect } from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER, getCartWhatsAppMessage } from '../constants';
import { CloseIcon, TrashIcon, WhatsAppIcon, CartIcon } from './icons';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (productId: number) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, items, onRemove }) => {
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

  const openWhatsApp = () => {
    if (items.length === 0) return;
    const message = encodeURIComponent(getCartWhatsAppMessage(items));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-modal-title"
    >
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-slate-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-200">
          <h2 id="cart-modal-title" className="text-xl font-bold font-serif text-slate-800">Your Cart</h2>
          <button 
            onClick={onClose} 
            className="text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close cart"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="flex-grow overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-slate-500">
              <CartIcon className="w-16 h-16 mb-4 text-slate-300" />
              <p className="font-semibold">Your cart is empty.</p>
              <p className="text-sm">Add items from the collections to get started.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.id} className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-sm">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-grow">
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors p-2"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="p-4 border-t border-slate-200 bg-white">
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-all text-lg"
            >
              <WhatsAppIcon className="h-6 w-6" />
              <span>Inquire All on WhatsApp</span>
            </button>
          </footer>
        )}
      </div>
    </div>
  );
};

export default CartModal;