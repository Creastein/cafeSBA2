import React from 'react';
import { motion } from 'framer-motion';
import type { MenuListProps } from '../types/menu';
import MenuItemRow from './MenuItemRow';

// Container variants for stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const MenuList: React.FC<MenuListProps> = ({ category, activeTab }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-2 sm:space-y-4"
    >
      {category.items.map((item, itemIdx) => (
        <MenuItemRow 
          key={itemIdx} 
          item={item} 
          index={itemIdx} 
          activeTab={activeTab}
        />
      ))}
    </motion.div>
  );
};

export default MenuList;
