import React from 'react';
import { SHOP_NAME, CONTACT_PHONE } from '../constants';
import { JewelIcon, PhoneIcon, CartIcon } from './icons';

interface HeaderProps {
  onAboutClick: () => void;
  onContactClick: () => void;
  onCartClick: () => void;
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick, onContactClick, onCartClick, cartItemCount }) => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <JewelIcon className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold font-serif text-slate-900 tracking-tight">{SHOP_NAME}</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToProducts(); }} className="text-slate-600 hover:text-amber-600 transition-colors">Collections</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onAboutClick(); }} className="text-slate-600 hover:text-amber-600 transition-colors">About Us</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-slate-600 hover:text-amber-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={onCartClick} className="relative text-slate-600 hover:text-amber-600 transition-colors" aria-label={`View cart with ${cartItemCount} items`}>
              <CartIcon className="h-7 w-7" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                  {cartItemCount}
                </span>
              )}
            </button>
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center space-x-2 bg-amber-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-amber-600 transition-colors font-semibold">
              <PhoneIcon className="h-5 w-5" />
              <span className="hidden sm:inline">{CONTACT_PHONE}</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;