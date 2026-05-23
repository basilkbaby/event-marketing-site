import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../core/services/event.service';
import { ArtistTourCardComponent } from '../artist-tour-card/artist-tour-card.component';
import { PartnerPromoComponent } from '../partner-promo/partner-promo.component';

@Component({
  selector: 'app-artist-tours-section',
  standalone: true,
  imports: [CommonModule, ArtistTourCardComponent, PartnerPromoComponent],
  templateUrl: './artist-tours-section.component.html',
  styleUrls: ['./artist-tours-section.component.scss']
})
export class ArtistToursSectionComponent {
  private eventService = inject(EventService);

  tours = this.eventService.getArtistTours();
  partnerEvents = this.eventService.getPartnerEvents();
}
