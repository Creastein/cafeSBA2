
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useValidatedProducts } from '../hooks/useValidatedProducts';

interface ProductGridProps {
  onAddToCart: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = React.memo(({ onAddToCart }) => {
  const validatedProducts = useValidatedProducts();
  
  const productElements = useMemo(() => validatedProducts.map((product, index) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden border border-[#f3e8ec] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-bg-soft">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.tag && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm">
            {product.tag}
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-serif text-2xl font-bold text-text-main">{product.name}</h3>
          <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-text-sub text-sm leading-relaxed mb-8 flex-grow">
          {product.description}
        </p>

        <button
          onClick={onAddToCart}
          className="w-full h-14 border-2 border-primary rounded-2xl text-primary font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all group/btn"
        >
          <span className="material-symbols-outlined text-xl transition-transform group-hover/btn:scale-110">add_shopping_cart</span>
          Add to Cart
        </button>
      </div>
    </motion.div>
  )), [onAddToCart]);

  return (
    <section id="menu" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-2">
          <p className="text-xs font-extrabold text-primary tracking-[0.2em] uppercase">Our Menu</p>
          <h2 className="font-serif text-4xl font-bold text-text-main">Featured Treats</h2>
        </div>
        <button className="flex items-center gap-1 font-bold text-text-main hover:text-primary transition-colors group">
          View Full Menu
          <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productElements}
      </div>
    </section>
  );
});

ProductGrid.displayName = 'ProductGrid';

export default ProductGrid;
