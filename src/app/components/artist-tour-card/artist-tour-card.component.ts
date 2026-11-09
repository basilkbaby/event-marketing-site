import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistTour, TourDate } from '../../../core/models/artist-tour.model';
import { environment } from '../../../environments/environment';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'app-artist-tour-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-tour-card.component.html',
  styleUrls: ['./artist-tour-card.component.scss']
})
export class ArtistTourCardComponent {
  @Input({ required: true }) tour!: ArtistTour;
  private analytics = inject(AnalyticsService);

  getConfirmedDates(): TourDate[] {
    return this.tour.dates.filter(d => d.status !== 'tbc');
  }

  getTBCDates(): TourDate[] {
    return this.tour.dates.filter(d => d.status === 'tbc');
  }

  getCitiesPreview(): string {
    return this.getConfirmedDates().map(d => d.city).join(' · ');
  }

  getDayFromDate(dateStr: string): string {
    return dateStr.trim().split(' ')[0].padStart(2, '0');
  }

  getMonthFromDate(dateStr: string): string {
    const parts = dateStr.replace(',', '').trim().split(' ');
    return parts[1]?.substring(0, 3).toUpperCase() ?? '';
  }

  // A confirmed date counts as past once its day is over (it's still shown
  // as bookable for the whole day of the show itself).
  isPast(date: TourDate): boolean {
    if (date.status === 'tbc') return false;
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    return this.parseDate(date.date).getTime() < todayStart.getTime();
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

  getBookingUrl(date: TourDate): string {
    if (date.bookingUrl) return date.bookingUrl;
    if (!date.bookingId) return '#';
    return `${environment.bookingBaseUrl}/events/${date.bookingId}`;
  }

  onTicketClick(date: TourDate): void {
    this.analytics.ticketClick({
      artistName: this.tour.artistName,
      tourName: this.tour.tourName,
      city: date.city,
      date: date.date,
      price: date.price
    });
    if (date.bookingId || date.bookingUrl) {
      this.analytics.bookingRedirect({
        artistName: this.tour.artistName,
        tourName: this.tour.tourName,
        city: date.city,
        bookingId: date.bookingId ?? date.bookingUrl!
      });
    }
  }
}
