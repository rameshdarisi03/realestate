'use client';

import React from 'react';
import Image from 'next/image';
import { POPULAR_CATEGORIES } from '@/lib/propertiesData';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenSubmitModal: () => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onOpenSubmitModal,
}) => {
  return (
    <section id="categories-section" className="py-24 px-6 md:px-16 w-full bg-white dark:bg-[#121212] transition-colors">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Top Centered Header with Caret matching Screenshot 2026-08-22 124743.png */}
        <div className="text-center mb-16">
          {/* Accent Roof / Caret Icon */}
          <div className="flex justify-center mb-4">
            <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 16L18 3L34 16" stroke="#84cc16" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 text-current">
            EXPLORE POPULAR CATEGORIES
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] opacity-70 font-semibold font-sans text-current">
            FIND YOUR HOUSE IN YOUR CITY
          </p>
        </div>

        {/* 6 Category Cards Grid matching exact Screenshot 2026-08-22 124743.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {POPULAR_CATEGORIES.map((cat) => {
            const isHighlighted = cat.highlight;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative overflow-hidden h-[240px] md:h-[280px] cursor-pointer shadow-md transition-transform duration-500 hover:-translate-y-1"
              >
                {/* Background Image */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                {isHighlighted ? (
                  <div className="absolute inset-0 bg-[#84cc16]/90 p-8 flex flex-col justify-between text-white transition-opacity duration-300">
                    <div>
                      <h3 className="font-sans text-2xl md:text-3xl font-bold mb-1">
                        {cat.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider opacity-90 font-medium">
                        {cat.count} Properties
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/40">
                      <span className="text-xs uppercase tracking-[0.2em] font-bold inline-block">
                        VIEW ALL
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 p-8 flex flex-col justify-start text-white group-hover:from-black/95 transition-colors">
                    <div>
                      <h3 className="font-sans text-2xl md:text-3xl font-bold mb-1">
                        {cat.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider opacity-80 font-medium">
                        {cat.count} Properties
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dual Bottom Buttons matching exact Screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#portfolio-section"
            className="bg-[#1c1b1b] text-white px-8 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-[0.15em] hover:bg-black transition-all shadow-md"
          >
            BROWSE PROPERTIES
          </a>
          <button
            onClick={onOpenSubmitModal}
            className="bg-transparent text-[#84cc16] dark:text-[#a3e635] border-2 border-[#84cc16] dark:border-[#a3e635] px-8 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#84cc16] hover:text-white transition-all shadow-md"
          >
            SUBMIT PROPERTY
          </button>
        </div>

      </div>
    </section>
  );
};
