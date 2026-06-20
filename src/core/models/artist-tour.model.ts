export interface TourDate {
  id: number;
  date: string;
  venue: string;
  city: string;
  time?: string;
  duration?: string;
  price?: number;
  status: 'on-sale' | 'limited' | 'sold-out' | 'tbc';
  bookingId?: string;
  comingSoon?: boolean;
}

export interface ArtistTour {
  id: number;
  artistName: string;
  tourName: string;
  description: string;
  gradient: string;
  category: string;
  dates: TourDate[];
  featured?: boolean;
  image?: string;
}

export interface PartnerEvent {
  id: number;
  title: string;
  organizer: string;
  date: string;
  venue: string;
  city: string;
  description: string;
  ticketLink?: string;
}
