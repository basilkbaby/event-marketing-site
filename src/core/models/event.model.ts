
export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  hasImage: boolean;
  gradient?: string;
  time?: string;
  price?: number;
  venue: string;
  city: string;
  category?: string;
  featured?: boolean;
  completed?: boolean;
  attendees?: string;
  gallery?: string[];
}

export interface Venue {
  id: number;
  name: string;
  city: string;
  description?: string;
  image?: string;
  events: Event[];
}

export interface City {
  id: number;
  name: string;
  venues: Venue[];
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  icon: string;
  backgroundColor?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  isActive?: boolean;
}
