"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Put your navigation links in an array for easy reuse
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#configuration", label: "Configuration" },
  { href: "#club", label: "Club Evolve" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > 10;
        setIsScrolled(prev => (prev !== scrolled ? scrolled : prev));

        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  
  // Effect to prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 p-5 transition-colors duration-300 ${isScrolled ? 'bg-[#572f1f] shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto flex justify-between items-center text-white">
          <a href="#home" aria-label="Go to homepage">
            <Image
  src="/concorde-logo.svg"
  alt="Concorde Eleve Logo"
  width={130}
  height={20}
  priority
/>

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline">{link.label}</a>
            ))}
          </nav>

          {/* Hamburger Menu Button for Mobile */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Side Nav Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-full bg-opacity-100 z-40 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* --- THIS IS THE KEY CHANGE --- */}
        <div 

          className={`fixed top-0 right-0 h-full w-64 bg-[#572f1f]  transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="mt-24 p-5 flex flex-col space-y-6 text-white text-lg">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}