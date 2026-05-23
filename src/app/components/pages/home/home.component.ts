import { Component } from '@angular/core';
import { HeroSpotlightComponent } from '../../hero-spotlight/hero-spotlight.component';
import { ArtistToursSectionComponent } from '../../artist-tours-section/artist-tours-section.component';
import { AboutSectionComponent } from '../../about-section/about-section.component';
import { ContactSectionComponent } from '../../contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSpotlightComponent,
    ArtistToursSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
