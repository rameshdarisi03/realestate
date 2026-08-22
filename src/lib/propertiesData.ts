import { Property } from './types';

export const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0, prefix: '$', suffix: '' },
  EUR: { symbol: '€', rate: 0.92, prefix: '€', suffix: '' },
  GBP: { symbol: '£', rate: 0.79, prefix: '£', suffix: '' },
  AED: { symbol: 'AED', rate: 3.67, prefix: 'AED ', suffix: '' },
  INR: { symbol: '₹', rate: 83.5, prefix: '₹', suffix: ' Cr' },
};

export const PROPERTIES_COLLECTION: Property[] = [
  // Page 1: Items 1 to 6
  {
    id: 'the-vani-vilas-heritage-bungalow',
    title: 'The Vani Vilas Heritage Bungalow',
    location: 'VV Mohalla (Vani Vilas Mohalla), Mysore',
    city: 'mysore',
    type: 'For Sale',
    category: 'villa',
    priceDisplay: '₹2.85 Cr',
    priceValueCr: 2.85,
    bhk: 5,
    sqft: 6500,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85', // Exterior
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85', // Interior Living
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85', // Master Suite
    ],
    description: 'A sprawling heritage bungalow in VV Mohalla, the most prestigious address in Mysore. Home to elite old-money families and prominent doctors, featuring wide tree-lined avenues and private landscaped courtyards.',
    architecturalDetails: 'Classic Mysore royal teakwood pillars with Italian marble flooring, high ceilings, and sprawling private gardens with mature mango trees.',
    amenities: ['Private Garden', 'Teakwood Pillars', '4-Car Garage', 'Servant Quarters', 'Solar Power Backup'],
  },
  {
    id: 'gokulam-palm-grove-villa',
    title: 'Gokulam Palm Grove Villa',
    location: 'Gokulam 3rd Stage, Mysore',
    city: 'mysore',
    type: 'For Sale',
    category: 'villa',
    priceDisplay: '₹1.95 Cr',
    priceValueCr: 1.95,
    bhk: 4,
    sqft: 4800,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85', // Modern Villa Facade
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', // High Ceiling Lounge
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85', // Private Terrace & Garden
    ],
    description: 'Located in world-famous Gokulam, a global cultural and yoga hub in Mysore. Walking distance to international cafes and premier Ashtanga yoga institutes, designed with modern open-concept elegance.',
    architecturalDetails: 'Floor-to-ceiling glass architecture with open-air atrium, rooftop yoga deck, and custom modular teak kitchen.',
    amenities: ['Rooftop Yoga Deck', 'Open Air Atrium', 'Rainwater Harvesting', 'Bespoke Teak Kitchen', 'Smart Security'],
  },
  {
    id: 'the-ridgecrest-estate-plot',
    title: 'The Ridgecrest Estate Plot',
    location: 'Yadavagiri, Mysore',
    city: 'mysore',
    type: 'For Sale',
    category: 'estate_plot',
    priceDisplay: '₹2.75 Cr',
    priceValueCr: 2.75,
    bhk: 0,
    sqft: 12000, // Massive residential plot
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85', // Grand Estate Entrance / Road
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85', // Expansive Green Plot View
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85', // Elevated Tree-Lined Perspective
    ],
    description: 'A highly exclusive, quiet, and elevated residential estate plot in north Mysore’s prestigious Yadavagiri. Preferred by industrial leaders and business owners seeking maximum privacy and expansive compound space.',
    architecturalDetails: 'MUDA approved, clear freehold title with 80-ft road frontage, mature mahogany trees on boundary, and immediate sanction for grand private villa construction.',
    amenities: ['MUDA Sanctioned', 'Clear Freehold Title', 'Gated Boundary Wall', '80-Ft Wide Road', 'Borewell & Water Connection'],
  },
  {
    id: 'jayalakshmi-royale-residence',
    title: 'Jayalakshmi Royale Residence',
    location: 'Jayalakshmipuram, Mysore',
    city: 'mysore',
    type: 'For Rent',
    category: 'apartment',
    priceDisplay: '₹65,000 / mo',
    priceValueCr: 0.65,
    bhk: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85', // Apartment Living
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85', // Dining & Balcony
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=85', // Master Bedroom
    ],
    description: 'A posh luxury residence in Jayalakshmipuram sitting right next to VV Mohalla. Highly sought after by affluent families for its clean, serene environment, top schools, and modern luxury amenities.',
    architecturalDetails: 'Double-height balconies overlooking lush green canopies, Italian marble flooring, and 100% generator power backup.',
    amenities: ['Keyed Elevator', 'Covered Car Park', 'Clubhouse & Gym', '24/7 Security', 'Italian Marble Flooring'],
  },
  {
    id: 'saraswathi-avenues-villa',
    title: 'Saraswathi Avenues Villa',
    location: 'Saraswathipuram, Mysore',
    city: 'mysore',
    type: 'For Lease',
    category: 'villa',
    priceDisplay: '₹38 Lakhs / 5 yrs',
    priceValueCr: 0.38,
    bhk: 4,
    sqft: 4200,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85', // Traditional-Modern Facade
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85', // Courtyard Hall
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85', // Study & Terrace
    ],
    description: 'A prestigious villa available on a 5-year long-term lease in Saraswathipuram, known as Mysore’s premier cultural hub. Surrounded by avenues housing judges, professors, and top medical professionals.',
    architecturalDetails: 'Thoughtfully planned central courtyard (Thotti Mane concept) blended with modern luxury fixtures, teak cabinetry, and home office library.',
    amenities: ['Thotti Mane Courtyard', 'Home Library', 'Covered Parking', 'Solar Water Heating', 'Long-term Secure Lease'],
  },
  {
    id: 'chamundi-foothills-palace-estate',
    title: 'Chamundi Foothills Palace Estate',
    location: 'Chamundi Hill Road, Mysore',
    city: 'mysore',
    type: 'Sold Out',
    category: 'estate_plot',
    priceDisplay: '₹2.90 Cr',
    priceValueCr: 2.90,
    bhk: 0,
    sqft: 43560, // 1 Acre
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85', // Grand Estate Gate
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85', // Scenic Hill Backdrop Land
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85', // Perimeter Overview
    ],
    description: 'A 1-acre private estate parcel offering unhindered vistas of Chamundi Hill. Successfully acquired by a prominent industrialist family.',
    architecturalDetails: 'Perimeter stone fencing completed with private access lane directly connected to Mysore Ring Road.',
    amenities: ['Chamundi Hill View', 'Gated Stone Perimeter', 'High-speed Waterline', 'Helipad Provision', 'Exclusive Access'],
  },

  // Page 2: Items 7 to 12
  {
    id: 'yadavagiri-leafy-avenues-residence',
    title: 'Yadavagiri Leafy Avenues Residence',
    location: 'Yadavagiri Central, Mysore',
    city: 'mysore',
    type: 'For Rent',
    category: 'villa',
    priceDisplay: '₹55,000 / mo',
    priceValueCr: 0.55,
    bhk: 4,
    sqft: 3800,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85', // Villa Front
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85', // Drawing Hall
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85', // Master Bedroom
    ],
    description: 'An elegant 4 BHK independent duplex villa in the quiet, tree-canopied lanes of Yadavagiri. Ideal for senior executives and multinational directors looking for peaceful luxury living.',
    architecturalDetails: 'Spacious ground-floor master suite, wooden flooring in upstairs lounge, landscaped sit-out patio, and solar water heating.',
    amenities: ['Landscaped Patio', 'Solar Water Heating', 'Covered 2-Car Garage', 'Servant Bathroom', 'High-Speed Broadband'],
  },
  {
    id: 'gokulam-yoga-shala-retreat-villa',
    title: 'Gokulam Yoga Shala Retreat Villa',
    location: 'Gokulam 2nd Stage, Mysore',
    city: 'mysore',
    type: 'For Lease',
    category: 'villa',
    priceDisplay: '₹35 Lakhs / 5 yrs',
    priceValueCr: 0.35,
    bhk: 3,
    sqft: 3500,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', // Modern Zen Exterior
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85', // Sunlit Yoga Hall
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=85', // Zen Garden Suite
    ],
    description: 'Designed specifically for practitioners and teachers in Gokulam, this peaceful sanctuary features a dedicated sound-insulated yoga meditation studio and organic garden.',
    architecturalDetails: 'Natural kota stone and teakwood flooring, cross-ventilation designed to stay naturally cool throughout Mysore’s pleasant seasons.',
    amenities: ['Dedicated Yoga Studio', 'Organic Herb Garden', 'Natural Kota Stone', 'Quiet Cul-de-sac', '5-Year Non-escalating Lease'],
  },
  {
    id: 'krs-road-lakeview-estate-plot',
    title: 'KRS Road Lakeview Estate Plot',
    location: 'KRS Road, Mysore',
    city: 'mysore',
    type: 'For Sale',
    category: 'estate_plot',
    priceDisplay: '₹1.45 Cr',
    priceValueCr: 1.45,
    bhk: 0,
    sqft: 10000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85', // Panoramic Land Parcel
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85', // Access Boulevard
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85', // Lakeview Perspective
    ],
    description: 'Prime residential villa plot overlooking the scenic backwaters on KRS Road. Clear titles, wide access road, and surrounded by premier gated developments.',
    architecturalDetails: 'Corner plot with dual road access, soil testing and survey completed, ready for custom villa construction.',
    amenities: ['Backwater Views', 'Corner Plot', 'MUDA Approved', 'Underground Cabling', 'Clear Freehold Title'],
  },
  {
    id: 'vani-vilas-doctors-enclave',
    title: 'Vani Vilas Doctors Enclave Apartment',
    location: 'VV Mohalla, Mysore',
    city: 'mysore',
    type: 'For Rent',
    category: 'apartment',
    priceDisplay: '₹75,000 / mo',
    priceValueCr: 0.75,
    bhk: 4,
    sqft: 3600,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85', // Luxury Building Facade
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85', // Expansive Living Area
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85', // Modular Kitchen & Balcony
    ],
    description: 'A premier 4 BHK luxury apartment in VV Mohalla, close to Mysore’s top hospitals, heritage clubs, and prestigious institutions.',
    architecturalDetails: 'Only two apartments per floor for maximum privacy. High-grade acoustic insulation, large wrap-around balconies.',
    amenities: ['2 Units Per Floor', 'Gym & Rooftop Lounge', '2 Dedicated Basement Parking', '24/7 Treated Water', 'Concierge Service'],
  },
  {
    id: 'saraswathipuram-heritage-court',
    title: 'Saraswathipuram Heritage Court',
    location: 'Saraswathipuram 1st Main, Mysore',
    city: 'mysore',
    type: 'For Sale',
    category: 'villa',
    priceDisplay: '₹1.85 Cr',
    priceValueCr: 1.85,
    bhk: 4,
    sqft: 4000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85', // Heritage Court Facade
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', // Teak Finish Living Room
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=85', // Private Courtyard
    ],
    description: 'A bespoke independent villa situated in one of the most culturally rich residential pockets of Mysore. Impeccably maintained with authentic woodwork and private garden.',
    architecturalDetails: 'South-facing Vastu compliant construction with teakwood frames, granite finishes, and spacious portico.',
    amenities: ['100% Vastu Compliant', 'Authentic Teak Finish', 'Spacious Portico', 'Cauvery Water Connection', 'Clear Title'],
  },
  {
    id: 'vijayanagar-3rd-stage-duplex',
    title: 'Vijayanagar 3rd Stage Designer Duplex',
    location: 'Vijayanagar 3rd Stage, Mysore',
    city: 'mysore',
    type: 'For Lease',
    category: 'villa',
    priceDisplay: '₹28 Lakhs / 3 yrs',
    priceValueCr: 0.28,
    bhk: 3,
    sqft: 3100,
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=85', // Duplex Exterior
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85', // Contemporary Living Room
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85', // Balcony & Kitchen
    ],
    description: 'Modern, brand-new 3 BHK duplex home available on long-term lease. Located in the rapidly appreciating residential sector of Vijayanagar.',
    architecturalDetails: 'Contemporary cubic architecture with designer lighting, Italian tiles, and covered car parking.',
    amenities: ['Brand New Construction', 'Designer Lighting', 'Covered Car Park', '3-Year Lock-in Lease', 'Peaceful Neighborhood'],
  },

  // Page 3: Items 13 to 15
  {
    id: 'hebbal-ring-road-commercial-plot',
    title: 'Hebbal Ring Road Commercial & Estate Plot',
    location: 'Hebbal Ring Road, Mysore',
    city: 'mysore',
    type: 'For Sale',
    category: 'estate_plot',
    priceDisplay: '₹1.60 Cr',
    priceValueCr: 1.60,
    bhk: 0,
    sqft: 9600,
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85', // Ring Road Frontage
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85', // Commercial Land Plot
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85', // Corner Perspective
    ],
    description: 'High-visibility corner plot right on Mysore Outer Ring Road near Hebbal IT and industrial corridor. Perfect for corporate guest houses, luxury boutique clinics, or estate developments.',
    architecturalDetails: 'Commercial conversion eligible, wide dual access with 100-ft main road frontage.',
    amenities: ['Outer Ring Road Frontage', 'Commercial Conversion Ready', 'Dual Corner Road', 'Clear Titles', 'High Appreciation'],
  },
  {
    id: 'bogadi-road-greenview-duplex',
    title: 'Bogadi Road Greenview Duplex',
    location: 'Bogadi 2nd Stage, Mysore',
    city: 'mysore',
    type: 'For Rent',
    category: 'villa',
    priceDisplay: '₹45,000 / mo',
    priceValueCr: 0.45,
    bhk: 3,
    sqft: 2900,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85', // Greenview Duplex Facade
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85', // Bright Living Room
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85', // Master Suite
    ],
    description: 'A serene 3 BHK duplex home situated in Bogadi, close to top international schools and green belts. Fully equipped with modern fixtures.',
    architecturalDetails: 'Spacious family room with skylight, modular kitchen with granite countertops, and open terrace.',
    amenities: ['Skylight Family Room', 'Modular Granite Kitchen', 'Open Sky Terrace', '24/7 Water Supply', 'Gated Enclave'],
  },
  {
    id: 'lalitha-mahal-heritage-reserve',
    title: 'Lalitha Mahal Heritage Reserve Plot',
    location: 'Siddhartha Layout / Lalitha Mahal Road, Mysore',
    city: 'mysore',
    type: 'Sold Out',
    category: 'estate_plot',
    priceDisplay: '₹2.95 Cr',
    priceValueCr: 2.95,
    bhk: 0,
    sqft: 21780, // Half Acre
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85', // Palace Road View
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85', // Lush Green Compound
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85', // Gated Stone Wall
    ],
    description: 'A half-acre trophy parcel near the historic Lalitha Mahal Palace. Sold to a private heritage preservation trust.',
    architecturalDetails: 'Surrounded by heritage protected zones with royal palace vistas and ancient banyan trees.',
    amenities: ['Palace Viewpoint', 'Half-Acre Land Parcel', 'Heritage Enclave', 'Perimeter Stone Wall', 'Trophy Asset'],
  },
];

export const PROPERTIES_DATA = PROPERTIES_COLLECTION;
