
import React, { useState, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const TrustBar = React.lazy(() => import('./components/TrustBar'));
const MenuSection = React.lazy(() => import('./features/menu/MenuSection'));
const AmbianceSection = React.lazy(() => import('./components/AmbianceSection'));
const CustomCakesSection = React.lazy(() => import('./components/CustomCakesSection'));
const Gallery = React.lazy(() => import('./features/gallery/Gallery'));
const VisitUsSection = React.lazy(() => import('./features/contact/VisitUsSection'));
const Footer = React.lazy(() => import('./components/Footer'));

import ScrollManager from './components/ScrollManager';

const App: React.FC = () => {
  const [cartCount] = useState(2);





  return (
    <>
      <ScrollManager />
      <ErrorBoundary>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-bg-soft">
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
      </ErrorBoundary>
    </>
  );
};

export default App;
