import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import { getWhatsAppUrl } from './ui/WhatsAppFloat';

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

const RotatingBadge: React.FC = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-12 -right-12 z-10 w-32 h-32 hidden lg:flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id="curve"
            d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
            fill="transparent"
          />
          <text className="text-[10px] font-bold uppercase tracking-widest fill-primary">
            <textPath href="#curve" startOffset="0%">
              Premium Quality • Fresh Daily • Premium Quality • Fresh Daily •
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-2xl">verified</span>
        </div>
      </div>
    </motion.div>
  );
};

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const textRevealVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-24 lg:pt-28 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Decorative Elements */}
      <motion.div
        style={{ y: yBg1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -mr-24 -mt-24 w-[640px] h-[640px] bg-primary/5 rounded-full blur-[110px] -z-10"
      ></motion.div>
      <motion.div
        style={{ y: yBg2 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[120px] -z-10"
      ></motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
        <motion.div
          style={{ y: yText }}
          className="flex-1 space-y-10 z-10 lg:-mt-16"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-9"
          >
            <div className="space-y-6">
              <motion.div
                variants={fadeInVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface/80 border border-border rounded-full shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-bold text-primary tracking-[0.25em] uppercase">Handcrafted in BSD</span>
              </motion.div>

              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-text-main tracking-tight">
                <div className="overflow-hidden">
                  <motion.div variants={textRevealVariants}>
                    Specialty Coffee
                  </motion.div>
                </div>
                <div className="overflow-hidden flex flex-wrap gap-x-4">
                  <motion.span variants={textRevealVariants} className="text-primary italic inline-block font-medium">
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
              className="flex flex-col sm:flex-row gap-4 relative z-30"
            >
              <motion.a
                href={getWhatsAppUrl('Halo Sugar Bloom! Saya mau lihat menu dan pesan 🎂')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 30px -10px rgba(37, 211, 102, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden h-14 px-8 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-2xl shadow-xl shadow-[#25D366]/20 transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  animate={{ translateX: ["-100%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                />

                {/* WhatsApp Icon */}
                <svg className="w-5 h-5 fill-white relative z-10" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative z-10">Order via WhatsApp</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="material-symbols-outlined relative z-10"
                >
                  east
                </motion.span>
              </motion.a>
              <motion.a
                href="#menu"
                onClick={(e) => scrollToSection(e, 'menu')}
                whileHover={{ scale: 1.05, y: -2, borderColor: "#e64c8c", boxShadow: "0 12px 24px -12px rgba(27, 14, 19, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="h-14 px-8 bg-surface border border-border text-text-main font-bold rounded-2xl transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                Explore Menu
                <span className="material-symbols-outlined">restaurant_menu</span>
              </motion.a>
            </motion.div>


          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yImage, scale: scaleImage }}
          className="flex-1 w-full relative z-20 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[520px] h-[520px] flex items-center justify-center perspective-1000">
            {/* Rotating Badge on the Top-Right of the image container */}
            <RotatingBadge />

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
                className="w-full h-auto object-cover rounded-[2.75rem] cursor-pointer drop-shadow-2xl absolute shadow-primary/10"
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
