
import React from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const scrollToSection = useScrollTo();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-[#f3e8ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-primary fill-icon">cake</span>
            </div>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-text-main">Sugar Bloom</h1>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, 'menu')}
              className="text-sm font-semibold text-text-main hover:text-primary transition-colors cursor-pointer"
            >
              Menu
            </a>
            <a
              href="#ambiance"
              onClick={(e) => scrollToSection(e, 'ambiance')}
              className="text-sm font-semibold text-text-main hover:text-primary transition-colors cursor-pointer"
            >
              The Space
            </a>
            <a
              href="#custom-cakes"
              onClick={(e) => scrollToSection(e, 'custom-cakes')}
              className="text-sm font-semibold text-text-main hover:text-primary transition-colors cursor-pointer"
            >
              Custom Cakes
            </a>
            <a
              href="#gallery"
              onClick={(e) => scrollToSection(e, 'gallery')}
              className="text-sm font-semibold text-text-main hover:text-primary transition-colors cursor-pointer"
            >
              Gallery
            </a>
            <a
              href="#visit-us"
              onClick={(e) => scrollToSection(e, 'visit-us')}
              className="text-sm font-semibold text-text-main hover:text-primary transition-colors cursor-pointer"
            >
              Visit Us
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors text-text-main">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="relative p-2 hover:bg-black/5 rounded-full transition-colors text-text-main">
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#fbf8fa]">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
