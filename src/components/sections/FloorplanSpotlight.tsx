'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FLOORPLAN_HOTSPOTS } from '@/lib/propertiesData';
import { FloorplanHotspot } from '@/lib/types';
import { Sun, Sunset, Moon, Sparkles } from 'lucide-react';

interface FloorplanSpotlightProps {
  onOpenVipModal: () => void;
}

type DaylightPreset = 'dawn' | 'noon' | 'sunset' | 'night';

export const FloorplanSpotlight: React.FC<FloorplanSpotlightProps> = ({ onOpenVipModal }) => {
  const [activeHotspot, setActiveHotspot] = useState<FloorplanHotspot>(FLOORPLAN_HOTSPOTS[1]); // Default to curved terrace
  const [daylight, setDaylight] = useState<DaylightPreset>('sunset');

  const daylightConfigs = {
    dawn: {
      time: '06:45 AM',
      name: 'Alpine Dawn',
      elevation: '12° East',
      skyGradient: 'from-amber-400/25 via-pink-500/15 to-slate-900/80',
      beamAngle: 'rotate-45',
      glowColor: 'rgba(251, 191, 36, 0.4)',
    },
    noon: {
      time: '12:30 PM',
      name: 'High Zenith',
      elevation: '78° South',
      skyGradient: 'from-blue-300/40 via-amber-200/20 to-white/10',
      beamAngle: 'rotate-90',
      glowColor: 'rgba(255, 255, 255, 0.7)',
    },
    sunset: {
      time: '06:15 PM',
      name: 'Golden Hour',
      elevation: '18° West',
      skyGradient: 'from-amber-500/35 via-rose-600/25 to-indigo-950/80',
      beamAngle: 'rotate-[135deg]',
      glowColor: 'rgba(245, 158, 11, 0.7)',
    },
    night: {
      time: '11:00 PM',
      name: 'Nocturne Luxe',
      elevation: 'Moonlight',
      skyGradient: 'from-slate-900/90 via-indigo-950/85 to-black',
      beamAngle: 'rotate-180',
      glowColor: 'rgba(234, 179, 8, 0.5)',
    },
  };

  const currentConfig = daylightConfigs[daylight];

  return (
    <section id="spotlight-floorplan-section" className="py-24 px-4 md:px-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block mb-2">
            Architectural Spotlight
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            INTERACTIVE BLUEPRINT &amp; <span className="font-editorial italic font-normal text-gold-gradient">Daylight Simulator</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mb-4" />
          <p className="text-sm md:text-base opacity-75 font-light">
            Inspect spatial proportions and observe how natural sunlight cascades across the residence from Alpine dawn to twilight nocturne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Blueprint Viewer */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden">
            
            {/* Header & Controls */}
            <div className="flex flex-wrap justify-between items-center pb-6 mb-6 border-b border-white/10 gap-4">
              <div>
                <h3 className="font-serif text-2xl font-bold">The Grand Élysée Duplex</h3>
                <p className="text-xs text-gold-400 font-mono">Level 42 &bull; 9,800 Sq.Ft &bull; 360° Seine Vistas</p>
              </div>

              {/* Presets */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDaylight('dawn')}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    daylight === 'dawn' ? 'bg-gradient-to-r from-gold-300 to-gold-500 text-black font-semibold border-transparent' : 'bg-white/5 border-white/10 text-gray-300'
                  }`}
                >
                  <Sun className="w-3 h-3 inline mr-1" /> Dawn
                </button>
                <button
                  onClick={() => setDaylight('noon')}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    daylight === 'noon' ? 'bg-gradient-to-r from-gold-300 to-gold-500 text-black font-semibold border-transparent' : 'bg-white/5 border-white/10 text-gray-300'
                  }`}
                >
                  <Sun className="w-3 h-3 inline mr-1" /> Noon
                </button>
                <button
                  onClick={() => setDaylight('sunset')}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    daylight === 'sunset' ? 'bg-gradient-to-r from-gold-300 to-gold-500 text-black font-semibold border-transparent' : 'bg-white/5 border-white/10 text-gray-300'
                  }`}
                >
                  <Sunset className="w-3 h-3 inline mr-1" /> Golden Hour
                </button>
                <button
                  onClick={() => setDaylight('night')}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    daylight === 'night' ? 'bg-gradient-to-r from-gold-300 to-gold-500 text-black font-semibold border-transparent' : 'bg-white/5 border-white/10 text-gray-300'
                  }`}
                >
                  <Moon className="w-3 h-3 inline mr-1" /> Nocturne
                </button>
              </div>
            </div>

            {/* SVG Blueprint Canvas */}
            <div className="relative w-full aspect-[16/10] bg-neutral-950/80 rounded-2xl overflow-hidden border border-white/10 shadow-inner flex items-center justify-center p-4">
              
              {/* Daylight Ambient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentConfig.skyGradient} transition-all duration-700 pointer-events-none opacity-70`} />

              {/* Sun Light Beam Angle */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent pointer-events-none transition-all duration-700 ${currentConfig.beamAngle}`} />

              {/* Floorplan Vector Layout */}
              <svg className="w-full h-full relative z-10 opacity-90 transition-all duration-500" viewBox="0 0 1000 650" fill="none" stroke="currentColor">
                <path d="M 80,120 L 680,120 A 280,280 0 0,1 920,400 L 920,540 L 80,540 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(212,175,55,0.6)" strokeWidth="3" />
                <path d="M 680,120 A 280,280 0 0,1 920,400 L 840,400 A 200,200 0 0,0 680,200 Z" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.8)" strokeWidth="2" strokeDasharray="6 4" />
                
                <rect x="110" y="150" width="280" height="350" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="rgba(255,255,255,0.01)" />
                <text x="140" y="190" fill="rgba(255,255,255,0.6)" fontSize="14" fontFamily="Plus Jakarta Sans" letterSpacing="2">MASTER SANCTUARY</text>
                <text x="140" y="210" fill="rgba(212,175,55,0.8)" fontSize="11" fontFamily="monospace">1,100 SQ.FT</text>

                <rect x="420" y="260" width="280" height="240" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="rgba(255,255,255,0.01)" />
                <text x="440" y="300" fill="rgba(255,255,255,0.6)" fontSize="14" fontFamily="Plus Jakarta Sans" letterSpacing="2">GRAND SALON</text>
                <text x="440" y="320" fill="rgba(212,175,55,0.8)" fontSize="11" fontFamily="monospace">1,450 SQ.FT &bull; 6.4M CEILING</text>

                <rect x="420" y="150" width="230" height="90" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <text x="440" y="185" fill="rgba(255,255,255,0.6)" fontSize="12" fontFamily="Plus Jakarta Sans" letterSpacing="2">GOURMET ATELIER</text>

                <text x="730" y="290" fill="rgba(212,175,55,0.9)" fontSize="13" fontFamily="Plus Jakarta Sans" fontWeight="bold" letterSpacing="1">CURVED HORIZON DECK</text>
                <text x="730" y="310" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="monospace">1,820 SQ.FT</text>

                <line x1="80" y1="240" x2="420" y2="240" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1="260" y1="150" x2="260" y2="500" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="780" cy="220" r="35" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" fill="rgba(56, 189, 248, 0.08)" />
                <text x="760" y="225" fill="rgba(56, 189, 248, 0.8)" fontSize="10" fontFamily="monospace">SPA POOL</text>
              </svg>

              {/* Hotspot Radar Pins */}
              <div className="absolute inset-0 pointer-events-auto">
                {FLOORPLAN_HOTSPOTS.map((spot, i) => {
                  const isActive = activeHotspot.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setActiveHotspot(spot)}
                      onMouseEnter={() => setActiveHotspot(spot)}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-pointer group"
                      aria-label={spot.name}
                    >
                      <span className="absolute inset-0 rounded-full bg-gold-400/50 animate-hotspot-radar pointer-events-none" />
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-transform ${
                          isActive
                            ? 'bg-white text-black scale-125 ring-2 ring-gold-400'
                            : 'bg-gradient-to-r from-gold-300 to-gold-500 text-black'
                        }`}
                      >
                        {i + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slider & Time Indicator */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-3 w-full sm:w-auto text-xs">
                <span className="uppercase tracking-widest text-gold-300 font-semibold">Sun Path:</span>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={daylight === 'dawn' ? 1 : daylight === 'noon' ? 2 : daylight === 'sunset' ? 3 : 4}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    const keys: DaylightPreset[] = ['dawn', 'noon', 'sunset', 'night'];
                    setDaylight(keys[val - 1]);
                  }}
                  className="w-48 cursor-pointer"
                />
              </div>

              <div className="flex items-center space-x-4 text-xs font-mono">
                <span className="text-white font-semibold">{currentConfig.time} — {currentConfig.name}</span>
                <span className="opacity-40">|</span>
                <span className="text-gold-400">{currentConfig.elevation}</span>
              </div>
            </div>

          </div>

          {/* Right: Active Hotspot Inspector Card */}
          <div className="lg:col-span-4">
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-gold-400/30 shadow-2xl">
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                Active Spatial Inspection
              </span>
              <h4 className="font-serif text-2xl font-bold mb-2">
                {activeHotspot.name}
              </h4>
              <div className="flex items-center space-x-2 text-xs font-mono text-gold-300 mb-4">
                <span>{activeHotspot.area}</span>
                <span>&bull;</span>
                <span>Panoramic Exposure</span>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-4 border border-white/10 shadow-lg relative">
                <Image
                  src={activeHotspot.image}
                  alt={activeHotspot.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="400px"
                />
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                {activeHotspot.specs}
              </p>

              <button
                onClick={onOpenVipModal}
                className="w-full btn-gold text-xs py-3"
              >
                Request Private Penthouse Dossier
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
