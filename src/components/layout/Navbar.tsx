'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-md ${
        isDark
          ? 'bg-[#191c1f]/90 border-white/10 text-[#eff1f5]'
          : 'bg-white/95 border-black/10 text-[#1b1c1c]'
      } ${scrolled ? 'py-3.5 shadow-sm' : 'py-5'}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex justify-between items-center">
        
        {/* Brand Name */}
        <Link href="/" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-current">
          BRP Properties
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-sans">
          <Link
            href="/#portfolio-section"
            className="text-current font-semibold border-b-2 border-current pb-1"
          >
            Buy
          </Link>
          <Link
            href="/#portfolio-section"
            className="opacity-75 hover:opacity-100 hover:text-gold-500 transition-colors"
          >
            Rent
          </Link>
          <Link
            href="/#portfolio-section"
            className="opacity-75 hover:opacity-100 hover:text-gold-500 transition-colors"
          >
            Developments
          </Link>
          <Link
            href="/#leadership-section"
            className="opacity-75 hover:opacity-100 hover:text-gold-500 transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Dark / Light Mode Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 text-current hover:text-gold-500 transition-colors"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className={`hidden md:inline-flex items-center justify-center px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 rounded-full ${
              isDark
                ? 'bg-white text-black hover:bg-gold-300 hover:text-black'
                : 'bg-black text-white hover:bg-neutral-800'
            }`}
          >
            CONTACT US
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-current"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col p-8 justify-between text-white">
          <div className="flex justify-between items-center pb-6 border-b border-white/10">
            <span className="font-serif text-2xl font-bold">BRP Properties</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-xl font-serif">
            <Link href="/#portfolio-section" onClick={() => setMobileOpen(false)} className="hover:text-gold-400">Buy</Link>
            <Link href="/#portfolio-section" onClick={() => setMobileOpen(false)} className="hover:text-gold-400">Rent</Link>
            <Link href="/#portfolio-section" onClick={() => setMobileOpen(false)} className="hover:text-gold-400">Developments</Link>
            <Link href="/#leadership-section" onClick={() => setMobileOpen(false)} className="hover:text-gold-400">About</Link>
            <button onClick={() => { setMobileOpen(false); onOpenContact(); }} className="text-left hover:text-gold-400">Contact Us</button>
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-between items-center">
            <button onClick={toggleTheme} className="flex items-center gap-2 text-sm text-gold-400">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
