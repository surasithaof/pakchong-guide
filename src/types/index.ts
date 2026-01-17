export type Language = 'th' | 'en' | 'zh' | 'es' | 'fr' | 'it' | 'ru';

export type LocalizedString = {
  [key in Language]?: string;
};

export interface Place {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  categories: string[];
  images: string[];
  mapUrl: string;
  address: LocalizedString;
  openingHours: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  contactPhone: string | null;
  website: string | null;
  tags: string[];
}

export interface Category {
  id: string;
  icon: string;
  name: LocalizedString;
}

export interface ItineraryStop {
  placeId: string;
  day: number;
  order: number;
  timeSlot: string;
  notes: LocalizedString;
}

export interface Itinerary {
  id: string;
  slug: string;
  title: LocalizedString;
  duration: LocalizedString;
  description: LocalizedString;
  difficulty: 'easy' | 'moderate' | 'challenging';
  stops: ItineraryStop[];
}

export interface Taxi {
  id: string;
  name: LocalizedString;
  phone: string;
  languages: Language[];
  areas: string[];
  vehicleType: string;
  priceEstimate: LocalizedString;
  notes: LocalizedString;
}

export interface PublicTransport {
  id: string;
  type: 'bus' | 'train' | 'minivan';
  route: LocalizedString;
  operator: LocalizedString;
  frequency: LocalizedString;
  duration: LocalizedString;
  price: LocalizedString;
  operatingHours: string;
  notes: LocalizedString;
}

export interface RentalCar {
  id: string;
  name: LocalizedString;
  phone: string;
  priceRange: LocalizedString;
  vehicleTypes: string[];
  notes: LocalizedString;
}

export interface TransportData {
  taxis: Taxi[];
  publicTransport: PublicTransport[];
  rentalCars: RentalCar[];
  tips: LocalizedString;
}

export interface PlacesData {
  places: Place[];
}

export interface CategoriesData {
  categories: Category[];
}

export interface ItinerariesData {
  itineraries: Itinerary[];
}
