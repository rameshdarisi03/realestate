'use client';

import React from 'react';
import Image from 'next/image';

export const TestimonialsAccolades: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 border-t border-white/10 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Discreet Accolades
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
              &ldquo;An extraordinary standard of curation, absolute privacy, and architectural mastery.&rdquo;
            </h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-gold-400/40 overflow-hidden relative bg-neutral-800">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Client Portrait"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="font-serif text-base font-bold block">Lady Genevieve Vance-Montagu</span>
                <span className="text-xs text-gold-300 font-mono">Private Family Office, Mayfair</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-center border-l md:border-white/10 md:pl-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-grand text-xl font-bold text-gold-300 block mb-1">ARCHITECTURAL DIGEST</span>
              <span className="text-[11px] opacity-70">&ldquo;The premier brokerage redefining ultra-prime residential art.&rdquo;</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-grand text-xl font-bold text-gold-300 block mb-1">ROBB REPORT</span>
              <span className="text-[11px] opacity-70">&ldquo;Best Luxury Real Estate Advisory Global 2025.&rdquo;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
