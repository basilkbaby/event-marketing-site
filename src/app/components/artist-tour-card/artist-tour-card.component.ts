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
    return dateStr.trim().split(' ')[0];
  }

  getMonthFromDate(dateStr: string): string {
    const parts = dateStr.replace(',', '').trim().split(' ');
    return parts[1]?.substring(0, 3).toUpperCase() ?? '';
  }

  getBookingUrl(date: TourDate): string {
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
    if (date.bookingId) {
      this.analytics.bookingRedirect({
        artistName: this.tour.artistName,
        tourName: this.tour.tourName,
        city: date.city,
        bookingId: date.bookingId
      });
    }
  }
}
