import { Component, OnInit, computed, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from '../event-card/event-card.component';
import { ContainerComponent } from '../shared/container/container.component';
import { CategoryTabsComponent } from '../category-tabs/category-tabs.component';
import { Event } from '../../../core/models/event.model';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent, ContainerComponent, CategoryTabsComponent],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
private eventService = inject(EventService);
  
  // Get upcoming events directly from the service
  private upcomingEvents = computed(() => this.eventService.getUpcomingEvents());
  private activeCategory = 'all';
  
  // Filter events based on selected category
  protected filteredEvents: Signal<Event[]> = computed(() => {
    const events = this.upcomingEvents();
    if (this.activeCategory === 'all') {
      return events;
    }
    return events.filter(event => event.category === this.activeCategory);
  });
  


  ngOnInit() {
    this.filterByCategory('all');
  }

  filterByCategory(categorySlug: string) {
    this.activeCategory = categorySlug;
    this.eventService.setActiveCategory(categorySlug);
  }
}