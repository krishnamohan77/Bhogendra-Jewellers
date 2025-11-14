import React, { useEffect } from 'react';
import { Product } from '../types';
import { CloseIcon, CartIcon } from './icons';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const { name, imageUrl, category } = product;
  
  const handleAddToCartClick = () => {
    onAddToCart(product);
  };

  useEffect(() => {
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
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-md m-auto relative transform animate-slide-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close product details"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <div className="aspect-square">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded-t-lg" />
        </div>
        
        <div className="p-6 text-center">
          <h2 id="product-modal-title" className="text-2xl font-bold font-serif text-slate-900">{name}</h2>
          <p className="text-slate-500 mt-1 mb-6">{category}</p>
          <button
            onClick={handleAddToCartClick}
            className="w-full flex items-center justify-center space-x-3 bg-amber-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition-all text-lg transform hover:scale-105"
          >
            <CartIcon className="h-6 w-6" />
            <span>Add to Cart</span>
          </button>
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

export default ProductModal;