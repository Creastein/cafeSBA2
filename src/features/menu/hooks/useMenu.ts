import { useState, useCallback, useMemo } from 'react';
import type { MenuSectionData, MenuState } from '../types/menu';

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
 * Hook untuk filter menu items berdasarkan kriteria
 * (Untuk Phase 2 - Search & Filter)
 */
export function useMenuFilter(items: MenuSectionData[]) {
  // Placeholder untuk filter functionality
  // Akan diimplementasikan di Phase 2
  return {
    filteredItems: items,
    searchQuery: '',
    setSearchQuery: () => {},
    selectedTags: [],
    toggleTag: () => {},
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
