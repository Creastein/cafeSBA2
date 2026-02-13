import React from 'react';
import { motion } from 'framer-motion';
import type { MenuGridProps } from '../types/menu';
import MenuItemCard from './MenuItemCard';

// Container variants for stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const MenuGrid: React.FC<MenuGridProps> = ({ category }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8"
    >
      {category.items.map((item, itemIdx) => (
        <MenuItemCard key={itemIdx} item={item} index={itemIdx} />
      ))}
    </motion.div>
  );
};

export default MenuGrid;
