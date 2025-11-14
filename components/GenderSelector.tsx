import React from 'react';

interface GenderSelectorProps {
  activeGender: 'Men' | 'Women';
  onGenderChange: (gender: 'Men' | 'Women') => void;
}

const GenderSelector: React.FC<GenderSelectorProps> = ({ activeGender, onGenderChange }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex space-x-2 bg-slate-200/60 p-2 rounded-lg">
        <button
          onClick={() => onGenderChange('Women')}
          className={`px-8 py-3 md:px-12 md:py-4 text-lg font-bold rounded-md transition-all duration-300 whitespace-nowrap ${
            activeGender === 'Women'
              ? 'bg-white text-amber-600 shadow-lg'
              : 'text-slate-600 hover:bg-white/70'
          }`}
        >
          For Her
        </button>
        <button
          onClick={() => onGenderChange('Men')}
          className={`px-8 py-3 md:px-12 md:py-4 text-lg font-bold rounded-md transition-all duration-300 whitespace-nowrap ${
            activeGender === 'Men'
              ? 'bg-white text-slate-800 shadow-lg'
              : 'text-slate-600 hover:bg-white/70'
          }`}
        >
          For Him
        </button>
      </div>
    </div>
  );
};

export default GenderSelector;