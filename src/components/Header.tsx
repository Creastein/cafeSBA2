import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';

const Header: React.FC = () => {
  const scrollToSection = useScrollTo();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    scrollToSection(e, sectionId);
    closeMobileMenu();
  };

  const whatsappNumber = '6287878432708';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const navLinks = [
    { id: 'menu', label: 'Menu' },
    { id: 'ambiance', label: 'The Space' },
    { id: 'custom-cakes', label: 'Custom Cakes' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'visit-us', label: 'Visit Us' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, 'hero')}
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

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-sm font-semibold text-text-main/80 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-full 
                         hover:bg-primary-strong transition-all duration-300
                         hover:scale-105 hover:shadow-lg hover:shadow-primary/30
                         active:scale-95"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2.5 hover:bg-black/5 rounded-full transition-colors bg-white/70 border border-border/70"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 md:hidden shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-4 border-b border-border">
                <div className="leading-tight">
                  <h1 className="font-serif text-xl font-bold tracking-tight text-text-main">Sugar Bloom</h1>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-text-sub/70 font-bold">Atelier</p>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined text-text-main">close</span>
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="py-4 text-lg font-semibold text-text-main border-b border-border/50 
                             hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile Book Now Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="mt-6 px-6 py-3 bg-primary text-white font-semibold text-center rounded-full 
                           hover:bg-primary-strong transition-all duration-300
                           hover:scale-105 active:scale-95"
                >
                  Book Now
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
