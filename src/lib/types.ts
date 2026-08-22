export type PropertyStatus = 'For Sale' | 'For Rent' | 'For Lease' | 'Sold Out';
export type PropertyCategory = 'villa' | 'apartment' | 'estate_plot';

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
  message?: string;
  createdAt: string;
}

export interface PropertySubmission {
  location: string;
  category: string;
  expectedPrice: string;
  ownerName: string;
  phone: string;
  description: string;
  createdAt: string;
}
