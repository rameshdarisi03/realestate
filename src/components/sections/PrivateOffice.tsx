'use client';

import React from 'react';
import { ShieldCheck, Compass, Award } from 'lucide-react';

export const PrivateOffice: React.FC = () => {
  return (
    <section id="private-services-section" className="py-24 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block mb-2">
            White-Glove Advisory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            THE PRIVATE <span className="font-editorial italic font-normal text-gold-gradient">Office</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mb-4" />
          <p className="text-sm md:text-base opacity-75 font-light">
            Discreet transactional stewardship, off-market asset sourcing, and sovereign family office representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-panel rounded-3xl p-8 transition-all hover:-translate-y-2 border border-white/10 hover:border-gold-400/50">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Off-Market Acquisitions</h3>
            <p className="text-xs opacity-75 leading-relaxed">
              Gain confidential access to world-class estates, private islands, and unlisted penthouses traded strictly under non-disclosure agreements.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-8 transition-all hover:-translate-y-2 border border-white/10 hover:border-gold-400/50">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Architectural Advisory</h3>
            <p className="text-xs opacity-75 leading-relaxed">
              Direct collaboration with Pritzker-winning studios, master heritage restorers, and leading landscape biophilic innovators worldwide.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-8 transition-all hover:-translate-y-2 border border-white/10 hover:border-gold-400/50">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Sovereign Asset Protection</h3>
            <p className="text-xs opacity-75 leading-relaxed">
              Structuring cross-border luxury holding vehicles, private trust transfers, and tax-efficient real estate legacy transitions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
