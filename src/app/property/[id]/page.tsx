'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingSocialsWidget } from '@/components/common/FloatingSocialsWidget';
import { PROPERTIES_COLLECTION } from '@/lib/propertiesData';
import { PropertyStatus } from '@/lib/types';
import {
  ArrowLeft,
  MapPin,
  Shield,
  Car,
  Wine,
  Waves,
  Dumbbell,
  Trees,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params?.id as string;

  const property = PROPERTIES_COLLECTION.find((p) => p.id === propertyId) || PROPERTIES_COLLECTION[0];
  const galleryImages = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // VIP Viewing Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNextPhoto = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevPhoto = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
          preferredDate,
          message,
        }),
      });
    } catch {
      // ignore
    }
    setSubmitted(true);
  };

  // Status Badge Colors: Solid Green, Solid Teal, Dusty Lavender, Solid Red
  const getStatusBadgeStyle = (status: PropertyStatus) => {
    switch (status) {
      case 'For Sale':
        return 'bg-[#16a34a] text-white'; // Solid Green
      case 'For Rent':
        return 'bg-[#08979d] text-white'; // Solid Teal Blue
      case 'For Lease':
        return 'bg-[#97749d] text-white'; // Dusty Lavender
      case 'Sold Out':
        return 'bg-[#dc2626] text-white'; // Solid Red
      default:
        return 'bg-black text-white';
    }
  };

  const amenityIcons: Record<string, React.ReactNode> = {
    'Infinity Pool': <Waves className="w-5 h-5 text-[#a2650c]" />,
    'Private Gym': <Dumbbell className="w-5 h-5 text-[#a2650c]" />,
    'Wine Cellar': <Wine className="w-5 h-5 text-[#a2650c]" />,
    '4-Car Garage': <Car className="w-5 h-5 text-[#a2650c]" />,
    '2-Car Garage': <Car className="w-5 h-5 text-[#a2650c]" />,
    'Smart Security': <Shield className="w-5 h-5 text-[#a2650c]" />,
    'Private Garden': <Trees className="w-5 h-5 text-[#a2650c]" />,
    'Rooftop Yoga Deck': <Waves className="w-5 h-5 text-[#a2650c]" />,
  };

  const relatedProperties = PROPERTIES_COLLECTION.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#121212] text-[#1b1c1c] dark:text-[#eff1f5] transition-colors duration-300">
      <Navbar onOpenContact={() => {}} />
      <FloatingSocialsWidget />

      <main className="flex-grow pt-28 pb-20 px-6 md:px-16 max-w-[1280px] mx-auto w-full">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-8 text-xs font-sans">
          <Link
            href="/#portfolio-section"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-current hover:text-[#a2650c] dark:hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Mysore Listings</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 opacity-60">
            <span>Home</span>
            <span>/</span>
            <span>MYSORE</span>
            <span>/</span>
            <span className="font-semibold opacity-100">{property.title}</span>
          </div>
        </div>

        {/* Top Header: Title, Location & Valuation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8 pb-6 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-md ${getStatusBadgeStyle(property.type)}`}>
                {property.type.toUpperCase()}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#a2650c] dark:text-amber-400 font-bold">
                Exclusive Mysore Representation
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 text-current">
              {property.title}
            </h1>
            <p className="flex items-center gap-1.5 text-xs sm:text-sm opacity-75 font-sans">
              <MapPin className="w-4 h-4 text-[#a2650c] dark:text-amber-400" />
              <span>{property.location}</span>
            </p>
          </div>

          <div className="flex flex-col lg:items-end gap-1">
            <span className="text-xs uppercase tracking-wider opacity-60 font-sans">Official Asking Valuation</span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#a2650c] dark:text-amber-400">
              {property.priceDisplay}
            </div>
          </div>
        </div>

        {/* Cinematic Photo Gallery Showcase with Ambient Zoom & Manual Arrows */}
        <div className="mb-12">
          <div className="relative w-full aspect-[16/9] max-h-[640px] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl mb-4 bg-neutral-100 dark:bg-neutral-900 group">
            
            {/* Active image with ambient breathing zoom */}
            <div className="relative w-full h-full animate-card-ambient">
              <Image
                src={galleryImages[currentImageIndex]}
                alt={`${property.title} view ${currentImageIndex + 1}`}
                fill
                priority
                className="object-cover transition-all duration-700 ease-out"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Left Carousel Arrow */}
            {galleryImages.length > 1 && (
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#a2650c] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Carousel Arrow */}
            {galleryImages.length > 1 && (
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#a2650c] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Photo Counter Badge */}
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-sans font-bold flex items-center gap-1.5 shadow-md">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Photo {currentImageIndex + 1} of {galleryImages.length}</span>
            </div>
          </div>

          {/* Interactive Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`relative w-32 sm:w-44 h-24 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    currentImageIndex === i
                      ? 'border-[#a2650c] dark:border-amber-400 scale-105 shadow-lg'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" sizes="176px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Specs & VIP Booking Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Key Specs, Philosophy, Amenities */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Specs Bar */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 p-6 bg-neutral-50 dark:bg-[#191c1f] rounded-xl border border-black/10 dark:border-white/10 text-xs font-sans">
              <div>
                <span className="opacity-60 block text-[10px] uppercase font-bold tracking-wider mb-1">Configuration</span>
                <span className="font-serif text-xl font-bold">{property.bhk > 0 ? `${property.bhk} BHK` : 'ESTATE PLOT'}</span>
              </div>
              <div>
                <span className="opacity-60 block text-[10px] uppercase font-bold tracking-wider mb-1">Bathrooms / Type</span>
                <span className="font-serif text-xl font-bold">{property.bhk > 0 ? '4.5 Baths' : 'Clear Title'}</span>
              </div>
              <div>
                <span className="opacity-60 block text-[10px] uppercase font-bold tracking-wider mb-1">Carpet / Land Area</span>
                <span className="font-serif text-xl font-bold">{property.sqft.toLocaleString()} Sq.Ft.</span>
              </div>
              <div>
                <span className="opacity-60 block text-[10px] uppercase font-bold tracking-wider mb-1">Authority Approval</span>
                <span className="font-serif text-xl font-bold">MUDA Approved</span>
              </div>
            </div>

            {/* Architectural & Locality Narrative */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-current">
                About this Residence &amp; Neighborhood
              </h2>
              <div className="space-y-4 text-sm opacity-85 leading-relaxed font-sans text-current">
                <p>{property.description}</p>
                <p>{property.architecturalDetails}</p>
              </div>
            </div>

            {/* Bespoke Amenities */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-current">
                Highlights &amp; Features
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-sans">
                {property.amenities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-[#191c1f] rounded-xl border border-black/10 dark:border-white/10 shadow-sm"
                  >
                    {amenityIcons[item] || <CheckCircle2 className="w-5 h-5 text-[#a2650c]" />}
                    <span className="font-bold text-current">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Private Viewing Booking Console */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-white dark:bg-[#191c1f] border border-black/10 dark:border-white/15 p-8 rounded-2xl shadow-2xl transition-colors">
              <h3 className="font-serif text-2xl font-bold mb-2 text-current">
                Arrange a Private Viewing in Mysore
              </h3>
              <p className="text-xs opacity-75 font-sans mb-6 text-current leading-relaxed">
                Connect directly with our Mysore property consultant for a confidential on-site tour and full document dossier.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-current">Viewing Scheduled</h4>
                  <p className="text-xs opacity-80">Our representative in Mysore will reach out within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <label className="block uppercase tracking-wider font-bold opacity-75 mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Venkatesh"
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-2.5 px-0 text-current placeholder-neutral-400 focus:ring-0 focus:border-[#a2650c] dark:focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider font-bold opacity-75 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-2.5 px-0 text-current placeholder-neutral-400 focus:ring-0 focus:border-[#a2650c] dark:focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block uppercase tracking-wider font-bold opacity-75 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98000 00000"
                        className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-2.5 px-0 text-current placeholder-neutral-400 focus:ring-0 focus:border-[#a2650c] dark:focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider font-bold opacity-75 mb-1">Preferred Visit Date</label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-2.5 px-0 text-current focus:ring-0 focus:border-[#a2650c] dark:focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider font-bold opacity-75 mb-1">Requirements &amp; Questions</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Timing preferences, paperwork inquiries..."
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-2.5 px-0 text-current placeholder-neutral-400 focus:ring-0 focus:border-[#a2650c] dark:focus:border-amber-400 resize-none"
                    />
                  </div>

                  {/* Button matching exact amber-gold tone #a2650c */}
                  <button
                    type="submit"
                    className="w-full bg-[#a2650c] hover:bg-[#8c5208] text-white py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all flex items-center justify-center gap-2 mt-6 shadow-xl"
                  >
                    <span>Request Private Tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Similar Residences in Mysore */}
        <div className="border-t border-black/10 dark:border-white/10 pt-16">
          <h3 className="font-serif text-3xl font-bold mb-8 text-current">
            More Properties in Mysore
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProperties.map((prop) => (
              <Link
                key={prop.id}
                href={`/property/${prop.id}`}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 shadow-md">
                  <div className="relative w-full h-full animate-card-ambient">
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-sm ${getStatusBadgeStyle(prop.type)}`}>
                    {prop.type.toUpperCase()}
                  </div>
                </div>

                <h4 className="font-serif text-xl font-bold text-current group-hover:text-[#a2650c] dark:group-hover:text-amber-400 transition-colors">
                  {prop.title}
                </h4>
                <p className="text-xs opacity-75 font-sans mb-2">{prop.location}</p>
                <div className="font-serif text-lg font-bold text-current">{prop.priceDisplay}</div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
