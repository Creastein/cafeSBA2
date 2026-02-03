
import React from 'react';

const Footer: React.FC = () => {
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

  return (
    <footer id="footer" className="bg-[#fbf8fa] pt-24 pb-12 border-t border-[#f3e8ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-16 border-b border-[#f3e8ec]">
          {/* Brand */}
          <div className="space-y-6">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, 'hero')}
              className="flex items-center gap-2 group cursor-pointer inline-flex"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-primary text-xl fill-icon">cake</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-text-main">Sugar Bloom</h3>
            </a>
            <p className="text-sm text-text-sub leading-relaxed max-w-xs">
              Handcrafted desserts inspired by Korean café culture. Made with premium ingredients and love in BSD City.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-text-main mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-text-sub">
              <li>
                <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className="hover:text-primary transition-colors cursor-pointer block">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#custom-cakes" onClick={(e) => scrollToSection(e, 'custom-cakes')} className="hover:text-primary transition-colors cursor-pointer block">
                  Custom Cakes
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-primary transition-colors cursor-pointer block">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#visit-us" onClick={(e) => scrollToSection(e, 'visit-us')} className="hover:text-primary transition-colors cursor-pointer block">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-text-main">Sweet News</h4>
            <p className="text-sm text-text-sub">Join our newsletter for exclusive offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow h-12 px-4 rounded-xl bg-bg-soft border border-[#e6d1da] focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
              />
              <button className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-text-sub">© 2023 Sugar Bloom Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-sub hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-sub hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
