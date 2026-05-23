import { Component, OnInit, OnDestroy, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../core/services/event.service';
import { ArtistTour, TourDate } from '../../../core/models/artist-tour.model';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Sponsor {
  name: string;
  shortName: string;
  url: string;
  logo: string;
}

@Component({
  selector: 'app-hero-spotlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-spotlight.component.html',
  styleUrls: ['./hero-spotlight.component.scss']
})
export class HeroSpotlightComponent implements OnInit, OnDestroy {
  private eventService = inject(EventService);

  tours = this.eventService.getArtistTours();

  featuredTour = computed(() => {
    const tours = this.tours();
    return tours.find(t => t.featured) ?? tours[0] ?? null;
  });

  otherTours = computed(() => {
    const featured = this.featuredTour();
    return this.tours().filter(t => t.id !== featured?.id);
  });

  countdown = signal<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  private countdownInterval?: ReturnType<typeof setInterval>;

  sponsors: Sponsor[] = [
    { name: 'Lifeline Protect',  shortName: 'LP', url: 'https://lifelineprotect.co.uk',       logo: 'https://eventmanagementimages.blob.core.windows.net/event-images/sponsor-lifeline.webp' },
    { name: 'Park Hall Resorts', shortName: 'PH', url: 'https://www.parkhallhotel.co.uk',      logo: 'https://eventmanagementimages.blob.core.windows.net/event-images/sponsor-park%20hall%20resorts.webp' },
    { name: 'Tour Designers',    shortName: 'TD', url: 'https://www.tourdesigners.co.uk',      logo: 'https://eventmanagementimages.blob.core.windows.net/event-images/sponsor-tour%20designer.webp' },
    { name: 'Zenith Solicitors', shortName: 'ZS', url: 'https://zenithsolicitor.co.uk',        logo: 'https://eventmanagementimages.blob.core.windows.net/event-images/sponsor-zenith%20solicitor.webp' },
  ];
  private failedLogos = new Set<string>();
  onLogoError(name: string) { this.failedLogos.add(name); }
  logoFailed(name: string): boolean { return this.failedLogos.has(name); }

  ngOnInit() {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
  }

  private parseDate(dateStr: string): Date {
    const cleaned = dateStr.replace(',', '').trim();
    const parts = cleaned.split(' ');
    if (parts.length === 3) {
      const months: Record<string, number> = {
        January: 0, February: 1, March: 2, April: 3,
        May: 4, June: 5, July: 6, August: 7,
        September: 8, October: 9, November: 10, December: 11
      };
      return new Date(parseInt(parts[2], 10), months[parts[1]] ?? 0, parseInt(parts[0], 10));
    }
    return new Date(dateStr);
  }

  private updateCountdown() {
    const tour = this.featuredTour();
    if (!tour) return;
    const firstDate = tour.dates.find(d => d.status !== 'tbc');
    if (!firstDate) return;
    const diff = this.parseDate(firstDate.date).getTime() - Date.now();
    if (diff <= 0) {
      this.countdown.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }
    this.countdown.set({
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000)
    });
  }

  getTourDateRange(tour: ArtistTour): string {
    const confirmed = tour.dates.filter(d => d.status !== 'tbc');
    if (confirmed.length === 0) return 'Dates TBA';
    if (confirmed.length === 1) {
      const parts = confirmed[0].date.replace(',', '').split(' ');
      return `${parts[1]?.substring(0, 3)} ${parts[2]}`;
    }
    const first = confirmed[0].date.replace(',', '').split(' ');
    const last = confirmed[confirmed.length - 1].date.replace(',', '').split(' ');
    const firstMon = first[1]?.substring(0, 3) ?? '';
    const lastMon = last[1]?.substring(0, 3) ?? '';
    const year = last[2] ?? '';
    if (firstMon === lastMon) return `${firstMon} ${year}`;
    return `${firstMon} - ${lastMon} ${year}`;
  }

  getConfirmedCount(tour: ArtistTour): number {
    return tour.dates.filter(d => d.status !== 'tbc').length;
  }

  getVenueDisplay(tour: ArtistTour): string {
    const confirmed = this.getConfirmedCount(tour);
    if (confirmed > 0) return `${confirmed} Venues`;
    return `${tour.dates.length} upcoming`;
  }

  getTBCCount(tour: ArtistTour): number {
    return tour.dates.filter(d => d.status === 'tbc').length;
  }

  getConfirmedCities(tour: ArtistTour): string[] {
    return tour.dates.filter(d => d.status !== 'tbc').map(d => d.city);
  }

  getStartingPrice(tour: ArtistTour): number | null {
    const prices = tour.dates.filter(d => d.price != null).map(d => d.price!);
    return prices.length > 0 ? Math.min(...prices) : null;
  }

  getInitials(name: string): string {
    return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  }

  getOtherTourFirstDate(tour: ArtistTour): string {
    const first = tour.dates.find(d => d.status !== 'tbc');
    if (!first) return 'Date TBA';
    const parts = first.date.replace(',', '').split(' ');
    return `From ${parts[1]?.substring(0, 3)} ${parts[2]}`;
  }

  getFirstConfirmedDate(tour: ArtistTour): TourDate | null {
    return tour.dates.find(d => d.status !== 'tbc') ?? null;
  }

  getDayName(dateStr: string): string {
    const d = this.parseDate(dateStr);
    return d.toLocaleDateString('en-GB', { weekday: 'long' });
  }

  getFormattedDate(dateStr: string): string {
    const d = this.parseDate(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  getDayFromDate(dateStr: string): string {
    return dateStr.trim().split(' ')[0];
  }

  getMonthFromDate(dateStr: string): string {
    const parts = dateStr.replace(',', '').trim().split(' ');
    return parts[1]?.substring(0, 3).toUpperCase() ?? '';
  }

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}
