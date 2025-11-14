import React from 'react';
import { SHOP_NAME, CONTACT_PHONE, SHOP_ADDRESS } from '../constants';
import { JewelIcon, PhoneIcon, WhatsAppIcon, MailIcon, LocationIcon } from './icons';

interface FooterProps {
  onAboutClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAboutClick }) => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4">
              <JewelIcon className="h-10 w-10 text-amber-400" />
              <span className="text-2xl font-bold text-white">{SHOP_NAME}</span>
            </div>
            <p className="max-w-xs text-slate-400">
              Crafting memories with every piece since 1999. Your trusted family jeweller for generations.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors">Collections</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onAboutClick(); }} className="hover:text-amber-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-amber-400" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-amber-400 transition-colors">{CONTACT_PHONE}</a>
              </li>
              <li className="flex items-center space-x-3">
                <WhatsAppIcon className="h-5 w-5 text-amber-400" />
                <a href={`https://wa.me/91${CONTACT_PHONE}`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-amber-400" />
                <a href="mailto:contact@bhogendra.com" className="hover:text-amber-400 transition-colors">contact@bhogendra.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <LocationIcon className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <a href={`https://maps.app.goo.gl/7eZgMsXFg97unHF6A?g_st=aw=${encodeURIComponent(SHOP_ADDRESS)}`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">{SHOP_ADDRESS}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {SHOP_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;