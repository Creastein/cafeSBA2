import React from 'react';
import { motion } from 'framer-motion';

// Mock artifacts path - in real app, these would remain in the artifacts folder or be moved to public
const IMG_INTERIOR = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"; // Minimalist cafe
const IMG_CORNER = "https://images.unsplash.com/photo-1507133750069-bef72f371309?q=80&w=1000&auto=format&fit=crop";   // Coffee cup cozy
const IMG_BAR = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop";      // Coffee bar

const AmbianceSection: React.FC = () => {
    return (
        <section id="ambiance" className="py-24 bg-[#fffcfc] overflow-hidden relative">
            {/* Marquee Background */}
            <div className="absolute top-10 opacity-5 pointer-events-none whitespace-nowrap overflow-hidden w-full">
                <motion.div
                    className="inline-block text-6xl md:text-8xl lg:text-[10rem] font-bold text-primary leading-none"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    COZY • WIFI • POWER • COFFEE • VIBES • RELAX •
                </motion.div>
                <motion.div
                    className="inline-block text-6xl md:text-8xl lg:text-[10rem] font-bold text-primary leading-none"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    COZY • WIFI • POWER • COFFEE • VIBES • RELAX •
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-4 bg-primary/10 rounded-full text-sm font-bold text-primary tracking-widest uppercase">
                                The Experience
                            </span>
                            <h2 className="font-serif text-5xl md:text-6xl font-bold text-text-main leading-none mb-6">
                                More Than Just<br />
                                <span className="text-primary italic">Good Coffee.</span>
                            </h2>
                            <p className="text-text-sub text-lg leading-relaxed border-l-4 border-primary/20 pl-6">
                                Sugar Bloom is designed as a <strong className="text-text-main">creative sanctuary</strong>.
                                Whether you're chasing deadlines or escaping them, our space adapts to your rhythm.
                            </p>
                        </motion.div>

                        {/* Amenities Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: 'wifi', title: 'Gigabit Wifi', desc: 'Work without lag' },
                                { icon: 'chair', title: 'Cozy Corners', desc: 'Plush seating' },
                                { icon: 'power', title: 'Power Outlets', desc: 'Everywhere' },
                                { icon: 'music_note', title: 'Lo-fi Playlist', desc: 'Curated daily' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-main text-sm">{item.title}</h4>
                                        <p className="text-xs text-text-sub">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4 flex gap-4">
                            <button className="px-8 py-3 bg-text-main text-white rounded-full font-bold hover:bg-primary transition-colors duration-300 shadow-xl shadow-primary/20">
                                Reserve a Table
                            </button>
                            <button className="px-8 py-3 border-2 border-text-main text-text-main rounded-full font-bold hover:bg-text-main hover:text-white transition-colors duration-300">
                                View Menu
                            </button>
                        </div>
                    </div>

                    {/* Dynamic Image Grid */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Decorative Blob */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>

                        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-none md:grid-rows-12 gap-4 h-auto md:h-[600px]">
                            {/* Main Large Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="md:col-span-8 md:row-span-12 aspect-square md:aspect-auto rounded-[2.5rem] overflow-hidden relative shadow-2xl"
                            >
                                <img src={IMG_INTERIOR} className="w-full h-full object-cover" alt="Interior" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-serif text-2xl">Main Hall</p>
                                </div>
                            </motion.div>

                            {/* Top Right Detail */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="hidden md:block md:col-span-4 md:row-span-5 rounded-[2rem] overflow-hidden shadow-xl"
                            >
                                <img src={IMG_CORNER} className="w-full h-full object-cover" alt="Detail" />
                            </motion.div>

                            {/* Bottom Right Detail */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="md:col-span-4 md:row-span-7 aspect-video md:aspect-auto rounded-[2rem] overflow-hidden shadow-xl"
                            >
                                <img src={IMG_BAR} className="w-full h-full object-cover" alt="Bar" />
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]"
                            >
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <span className="material-symbols-outlined">eco</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-text-sub uppercase">Vibe Check</p>
                                    <p className="text-sm font-bold text-text-main">100% Chill</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AmbianceSection;
