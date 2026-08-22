'use client';

import React from 'react';

export const PrestigeTicker: React.FC = () => {
  const stats = [
    { value: '$4.8B+', label: 'Portfolio Transacted' },
    { value: '98.4%', label: 'Confidential Off-Market' },
    { value: '38 Metropolises', label: 'Global Prime Presence' },
    { value: '150+ Laureates', label: 'Pritzker & Master Architects' }
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <span className="font-grand text-3xl md:text-5xl font-bold text-gold-gradient block">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 block font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
