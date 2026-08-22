'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full py-16 border-t border-white/10 transition-colors">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-serif text-2xl font-bold tracking-tight">
            BRP Properties
          </div>
          <p className="text-xs text-gray-400 font-sans text-center md:text-left max-w-sm">
            © 2026 BRP Properties. All rights reserved. Defined by architectural precision.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 text-xs font-sans text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-white transition-colors">Sustainability</a>
          <a href="#" className="hover:text-white transition-colors">Careers</a>
        </nav>

      </div>
    </footer>
  );
};
