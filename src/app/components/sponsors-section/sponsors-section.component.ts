import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Sponsor {
  name: string;
  shortName: string;
  url: string;
  logo: string;
}

@Component({
  selector: 'app-sponsors-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsors-section.component.html',
  styleUrls: ['./sponsors-section.component.scss']
})
export class SponsorsSection {
  sponsors: Sponsor[] = [
    {
      name: 'Lifeline Protect',
      shortName: 'LP',
      url: 'https://lifelineprotect.co.uk',
      logo: 'https://logo.clearbit.com/lifelineprotect.co.uk'
    },
    {
      name: 'Tour Designers',
      shortName: 'TD',
      url: 'https://www.tourdesigners.co.uk',
      logo: 'https://logo.clearbit.com/tourdesigners.co.uk'
    },
    {
      name: 'Zenith Solicitors',
      shortName: 'ZS',
      url: 'https://zenithsolicitor.co.uk',
      logo: 'https://logo.clearbit.com/zenithsolicitor.co.uk'
    },
    {
      name: 'Radisson Hotels',
      shortName: 'RH',
      url: 'https://www.radissonhotels.com',
      logo: 'https://logo.clearbit.com/radissonhotels.com'
    }
  ];

  failedLogos = new Set<string>();

  onLogoError(sponsorName: string) {
    this.failedLogos.add(sponsorName);
  }

  logoFailed(sponsorName: string): boolean {
    return this.failedLogos.has(sponsorName);
  }
}
