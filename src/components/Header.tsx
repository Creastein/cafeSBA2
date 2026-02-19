
import React from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const scrollToSection = useScrollTo();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-primary fill-icon">cake</span>
            </div>
            <div className="leading-tight">
              <h1 className="font-serif text-2xl font-bold tracking-tight text-text-main">Sugar Bloom</h1>
              <p className="text-[11px] uppercase tracking-[0.3em] text-text-sub/70 font-bold">Atelier</p>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, 'menu')}
              className="text-sm font-semibold text-text-main/80 hover:text-primary transition-colors cursor-pointer"
            >
              Menu
            </a>
            <a
              href="#ambiance"
              onClick={(e) => scrollToSection(e, 'ambiance')}
              className="text-sm font-semibold text-text-main/80 hover:text-primary transition-colors cursor-pointer"
            >
              The Space
            </a>
            <a
              href="#custom-cakes"
              onClick={(e) => scrollToSection(e, 'custom-cakes')}
              className="text-sm font-semibold text-text-main/80 hover:text-primary transition-colors cursor-pointer"
            >
              Custom Cakes
            </a>
            <a
              href="#gallery"
              onClick={(e) => scrollToSection(e, 'gallery')}
              className="text-sm font-semibold text-text-main/80 hover:text-primary transition-colors cursor-pointer"
            >
              Gallery
            </a>
            <a
              href="#visit-us"
              onClick={(e) => scrollToSection(e, 'visit-us')}
              className="text-sm font-semibold text-text-main/80 hover:text-primary transition-colors cursor-pointer"
            >
              Visit Us
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2.5 hover:bg-black/5 rounded-full transition-colors text-text-main bg-white/70 border border-border/70">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="relative p-2.5 hover:bg-black/5 rounded-full transition-colors text-text-main bg-white/70 border border-border/70">
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-bg-soft">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2.5 hover:bg-black/5 rounded-full transition-colors bg-white/70 border border-border/70">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
