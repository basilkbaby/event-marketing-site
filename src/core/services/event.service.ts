import { Injectable, signal } from '@angular/core';
import { Event, Category, Offer } from '../models/event.model';
import { ArtistTour, PartnerEvent } from '../models/artist-tour.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // ── Artist Tours ─────────────────────────────────────────────────
  private artistToursData: ArtistTour[] = [
    {
      id: 1,
      artistName: 'MG SREEKUMAR',
      tourName: 'LIVE KONDATTAM - UK TOUR 2026',
      description: 'One of the most celebrated voices in Malayalam cinema, M.G. Sreekumar brings his iconic playback hits and film songs to the UK. An evening of nostalgia, devotion and pure melody spanning five decades of musical brilliance.',
      gradient: 'linear-gradient(135deg, #1a0f00 0%, #3d2200 60%, #1a0f00 100%)',
      category: 'Music Concert',
      featured: true,
      dates: [
        {
          id: 101,
          date: '30 October, 2026',
          venue: 'Maher Centre',
          city: 'Leicester',
          time: 'Gates 6:00 PM · Show 7:00 PM',
          price: 25,
          status: 'on-sale',
          bookingId: 'bd8ab0ab-ebb5-44d8-9ecb-88671b1e834a',
          comingSoon: false
        },
        {
          id: 102,
          date: '31 October, 2026',
          venue: 'Forum Centre',
          city: 'Manchester',
          time: 'Gates 5:00 PM · Show 6:00 PM',
          price: 30,
          status: 'on-sale',
          bookingId: 'c5e96655-2b29-42f3-b0c4-e8a6c7f4f642'
        },
        {
          id: 103,
          date: '1 November, 2026',
          venue: 'Memo Arts Centre',
          city: 'Cardiff',
          time: 'Gates 4:30 PM · Show 5:30 PM',
          price: 24,
          status: 'on-sale',
          bookingId: '6fca76ca-58ce-4b8b-9b36-61507aaa1aef',
          comingSoon: false
        },
        {
          id: 104,
          date: '6 November, 2026',
          venue: 'The Royal Regency',
          city: 'London',
          time: 'Gates 6:00 PM · Show 7:00 PM',
          price: 25,
          status: 'on-sale',
          bookingId: '2413facb-f355-4e82-b6b9-3c2f784a4681'
        },
        {
          id: 105,
          date: '7 November, 2026',
          venue: 'Life Centre',
          city: 'Bournemouth',
          time: 'Gates 5:00 PM · Show 6:00 PM',
          price: 25,
          status: 'on-sale',
          bookingId: '2413facb-f355-4e82-b6b9-3c2f784a4681',
          comingSoon: true
        },
        {
          id: 106,
          date: '8 November, 2026',
          venue: 'Assembly Hall',
          city: 'Worthing',
          status: 'on-sale',
          comingSoon: true,
          time: 'Gates 5:00 PM · Show 6:00 PM',
        }
      ],
      image: 'https://eventmanagementimages.blob.core.windows.net/event-images/mgsreekumarall.jpeg'
    },
    {
      id: 2,
      artistName: 'Vidhu Prathap',
      tourName: 'Soulful Melodies - UK Tour 2027',
      description: 'Award-winning Malayalam playback singer Vidhu Prathap brings his chart-topping film songs and soulful compositions to the UK stage. An intimate and powerful live experience not to be missed.',
      gradient: 'linear-gradient(135deg, #00101a 0%, #00264a 60%, #00101a 100%)',
      category: 'Music Concert',
      featured: false,
      dates: [
        {
          id: 201,
          date: 'TBC',
          venue: 'TBC',
          city: 'London',
          status: 'tbc',
          comingSoon: true
        },
        {
          id: 202,
          date: 'TBC',
          venue: 'TBC',
          city: 'Manchester',
          status: 'tbc',
          comingSoon: true
        },
        {
          id: 203,
          date: 'TBC',
          venue: 'TBC',
          city: 'Leicester',
          status: 'tbc',
          comingSoon: true
        },
        {
          id: 204,
          date: 'TBC',
          venue: 'TBC',
          city: 'Cardiff',
          status: 'tbc',
          comingSoon: true
        }
      ],
      image: 'https://img1.wsimg.com/isteam/ip/f732a94f-7c29-4ffb-be70-523cb8b86b1c/Vidhu%20Prathap%20UK%20TOUR%202.jpg/:/cr=t:0.03%25,l:0%25,w:100%25,h:99.95%25/rs=w:600,h:800,cg:true'
    },
    {
      id: 3,
      artistName: 'Mentalist Aathi',
      tourName: "AATHI'S INSOMNIA - UK & IRELAND TOUR 2026",
      description: 'Mentalist Aathi brings his mind-bending live show to the UK & Ireland this December. An unforgettable evening of mentalism, illusion and psychological wonder that will leave you questioning everything you thought you knew.',
      gradient: 'linear-gradient(135deg, #0a0014 0%, #2a0a40 60%, #0a0014 100%)',
      category: 'Mentalism Show',
      featured: false,
      dates: [
        {
          id: 301,
          date: 'TBC',
          venue: 'Venue To Be Announced',
          city: 'UK & Ireland Tour · December 2026',
          status: 'tbc',
          comingSoon: true
        }
      ],
      image: 'https://eventmanagementimages.blob.core.windows.net/v4-entertainment/mentalist-aathi.jpeg'
    }
  ];

  // ── Partner Events ────────────────────────────────────────────────
  private partnerEventsData: PartnerEvent[] = [
    // {
    //   id: 1,
    //   title: 'Kerala Sangeetha Sandhya 2026',
    //   organizer: 'Kerala Cultural Association UK',
    //   date: '13 December, 2026',
    //   venue: 'Hammersmith Apollo',
    //   city: 'London',
    //   description: 'A grand evening of Malayalam classical and folk music celebrating Kerala\'s rich musical heritage. Featuring multiple acclaimed artists.',
    //   ticketLink: '#'
    // }
  ];

  // ── Offers ────────────────────────────────────────────────────────
  private offersData: Offer[] = [
    { id: 1, title: 'Early Bird Special', description: 'Book 30 days in advance and save 20% on all ticket categories', icon: '🎫', backgroundColor: '#111120' },
    { id: 2, title: 'Group Booking', description: 'Groups of 6 or more get 15% off. Perfect for family and friends nights out', icon: '👨‍👩‍👧‍👦', backgroundColor: '#111120' },
    { id: 3, title: 'VIP Gold Package', description: 'Front-row seats, backstage meet & greet, and exclusive merchandise bundle', icon: '⭐', backgroundColor: '#111120' },
    { id: 4, title: 'Student Discount', description: 'Valid student ID gets you 25% off. Support the next generation of fans', icon: '🎓', backgroundColor: '#111120' },
    { id: 5, title: 'Season Pass', description: 'Unlimited access to all V4 events this season at one exclusive price', icon: '🎭', backgroundColor: '#111120' },
    { id: 6, title: 'Newsletter Exclusive', description: 'Subscribe to our newsletter and get first access to tickets + special offers', icon: '✉️', backgroundColor: '#111120' }
  ];

  // ── Categories ────────────────────────────────────────────────────
  private categoriesData: Category[] = [
    { id: 1, name: 'All Events', slug: 'all', isActive: true },
    { id: 2, name: 'Music Concert', slug: 'music' },
    { id: 3, name: 'Mappilapattu', slug: 'mappilapattu' },
    { id: 4, name: 'Cultural Show', slug: 'cultural' },
    { id: 5, name: 'Film Night', slug: 'film-night' }
  ];

  private artistTours = signal<ArtistTour[]>(this.artistToursData);
  private partnerEvents = signal<PartnerEvent[]>(this.partnerEventsData);
  private offers = signal<Offer[]>(this.offersData);
  private categories = signal<Category[]>(this.categoriesData);
  private selectedCategory = signal<string>('all');

  // ── Getters ───────────────────────────────────────────────────────
  getArtistTours() { return this.artistTours.asReadonly(); }
  getPartnerEvents() { return this.partnerEvents.asReadonly(); }
  getOffers() { return this.offers.asReadonly(); }
  getCategories() { return this.categories.asReadonly(); }

  setActiveCategory(slug: string) {
    this.selectedCategory.set(slug);
    this.categories.update(cats =>
      cats.map(cat => ({ ...cat, isActive: cat.slug === slug }))
    );
  }

  // Flattens confirmed tour dates into Event objects for the hero spotlight
  getUpcomingEvents(): Event[] {
    const result: Event[] = [];
    this.artistTours().forEach(tour => {
      tour.dates
        .filter(d => d.status !== 'tbc')
        .forEach(date => {
          result.push({
            id: date.id,
            title: tour.artistName,
            date: date.date,
            description: tour.tourName,
            hasImage: false,
            gradient: tour.gradient,
            time: date.time,
            price: date.price,
            venue: date.venue,
            city: date.city,
            category: tour.category
          });
        });
    });
    return result.sort((a, b) =>
      this.parseDate(a.date).getTime() - this.parseDate(b.date).getTime()
    );
  }

  private parseDate(dateStr: string): Date {
    if (dateStr === 'TBC') return new Date(9999, 0, 1);
    const cleaned = dateStr.replace(',', '').trim();
    const parts = cleaned.split(' ');
    if (parts.length === 3) {
      const months: Record<string, number> = {
        January: 0, February: 1, March: 2, April: 3, May: 4,
        June: 5, July: 6, August: 7, September: 8, October: 9,
        November: 10, December: 11
      };
      return new Date(parseInt(parts[2], 10), months[parts[1]] ?? 0, parseInt(parts[0], 10));
    }
    return new Date(dateStr);
  }
}
