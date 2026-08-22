'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
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

const MYSORE_REVIEWS: Testimonial[] = [
  {
    id: '1',
    quote: 'We spent over a year looking for a genuine heritage bungalow in VV Mohalla. BRP Properties helped us navigate clear titles and finalized the purchase in just 3 weeks. Truly exceptional service.',
    author: 'Dr. K. S. Venkatesh & Family',
    role: 'Senior Consultant Cardiologist',
    locationTag: 'VV Mohalla, Mysore',
    transactionType: 'Bought 5 BHK Heritage Bungalow',
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
    transactionType: 'Rented 4 BHK Garden Villa',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    signature: 'Elena R.',
  },
  {
    id: '3',
    quote: 'Acquiring a large 12,000 sq.ft residential plot in Yadavagiri required strict due diligence. BRP’s valuation accuracy and paperwork handling gave us 100% peace of mind.',
    author: 'M. S. Nagaraj',
    role: 'Managing Director, Silk & Spices Export',
    locationTag: 'Yadavagiri, Mysore',
    transactionType: 'Bought 12,000 Sq.Ft Estate Plot',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    signature: 'M.S. Nagaraj',
  },
  {
    id: '4',
    quote: 'Relocating our family from Bengaluru to Mysore was made effortless. We found a stunning luxury apartment in Jayalakshmipuram right next to our children’s school.',
    author: 'Ananya & Rohit Deshmukh',
    role: 'Tech Leaders, Software Exports',
    locationTag: 'Jayalakshmipuram, Mysore',
    transactionType: 'Rented 3 BHK Luxury Apartment',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    signature: 'Ananya D.',
  },
  {
    id: '5',
    quote: 'Secured a 5-year fixed lease on a beautiful traditional-modern courtyard home in Saraswathipuram. The landlord negotiations and legal lease agreement were completed flawlessly.',
    author: 'Prof. Ramachandra Bhat',
    role: 'Dean of Humanities, University of Mysore',
    locationTag: 'Saraswathipuram, Mysore',
    transactionType: 'Leased 4 BHK Courtyard Home',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    signature: 'R. Bhat',
  },
  {
    id: '6',
    quote: 'We bought a scenic land parcel facing Chamundi Hill for our family retirement home. The scenic view and mountain tranquility are priceless. BRP is the undisputed leader in Mysore.',
    author: 'Col. Pradeep & Meera Somanna',
    role: 'Retired Armed Forces Veteran',
    locationTag: 'Chamundi Hill Road, Mysore',
    transactionType: 'Bought 1-Acre Hill View Plot',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    signature: 'P. Somanna',
  },
  {
    id: '7',
    quote: 'Investing in a lake-view villa plot on KRS Road was one of our best financial decisions. The appreciation has been tremendous and the infrastructure is top notch.',
    author: 'Suresh Gowda',
    role: 'Coffee Planter & Agri Entrepreneur',
    locationTag: 'KRS Road, Mysore',
    transactionType: 'Bought Lakeview Villa Plot',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    signature: 'Suresh G.',
  },
  {
    id: '8',
    quote: 'As an executive managing operations in Hebbal Industrial area, I needed a quiet, prestigious home in Yadavagiri. BRP found me the perfect duplex with zero hassle.',
    author: 'Ashwin Chawla',
    role: 'VP Operations, Global Automotive',
    locationTag: 'Yadavagiri, Mysore',
    transactionType: 'Rented 4 BHK Executive Duplex',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    signature: 'Ashwin C.',
  },
  {
    id: '9',
    quote: 'Our yoga retreat community required a 5-year continuous lease in Gokulam with strict privacy. BRP delivered exactly what we envisioned within our budget.',
    author: 'Sophie & Marc Dubois',
    role: 'Founders, Mysore Holistic Retreats',
    locationTag: 'Gokulam 2nd Stage, Mysore',
    transactionType: 'Leased 5-Year Yoga Sanctuary',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    signature: 'Sophie Dubois',
  },
  {
    id: '10',
    quote: 'We wanted a 100% Vastu-compliant independent home near Mysore Palace cultural hub. Saraswathipuram Heritage Court was the perfect match for our family.',
    author: 'Justice H. N. Sastry (Retd.)',
    role: 'Former High Court Jurist',
    locationTag: 'Saraswathipuram, Mysore',
    transactionType: 'Bought 4 BHK Heritage Villa',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    signature: 'H.N. Sastry',
  },
  {
    id: '11',
    quote: 'Acquired a prime commercial ring road plot in Hebbal for our upcoming diagnostic center. Clear titles, single owner, and zero encumbrances.',
    author: 'Dr. Shalini Murthy',
    role: 'Managing Partner, HealthCare Labs',
    locationTag: 'Hebbal Ring Road, Mysore',
    transactionType: 'Bought Commercial Ring Road Plot',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    signature: 'Dr. Shalini',
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalReviews = MYSORE_REVIEWS.length;
  const itemsPerPage = 3;
  const maxIndex = Math.ceil(totalReviews / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-scroll every 3 seconds (pauses on hover)
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, maxIndex]);

  const visibleReviews = MYSORE_REVIEWS.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-24 px-6 md:px-16 w-full max-w-[1280px] mx-auto bg-white dark:bg-[#121212] transition-colors relative">
      
      {/* Editorial Header in Simple & Impactful English */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="font-serif italic text-xl sm:text-2xl text-[#a16207] dark:text-[#d97706] mb-2">
          Stories of Sanctuary
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-current">
          Loved by Families &amp; Homeowners in Mysore
        </h2>
        <p className="text-sm opacity-75 font-sans leading-relaxed text-current">
          Real experiences from doctors, business owners, expats, and families who found their dream property with BRP Properties in Mysore.
        </p>
      </div>

      {/* Carousel Container with Hover Pause & Stylized Arrows */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Left Navigation Arrow */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#a16207] text-white hover:bg-[#854d0e] flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Previous Reviews"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Navigation Arrow */}
        <button
          onClick={nextSlide}
          className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#a16207] text-white hover:bg-[#854d0e] flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Next Reviews"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 3-Card Grid for Current Slide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
          {visibleReviews.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#ffffff] dark:bg-[#191c1f] border border-black/10 dark:border-white/10 p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] dark:shadow-none flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#a16207]/40 min-h-[380px]"
            >
              
              {/* Top Floating Quote Bubble (Image 3) */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-[#fef3c7] dark:bg-[#a16207]/20 flex items-center justify-center text-[#a16207] dark:text-[#f59e0b] shadow-inner">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                
                {/* 5-Star Rating Bar */}
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

              {/* Client Signature in Script Font (Image 3) */}
              <div className="border-t border-black/10 dark:border-white/10 pt-3 mb-5">
                <p className="font-serif italic text-2xl text-[#a16207] dark:text-[#f59e0b]">
                  {item.signature}
                </p>
              </div>

              {/* Client Profile Avatar & Verified Tag (Image 4) */}
              <div className="flex items-center gap-4 pt-1">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#a16207]/40 flex-shrink-0 shadow-md">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>

                <div className="flex flex-col">
                  <h4 className="font-sans font-bold text-sm text-current">
                    {item.author}
                  </h4>
                  <p className="text-[11px] opacity-70 font-sans">
                    {item.role} &bull; <span className="text-[#a16207] dark:text-amber-400 font-medium">{item.locationTag}</span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold font-sans">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{item.transactionType}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#a16207] dark:bg-[#d97706]'
                  : 'w-2.5 bg-black/20 dark:bg-white/20 hover:bg-black/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};
