
import React, { useState, useEffect, useCallback } from 'react';

const CAROUSEL_IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDznARwYP6ZqiZ-Vptf4weGDCiJQtlFlroUJp9ro_JmrMam7EYR2863ryulSlx5y_4HQwzKBuzyf79AaKn_13A4ZnqnoaVMlZUOXKmtivWaZDNWvneoMxXjb_xkq_JAGVz8LKMed4Uv0bfdRq9LV_2LgXl-Vre3KsQSuB-iq2HnIJlXnTBJuqs4PVX_sFJavkddICnjqBRES4Tax2en9PGglVDJdvLyz6I2dkr3nQb-oeF67XOsFr-wkdfioxuTK1e9c5AbiZZflLSt',
    alt: 'Signature Korean Strawberry Shortcake'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB1K_s6cYCUW3-qotd-PKyelV2lL0kXGj3lVuj1W6A9uJG0NwW0VvJXzksC8OAySKKQtqfsIfTVOr4xProfrcle_ABnF5vknuom2ODV-axKHgATcJ0y0WylsF5iJFLa50rphLS40wV774XYnxm429R4ruxEqXJ0kEWYH2XpKvRsXoEEzOvK57fbNkd6THGCikPlkvb6yHWK0Z6lNt_IkMf0O6v6LLsCtk-XMrJSWNeVq_CNoOCcFmUO2LNvMjmiVPK-tmNrOWiflHL',
    alt: 'Premium Basque Cheesecake'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmQq43QWvSbtMs-1mgbgmERhyZVk4-dHjwAIi1Hr0B0WeeWypwol75Q3EfZXmsDKCqNJfwnlStc-EZiRUJX0ZPLgeBKLddm-cBXmOsXEq5Gl5cLGv70ZG83ltg_HocelKRxg2Psm8uhHMhEYT8Rn_EN4RmIZkPghSDWPIxrdX_8D2dnPglpwyU89L_brhUeSzH7MMGplDG450tO85XBUGuoNxD2BmzegE6ReTo5kLRsrVLflML-3gECPif8Tm8ZhY8-TWl2gpOErMW',
    alt: 'Artisan Dessert Platter'
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        <div className="flex-1 space-y-10 z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#f3e8ec] rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-[10px] font-extrabold text-primary tracking-[0.2em] uppercase">Handcrafted in BSD</span>
            </div>
            
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] text-text-main">
              Artisan <br />
              <span className="text-primary italic">Atelier</span> of <br />
              Fine Cakes
            </h2>
          </div>
          
          <p className="text-lg text-text-sub max-w-md leading-relaxed">
            Where Korean minimalism meets French technique. We create delicate, balanced desserts that celebrate life's most precious moments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#menu" 
              onClick={(e) => scrollToSection(e, 'menu')}
              className="h-16 px-10 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 group cursor-pointer"
            >
              Explore Collection
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">east</span>
            </a>
            <a 
              href="#visit-us" 
              onClick={(e) => scrollToSection(e, 'visit-us')}
              className="h-16 px-10 bg-white border border-[#e6d1da] hover:border-primary text-text-main font-bold rounded-2xl transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              Visit Shop
              <span className="material-symbols-outlined">location_on</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-1 border-l-2 border-primary/20 pl-4">
              <p className="text-2xl font-serif font-bold text-text-main">100%</p>
              <p className="text-xs text-text-sub uppercase tracking-wider font-bold">Natural Ingredients</p>
            </div>
            <div className="space-y-1 border-l-2 border-primary/20 pl-4">
              <p className="text-2xl font-serif font-bold text-text-main">Fresh</p>
              <p className="text-xs text-text-sub uppercase tracking-wider font-bold">Baked Every Morning</p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="relative mx-auto max-w-[500px] group/carousel">
            <div className="relative aspect-[4/5] w-[85%] mx-auto rounded-t-[1000px] rounded-b-2xl overflow-hidden shadow-2xl border-[12px] border-white z-20 bg-bg-soft">
              {CAROUSEL_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              ))}

              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-text-main shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity z-30 hover:bg-primary hover:text-white"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-text-main shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity z-30 hover:bg-primary hover:text-white"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
