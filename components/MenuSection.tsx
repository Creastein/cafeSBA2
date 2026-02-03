import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENUS } from '../constants';

const MenuSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(MENUS[0].id);

    const activeMenu = MENUS.find(menu => menu.id === activeTab);

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
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 bg-white border border-[#f3e8ec] rounded-full shadow-sm">
                        {MENUS.map((menu) => (
                            <button
                                key={menu.id}
                                onClick={() => setActiveTab(menu.id)}
                                className={`relative px-6 py-3 rounded-full text-sm font-bold transition-colors ${activeTab === menu.id ? 'text-primary' : 'text-text-sub hover:text-primary/70'
                                    }`}
                            >
                                {activeTab === menu.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary/5 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{menu.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

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
                                        // Special Menu Grid Layout
                                        <div className="grid sm:grid-cols-2 gap-8">
                                            {category.items.map((item, itemIdx) => (
                                                <motion.div
                                                    key={itemIdx}
                                                    whileHover={{ y: -8 }}
                                                    className="group bg-white rounded-3xl p-3 shadow-md hover:shadow-xl transition-all duration-300 border border-[#f3e8ec]"
                                                >
                                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                                                        {item.image ? (
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/20">
                                                                <span className="material-symbols-outlined text-4xl">restaurant_menu</span>
                                                            </div>
                                                        )}

                                                        {/* Floating Price Tag */}
                                                        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                                                            <span className="text-sm font-bold text-primary">{item.price}</span>
                                                        </div>

                                                        {/* Badges Overlay */}
                                                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                                                            {item.tags?.map((tag, tIdx) => (
                                                                <span
                                                                    key={tIdx}
                                                                    className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm ${tag === 'Recommended'
                                                                        ? 'bg-primary text-white'
                                                                        : 'bg-white/90 text-text-sub backdrop-blur-sm'
                                                                        }`}
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="px-1 pb-2">
                                                        <div className="flex justify-between items-start">
                                                            <h4 className="font-serif text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                                                                {item.name}
                                                            </h4>
                                                        </div>
                                                        {item.description && (
                                                            <p className="text-xs text-text-sub mt-2 line-clamp-2">
                                                                {item.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    ) : (
                                        // Standard List Layout
                                        <div className="space-y-4">
                                            {category.items.map((item, itemIdx) => (
                                                <div
                                                    key={itemIdx}
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
                                                                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${tag === 'GF' ? 'bg-pink-100 text-pink-600' :
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
                                                                    {item.variants.includes('hot') && <span className="material-symbols-outlined text-[16px]" title="Hot">local_cafe</span>}
                                                                    {item.variants.includes('hot') && item.variants.includes('iced') && <span className="text-[10px] text-text-sub">/</span>}
                                                                    {item.variants.includes('iced') && <span className="material-symbols-outlined text-[16px]" title="Iced">ac_unit</span>}
                                                                </div>
                                                            )}
                                                            <span className="font-serif text-lg font-bold text-primary">
                                                                {item.price}
                                                                {activeTab === 'beverage' && !item.price.includes('K') && <span className="text-xs font-sans font-bold text-primary/60 ml-0.5">K</span>}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
