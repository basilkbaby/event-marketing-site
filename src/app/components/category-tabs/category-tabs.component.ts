import { Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-category-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-tabs.component.html',
  styleUrls: ['./category-tabs.component.scss']
})
export class CategoryTabsComponent {
  private eventService = inject(EventService);
  categories = this.eventService.getCategories();
  categoryChange = output<string>();

  selectCategory(slug: string) {
    this.categoryChange.emit(slug);
  }
}