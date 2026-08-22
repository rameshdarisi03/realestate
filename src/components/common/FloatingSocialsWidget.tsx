'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  MessageCircle,
} from 'lucide-react';

export const FloatingSocialsWidget: React.FC = () => {
  // Collapsed by default on mobile / tablet (< 1024px)
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    // Only auto-open on large desktop monitors
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setIsOpen(true);
    }
  }, []);

  return (
    <aside
      aria-label="Quick Actions & Socials"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center transition-transform duration-300 ease-in-out"
      style={{
        transform: isOpen
          ? 'translateY(-50%) translateX(0)'
          : 'translateY(-50%) translateX(calc(100% - 24px))',
      }}
    >
      {/* Toggle Tab with 100% Solid Opacity and Lighter Warm Gold Tone */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-6 h-12 bg-[#b87a20] hover:bg-[#a56c19] text-white rounded-l-md flex items-center justify-center shadow-lg transition-colors focus:outline-none border-l border-y border-amber-300/40"
        title={isOpen ? 'Collapse Quick Bar' : 'Expand Quick Bar'}
        aria-label={isOpen ? 'Collapse Quick Bar' : 'Expand Quick Bar'}
      >
        {isOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Main Socials Bar with 100% Solid Opacity and Lighter Warm Honey Gold Color */}
      <div className="bg-[#cb8c28] dark:bg-[#b87a20] text-white py-4 px-2.5 rounded-l-2xl shadow-[0_12px_35px_rgba(0,0,0,0.25)] flex flex-col items-center gap-3.5 border-l border-y border-amber-200/40">
        
        {/* Day / Night Mode Switcher */}
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-full hover:bg-black/20 text-white transition-all transform hover:scale-110"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Divider */}
        <div className="w-6 h-px bg-white/35 my-0.5" />

        {/* WhatsApp Direct Chat */}
        <a
          href="https://wa.me/918000000000?text=Hello%20BRP%20Properties%20Mysore,%20I%20am%20interested%20in%20luxury%20properties."
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full hover:bg-black/20 text-white transition-all transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full hover:bg-black/20 text-white transition-all transform hover:scale-110"
          title="Follow on Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full hover:bg-black/20 text-white transition-all transform hover:scale-110"
          title="Follow on Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full hover:bg-black/20 text-white transition-all transform hover:scale-110"
          title="Connect on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        {/* Twitter / X */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full hover:bg-black/20 text-white transition-all transform hover:scale-110"
          title="Follow on X"
        >
          <Twitter className="w-5 h-5" />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full hover:bg-black/20 text-white transition-all transform hover:scale-110"
          title="Watch on YouTube"
        >
          <Youtube className="w-5 h-5" />
        </a>

      </div>
    </aside>
  );
};
