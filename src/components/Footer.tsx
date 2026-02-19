import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
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

const Footer: React.FC = () => {
  const scrollToSection = useScrollTo();

  return (
    <footer id="footer" className="bg-bg-soft pt-24 pb-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-16 border-b border-border"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <motion.a
              href="#hero"
              onClick={(e) => scrollToSection(e, 'hero')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 group cursor-pointer inline-flex"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-primary text-xl fill-icon">cake</span>
              </motion.div>
              <h3 className="font-serif text-xl font-bold text-text-main">Sugar Bloom</h3>
            </motion.a>
            <p className="text-sm text-text-sub leading-relaxed max-w-xs">
              Handcrafted desserts inspired by Korean café culture. Made with premium ingredients and love in BSD City.
            </p>
          </motion.div>

          {/* Explore */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-text-main mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-text-sub">
              {[
                { name: 'Our Menu', id: 'menu' },
                { name: 'Custom Cakes', id: 'custom-cakes' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Visit Us', id: 'visit-us' }
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    whileHover={{ x: 5, color: '#e64c8c' }}
                    className="hover:text-primary transition-colors cursor-pointer block"
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h4 className="font-bold text-text-main">Sweet News</h4>
            <p className="text-sm text-text-sub">Join our newsletter for exclusive offers.</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow h-12 px-4 rounded-xl bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="material-symbols-outlined"
                >
                  send
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-xs text-text-sub">© 2026 Sugar Bloom Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <motion.a
              href="https://www.instagram.com/sugarbloomatelier/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-text-sub hover:text-primary transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
