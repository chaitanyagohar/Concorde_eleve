// components/StickyEnquireButton.js

"use client";

import { useState, useEffect } from 'react';
import { useLightbox } from '@/app/context/LightboxContext';

export default function StickyEnquireButton() {
  const [isVisible, setIsVisible] = useState(false);
   const { openLightbox } = useLightbox();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={openLightbox}
      className={`
        fixed top-1/3 z-50 
        bg-[#0F5BA9] text-white font-sm tracking-wider
        px-6 py-2 shadow-lg
        transform -translate-y-1/2 rotate-180  /* <-- ROTATION ADDED HERE */
        transition-[right] duration-700 ease-out
        ${isVisible ? 'right-0' : '-right-28'} 
      `}
      style={{ writingMode: 'vertical-rl' }}
    >
      Enquire Now
    </button>
  );
}