import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import AboutModal from './components/AboutModal';
import ContactModal from './components/ContactModal';
import CartModal from './components/CartModal';
import GenderSelector from './components/GenderSelector'; // Import GenderSelector
import { Product, ProductCategory } from './types';
import { PRODUCTS, MENS_CATEGORIES, WOMENS_CATEGORIES } from './constants';

const App: React.FC = () => {
  const [activeGender, setActiveGender] = useState<'Men' | 'Women'>('Women');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(WOMENS_CATEGORIES[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const currentCategories = useMemo(() => {
    return activeGender === 'Men' ? MENS_CATEGORIES : WOMENS_CATEGORIES;
  }, [activeGender]);

  useEffect(() => {
    // Reset category to the first one when gender changes
    setActiveCategory(currentCategories[0]);
  }, [currentCategories]);

  const filteredProducts = useMemo((): Product[] => {
    return PRODUCTS.filter(product => product.gender === activeGender && product.category === activeCategory);
  }, [activeGender, activeCategory]);

  const handleAddToCart = (productToAdd: Product) => {
    if (!cartItems.find(item => item.id === productToAdd.id)) {
      setCartItems(prevItems => [...prevItems, productToAdd]);
    }
    setSelectedProduct(null);
    setIsCartModalOpen(true);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header
        onAboutClick={() => setIsAboutModalOpen(true)}
        onContactClick={() => setIsContactModalOpen(true)}
        onCartClick={() => setIsCartModalOpen(true)}
        cartItemCount={cartItems.length}
      />
      <main>
        <Hero />
        <div id="products" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <GenderSelector activeGender={activeGender} onGenderChange={setActiveGender} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-4">
            Our Collections
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
            Discover timeless pieces, crafted with passion and precision. Find the perfect expression of your style.
          </p>
          <CategoryTabs
            categories={currentCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <ProductGrid products={filteredProducts} onProductClick={setSelectedProduct} />
        </div>
      </main>
      <Footer onAboutClick={() => setIsAboutModalOpen(true)} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;