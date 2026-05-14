/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductImageSliderProps {
  mainImage: string;
  gallery?: string[];
  alt: string;
  className?: string;
  interval?: number;
  activeIndex?: number;
}

export default function ProductImageSlider({ 
  mainImage, 
  gallery, 
  alt, 
  className = "", 
  interval = 3000,
  activeIndex
}: ProductImageSliderProps) {
  const images = gallery && gallery.length > 0 ? [mainImage, ...gallery] : [mainImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activeIndex !== undefined) {
      setCurrentIndex(activeIndex);
      return;
    }

    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, activeIndex]);

  return (
    <div className={`relative w-full h-full overflow-hidden flex items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={alt}
          initial={activeIndex !== undefined ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={activeIndex !== undefined ? { opacity: 1 } : { opacity: 0 }}
          transition={activeIndex !== undefined ? { duration: 0 } : { duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, index) => (
            <div 
              key={index}
              className={`h-1 transition-all duration-300 rounded-full ${index === currentIndex ? 'w-4 bg-brand-blue' : 'w-1 bg-slate-200'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
