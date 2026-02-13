import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { MenuItemCardProps } from '../types/menu';
import ImageModal from './ImageModal';

// Stagger animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.6, 0.01, -0.05, 0.95] as const,
    },
  }),
};

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    if (item.image && !hasImageError) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        key={index}
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group bg-white rounded-3xl p-3 shadow-md hover:shadow-xl transition-all duration-300 border border-[#f3e8ec] cursor-pointer"
      >
        <div 
          className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100"
          onClick={handleImageClick}
        >
          {item.image && !hasImageError ? (
            <>
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-gray-300">image</span>
                </div>
              )}
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setIsImageLoaded(true)}
                onError={() => setHasImageError(true)}
              />
              {/* Zoom Icon Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="material-symbols-outlined text-primary">zoom_in</span>
                </motion.div>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/20">
              <span className="material-symbols-outlined text-4xl">restaurant_menu</span>
            </div>
          )}

          {/* Floating Price Tag */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1"
          >
            <span className="text-sm font-bold text-primary">{item.price}</span>
          </motion.div>

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {item.tags?.map((tag, tIdx) => (
              <motion.span
                key={tIdx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + tIdx * 0.1 }}
                className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm ${
                  tag === 'Recommended'
                    ? 'bg-primary text-white'
                    : 'bg-white/90 text-text-sub backdrop-blur-sm'
                }`}
              >
                {tag}
              </motion.span>
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

      {/* Image Modal */}
      {item.image && (
        <ImageModal
          src={item.image}
          alt={item.name}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default MenuItemCard;
