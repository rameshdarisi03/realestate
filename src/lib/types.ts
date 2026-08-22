export type PropertyStatus = 'For Sale' | 'For Rent' | 'For Lease' | 'Sold Out';
export type PropertyCategory = 'villa' | 'apartment' | 'estate_plot';

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AED' | 'INR';

export interface CurrencyRate {
  symbol: string;
  rate: number;
  prefix: string;
  suffix: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  type: PropertyStatus;
  category: PropertyCategory;
  priceDisplay: string;
  priceValueCr: number;
  bhk: number;
  sqft: number;
  image: string;
  gallery: string[];
  description: string;
  architecturalDetails?: string;
  amenities: string[];
}

export interface VipInquiry {
  propertyId: string;
  name: string;
  email: string;
  phone: string;
  preferredDate?: string;
  requiresNda?: boolean;
  message?: string;
  createdAt: string;
}

export interface PropertySubmission {
  location: string;
  classification?: string;
  category?: string;
  estimatedValuation?: string;
  expectedPrice?: string;
  representativeName?: string;
  ownerName?: string;
  phone: string;
  highlights?: string;
  description?: string;
  createdAt: string;
}
