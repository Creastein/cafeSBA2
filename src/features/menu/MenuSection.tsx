import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENUS } from '../../constants';
import { useMenu } from './hooks/useMenu';
import { MenuTabs, MenuGrid, MenuList } from './components';

const MenuSection: React.FC = () => {
    const { activeTab, setActiveTab, activeMenu } = useMenu(MENUS);

    return (
        <section id="menu" className="py-20 bg-[#fffcfc]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-[#f8f1f4]"
                    >
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                            {activeMenu?.categories.map((category, idx) => (
                                <div key={idx} className={`${activeMenu.categories.length === 1 ? 'md:col-span-2' : ''}`}>
                                    <h3 className="font-serif text-2xl font-bold text-text-main mb-6 pb-2 border-b-2 border-primary/10 inline-block">
                                        {category.title}
                                    </h3>

                                    {activeTab === 'special' ? (
                                        <MenuGrid category={category} />
                                    ) : (
                                        <MenuList category={category} activeTab={activeTab} />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center pt-8 border-t border-[#f3e8ec]">
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
