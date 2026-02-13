import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const TrustBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <motion.section 
      style={{ backgroundColor }}
      className="border-y border-[#f3e8ec] py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-24"
        >
          {/* Google Rating */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-center gap-4 bg-bg-soft px-6 py-4 rounded-2xl border border-[#f3e8ec] group cursor-default hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-primary">star</span>
            </motion.div>
            <div>
              <div className="flex items-center gap-0.5 text-[#ffb400]">
                {[1, 2, 3, 4, 5].map(i => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="material-symbols-outlined text-[18px] fill-icon transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    star
                  </motion.span>
                ))}
              </div>
              <p className="text-sm font-bold text-text-main transition-colors group-hover:text-primary">4.7 Stars on Google</p>
            </div>
          </motion.div>

          {/* Feature 1: Gluten Free */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -12 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10"
            >
              <span className="material-symbols-outlined text-primary text-3xl">spa</span>
            </motion.div>
            <div>
              <p className="font-bold text-text-main transition-colors group-hover:text-primary">100% Gluten Free</p>
              <p className="text-sm text-text-sub">Healthy & Delicious</p>
            </div>
          </motion.div>

          {/* Feature 2: Specialty Coffee */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 12 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10"
            >
              <span className="material-symbols-outlined text-primary text-3xl">coffee_maker</span>
            </motion.div>
            <div>
              <p className="font-bold text-text-main transition-colors group-hover:text-primary">Specialty Coffee</p>
              <p className="text-sm text-text-sub">100% Arabica Beans</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrustBar;
