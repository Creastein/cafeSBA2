
import React from 'react';

const CustomCakesSection: React.FC = () => {
  return (
    <section id="custom-cakes" className="py-24 bg-white overflow-hidden border-b border-[#f3e8ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Collage Side */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-[80%] rounded-t-[500px] overflow-hidden border-[12px] border-[#fbf8fa] shadow-2xl z-10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDznARwYP6ZqiZ-Vptf4weGDCiJQtlFlroUJp9ro_JmrMam7EYR2863ryulSlx5y_4HQwzKBuzyf79AaKn_13A4ZnqnoaVMlZUOXKmtivWaZDNWvneoMxXjb_xkq_JAGVz8LKMed4Uv0bfdRq9LV_2LgXl-Vre3KsQSuB-iq2HnIJlXnTBJuqs4PVX_sFJavkddICnjqBRES4Tax2en9PGglVDJdvLyz6I2dkr3nQb-oeF67XOsFr-wkdfioxuTK1e9c5AbiZZflLSt" 
                alt="Custom Cake Design" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Secondary Floating Image */}
            <div className="absolute top-1/2 -right-4 w-[60%] aspect-square rounded-full overflow-hidden border-[8px] border-white shadow-xl z-20 translate-y-[-10%] hidden md:block group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgoKlGSjhupTgZ3GZZnjMBU0xTCF4K9_lXD0eTpgz-7ywZ5J9kWXA4I4TQovbsVtNaLvWrtg7OcbYPLUszJ9Wc5Jp0Q9sbC_rGqIV5yDBWNkt1qvipFfiEdezk4TPJYOF7jOg55k22LsMVpfqTMqaBkK6Rohq21fkWj_H65CEQ8V2nSlSl8e8_UlRL5jyrb7Te6dXxN3oLAKoTkiDiFUpkNiO8DWIoVBNDzeI0oh3SItfDfR0bPDezNmCj6oYclaJ7FrKJtxTN8l9L" 
                alt="Cake Detail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Content Side */}
          <div className="flex-1 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-xs font-extrabold text-primary tracking-[0.2em] uppercase">Tailor-Made Moments</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-main leading-tight">Your Vision, <br /> Our Craftsmanship</h2>
              <p className="text-lg text-text-sub leading-relaxed max-w-lg">
                Whether it's a minimalist Korean bento cake or an elaborate tiered celebration piece, we bring your sweet dreams to life with meticulous attention to detail.
              </p>
            </div>

            <div className="space-y-8 py-4">
              {[
                { step: '01', title: 'Consultation', desc: 'Share your themes, color palettes, and flavor inspirations with our lead designers.' },
                { step: '02', title: 'Design Sketch', desc: 'We provide a visual preview and material selection for your custom creation.' },
                { step: '03', title: 'Artisan Baking', desc: 'Our pastry chefs bake and decorate your cake using only the finest ingredients.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <span className="text-3xl font-serif font-bold text-primary/20 group-hover:text-primary transition-colors duration-300 select-none">
                    {item.step}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-text-main text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-text-sub leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="h-16 px-10 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
              Start Your Design
              <span className="material-symbols-outlined">edit_note</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCakesSection;
