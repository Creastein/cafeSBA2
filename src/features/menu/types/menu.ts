/**
 * Menu-specific types for the CafeSBA2 menu feature
 */

export interface MenuItem {
  name: string;
  price: string;
  tags?: string[];
  description?: string;
  image?: string;
  variants?: ('hot' | 'iced')[];
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuSectionData {
  id: string;
  label: string;
  categories: MenuCategory[];
}

export type MenuTab = 'dessert' | 'beverage' | 'special';

export interface MenuState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeMenu: MenuSectionData | undefined;
}

export interface MenuTabsProps {
  menus: MenuSectionData[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export interface MenuGridProps {
  category: MenuCategory;
}

export interface MenuListProps {
  category: MenuCategory;
  activeTab: string;
}

export interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export interface MenuItemRowProps {
  item: MenuItem;
  index: number;
  activeTab: string;
}

export interface PriceTagProps {
  price: string;
  showUnit?: boolean;
  isBeverage?: boolean;
}

// Phase 2: Search & Filter Types
export interface MenuFilterState {
  searchQuery: string;
  selectedTags: string[];
  priceRange: [number, number];
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'default';
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export interface PriceRangeFilterProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (range: [number, number]) => void;
}

export interface SortDropdownProps {
  value: MenuFilterState['sortBy'];
  onChange: (sort: MenuFilterState['sortBy']) => void;
}
