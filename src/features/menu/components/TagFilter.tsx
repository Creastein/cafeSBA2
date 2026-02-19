import React from 'react';
import { motion } from 'framer-motion';
import type { TagFilterProps } from '../types/menu';

const AVAILABLE_TAGS = [
  { id: 'GF', label: 'Gluten Free', color: 'bg-pink-100 text-pink-600' },
  { id: 'DF', label: 'Dairy Free', color: 'bg-amber-100 text-amber-600' },
  { id: 'Vegan', label: 'Vegan', color: 'bg-green-100 text-green-600' },
  { id: 'Recommended', label: 'Recommended', color: 'bg-primary/10 text-primary' },
];

const TagFilter: React.FC<TagFilterProps> = ({ selectedTags, onToggleTag }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {AVAILABLE_TAGS.map((tag) => {
        const isSelected = selectedTags.includes(tag.id);
        return (
          <motion.button
            key={tag.id}
            onClick={() => onToggleTag(tag.id)}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              isSelected
                ? tag.color + ' ring-2 ring-primary/20 ring-offset-1 ring-bg-soft'
                : 'bg-surface border border-border text-text-sub hover:text-text-main'
            }`}
          >
            {tag.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default TagFilter;
