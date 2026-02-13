import React from 'react';
import type { MenuListProps } from '../types/menu';
import MenuItemRow from './MenuItemRow';

const MenuList: React.FC<MenuListProps> = ({ category, activeTab }) => {
  return (
    <div className="space-y-4">
      {category.items.map((item, itemIdx) => (
        <MenuItemRow 
          key={itemIdx} 
          item={item} 
          index={itemIdx} 
          activeTab={activeTab}
        />
      ))}
    </div>
  );
};

export default MenuList;
