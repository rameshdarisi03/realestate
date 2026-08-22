'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = true, className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full border border-white/15 bg-white/5 hover:border-gold-400/50 hover:bg-gold-400/10 text-gold-300 transition-all flex items-center gap-1.5 text-xs px-3 ${className}`}
      title={isDark ? 'Switch to Solarium (Light Mode)' : 'Switch to Nocturne (Dark Mode)'}
      aria-label="Toggle Day/Night Mode"
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-gold-300" />
          {showLabel && <span className="hidden sm:inline text-[11px] font-medium tracking-wider">Solarium</span>}
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-gold-500" />
          {showLabel && <span className="hidden sm:inline text-[11px] font-medium tracking-wider">Nocturne</span>}
        </>
      )}
    </button>
  );
};
