import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';

const CAROUSEL_IMAGES = [
  {
    url: '/hero-cake.png',
    alt: 'Signature Korean Strawberry Shortcake'
  },
  {
    url: '/hero-cake-2.png', // Chocolate
    alt: 'Belgian Chocolate Ganache Cake'
  },
  {
    url: '/hero-cake-3.png', // Shine Muscat
    alt: 'Premium Shine Muscat Shortcake'
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollY } = useScroll();

  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const yImage = useTransform(scrollY, [0, 500], [0, -50]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.1]);
  const yBg1 = useTransform(scrollY, [0, 500], [0, 200]);
  const yBg2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] // easeOutQuart-ish
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Elements */}
      <motion.div
        style={{ y: yBg1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"
      ></motion.div>
      <motion.div
        style={{ y: yBg2 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10"
      ></motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        <motion.div
          style={{ y: yText }}
          className="flex-1 space-y-10 z-10 lg:-mt-20"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            <div className="space-y-4">
              <motion.div
                variants={fadeInVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#f3e8ec] rounded-full shadow-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(230, 76, 140, 0.15)" }}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span className="text-[10px] font-extrabold text-primary tracking-[0.2em] uppercase">Handcrafted in BSD</span>
              </motion.div>

              <div className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] text-text-main">
                <div className="overflow-hidden">
                  <motion.div variants={textRevealVariants}>
                    Specialty Coffee
                  </motion.div>
                </div>
                <div className="overflow-hidden flex flex-wrap gap-x-4">
                  <motion.span variants={textRevealVariants} className="text-primary italic inline-block">
                    &amp; Artisan
                  </motion.span>
                  <motion.span variants={textRevealVariants} className="inline-block">
                    Cakes
                  </motion.span>
                </div>
              </div>
            </div>

            <motion.p
              variants={fadeInVariants}
              className="text-lg text-text-sub max-w-md leading-relaxed"
            >
              Experience the perfect pairing of <b>100% Gluten Free</b> Korean desserts and expertly brewed specialty coffee. A sanctuary for your daily indulgence.
            </motion.p>

            <motion.div
              variants={fadeInVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <motion.a
                href="#menu"
                onClick={(e) => scrollToSection(e, 'menu')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden h-16 px-10 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  animate={{ translateX: ["-100%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                />

                <span className="relative z-10">Explore Collection</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 relative z-10">east</span>
              </motion.a>
              <motion.a
                href="#visit-us"
                onClick={(e) => scrollToSection(e, 'visit-us')}
                whileHover={{ scale: 1.05, y: -2, borderColor: "#e64c8c" }}
                whileTap={{ scale: 0.98 }}
                className="h-16 px-10 bg-white border border-[#e6d1da] text-text-main font-bold rounded-2xl transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                Visit Shop
                <span className="material-symbols-outlined">location_on</span>
              </motion.a>
            </motion.div>


          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yImage, scale: scaleImage }}
          className="flex-1 w-full relative z-20 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[500px] h-[500px] flex items-center justify-center perspective-1000">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, x: 80, rotateY: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, rotateY: -20, scale: 0.9 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1] // easeOutExpo
                }}
                src={CAROUSEL_IMAGES[currentIndex].url}
                alt={CAROUSEL_IMAGES[currentIndex].alt}
                className="w-full h-auto object-cover rounded-3xl cursor-pointer drop-shadow-2xl absolute shadow-primary/10"
                style={{
                  transformStyle: "preserve-3d"
                }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
