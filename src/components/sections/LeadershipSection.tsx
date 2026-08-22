'use client';

import React from 'react';
import Image from 'next/image';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership-section" className="py-24 px-6 md:px-16 w-full border-t border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.02] transition-colors">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Founder Portrait from aa.zip with Modern Rounded Corners */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] relative overflow-hidden rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
              <Image
                src="/assets/images/founder.png"
                alt="B.R. Prasad, Chairman & Managing Director"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Editorial Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a2650c] dark:text-amber-400 mb-3 font-sans">
              Visionary Leadership
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-current">
              Curating legacy through architectural perfection.
            </h2>
            
            <div className="space-y-6 opacity-90 text-sm sm:text-base font-sans leading-relaxed mb-8 text-current">
              <p>
                For over two decades, BRP Properties has been at the vanguard of Mysore&apos;s luxury real estate sector, preserving heritage and shaping landmark residences with an uncompromising commitment to quality.
              </p>
              
              {/* Clean, High-Legibility Quote Box */}
              <div className="border-l-2 border-[#a2650c] dark:border-amber-400 pl-5 py-2 bg-neutral-50 dark:bg-white/[0.03] rounded-r-lg">
                <p className="font-sans text-sm sm:text-base leading-relaxed text-current font-normal italic">
                  &ldquo;True luxury resides in the quiet moments of harmony between structure, nature, and the individual. We do not simply build homes; we curate sanctuaries that stand as enduring testaments to refined living and heritage.&rdquo;
                </p>
              </div>
            </div>

            <div>
              <p className="font-serif text-2xl font-bold italic text-[#a2650c] dark:text-amber-400">B. R. Prasad</p>
              <p className="text-xs uppercase tracking-widest opacity-70 mt-1 font-sans text-current">
                B.R. Prasad, Chairman &amp; Managing Director
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
