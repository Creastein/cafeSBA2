
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductGrid from './components/ProductGrid';
import CustomCakesSection from './components/CustomCakesSection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(2);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20">
      <Header cartCount={cartCount} />
      <main className="pt-20">
        <Hero />
        <TrustBar />
        <ProductGrid onAddToCart={handleAddToCart} />
        <CustomCakesSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
