import React from 'react';
import type { MenuGridProps } from '../types/menu';
import MenuItemCard from './MenuItemCard';

const MenuGrid: React.FC<MenuGridProps> = ({ category }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {category.items.map((item, itemIdx) => (
        <MenuItemCard key={itemIdx} item={item} index={itemIdx} />
      ))}
    </div>
  );
};

export default MenuGrid;
