
import React, { useState, Suspense, useMemo } from 'react';
import { useScrollTo } from './hooks/useScrollTo';

const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const TrustBar = React.lazy(() => import('./components/TrustBar'));
const MenuSection = React.lazy(() => import('./components/MenuSection'));
const AmbianceSection = React.lazy(() => import('./components/AmbianceSection'));
// ProductGrid removed as replaced by MenuSection
const CustomCakesSection = React.lazy(() => import('./components/CustomCakesSection'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const VisitUsSection = React.lazy(() => import('./components/VisitUsSection'));
const Footer = React.lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(2);

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    }>
      <div className="min-h-screen font-sans selection:bg-primary/20">
        <Header cartCount={cartCount} />
        <main className="pt-20">
          <Hero />
          <TrustBar />
          <MenuSection />
          <AmbianceSection />
          <CustomCakesSection />
          <Gallery />
          <VisitUsSection />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
