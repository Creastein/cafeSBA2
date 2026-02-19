import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { MenuTabsProps } from '../types/menu';

const MenuTabs: React.FC<MenuTabsProps> = ({ menus, activeTab, onTabChange }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', checkScroll);
      return () => scrollEl.removeEventListener('scroll', checkScroll);
    }
  }, []);

  // Scroll active tab into view
  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.querySelector(`[data-tab="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeTab]);

  return (
    <div className="relative">
      {/* Left Fade Indicator */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface-strong to-transparent z-10 pointer-events-none" />
      )}
      
      {/* Right Fade Indicator */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface-strong to-transparent z-10 pointer-events-none" />
      )}

      <div 
        ref={scrollRef}
        className="flex justify-start sm:justify-center overflow-x-auto scrollbar-hide py-2 px-4 -mx-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="inline-flex p-1 bg-surface border border-border rounded-full shadow-sm flex-shrink-0">
          {menus.map((menu) => (
            <button
              key={menu.id}
              data-tab={menu.id}
              onClick={() => onTabChange(menu.id)}
              className={`relative px-4 sm:px-6 py-3 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === menu.id 
                  ? 'text-primary' 
                  : 'text-text-sub hover:text-primary/70'
              }`}
            >
              {activeTab === menu.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{menu.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuTabs;
