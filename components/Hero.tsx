import React from 'react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://plus.unsplash.com/premium_photo-1724762183134-c17cf5f5bed2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Elegant jewelry collection"
        />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight font-serif">
          <span className="block">Exquisite Craftsmanship</span>
          <span className="block text-amber-400">Timeless Elegance</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-lg md:text-xl text-slate-200">
          Discover our curated collection of fine jewelry, designed to celebrate life's most precious moments.
        </p>
        <div className="mt-10">
          <button
            onClick={scrollToProducts}
            className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-amber-600 transform hover:scale-105 transition-all"
          >
            Explore NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;