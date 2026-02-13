import React from 'react';
import { motion } from 'framer-motion';
import type { MenuTabsProps } from '../types/menu';

const MenuTabs: React.FC<MenuTabsProps> = ({ menus, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex p-1 bg-white border border-[#f3e8ec] rounded-full shadow-sm">
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => onTabChange(menu.id)}
            className={`relative px-6 py-3 rounded-full text-sm font-bold transition-colors ${
              activeTab === menu.id 
                ? 'text-primary' 
                : 'text-text-sub hover:text-primary/70'
            }`}
          >
            {activeTab === menu.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary/5 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{menu.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuTabs;
