import React from 'react';
import type { MenuItemRowProps } from '../types/menu';
import PriceTag from './PriceTag';

const MenuItemRow: React.FC<MenuItemRowProps> = ({ item, index, activeTab }) => {
  return (
    <div
      key={index}
      className="flex justify-between items-end group p-3 -mx-3 rounded-xl hover:bg-primary/5 transition-colors cursor-default"
    >
      <div className="flex-1 pr-4 relative z-10">
        <div className="flex items-baseline gap-2 mb-1">
          <h4 className="text-base font-bold text-text-main group-hover:text-primary transition-colors">
            {item.name}
          </h4>
          {item.tags?.map((tag, tIdx) => (
            <span
              key={tIdx}
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                tag === 'GF' ? 'bg-pink-100 text-pink-600' :
                tag === 'DF' ? 'bg-amber-100 text-amber-600' :
                'bg-gray-100 text-gray-500'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        {item.description && (
          <p className="text-xs text-text-sub font-medium leading-relaxed max-w-sm">
            {item.description}
          </p>
        )}
      </div>

      <div className="flex items-baseline gap-1 flex-1">
        {/* Styled Leader Line */}
        <div className="flex-1 border-b-2 border-dotted border-primary/20 mb-1.5 opacity-50 group-hover:opacity-100 transition-opacity mx-2"></div>

        <div className="flex items-center gap-2 relative z-10 bg-inherit pl-2">
          {item.variants && (
            <div className="flex items-center gap-[2px] text-primary/60">
              {item.variants.includes('hot') && (
                <span className="material-symbols-outlined text-[16px]" title="Hot">local_cafe</span>
              )}
              {item.variants.includes('hot') && item.variants.includes('iced') && (
                <span className="text-[10px] text-text-sub">/</span>
              )}
              {item.variants.includes('iced') && (
                <span className="material-symbols-outlined text-[16px]" title="Iced">ac_unit</span>
              )}
            </div>
          )}
          <PriceTag 
            price={item.price} 
            showUnit={true}
            isBeverage={activeTab === 'beverage'}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItemRow;
