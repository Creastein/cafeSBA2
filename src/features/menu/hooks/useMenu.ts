import { useState, useCallback, useMemo } from 'react';
import type { MenuSectionData, MenuState, MenuFilterState, MenuItem, MenuCategory } from '../types/menu';

/**
 * Custom hook for menu state management
 * Handles tab switching and active menu computation
 */
export function useMenu(menus: MenuSectionData[]): MenuState {
  const [activeTab, setActiveTab] = useState<string>(menus[0]?.id || '');

  const activeMenu = useMemo(() => {
    return menus.find(menu => menu.id === activeTab);
  }, [menus, activeTab]);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return {
    activeTab,
    setActiveTab: handleTabChange,
    activeMenu,
  };
}

/**
 * Parse price string to number for comparison
 * Handles formats like "24K", "40", "51K"
 */
function parsePrice(priceStr: string): number {
  const numericValue = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
  return isNaN(numericValue) ? 0 : numericValue;
}

/**
 * Hook untuk filter menu items berdasarkan kriteria
 * Phase 2: Search & Filter Implementation
 */
export function useMenuFilter(menu: MenuSectionData | undefined) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<MenuFilterState['sortBy']>('default');

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedTags([]);
    setSortBy('default');
  }, []);

  const filteredCategories = useMemo(() => {
    if (!menu) return [];

    return menu.categories.map(category => {
      let filteredItems = category.items.filter(item => {
        // Search filter
        const searchMatch = !searchQuery ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

        // Tag filter
        const tagMatch = selectedTags.length === 0 ||
          selectedTags.some(tag => item.tags?.includes(tag));

        return searchMatch && tagMatch;
      });

      // Sorting
      if (sortBy === 'price-asc') {
        filteredItems = [...filteredItems].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      } else if (sortBy === 'price-desc') {
        filteredItems = [...filteredItems].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      } else if (sortBy === 'name-asc') {
        filteredItems = [...filteredItems].sort((a, b) => a.name.localeCompare(b.name));
      }

      return {
        ...category,
        items: filteredItems
      };
    }).filter(category => category.items.length > 0);
  }, [menu, searchQuery, selectedTags, sortBy]);

  const hasActiveFilters = searchQuery !== '' || selectedTags.length > 0 || sortBy !== 'default';

  const totalResults = filteredCategories.reduce(
    (sum, cat) => sum + cat.items.length, 0
  );

  return {
    searchQuery,
    setSearchQuery,
    selectedTags,
    toggleTag,
    sortBy,
    setSortBy,
    filteredCategories,
    clearFilters,
    hasActiveFilters,
    totalResults,
  };
}

/**
 * Hook untuk cart functionality
 * (Untuk Phase 3 - Cart Integration)
 */
export function useMenuCart() {
  // Placeholder untuk cart functionality
  // Akan diimplementasikan di Phase 3
  return {
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    totalItems: 0,
    totalPrice: 0,
  };
}
