import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  phone = '+44 7878 896 384';
  phonePlain = '+447878896384';
  whatsappUrl = 'https://wa.me/447878896384';

  private analytics = inject(AnalyticsService);

  onPhoneClick(): void { this.analytics.phoneClick('contact_section'); }
  onWhatsAppClick(): void { this.analytics.whatsappClick('contact_section'); }
}
