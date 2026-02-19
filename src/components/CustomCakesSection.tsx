import React from 'react';
import { motion, Variants } from 'framer-motion';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const CustomCakesSection: React.FC = () => {
  return (
    <section id="custom-cakes" className="py-28 bg-surface overflow-hidden border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Collage Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 relative order-2 lg:order-1"
          >
            {/* Background Accent */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
            />
            
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] w-[80%] rounded-t-[500px] overflow-hidden border-[12px] border-bg-soft shadow-2xl z-10"
            >
              <motion.img 
                src="/hero-cake.png"
                alt="Custom Cake Design" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            {/* Secondary Floating Image */}
            <motion.div 
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="absolute top-1/2 -right-4 w-[60%] aspect-square rounded-full overflow-hidden border-[8px] border-surface shadow-xl z-20 translate-y-[-10%] hidden md:block group"
            >
              <img 
                src="/hero-cake-2.png"
                alt="Cake Detail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 space-y-8 order-1 lg:order-2"
          >
            <motion.div variants={fadeInRight} className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase"
              >
                Tailor-Made Moments
              </motion.span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-main leading-tight">
                Your Vision, <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-primary italic"
                >
                  Our Craftsmanship
                </motion.span>
              </h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-text-sub leading-relaxed max-w-lg"
              >
                Whether it's a minimalist Korean bento cake or an elaborate tiered celebration piece, we bring your sweet dreams to life with meticulous attention to detail.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="space-y-8 py-4"
            >
              {[
                { step: '01', title: 'Consultation', desc: 'Share your themes, color palettes, and flavor inspirations with our lead designers.' },
                { step: '02', title: 'Design Sketch', desc: 'We provide a visual preview and material selection for your custom creation.' },
                { step: '03', title: 'Artisan Baking', desc: 'Our pastry chefs bake and decorate your cake using only the finest ingredients.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInLeft}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex gap-6 group"
                >
                  <motion.span 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-3xl font-serif font-bold text-primary/20 group-hover:text-primary transition-colors duration-300 select-none"
                  >
                    {item.step}
                  </motion.span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-text-main text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-text-sub leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(230, 76, 140, 0.25)" }}
                whileTap={{ scale: 0.95 }}
                className="h-16 px-10 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3"
              >
                Start Your Design
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="material-symbols-outlined"
                >
                  edit_note
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomCakesSection;
