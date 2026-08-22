/**
 * L'ÉTOILE REAL ESTATE - Flagship Property Dataset
 * Ultra-Luxury Global Portfolio
 */

const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0, prefix: '$', suffix: '' },
  EUR: { symbol: '€', rate: 0.92, prefix: '€', suffix: '' },
  GBP: { symbol: '£', rate: 0.79, prefix: '£', suffix: '' },
  AED: { symbol: 'AED', rate: 3.67, prefix: 'AED ', suffix: '' },
  SGD: { symbol: 'S$', rate: 1.34, prefix: 'S$', suffix: '' },
  CHF: { symbol: 'CHF', rate: 0.88, prefix: 'CHF ', suffix: '' }
};

const PROPERTIES_DATA = [
  {
    id: 'prop-01',
    title: 'The Sky Sanctuary at Bel Air',
    tagline: 'Architectural Triumph Overlooking the Pacific Horizon',
    category: 'villas',
    categoryLabel: 'Signature Villa',
    location: 'Bel Air, Los Angeles, CA',
    city: 'Los Angeles',
    country: 'USA',
    priceUSD: 48500000,
    beds: 7,
    baths: 11,
    sqft: 18400,
    yearBuilt: 2025,
    architect: 'Studio Kaan & Partners',
    badge: 'Off-Market Exclusive',
    badgeType: 'gold',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85'
    ],
    features: [
      '140ft Cantilevered Glass Infinity Pool',
      'Subterranean 12-Car Gallery with Turntable',
      'Temperature-Controlled 2,000-Bottle Wine Vault',
      'Private Helipad Access & Security Bunker',
      'Full Biophilic Wellness Spa with Cryo Chamber'
    ],
    description: 'Poised majestically on a private promontory in upper Bel Air, The Sky Sanctuary is a masterwork of curved organic concrete, floor-to-ceiling motorized Swiss glass, and bespoke Italian travertine. Offers unobstructed 270-degree jetliner panoramas from Downtown Los Angeles to Catalina Island.',
    featured: true,
    viewCount: 1420
  },
  {
    id: 'prop-02',
    title: 'The Grand Élysée Penthouse',
    tagline: 'Duplex Crown Jewel with 360° Seine & Eiffel Vistas',
    category: 'penthouses',
    categoryLabel: 'Sky Penthouse',
    location: 'Avenue Montaigne, 8th Arr., Paris',
    city: 'Paris',
    country: 'France',
    priceUSD: 36000000,
    beds: 5,
    baths: 7,
    sqft: 9800,
    yearBuilt: 2024,
    architect: 'Maison Liaigre & Jean Nouvel',
    badge: 'Trophy Asset',
    badgeType: 'ruby',
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85'
    ],
    features: [
      'Private Keyed High-Speed Glass Elevator',
      '3,200 sq.ft Landscaped Rooftop Terrace by Jean Mus',
      'Hand-Carved Calacatta Viola Marble Fireplaces',
      'Custom Boffi Chef Kitchen with Gaggenau 400 Series',
      '24/7 Dedicated White-Glove Concierge & Valet'
    ],
    description: 'An iconic duplex penthouse nestled in the golden triangle of Paris. Soaring 6-meter ceilings frame breathtaking vistas of the Eiffel Tower, the Grand Palais, and the shimmering Seine. Crafted with bookmatched Italian marble and chevron French oak.',
    featured: true,
    viewCount: 2190
  },
  {
    id: 'prop-03',
    title: 'Villa Solaria Waterfront Horizon',
    tagline: 'Private Mediterranean Peninsula with Superyacht Moorings',
    category: 'waterfront',
    categoryLabel: 'Waterfront Sanctuary',
    location: 'Cap d\'Antibes, French Riviera',
    city: 'Cap d\'Antibes',
    country: 'France',
    priceUSD: 62000000,
    beds: 8,
    baths: 12,
    sqft: 21500,
    yearBuilt: 2024,
    architect: 'SAOTA Architectural Lab',
    badge: 'Private Peninsula',
    badgeType: 'gold',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85'
    ],
    features: [
      'Private Deepwater Pier Accommodating 60m Yacht',
      'Double Olympic Heated Sea-Facing Infinity Pools',
      'Centuries-Old Olive Groves & Japanese Zen Gardens',
      'Private Funicular to Secluded Cove & Beach Club',
      'Smart Creston 4K Whole-Home Ecosystem'
    ],
    description: 'Commanding an exclusive rocky outcrop in Cap d\'Antibes, Villa Solaria fuses minimalist brutalist architecture with warm Mediterranean stone and lush subtropical flora. Includes private marine access and autonomous security grid.',
    featured: true,
    viewCount: 3410
  },
  {
    id: 'prop-04',
    title: 'The Palm Royal Water Residence',
    tagline: 'Futuristic Island Villa on Palm Jumeirah Billionaire Row',
    category: 'villas',
    categoryLabel: 'Signature Villa',
    location: 'Palm Jumeirah Frond N, Dubai',
    city: 'Dubai',
    country: 'UAE',
    priceUSD: 54000000,
    beds: 6,
    baths: 9,
    sqft: 16200,
    yearBuilt: 2025,
    architect: 'Zaha Hadid Architects Legacy Studio',
    badge: 'Billionaire Row',
    badgeType: 'emerald',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85'
    ],
    features: [
      'Private White Sand Beach Frontage of 180 Feet',
      'Underwater Viewing Salon & Glass Pool Bottom',
      'Titanium Finished Exterior Louvers with Sun Tracking',
      'Private Cinema with Dolby Atmos Acoustic Engineering',
      'Separate Staff & Butler Quarters for 6'
    ],
    description: 'A sculptural masterpiece rising from the turquoise waters of the Arabian Gulf. Fluid aerodynamic lines, internal water courtyards, and hand-selected Greek Thassos marble create an oasis of uncompromised grandeur.',
    featured: false,
    viewCount: 1880
  },
  {
    id: 'prop-05',
    title: 'Château de Bellevue Renaissance',
    tagline: '18th-Century Historic Estate Modernized for Haute Living',
    category: 'chateaux',
    categoryLabel: 'Historic Château',
    location: 'Bordeaux Grand Cru Region, France',
    city: 'Bordeaux',
    country: 'France',
    priceUSD: 29500000,
    beds: 12,
    baths: 14,
    sqft: 28000,
    yearBuilt: 2023,
    architect: 'Jacques Garcia Historic Restoration',
    badge: 'Grand Cru Vineyard',
    badgeType: 'gold',
    heroImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85'
    ],
    features: [
      '45 Hectares of Certified Organic Grand Cru Vineyards',
      'Fully Operational Gravity-Fed Winery & Cooperage',
      'Equestrian Complex with 16 Stalls & Indoor Arena',
      'Helicopter Hangar & Private Air Strip',
      'Original Louis XV Gold-Leaf Moldings & Frescoes'
    ],
    description: 'A sublime historic estate dating back to 1742, painstakingly restored by master artisans and outfitted with 21st-century geothermal climate systems, biometric access, and a world-renowned boutique winery producing 60,000 bottles annually.',
    featured: false,
    viewCount: 950
  },
  {
    id: 'prop-06',
    title: 'The Aman-Inspired Wellness Compound',
    tagline: 'Biophilic Zen Oasis in the Alpine Valleys of St. Moritz',
    category: 'spas',
    categoryLabel: 'Haute Spa & Wellness',
    location: 'Engadin Valley, St. Moritz, Switzerland',
    city: 'St. Moritz',
    country: 'Switzerland',
    priceUSD: 42000000,
    beds: 6,
    baths: 8,
    sqft: 14500,
    yearBuilt: 2024,
    architect: 'Peter Zumthor Design Collaborators',
    badge: 'Alpine Sanctuary',
    badgeType: 'emerald',
    heroImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85'
    ],
    features: [
      'Direct Ski-In / Ski-Out Access to Corviglia Slopes',
      'Thermal Mineral Spring Pool with Heated Slate Deck',
      'Nordic Sauna, Hammam, and Himalayan Salt Room',
      'Triple-Glazed Panoramic Thermal Glazing',
      'Swiss Pine Timber & Hand-Hewn Valser Quartzite'
    ],
    description: 'Designed as a timeless refuge of stillness and rejuvenation, this alpine compound blends indigenous Swiss stone with minimalist Japanese timber detailing. Heated indoor-outdoor thermal baths overlook snowcapped peaks.',
    featured: false,
    viewCount: 1640
  },
  {
    id: 'prop-07',
    title: 'The Glass Monolith Mayfair',
    tagline: 'Ultra-Contemporary Triplex Townhouse with Courtyard Atrium',
    category: 'penthouses',
    categoryLabel: 'Sky Penthouse',
    location: 'Grosvenor Square, Mayfair, London',
    city: 'London',
    country: 'UK',
    priceUSD: 38500000,
    beds: 5,
    baths: 6,
    sqft: 8900,
    yearBuilt: 2025,
    architect: 'Foster + Partners',
    badge: 'Historic Mayfair',
    badgeType: 'ruby',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85'
    ],
    features: [
      '3-Story Internal Light Atrium with Living Green Wall',
      'Private Automobile Lift to Grosvenor Underground Vault',
      'Subterranean 20-Meter Swimming Pool and Screening Room',
      'Automated Discreet Security & Reinforced Safe Suite',
      'Leasehold Extension to 999 Years with Share of Freehold'
    ],
    description: 'Behind a discreet Georgian Portland stone facade lies a dramatic, ultra-modern architectural masterpiece. An internal glass courtyard channels cascading natural sunlight through all three levels.',
    featured: false,
    viewCount: 2470
  },
  {
    id: 'prop-08',
    title: 'Boutique Haute Commercial Atelier',
    tagline: 'Flagship Luxury Gallery & Headquarters in Milan Design District',
    category: 'commercial',
    categoryLabel: 'Bespoke Commercial',
    location: 'Via Montenapoleone, Milan, Italy',
    city: 'Milan',
    country: 'Italy',
    priceUSD: 24000000,
    beds: 0,
    baths: 4,
    sqft: 7500,
    yearBuilt: 2023,
    architect: 'Piero Lissoni Associati',
    badge: 'Prime Flagship',
    badgeType: 'gold',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85'
    ],
    features: [
      'Double-Height Street-Level Display Facade with Curved Glass',
      'Private VIP Rooftop Terrace for Haute Horlogerie & Fashion Salons',
      'Integrated Secure Vault & High-Density Art Storage',
      'LEED Platinum Certified Smart Building Automation',
      'Unrivalled Footfall on Europe\'s Most Prestigious Fashion Avenue'
    ],
    description: 'An exceptional commercial trophy asset situated in the heart of Milan\'s Quadrilatero della Moda. Ideal for luxury fashion flagships, private family offices, or high-tier contemporary art foundations.',
    featured: false,
    viewCount: 1110
  }
];

const CATEGORIES_DATA = [
  {
    id: 'penthouses',
    title: 'Sky Penthouses',
    subtitle: 'Panoramic Crowns & Duplexes',
    count: 14,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=85',
    badge: 'Top Tier'
  },
  {
    id: 'villas',
    title: 'Signature Mansions',
    subtitle: 'Gated Compounds & Estates',
    count: 28,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=85',
    badge: 'Most Popular'
  },
  {
    id: 'waterfront',
    title: 'Coastal Sanctuaries',
    subtitle: 'Private Islands & Seafronts',
    count: 19,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=85',
    badge: 'Prime Shore'
  },
  {
    id: 'chateaux',
    title: 'Historic Châteaux',
    subtitle: 'Vineyards & Grand Manors',
    count: 8,
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=85',
    badge: 'Heritage'
  },
  {
    id: 'spas',
    title: 'Wellness & Spas',
    subtitle: 'Alpine Lodges & Zen Havens',
    count: 11,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=85',
    badge: 'Biophilic'
  },
  {
    id: 'commercial',
    title: 'Haute Commercial',
    subtitle: 'Galleries, Ateliers & Hubs',
    count: 15,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85',
    badge: 'Flagship'
  }
];

const FLOORPLAN_HOTSPOTS = [
  {
    id: 'hotspot-living',
    x: 52,
    y: 54,
    name: 'Grand Salon & Double-Height Living',
    area: '1,450 sq.ft',
    specs: '6.4m Ceilings, Custom Travertine Fireplace, Motorized Glass Facade',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'hotspot-terrace',
    x: 84,
    y: 68,
    name: 'Curved Sunset Horizon Balcony & Pool',
    area: '1,820 sq.ft',
    specs: 'Direct Evening Light, Heated Glass Infinity Edge, Teak Decking',
    image: 'assets/images/hero-light.jpg'
  },
  {
    id: 'hotspot-master',
    x: 24,
    y: 36,
    name: 'Master Sanctuary & Dressing Salon',
    area: '1,100 sq.ft',
    specs: 'Dual En-Suite Calacatta Bathrooms, Private Sauna, Panic Vault',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'hotspot-dining',
    x: 64,
    y: 30,
    name: 'Gourmet Atelier & Wine Gallery',
    area: '780 sq.ft',
    specs: 'Boffi Island, Gaggenau 400 series, 800-bottle chilled wall',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=85'
  }
];

window.PROPERTIES_DATA = PROPERTIES_DATA;
window.CATEGORIES_DATA = CATEGORIES_DATA;
window.FLOORPLAN_HOTSPOTS = FLOORPLAN_HOTSPOTS;
window.CURRENCY_RATES = CURRENCY_RATES;
