// app/context/LightboxContext.js
"use client";

import { createContext, useState, useContext } from 'react';
import BrochureLightbox from '@/components/BrochureLightbox';

const LightboxContext = createContext();

export const useLightbox = () => useContext(LightboxContext);

export const LightboxProvider = ({ children }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <LightboxContext.Provider value={{ isLightboxOpen, openLightbox, closeLightbox }}>
      {children}
      {/* The lightbox component now lives here and is controlled by the provider */}
      <BrochureLightbox isOpen={isLightboxOpen} onClose={closeLightbox} />
    </LightboxContext.Provider>
  );
};