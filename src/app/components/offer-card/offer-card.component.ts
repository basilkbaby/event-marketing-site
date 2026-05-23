import { Component, Input } from '@angular/core';
import { Offer } from '../../../core/models/event.model';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
  @Input({ required: true }) offer!: Offer;
}