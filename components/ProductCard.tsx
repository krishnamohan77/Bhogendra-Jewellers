import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { name, imageUrl } = product;

  return (
    <div 
      onClick={() => onProductClick(product)}
      className="group bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onProductClick(product)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow text-center">
        <h3 className="text-md md:text-lg font-semibold text-slate-800 ">{name}</h3>
        <p className="text-sm text-slate-500 mt-1">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;