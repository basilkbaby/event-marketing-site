export interface Slide {
  id: number;
  type: 'featured' | 'upcoming' | 'completed'; // Type of slide
  pretitle: string;
  title: string;
  highlightedText?: string;
  date: string;
  description: string;
  image?: string;
  hasImage: boolean;
  pattern?: 'geometric' | 'dots' | 'waves' | 'grid';
  location?: string;
  venue?: string;
  time?: string;
  price?: number;
  attendees?: string;
  gallery?: string[]; // For completed events with multiple images
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}