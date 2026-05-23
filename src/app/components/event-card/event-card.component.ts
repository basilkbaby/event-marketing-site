import { Component, Input } from '@angular/core';
import { Event } from '../../../core/models/event.model';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input({ required: true }) event!: Event;
  @Input() featured: boolean = false;
  
  isHovered = false;
  isFavorite = false;

  getCategoryColor(): string {
    const colors: Record<string, string> = {
      music: '#6C5CE7',
      mappilapattu: '#E17055',
      cultural: '#00B894',
      'film-night': '#0984E3',
      comedy: '#FDCB6E'
    };
    return colors[this.event.category || 'music'] || '#6C5CE7';
  }

  toggleFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
  }

  buyTicket() {
    console.log('Buying ticket for:', this.event.title);
  }

  showDetails() {
    console.log('Showing details for:', this.event.title);
  }

  getDayFromDate(dateString: string): string {
    // Handle different date formats
    if (dateString.includes('-')) {
      // Format: "27-28 Oct. 2026" or "June 15-17, 2025"
      return dateString.split(' ')[0];
    } else {
      // Format: "23 June, 2026"
      return dateString.split(' ')[0];
    }
  }

  getMonthFromDate(dateString: string): string {
    if (dateString.includes('-')) {
      // Format: "27-28 Oct. 2026"
      const parts = dateString.split(' ');
      if (parts.length >= 2) {
        return parts[1];
      }
      return '';
    } else {
      // Format: "23 June, 2026"
      const parts = dateString.split(' ');
      if (parts.length >= 2) {
        return parts[1].replace(',', '');
      }
      return '';
    }
  }

}