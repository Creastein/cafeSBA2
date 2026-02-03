
import React from 'react';
import { motion } from 'framer-motion';

const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-[#f3e8ec] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          {/* Google Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 bg-bg-soft px-6 py-4 rounded-2xl border border-[#f3e8ec] group cursor-default hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL4ER-TqGFWVktUXG20R_9eeczc6h7lPBZhcf0zjXfuUcMpebhDuNKYLb-YSeSVVSap8q_ZH1U9t_6wSL8_Zs2Gxmkelcv41493NEvxlF69bn0tU3yyIaDA9_gpeJHyFYcwR4h3T2xhnzG9s1oKNXstUZN_425DCuJDVII-E2HGNk_ZNB-Sh2LI7TeczWPdhT6yoVPYdTPmh_p4PgGQAvoeWcJKd53oYK2-M9gBNxr2lQ1zeR7ubJXnZ9qqIWbqYX5TTaJIyCTZ6VH" alt="Google" className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-[#ffb400]">
                {[1, 2, 3, 4, 5].map(i => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[18px] fill-icon transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-sm font-bold text-text-main transition-colors group-hover:text-primary">4.7 Stars on Google</p>
            </div>
          </motion.div>

          {/* Feature 1 */}
          {/* Feature 1: Gluten Free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">spa</span>
            </div>
            <div>
              <p className="font-bold text-text-main transition-colors group-hover:text-primary">100% Gluten Free</p>
              <p className="text-sm text-text-sub">Healthy & Delicious</p>
            </div>
          </motion.div>

          {/* Feature 2: Specialty Coffee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">coffee_maker</span>
            </div>
            <div>
              <p className="font-bold text-text-main transition-colors group-hover:text-primary">Specialty Coffee</p>
              <p className="text-sm text-text-sub">100% Arabica Beans</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
