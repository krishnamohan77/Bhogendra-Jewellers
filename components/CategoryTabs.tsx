
import React from 'react';
import { ProductCategory } from '../types';

interface CategoryTabsProps {
  categories: ProductCategory[];
  activeCategory: ProductCategory;
  setActiveCategory: (category: ProductCategory) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex space-x-2 md:space-x-4 bg-slate-200/60 p-2 rounded-full overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
              activeCategory === category
                ? 'bg-white text-amber-600 shadow-md'
                : 'text-slate-600 hover:bg-white/70'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
