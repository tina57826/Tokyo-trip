
export enum ActivityType {
  SIGHTSEEING = 'SIGHTSEEING',
  FOOD = 'FOOD',
  TRANSPORT = 'TRANSPORT',
  STAY = 'STAY',
  SHOPPING = 'SHOPPING',
  OTHER = 'OTHER'
}

export type HighlightCategory = 'MUST_EAT' | 'MUST_BUY' | 'MUST_ORDER' | 'RESERVATION' | 'TIP';

export interface HighlightTag {
  category: HighlightCategory;
  text: string;
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  location?: string;
  address?: string; // Precision address for navigation
  imageUrl?: string; 
  type: ActivityType;
  description?: string; // Basic description
  guideStory?: string; // Detailed guide/story/strategy
  highlights?: HighlightTag[]; // Structured highlights
  links?: { label: string; url: string }[];
}

export interface DayItinerary {
  id: string;
  date: string;
  title: string;
  weatherForecast?: { temp: string; condition: 'Sunny' | 'Cloudy' | 'Rain' };
  items: ItineraryItem[];
}

export interface FlightInfo {
  type: 'DEPARTURE' | 'RETURN';
  airline: string;
  flightNumber: string;
  route: string;
  time: string;
}

export interface Accommodation {
  name: string;
  dates: string;
  notes?: string;
  address?: string;
}

export interface ExpenseItem {
  id: string;
  name: string;
  amount: number;
  category: 'FOOD' | 'TRANSPORT' | 'SHOPPING' | 'STAY' | 'OTHER';
}

export interface BudgetCategory {
  name: string;
  amount: number;
  color: string;
}

export interface TransportMapItem {
  id: string;
  name: string;
  company: 'JR' | 'Tokyo Metro' | 'Toei' | 'Keisei';
  color: string; // Hex code
  textColor?: string;
  description: string;
  imageUrl: string; // Cover image
  mapUrl: string; // Route map image
  officialLink?: string;
}
