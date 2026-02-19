import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENUS } from '../../constants';
import { useMenu, useMenuFilter } from './hooks/useMenu';
import { 
  MenuTabs, 
  MenuGrid, 
  MenuList, 
  SearchBar, 
  TagFilter, 
  SortDropdown 
} from './components';

const MenuSection: React.FC = () => {
  const { activeTab, setActiveTab, activeMenu } = useMenu(MENUS);
  const {
    searchQuery,
    setSearchQuery,
    selectedTags,
    toggleTag,
    sortBy,
    setSortBy,
    filteredCategories,
    clearFilters,
    hasActiveFilters,
    totalResults
  } = useMenuFilter(activeMenu);

  // Reset filters when tab changes
  useEffect(() => {
    clearFilters();
  }, [activeTab, clearFilters]);

  return (
    <section id="menu" className="py-24 bg-surface-strong">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 bg-primary/10 rounded-full"
          >
            <span className="text-sm font-bold text-primary tracking-widest uppercase">From Our Kitchen</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-text-main mb-6"
          >
            Menu & Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-sub max-w-2xl mx-auto"
          >
            Curated daily for freshness and flavor. All prices are in thousand Rupiah (K).
          </motion.p>
        </div>

        {/* Tabs */}
        <MenuTabs 
          menus={MENUS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Search & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder={`Search ${activeMenu?.label || 'menu'}...`}
              />
            </div>
            <div className="sm:w-48">
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <TagFilter
              availableTags={['GF', 'DF', 'Vegan', 'Recommended']}
              selectedTags={selectedTags}
              onToggleTag={toggleTag}
            />
            
            {hasActiveFilters && (
              <div className="flex items-center gap-3">
                <span className="text-sm text-text-sub">
                  {totalResults} result{totalResults !== 1 ? 's' : ''}
                </span>
                <button
                  onClick={clearFilters}
                  className="text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${searchQuery}-${selectedTags.join(',')}-${sortBy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-surface rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-border"
          >
            {filteredCategories.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {filteredCategories.map((category, idx) => (
                  <div 
                    key={idx} 
                    className={`${filteredCategories.length === 1 || category.items.length > 6 ? 'md:col-span-2' : ''}`}
                  >
                    <h3 className="font-serif text-2xl font-bold text-text-main mb-6 pb-2 border-b-2 border-primary/10 inline-block">
                      {category.title}
                      <span className="ml-2 text-sm font-sans font-normal text-text-sub">
                        ({category.items.length})
                      </span>
                    </h3>

                    {activeTab === 'special' ? (
                      <MenuGrid category={category} />
                    ) : (
                      <MenuList category={category} activeTab={activeTab} />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">search_off</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-text-main mb-2">
                  No items found
                </h3>
                <p className="text-text-sub mb-6">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            <div className="mt-12 text-center pt-8 border-t border-border">
              <p className="text-text-sub text-sm italic">
                * Prices subject to change. GF = Gluten Free, DF = Dairy Free.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
