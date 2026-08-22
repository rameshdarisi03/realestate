'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingSocialsWidget } from '@/components/common/FloatingSocialsWidget';
import { HeroSection } from '@/components/hero/HeroSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { SubmitPropertyModal } from '@/components/modals/SubmitPropertyModal';
import { PROPERTIES_COLLECTION } from '@/lib/propertiesData';
import { Property } from '@/lib/types';

export default function Home() {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [propertiesList, setPropertiesList] = useState<Property[]>(PROPERTIES_COLLECTION);

  const handleHeroSearch = (criteria: { location: string; type: string; priceRange: string }) => {
    let filtered = PROPERTIES_COLLECTION.filter((p) => {
      const matchLoc =
        !criteria.location ||
        p.location.toLowerCase().includes(criteria.location.toLowerCase()) ||
        p.title.toLowerCase().includes(criteria.location.toLowerCase()) ||
        p.city.toLowerCase().includes(criteria.location.toLowerCase());

      const matchType = !criteria.type || p.category === criteria.type;

      return matchLoc && matchType;
    });

    setPropertiesList(filtered.length > 0 ? filtered : PROPERTIES_COLLECTION);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#121212] text-[#1b1c1c] dark:text-[#eff1f5] transition-colors duration-300 relative">
      {/* Top Glass Navbar */}
      <Navbar onOpenContact={() => setIsSubmitModalOpen(true)} />

      {/* Floating Collapsible Socials & Quick Actions Bar */}
      <FloatingSocialsWidget />

      {/* Hero Section Localized to Mysore */}
      <HeroSection onSearch={handleHeroSearch} />

      {/* Curated Listings Grid with Multi-Page Pagination, Mysore Properties & Direct Full-Page Routing */}
      <PortfolioSection properties={propertiesList} />

      {/* 12 Mysore Customer Reviews Auto-Scrolling Carousel (3s interval, pause on hover) */}
      <TestimonialsSection />

      {/* Visionary Leadership Section */}
      <LeadershipSection />

      {/* Footer */}
      <Footer />

      {/* Submit Property Representation Modal */}
      <SubmitPropertyModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </main>
  );
}
