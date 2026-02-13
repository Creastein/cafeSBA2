import React, { useState, useEffect, useRef } from 'react';
import { INSTAGRAM_IMAGES } from '../../constants';

const Gallery: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const requestRef = useRef<number>(null);

    // Sync scroll position for parallax effect
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                // Only update if the section is partially visible
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setScrollY(window.pageYOffset);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const getParallaxStyle = (index: number) => {
        if (!sectionRef.current) return {};

        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + window.pageYOffset;
        const centerOffset = window.pageYOffset + (window.innerHeight / 2) - sectionTop;

        // Staggered movement factors for a more organic feel
        const factors = [0.03, -0.04, 0.05, -0.03];
        const factor = factors[index % factors.length];

        return {
            transform: `translateY(${centerOffset * factor}px)`,
        };
    };

    return (
        <section ref={sectionRef} id="gallery" className="bg-primary/5 py-16 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <p className="text-xs font-extrabold text-primary tracking-[0.2em] uppercase">Visual Inspiration</p>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-main">Our Gallery</h2>
                    <p className="text-text-sub max-w-2xl mx-auto">
                        A glimpse into our daily craft, from the first pour to the final garnish.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {INSTAGRAM_IMAGES.map((img, index) => (
                        <div
                            key={img.id}
                            className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group cursor-default bg-text-main/5"
                        >
                            {/* Parallax Wrapper */}
                            <div
                                className="w-full h-full will-change-transform transition-transform duration-300 ease-out"
                                style={getParallaxStyle(index)}
                            >
                                <img
                                    src={img.url}
                                    alt={img.alt}
                                    className="w-full h-[120%] -translate-y-[10%] object-cover opacity-90 grayscale-[20%] transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-100 group-hover:brightness-110 group-hover:grayscale-0"
                                />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                                <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                                    <span className="material-symbols-outlined fill-icon text-2xl">image</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-[#f3e8ec] rounded-full text-primary font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <span className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                            <i className="fa-brands fa-instagram text-xl"></i> {/* Assuming font-awesome or similar, otherwise use material symbol */}
                            <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">photo_camera</span>
                        </span>
                        <span>Follow @SugarBloomAtelier</span>
                        <span className="material-symbols-outlined text-sm text-primary/60 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
