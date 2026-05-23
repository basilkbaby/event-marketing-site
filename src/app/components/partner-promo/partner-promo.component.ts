import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerEvent } from '../../../core/models/artist-tour.model';

@Component({
  selector: 'app-partner-promo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partner-promo.component.html',
  styleUrls: ['./partner-promo.component.scss']
})
export class PartnerPromoComponent {
  @Input({ required: true }) events: PartnerEvent[] = [];
}
