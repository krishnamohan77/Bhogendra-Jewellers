import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;