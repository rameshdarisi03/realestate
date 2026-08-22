'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Property, PropertyStatus } from '@/lib/types';
import { X, Waves, Dumbbell, Wine, Car, Shield, Trees, Bed, Bath, Square, ArrowRight } from 'lucide-react';

interface PropertyDossierModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDossierModal: React.FC<PropertyDossierModalProps> = ({
  property,
  onClose,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!property) return null;

  const currentImage = selectedImage || property.image;

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          propertyId: property.id,
          name: fullName,
          email,
          phone,
          message,
        }),
      });
    } catch {
      // ignore
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const getStatusBadgeStyle = (status: PropertyStatus) => {
    switch (status) {
      case 'For Sale':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-500/40';
      case 'For Rent':
        return 'bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-950/80 dark:text-sky-300 dark:border-sky-500/40';
      case 'Sold Out':
        return 'bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/80 dark:text-rose-300 dark:border-rose-500/40';
      default:
        return 'bg-neutral-100 text-black border-neutral-300 dark:bg-black/90 dark:text-white dark:border-white/20';
    }
  };

  const amenityIcons: Record<string, React.ReactNode> = {
    'Infinity Pool': <Waves className="w-5 h-5" />,
    'Private Gym': <Dumbbell className="w-5 h-5" />,
    'Wine Cellar': <Wine className="w-5 h-5" />,
    '6-Car Garage': <Car className="w-5 h-5" />,
    'Advanced Security': <Shield className="w-5 h-5" />,
    'Landscaped Gardens': <Trees className="w-5 h-5" />,
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto">
      <div className="bg-white text-[#1b1c1c] dark:bg-[#121212] dark:text-[#eff1f5] max-w-6xl w-full max-h-[92vh] overflow-y-auto border border-black/10 dark:border-white/10 shadow-2xl p-6 md:p-12 relative rounded-none transition-colors">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Image Showcase */}
        <div className="mb-10">
          <div className="relative w-full aspect-[16/9] max-h-[520px] overflow-hidden mb-4 border border-black/10 dark:border-white/10 rounded-sm">
            <Image
              src={currentImage}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
            {/* Status Badge */}
            <div className={`absolute top-4 left-4 px-3.5 py-1.5 backdrop-blur-md rounded-sm border shadow-sm ${getStatusBadgeStyle(property.type)}`}>
              <span className="text-[10px] font-bold uppercase tracking-widest font-sans">
                {property.type.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {property.gallery && property.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {property.gallery.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`relative w-28 h-20 flex-shrink-0 border-2 overflow-hidden transition-all ${
                    currentImage === imgUrl ? 'border-gold-500 dark:border-gold-400' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={imgUrl} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="112px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Two-Column Layout matching exact Detail Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Property Overview & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-600 dark:text-gold-400 block mb-2 font-sans">
                Exclusive Listing
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-current">
                {property.title}
              </h2>
              <p className="text-xs opacity-70 font-sans mb-4 text-current">
                Location: {property.location}
              </p>
              <div className="font-serif text-3xl font-bold text-current">
                {property.priceDisplay}
              </div>
            </div>

            {/* Specs Bar */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-black/10 dark:border-white/10 text-xs font-sans text-current">
              <div>
                <span className="text-[10px] uppercase tracking-wider opacity-60 block">Configuration</span>
                <span className="font-serif text-xl font-bold">{property.bhk > 0 ? `${property.bhk} BHK` : 'Plot'}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider opacity-60 block">Bathrooms</span>
                <span className="font-serif text-xl font-bold">4.5 Baths</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider opacity-60 block">Area</span>
                <span className="font-serif text-xl font-bold">{property.sqft.toLocaleString()} Sq.Ft.</span>
              </div>
            </div>

            {/* Narrative */}
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-current">
                Architectural Precision
              </h3>
              <div className="space-y-4 text-xs sm:text-sm opacity-80 leading-relaxed font-sans text-current">
                <p>{property.description}</p>
                <p>{property.architecturalDetails || 'The layout flows seamlessly, devoid of unnecessary ornamentation, allowing the architecture itself to be the focal point. It is a sanctuary of permanence, offering world-class sophistication.'}</p>
              </div>
            </div>

            {/* Amenities Grid */}
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6 text-current">
                Amenities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-sans text-current">
                {property.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-sm">
                    <span className="text-gold-600 dark:text-gold-400">
                      {amenityIcons[item] || <Square className="w-4 h-4" />}
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquire Sidebar */}
          <div className="lg:col-span-5">
            <div className="border border-black/10 dark:border-white/15 p-8 bg-neutral-50 dark:bg-[#191c1f] rounded-sm transition-colors">
              <h3 className="font-serif text-2xl font-bold mb-2 text-current">Inquire</h3>
              <p className="text-xs opacity-75 font-sans mb-6 text-current">
                Register your interest to receive comprehensive details and arrange a private viewing.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 text-emerald-900 border border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-500/40 dark:text-emerald-300 text-center text-xs">
                  ✓ Your inquiry has been received discreetly. Our representative will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-2.5 px-0 text-current placeholder-neutral-400 focus:ring-0 focus:border-black dark:focus:border-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-2.5 px-0 text-current placeholder-neutral-400 focus:ring-0 focus:border-black dark:focus:border-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-2.5 px-0 text-current placeholder-neutral-400 focus:ring-0 focus:border-black dark:focus:border-white"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message (Optional)"
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-2.5 px-0 text-current placeholder-neutral-400 focus:ring-0 focus:border-black dark:focus:border-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 mt-6 shadow-sm"
                  >
                    <span>REQUEST DETAILS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
