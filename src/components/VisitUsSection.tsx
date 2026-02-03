import React from 'react';
import { motion } from 'framer-motion';

const VisitUsSection: React.FC = () => {
    return (
        <section id="visit-us" className="py-24 bg-white border-t border-[#f3e8ec]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left: Info */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-4 bg-primary/10 rounded-full text-sm font-bold text-primary tracking-widest uppercase">
                                Location
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-main leading-tight mb-6">
                                Come Say Hello
                            </h2>
                            <p className="text-text-sub text-lg leading-relaxed">
                                We are nestled in the heart of BSD Green Office Park.
                                A perfect spot for your morning coffee run or afternoon escape.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#f3e8ec] rounded-full flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-text-main mb-1">Our Address</h4>
                                    <p className="text-text-sub leading-relaxed">
                                        BSD Green Office Park,<br />
                                        Sampora, Cisauk, Tangerang,<br />
                                        Banten 15345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#f3e8ec] rounded-full flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-text-main mb-1">Opening Hours</h4>
                                    <div className="space-y-1 text-text-sub">
                                        <p className="flex justify-between w-48"><span className="font-medium">Mon - Fri:</span> 8am - 9pm</p>
                                        <p className="flex justify-between w-48"><span className="font-medium">Sat - Sun:</span> 9am - 10pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#f3e8ec] rounded-full flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary text-2xl">call</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-text-main mb-1">Contact</h4>
                                    <p className="text-text-sub">+62 812 3456 7890</p>
                                    <p className="text-text-sub">hello@sugarbloom.id</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-text-main text-white rounded-full font-bold hover:bg-primary transition-colors duration-300"
                            >
                                Get Directions
                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-[350px] lg:h-[500px] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative group order-1 lg:order-2"
                    >
                        {/* Custom Google Maps Embed - Grayscale filter for aesthetic */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.992648719888!2d106.6495!3d-6.3072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb236940a417%3A0xe53be0b533318f7!2sBSD%20Green%20Office%20Park!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) opacity(0.9)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sugar Bloom Location"
                            className="group-hover:filter-none transition-all duration-700"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisitUsSection;
