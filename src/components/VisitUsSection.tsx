import React from 'react';
import { motion, Variants } from 'framer-motion';

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

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
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
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const VisitUsSection: React.FC = () => {
  return (
    <section id="visit-us" className="py-24 bg-white border-t border-[#f3e8ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10 order-2 lg:order-1"
          >
            <motion.div variants={fadeInLeft}>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-4 bg-primary/10 rounded-full text-sm font-bold text-primary tracking-widest uppercase"
              >
                Location
              </motion.span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-main leading-tight mb-6">
                Come Say Hello
              </h2>
              <p className="text-text-sub text-lg leading-relaxed">
                We are nestled in the heart of BSD Green Office Park.
                A perfect spot for your morning coffee run or afternoon escape.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="space-y-8"
            >
              {[
                { 
                  icon: 'location_on', 
                  title: 'Our Address', 
                  content: ['BSD Green Office Park,', 'Sampora, Cisauk, Tangerang,', 'Banten 15345']
                },
                { 
                  icon: 'schedule', 
                  title: 'Opening Hours', 
                  content: ['Mon - Fri: 8am - 9pm', 'Sat - Sun: 9am - 10pm']
                },
                { 
                  icon: 'call', 
                  title: 'Contact', 
                  content: ['+62 812 3456 7890', 'hello@sugarbloom.id']
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInLeft}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 bg-[#f3e8ec] rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-xl text-text-main mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    {item.content.map((line, i) => (
                      <p key={i} className="text-text-sub leading-relaxed">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="pt-4"
            >
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(27, 14, 19, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-text-main text-white rounded-full font-bold hover:bg-primary transition-colors duration-300"
              >
                Get Directions
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="material-symbols-outlined text-sm"
                >
                  arrow_outward
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="h-[350px] lg:h-[500px] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative group order-1 lg:order-2"
          >
            {/* Decorative corners */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/50 z-10"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/50 z-10"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/50 z-10"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/50 z-10"
            />

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
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
