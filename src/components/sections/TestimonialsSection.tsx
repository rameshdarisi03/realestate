'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface MysoreReview {
  id: string;
  quote: string;
  author: string;
  role: string;
  locationTag: string;
  transactionType: string;
  rating: number;
  avatar: string;
  signature: string;
}

const MYSORE_REVIEWS: MysoreReview[] = [
  {
    id: '1',
    quote: 'We spent over a year looking for a genuine heritage bungalow in VV Mohalla. BRP Properties helped us navigate clear titles and finalized the purchase in just 3 weeks. Truly exceptional service.',
    author: 'Dr. K. S. Venkatesh & Family',
    role: 'Senior Consultant Cardiologist',
    locationTag: 'VV Mohalla, Mysore',
    transactionType: 'Bought Heritage Bungalow',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    signature: 'Dr. Venkatesh',
  },
  {
    id: '2',
    quote: 'As an international Ashtanga yoga teacher living in Gokulam, finding a serene villa with a private meditation deck was my dream. BRP made renting so smooth and professional.',
    author: 'Elena Rostova',
    role: 'Yoga Practitioner & Author',
    locationTag: 'Gokulam 3rd Stage, Mysore',
    transactionType: 'Rented Palm Grove Villa',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    signature: 'Elena R.',
  },
  {
    id: '3',
    quote: 'Acquiring a large 12,000 sq.ft residential plot in Yadavagiri required strict due diligence. BRP’s valuation accuracy and paperwork handling gave us 100% peace of mind.',
    author: 'M. S. Nagaraj',
    role: 'Industrialist & Exporter',
    locationTag: 'Yadavagiri, Mysore',
    transactionType: 'Bought Estate Plot',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    signature: 'M. S. Nagaraj',
  },
  {
    id: '4',
    quote: 'We secured a 5-year non-escalating lease on a modern villa in Saraswathipuram. The legal clarity and tenant onboarding were world-class. Highly recommended!',
    author: 'Prof. Ananya Somesh',
    role: 'Dean of Humanities',
    locationTag: 'Saraswathipuram, Mysore',
    transactionType: 'Leased 4 BHK Villa',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    signature: 'Ananya Somesh',
  },
  {
    id: '5',
    quote: 'Selling our family’s ancestral property near Lalitha Mahal Road was an emotional journey. BRP treated our heritage with the utmost respect and connected us with an ideal buyer.',
    author: 'Raghavendra Urs',
    role: 'Heritage Custodian',
    locationTag: 'Lalitha Mahal Road, Mysore',
    transactionType: 'Sold Heritage Parcel',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    signature: 'R. Urs',
  },
  {
    id: '6',
    quote: 'Relocating our tech leadership from Bengaluru to Mysore was seamless. The luxury apartment in Jayalakshmipuram offered the perfect balance of green tranquility and high-speed fiber.',
    author: 'Vikram & Shweta Nambiar',
    role: 'Fintech Founder & VP',
    locationTag: 'Jayalakshmipuram, Mysore',
    transactionType: 'Rented Royale Residence',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    signature: 'Vikram Nambiar',
  },
  {
    id: '7',
    quote: 'Purchasing an estate plot overlooking the backwaters on KRS Road was the best investment decision for our retirement. The BRP advisory team is unmatched in Mysore.',
    author: 'Col. Rajeshwar Rao (Retd.)',
    role: 'Defence Veteran & Investor',
    locationTag: 'KRS Road, Mysore',
    transactionType: 'Bought Lakeview Plot',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    signature: 'Rajeshwar Rao',
  },
  {
    id: '8',
    quote: 'Finding a 4 BHK home in VV Mohalla with dedicated servant quarters and a lush mango grove was made possible through BRP’s private off-market network.',
    author: 'Meera & Sanjay Hegde',
    role: 'Coffee Estate Owners',
    locationTag: 'VV Mohalla Central, Mysore',
    transactionType: 'Bought 5 BHK Residence',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    signature: 'Meera Hegde',
  },
  {
    id: '9',
    quote: 'We leased a tranquil yoga sanctuary in Gokulam 2nd Stage. Zero brokerage surprises, complete transparency, and swift landlord coordination. Superb experience!',
    author: 'Marcus & Chloe Dubois',
    role: 'Wellness Retreat Organizers',
    locationTag: 'Gokulam 2nd Stage, Mysore',
    transactionType: 'Leased Yoga Shala Villa',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    signature: 'Marcus Dubois',
  },
  {
    id: '10',
    quote: 'The commercial plot on Hebbal Ring Road gave our hospital clinic prime visibility. BRP took care of MUDA clearance, layout surveys, and paperwork seamlessly.',
    author: 'Dr. Nandini Deshpande',
    role: 'Managing Trustee, Healthcare',
    locationTag: 'Hebbal Ring Road, Mysore',
    transactionType: 'Acquired Commercial Land',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    signature: 'Dr. Nandini',
  },
  {
    id: '11',
    quote: 'Their deep knowledge of Mysore’s residential micro-markets—from Vijayanagar to Chamundi Foothills—is unmatched. We found our forever family home in Saraswathipuram.',
    author: 'Suresh & Preeti Patil',
    role: 'Automotive Components MD',
    locationTag: 'Saraswathipuram, Mysore',
    transactionType: 'Bought Heritage Court Villa',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    signature: 'Suresh Patil',
  },
  {
    id: '12',
    quote: 'Finding a spacious, modern duplex in Bogadi for our elderly parents and kids was made so straightforward. Transparent pricing and honest advice throughout.',
    author: 'Kiran & Deepa Kumar',
    role: 'Architect & Urban Planner',
    locationTag: 'Bogadi 2nd Stage, Mysore',
    transactionType: 'Rented 3 BHK Greenview Duplex',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    signature: 'Kiran Kumar',
  },
];

export const TestimonialsSection: React.FC = () => {
  // Mobile index (0 to 11, scrolls every 2 seconds single tile)
  const [mobileIndex, setMobileIndex] = useState(0);
  // Desktop index (0 to 3, scrolls every 3 seconds 3 tiles)
  const [desktopIndex, setDesktopIndex] = useState(0);
  
  const [isPaused, setIsPaused] = useState(false);
  const totalReviews = MYSORE_REVIEWS.length;
  const itemsPerDesktopPage = 3;
  const maxDesktopIndex = Math.ceil(totalReviews / itemsPerDesktopPage) - 1;

  // Next / Prev actions
  const nextMobile = () => setMobileIndex((prev) => (prev >= totalReviews - 1 ? 0 : prev + 1));
  const prevMobile = () => setMobileIndex((prev) => (prev <= 0 ? totalReviews - 1 : prev - 1));

  const nextDesktop = () => setDesktopIndex((prev) => (prev >= maxDesktopIndex ? 0 : prev + 1));
  const prevDesktop = () => setDesktopIndex((prev) => (prev <= 0 ? maxDesktopIndex : prev - 1));

  // Mobile Timer: 2 Seconds Auto-Scroll Single Tile Sliding from Left to Right
  useEffect(() => {
    if (isPaused) return;
    const mobileTimer = setInterval(() => {
      nextMobile();
    }, 2000);
    return () => clearInterval(mobileTimer);
  }, [isPaused, totalReviews]);

  // Desktop Timer: 3 Seconds Auto-Scroll
  useEffect(() => {
    if (isPaused) return;
    const desktopTimer = setInterval(() => {
      nextDesktop();
    }, 3000);
    return () => clearInterval(desktopTimer);
  }, [isPaused, maxDesktopIndex]);

  const visibleDesktopReviews = MYSORE_REVIEWS.slice(
    desktopIndex * itemsPerDesktopPage,
    desktopIndex * itemsPerDesktopPage + itemsPerDesktopPage
  );

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 md:px-16 w-full max-w-[1280px] mx-auto bg-white dark:bg-[#121212] transition-colors relative overflow-hidden">
      
      {/* Editorial Header in Simple & Impactful English (Title Case) */}
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="font-serif italic text-xl sm:text-2xl text-[#a16207] dark:text-[#d97706] mb-2">
          Stories of Sanctuary
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-current">
          Loved by Families &amp; Homeowners in Mysore
        </h2>
        <p className="text-xs sm:text-sm opacity-75 font-sans leading-relaxed text-current px-2">
          Real experiences from doctors, business owners, expats, and families who found their dream property with BRP Properties in Mysore.
        </p>
      </div>

      {/* 1. MOBILE VIEW (< md): Single Tile Sliding Left-to-Right Every 2 Seconds */}
      <div
        className="block md:hidden relative"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows for Mobile */}
        <button
          onClick={prevMobile}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#a16207] text-white flex items-center justify-center shadow-lg active:scale-95"
          aria-label="Previous Review"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextMobile}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#a16207] text-white flex items-center justify-center shadow-lg active:scale-95"
          aria-label="Next Review"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Sliding Window Container */}
        <div className="overflow-hidden px-5 py-2">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {MYSORE_REVIEWS.map((item) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-[#ffffff] dark:bg-[#191c1f] border border-black/10 dark:border-white/10 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-none flex flex-col justify-between min-h-[380px]">
                  
                  {/* Top Quote Bubble & Stars */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#fef3c7] dark:bg-[#a16207]/20 flex items-center justify-center text-[#a16207] dark:text-[#f59e0b] shadow-inner">
                      <Quote className="w-4 h-4 fill-current" />
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs sm:text-sm leading-relaxed opacity-85 font-sans mb-4 text-current italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Client Signature */}
                  <div className="border-t border-black/10 dark:border-white/10 pt-3 mb-4">
                    <p className="font-serif italic text-xl text-[#a16207] dark:text-[#f59e0b]">
                      {item.signature}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-[#a16207] dark:text-[#f59e0b] font-bold font-sans mt-0.5">
                      {item.transactionType}
                    </p>
                  </div>

                  {/* Author Avatar & Role */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-300 flex-shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xs text-current">
                        {item.author}
                      </h4>
                      <p className="text-[10px] opacity-70 font-sans">
                        {item.role} &bull; <span className="font-medium text-[#a16207] dark:text-[#f59e0b]">{item.locationTag}</span>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-5">
          {MYSORE_REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                mobileIndex === i
                  ? 'w-6 bg-[#a16207] dark:bg-[#f59e0b]'
                  : 'w-1.5 bg-neutral-300 dark:bg-neutral-700'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. DESKTOP VIEW (>= md): 3-Card Grid Sliding every 3 seconds */}
      <div
        className="hidden md:block relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={prevDesktop}
          className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#a16207] text-white hover:bg-[#854d0e] flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Previous Reviews"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextDesktop}
          className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#a16207] text-white hover:bg-[#854d0e] flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Next Reviews"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 3-Card Grid for Current Desktop Slide */}
        <div className="grid grid-cols-3 gap-8 transition-all duration-500">
          {visibleDesktopReviews.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#ffffff] dark:bg-[#191c1f] border border-black/10 dark:border-white/10 p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] dark:shadow-none flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#a16207]/40 min-h-[380px]"
            >
              {/* Top Quote Bubble */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-[#fef3c7] dark:bg-[#a16207]/20 flex items-center justify-center text-[#a16207] dark:text-[#f59e0b] shadow-inner">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Review Quote */}
              <p className="text-sm leading-relaxed opacity-85 font-sans mb-6 text-current italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Client Signature */}
              <div className="border-t border-black/10 dark:border-white/10 pt-3 mb-5">
                <p className="font-serif italic text-2xl text-[#a16207] dark:text-[#f59e0b]">
                  {item.signature}
                </p>
                <p className="text-xs uppercase tracking-wider text-[#a16207] dark:text-[#f59e0b] font-bold font-sans mt-0.5">
                  {item.transactionType}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-current">
                    {item.author}
                  </h4>
                  <p className="text-xs opacity-70 font-sans">
                    {item.role} &bull; <span className="font-medium text-[#a16207] dark:text-[#f59e0b]">{item.locationTag}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {[...Array(maxDesktopIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setDesktopIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                desktopIndex === i
                  ? 'w-8 bg-[#a16207] dark:bg-[#f59e0b]'
                  : 'w-2 bg-neutral-300 dark:bg-neutral-700'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};
