import React from 'react';
import { motion } from 'framer-motion';
import type { PriceTagProps } from '../types/menu';

const PriceTag: React.FC<PriceTagProps> = ({ price, showUnit = false, isBeverage = false }) => {
  return (
    <span className="font-serif text-lg font-bold text-primary">
      {price}
      {isBeverage && !price.includes('K') && showUnit && (
        <span className="text-xs font-sans font-bold text-primary/60 ml-0.5">K</span>
      )}
    </span>
  );
};

export default PriceTag;
