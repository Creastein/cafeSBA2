import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        sizes={sizes}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />
      )}
      {hasError && (
        <div className={`absolute inset-0 bg-gray-300 flex items-center justify-center ${className}`}>
          <span className="text-gray-500 text-sm">Failed to load</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;