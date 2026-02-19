import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const AmbianceSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const marqueeX2 = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section id="ambiance" className="py-28 bg-surface overflow-hidden relative">
      {/* Marquee Background */}
      <div className="absolute top-8 opacity-5 pointer-events-none whitespace-nowrap overflow-hidden w-full">
        <motion.div
          style={{ x: marqueeX }}
          className="inline-block text-6xl md:text-8xl lg:text-[10rem] font-bold text-primary leading-none"
        >
          COZY • WIFI • POWER • COFFEE • VIBES • RELAX •
        </motion.div>
        <motion.div
          style={{ x: marqueeX2 }}
          className="inline-block text-6xl md:text-8xl lg:text-[10rem] font-bold text-primary leading-none"
        >
          COZY • WIFI • POWER • COFFEE • VIBES • RELAX •
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 mb-4 bg-primary/10 rounded-full text-sm font-bold text-primary tracking-widest uppercase"
              >
                The Experience
              </motion.span>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-text-main leading-none mb-6">
                More Than Just<br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-primary italic"
                >
                  Good Coffee.
                </motion.span>
              </h2>
              <motion.p
                variants={fadeInUp}
                className="text-text-sub text-lg leading-relaxed border-l-4 border-primary/15 pl-6"
              >
                Sugar Bloom is designed as a <strong className="text-text-main">creative sanctuary</strong>.
                Whether you're chasing deadlines or escaping them, our space adapts to your rhythm.
              </motion.p>
            </motion.div>

            {/* Amenities Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: 'wifi', title: 'Gigabit Wifi', desc: 'Work without lag' },
                { icon: 'chair', title: 'Cozy Corners', desc: 'Plush seating' },
                { icon: 'power', title: 'Power Outlets', desc: 'Everywhere' },
                { icon: 'music_note', title: 'Lo-fi Playlist', desc: 'Curated daily' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInLeft}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-surface border border-border hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0"
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-text-main text-sm">{item.title}</h4>
                    <p className="text-xs text-text-sub">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-4 flex flex-wrap gap-4 relative z-20"
            >
              <motion.a
                href="https://wa.me/6287878432708?text=Halo%20Sugar%20Bloom!%20Saya%20mau%20reservasi%20meja%20%F0%9F%AA%91"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors duration-300 shadow-xl shadow-primary/20 inline-block"
              >
                Reserve a Table
              </motion.a>
              <motion.a
                href="#menu"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-text-main/20 text-text-main rounded-full font-bold hover:bg-text-main hover:text-white transition-colors duration-300 cursor-pointer inline-block"
              >
                View Menu
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Dynamic Image Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 relative"
          >
            {/* Decorative Blob */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-none md:grid-rows-12 gap-4 h-auto md:h-[600px]">
              {/* Main Large Image */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="md:col-span-8 md:row-span-12 aspect-square md:aspect-auto rounded-[2.5rem] overflow-hidden relative shadow-2xl"
              >
                <img
                  src="/Experience1.png"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  alt="Outdoor Seating Area"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 text-white"
                >
                  <p className="font-serif text-2xl">Outdoor Ambiance</p>
                </motion.div>
              </motion.div>

              {/* Top Right Detail */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="hidden md:block md:col-span-4 md:row-span-5 rounded-[2rem] overflow-hidden shadow-xl"
              >
                <img
                  src="/Experience2.png"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  alt="Cozy Interior"
                />
              </motion.div>

              {/* Bottom Right Detail */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="md:col-span-4 md:row-span-7 aspect-video md:aspect-auto rounded-[2rem] overflow-hidden shadow-xl"
              >
                <img
                  src="/Experience3.png"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  alt="Modern Seating"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="bg-green-100 p-2 rounded-full text-green-600"
                >
                  <span className="material-symbols-outlined">eco</span>
                </motion.div>
                <div>
                  <p className="text-xs font-bold text-text-sub uppercase">Vibe Check</p>
                  <p className="text-sm font-bold text-text-main">100% Chill</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmbianceSection;
