'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { MapPin, ArrowRight, Sparkles, Search, ChevronDown, X } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (criteria: { location: string; type: string; priceRange: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location, type, priceRange: '' });
    setIsMobileExpanded(false);
    const target = document.getElementById('portfolio-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full h-[calc(100vh)] min-h-[660px] max-h-[960px] flex flex-col justify-between pt-24 pb-8 md:pb-12 px-6 md:px-16 overflow-hidden">
      
      {/* Background Image Container with Cinematic Ken-Burns Breathing Animation */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        
        {/* Dark Hero Image */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full animate-kenburns">
            <Image
              src="/assets/images/hero-dark.png"
              alt="BRP Luxury Real Estate Twilight Architecture in Mysore"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Light Hero Image */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            !isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full animate-kenburns">
            <Image
              src="/assets/images/hero-light.png"
              alt="BRP Luxury Real Estate Sunset Architecture in Mysore"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />
      </div>

      {/* Floating Search Bar: Responsive Architecture (Collapsible on Mobile, Horizontal on Desktop) */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto animate-fade-in-up animate-delay-1 mt-2 sm:mt-8">
        
        {/* 1. Mobile Search View (< sm) */}
        <div className="sm:hidden w-full max-w-sm mx-auto">
          {!isMobileExpanded ? (
            /* Mobile Collapsed State */
            <button
              type="button"
              onClick={() => setIsMobileExpanded(true)}
              className="w-full bg-black/60 dark:bg-black/70 backdrop-blur-xl border border-white/30 rounded-full py-3 px-5 flex items-center justify-between text-white shadow-xl transition-all duration-300 hover:border-white/50 active:scale-95"
            >
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <MapPin className="text-[#fed488] w-4 h-4" />
                <span>Search Mysore Properties...</span>
              </div>
              <div className="bg-[#a2650c] p-1.5 rounded-full text-white shadow-sm">
                <Search className="w-3.5 h-3.5" />
              </div>
            </button>
          ) : (
            /* Mobile Expanded Vertical Card State */
            <form
              onSubmit={handleSubmit}
              className="w-full bg-black/85 dark:bg-black/90 backdrop-blur-2xl border border-white/30 rounded-2xl p-4 shadow-2xl space-y-3 animate-fade-in-up"
            >
              <div className="flex justify-between items-center pb-2 border-b border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-[#fed488] font-sans">
                  Search in Mysore
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileExpanded(false)}
                  className="p-1 text-white/60 hover:text-white"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Location Input */}
              <div className="relative">
                <MapPin className="text-[#fed488] w-4 h-4 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location (VV Mohalla, Gokulam...)"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-2.5 pl-9 pr-3 text-white text-xs placeholder:text-white/60 focus:outline-none focus:border-[#fed488] font-sans"
                />
              </div>

              {/* Property Type Dropdown */}
              <div className="relative">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-2.5 px-3 text-white text-xs focus:outline-none focus:border-[#fed488] appearance-none font-sans"
                >
                  <option value="" className="text-black">All Property Types</option>
                  <option value="villa" className="text-black">Heritage Bungalows &amp; Villas</option>
                  <option value="apartment" className="text-black">Luxury Apartments</option>
                  <option value="estate_plot" className="text-black">Estate Plots &amp; Land</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-white/70 absolute right-3 top-3.5 pointer-events-none" />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full bg-[#a2650c] hover:bg-[#8c5208] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Properties</span>
              </button>
            </form>
          )}
        </div>

        {/* 2. Desktop/Tablet Horizontal Search Bar (>= sm) */}
        <form
          onSubmit={handleSubmit}
          className="hidden sm:flex bg-black/45 dark:bg-black/55 backdrop-blur-2xl border border-white/30 rounded-full p-2 sm:p-2.5 w-full max-w-3xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex-row items-center gap-2 sm:gap-3 transition-all duration-300 hover:border-white/50"
        >
          {/* Location Input */}
          <div className="flex-1 w-full flex items-center pl-4 pr-2 py-2">
            <MapPin className="text-[#fed488] w-4 h-4 mr-2.5 flex-shrink-0" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search VV Mohalla, Gokulam, Yadavagiri..."
              className="w-full bg-transparent border-none text-white placeholder:text-white/70 focus:outline-none focus:ring-0 font-sans text-xs sm:text-sm"
            />
          </div>

          {/* Divider Line */}
          <div className="w-px h-7 bg-white/20 hidden sm:block flex-shrink-0" />

          {/* Property Type Dropdown */}
          <div className="w-auto flex items-center pl-2 pr-4 py-2 relative">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none focus:ring-0 font-sans text-xs sm:text-sm cursor-pointer appearance-none pr-6 font-medium"
            >
              <option value="" className="text-black">All Property Types</option>
              <option value="villa" className="text-black">Heritage Bungalows &amp; Villas</option>
              <option value="apartment" className="text-black">Luxury Apartments</option>
              <option value="estate_plot" className="text-black">Estate Plots &amp; Land</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-white/70 absolute right-2 pointer-events-none" />
          </div>

          {/* Search Action Pill Button */}
          <button
            type="submit"
            className="bg-[#a2650c] hover:bg-[#8c5208] text-white px-7 py-3 rounded-full transition-all duration-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-shrink-0 shadow-lg hover:scale-105 active:scale-95"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </button>
        </form>

      </div>

      {/* Hero Narrative & CTA: Flagship Headline */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto text-white animate-fade-in-up animate-delay-2">
        
        {/* Subtle Badge Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-3 text-[#fed488] text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold">
          <Sparkles className="w-3 h-3 text-[#fed488]" />
          <span>Mysore&apos;s Premier Real Estate Agency</span>
        </div>

        {/* Flagship Headline: A Better Place to Begin. */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 max-w-2xl leading-[1.1] drop-shadow-2xl">
          A Better Place<br />to Begin.
        </h1>

        {/* Sub-Tag & Narrative */}
        <div className="mb-5 sm:mb-6 max-w-xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#fed488] mb-1.5 font-sans drop-shadow">
            Homes &bull; Estates &bull; Land
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-200 font-sans font-light leading-relaxed drop-shadow">
            Curated properties for living, investing, and building your future in Mysore.
          </p>
        </div>

        {/* Explore Collection CTA */}
        <div>
          <a
            href="#portfolio-section"
            className="group inline-flex items-center gap-3 bg-[#fed488] text-[#785a1a] px-7 sm:px-8 py-3 sm:py-3.5 font-sans text-xs font-bold uppercase tracking-[0.18em] rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:-translate-y-0.5"
          >
            <span>Explore Mysore Properties</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>

      </div>

    </header>
  );
};
