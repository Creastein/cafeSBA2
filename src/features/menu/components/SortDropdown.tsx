import React from 'react';
import type { SortDropdownProps } from '../types/menu';

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
] as const;

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortDropdownProps['value'])}
        className="appearance-none w-full px-4 pr-10 py-2 bg-white border border-[#f3e8ec] rounded-full text-sm font-medium text-text-main focus:outline-none focus:border-primary/50 cursor-pointer"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-sub/50 pointer-events-none">
        expand_more
      </span>
    </div>
  );
};

export default SortDropdown;
