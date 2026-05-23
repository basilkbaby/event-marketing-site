import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferCardComponent } from '../offer-card/offer-card.component';
import { ContainerComponent } from '../shared/container/container.component';
import { EventService } from '../../../core/services/event.service';


@Component({
  selector: 'app-offer-showcase',
  standalone: true,
  imports: [CommonModule, OfferCardComponent, ContainerComponent],
  templateUrl: './offer-showcase.component.html',
  styleUrls: ['./offer-showcase.component.scss']
})
export class OfferShowcaseComponent {
  private eventService = inject(EventService);
  offers = this.eventService.getOffers();
}