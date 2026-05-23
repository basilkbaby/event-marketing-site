import { Component } from '@angular/core';
import { ContainerComponent } from '../shared/container/container.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {}