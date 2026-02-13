import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Local gallery images from public folder
const GALLERY_IMAGES = [
  { 
    id: 'g1', 
    src: '/hero-cake.png', 
    alt: 'Signature Korean Strawberry Shortcake',
    title: 'Signature Cake'
  },
  { 
    id: 'g2', 
    src: '/hero-cake-2.png', 
    alt: 'Belgian Chocolate Ganache Cake',
    title: 'Chocolate Delight'
  },
  { 
    id: 'g3', 
    src: '/hero-cake-3.png', 
    alt: 'Premium Shine Muscat Shortcake',
    title: 'Fresh Fruits'
  },
  { 
    id: 'g4', 
    src: '/hero-coffee.png', 
    alt: 'Specialty Coffee',
    title: 'Artisan Coffee'
  },
];

interface GalleryImageProps {
  image: typeof GALLERY_IMAGES[0];
  index: number;
  onImageClick: (image: typeof GALLERY_IMAGES[0]) => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image, index, onImageClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group cursor-pointer bg-text-main/5"
      onClick={() => onImageClick(image)}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl text-gray-300">image</span>
        </div>
      )}
      
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
          <span className="material-symbols-outlined text-4xl mb-2">broken_image</span>
          <span className="text-xs">Image unavailable</span>
        </div>
      )}

      {/* Image */}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
          isLoaded ? 'opacity-90 grayscale-[20%] group-hover:opacity-100 group-hover:grayscale-0' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <h3 className="text-white font-serif text-lg font-bold mb-1">{image.title}</h3>
          <p className="text-white/80 text-sm">{image.alt}</p>
        </motion.div>
        
        <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-2xl mt-4 scale-50 group-hover:scale-100 transition-transform duration-500">
          <span className="material-symbols-outlined fill-icon text-2xl">zoom_in</span>
        </div>
      </div>
    </motion.div>
  );
};

interface ImageModalProps {
  image: typeof GALLERY_IMAGES[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-4xl max-h-[90vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Image */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain max-h-[80vh]"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <h3 className="text-white font-serif text-xl font-bold">{image.title}</h3>
            <p className="text-white/70">{image.alt}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section id="gallery" className="bg-primary/5 py-16 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold text-primary tracking-[0.2em] uppercase"
          >
            Visual Inspiration
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-text-main"
          >
            Our Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-sub max-w-2xl mx-auto"
          >
            A glimpse into our daily craft, from the first pour to the final garnish.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              index={index}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-[#f3e8ec] rounded-full text-primary font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <span className="material-symbols-outlined text-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
              photo_camera
            </span>
            <span>Follow @SugarBloomAtelier</span>
            <span className="material-symbols-outlined text-sm text-primary/60 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};

export default Gallery;
