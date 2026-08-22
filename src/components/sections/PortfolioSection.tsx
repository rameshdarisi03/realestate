'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Property, PropertyStatus } from '@/lib/types';
import { SlidersHorizontal, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioSectionProps {
  properties: Property[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  properties,
}) => {
  const [locationQuery, setLocationQuery] = useState('All Mysore Locations');
  const [propertyType, setPropertyType] = useState('All Types');
  const [listingType, setListingType] = useState('All Listings');
  const [sortBy, setSortBy] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // Location Filter
      let matchLoc = true;
      if (locationQuery !== 'All Mysore Locations' && locationQuery !== '') {
        matchLoc =
          p.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
          p.title.toLowerCase().includes(locationQuery.toLowerCase());
      }

      // Property Type Filter
      let matchType = true;
      if (propertyType === 'Luxury Apartment') matchType = p.category === 'apartment';
      else if (propertyType === 'Villa') matchType = p.category === 'villa';
      else if (propertyType === 'Estate/Plot') matchType = p.category === 'estate_plot';

      // Listing Type Filter (Buy, Rent, Lease, Sold Out)
      let matchListing = true;
      if (listingType === 'Buy (For Sale)' || listingType === 'Buy') matchListing = p.type === 'For Sale';
      else if (listingType === 'Rent') matchListing = p.type === 'For Rent';
      else if (listingType === 'Lease') matchListing = p.type === 'For Lease';
      else if (listingType === 'Sold Out') matchListing = p.type === 'Sold Out';

      return matchLoc && matchType && matchListing;
    });
  }, [properties, locationQuery, propertyType, listingType]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage) || 1;
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Status Tag Colors: Solid Green, Solid Teal, Dusty Lavender, Solid Red
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

  const handleApplyFilters = () => {
    setCurrentPage(1);
  };

  return (
    <section id="portfolio-section" className="py-16 md:py-24 px-6 md:px-16 w-full max-w-[1280px] mx-auto bg-white dark:bg-[#121212] transition-colors">
      
      {/* Section Title & Subtitle */}
      <div className="mb-10 text-left">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 text-current">
          Curated Listings in Mysore
        </h1>
        <p className="text-base sm:text-lg opacity-75 font-sans max-w-3xl leading-relaxed text-current">
          Explore premier bungalows, modern villas, luxury apartments, and expansive estate plots across VV Mohalla, Gokulam, Yadavagiri, and Chamundi Foothills.
        </p>
      </div>

      {/* Filter Box with Location, Property Type (Estate/Plot), and Listing Type (Buy, Rent, Lease, Sold Out) */}
      <div className="bg-white dark:bg-[#191c1f] border border-black/10 dark:border-white/10 p-6 md:p-8 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.04)] dark:shadow-none mb-10 transition-colors">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          
          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-widest opacity-60 font-sans text-current">
              LOCATION
            </label>
            <select
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              className="bg-transparent border-0 border-b border-black/30 dark:border-white/30 text-sm font-sans py-2 px-0 text-current focus:ring-0 focus:border-[#a2650c] dark:focus:border-amber-400 cursor-pointer"
            >
              <option value="All Mysore Locations" className="bg-white text-black dark:bg-neutral-900 dark:text-white">All Mysore Locations</option>
              <option value="VV Mohalla" className="bg-white text-black dark:bg-neutral-900 dark:text-white">VV Mohalla (Vani Vilas)</option>
              <option value="Gokulam" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Gokulam 2nd &amp; 3rd Stage</option>
              <option value="Yadavagiri" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Yadavagiri</option>
              <option value="Jayalakshmipuram" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Jayalakshmipuram</option>
              <option value="Saraswathipuram" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Saraswathipuram</option>
              <option value="Chamundi Hill Road" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Chamundi Hill Road</option>
            </select>
          </div>

          {/* Property Type (Apartment, Villa, Estate/Plot) */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-widest opacity-60 font-sans text-current">
              PROPERTY TYPE
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="bg-transparent border-0 border-b border-black/30 dark:border-white/30 text-sm font-sans py-2 px-0 text-current focus:ring-0 focus:border-[#a2650c] dark:focus:border-amber-400 cursor-pointer"
            >
              <option value="All Types" className="bg-white text-black dark:bg-neutral-900 dark:text-white">All Types</option>
              <option value="Luxury Apartment" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Luxury Apartment</option>
              <option value="Villa" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Villa</option>
              <option value="Estate/Plot" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Estate / Plot</option>
            </select>
          </div>

          {/* Listing Type (Buy, Rent, Lease, Sold Out) */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-widest opacity-60 font-sans text-current">
              LISTING TYPE
            </label>
            <select
              value={listingType}
              onChange={(e) => setListingType(e.target.value)}
              className="bg-transparent border-0 border-b border-black/30 dark:border-white/30 text-sm font-sans py-2 px-0 text-current focus:ring-0 focus:border-[#a2650c] dark:focus:border-amber-400 cursor-pointer"
            >
              <option value="All Listings" className="bg-white text-black dark:bg-neutral-900 dark:text-white">All Listings</option>
              <option value="Buy (For Sale)" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Buy (For Sale)</option>
              <option value="Rent" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Rent (Monthly)</option>
              <option value="Lease" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Lease (Long-Term)</option>
              <option value="Sold Out" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Sold Out (Archive)</option>
            </select>
          </div>

          {/* Apply Filters Button */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleApplyFilters}
              className="w-full bg-[#a2650c] hover:bg-[#8c5208] text-white py-3.5 px-6 rounded-md transition-colors font-sans text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>APPLY FILTERS</span>
            </button>
          </div>

        </div>
      </div>

      {/* Results Metadata Bar */}
      <div className="flex justify-between items-center mb-10 text-xs font-sans">
        <span className="opacity-75 font-medium text-current">
          Showing {paginatedProperties.length} of {filteredProperties.length} properties in Mysore
        </span>
        <div className="flex items-center gap-2">
          <span className="opacity-60 uppercase font-bold tracking-wider text-current">SORT BY</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-1 px-1 text-current font-medium focus:ring-0 cursor-pointer"
          >
            <option value="Featured" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Featured</option>
            <option value="Price: High to Low" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Price: High to Low</option>
            <option value="Newest" className="bg-white text-black dark:bg-neutral-900 dark:text-white">Newest</option>
          </select>
        </div>
      </div>

      {/* 3-Column Property Cards Grid with Direct Full-Page Links & Ambient Image Zoom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {paginatedProperties.map((prop) => (
          <Link
            key={prop.id}
            href={`/property/${prop.id}`}
            className="flex flex-col group cursor-pointer"
          >
            {/* Image Frame with Ambient Zoom & Status Tag */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 shadow-md">
              
              {/* Inner ambient animated zoom container */}
              <div className="relative w-full h-full animate-card-ambient">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Status Badge */}
              <div className={`absolute top-4 left-4 px-3.5 py-1.5 backdrop-blur-md rounded-sm font-sans shadow-md ${getStatusBadgeStyle(prop.type)}`}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  {prop.type.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Property Details */}
            <div className="flex flex-col gap-2">
              <h2 className="font-serif text-2xl font-bold text-current truncate group-hover:text-[#a2650c] dark:group-hover:text-amber-400 transition-colors">
                {prop.title}
              </h2>
              <p className="text-xs opacity-75 font-sans text-current">
                {prop.location}
              </p>

              {/* Specs Row with BHK & SqFt */}
              <div className="flex items-center gap-3 my-2 border-y border-black/10 dark:border-white/10 py-2.5 text-xs font-sans opacity-90 text-current">
                <span className="font-bold uppercase">{prop.bhk > 0 ? `${prop.bhk} BHK` : 'PLOT'}</span>
                <span className="opacity-30">|</span>
                <span className="font-bold uppercase">{prop.bhk > 0 ? '4.5 BATHS' : 'CLEAR TITLE'}</span>
                <span className="opacity-30">|</span>
                <span className="font-bold uppercase">{prop.sqft.toLocaleString()} SQ.FT.</span>
              </div>

              {/* Price & View Details Action */}
              <div className="flex justify-between items-end mt-2">
                <div className="flex flex-col">
                  <span className="text-[11px] opacity-60 uppercase tracking-wider font-sans text-current">Valuation</span>
                  <span className="font-serif text-2xl font-bold text-current">
                    {prop.priceDisplay}
                  </span>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#a2650c] dark:text-amber-400 group-hover:text-black dark:group-hover:text-white transition-colors flex items-center gap-1">
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Multi-Page Pagination (1, 2, 3) */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2.5 border border-black/20 dark:border-white/20 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-current disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 text-sm font-sans text-current">
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 font-bold rounded-md transition-all ${
                  currentPage === pageNum
                    ? 'bg-[#a2650c] text-white shadow-md'
                    : 'opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2.5 border border-black/20 dark:border-white/20 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-current disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next Page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
