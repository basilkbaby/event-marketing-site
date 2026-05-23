import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}
