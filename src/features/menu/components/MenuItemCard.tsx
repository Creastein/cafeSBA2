import React from 'react';
import { motion } from 'framer-motion';
import type { MenuItemCardProps } from '../types/menu';

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index }) => {
  return (
    <motion.div
      key={index}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl p-3 shadow-md hover:shadow-xl transition-all duration-300 border border-[#f3e8ec]"
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/20">
            <span className="material-symbols-outlined text-4xl">restaurant_menu</span>
          </div>
        )}

        {/* Floating Price Tag */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
          <span className="text-sm font-bold text-primary">{item.price}</span>
        </div>

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.tags?.map((tag, tIdx) => (
            <span
              key={tIdx}
              className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm ${
                tag === 'Recommended'
                  ? 'bg-primary text-white'
                  : 'bg-white/90 text-text-sub backdrop-blur-sm'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-1 pb-2">
        <div className="flex justify-between items-start">
          <h4 className="font-serif text-lg font-bold text-text-main group-hover:text-primary transition-colors">
            {item.name}
          </h4>
        </div>
        {item.description && (
          <p className="text-xs text-text-sub mt-2 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
