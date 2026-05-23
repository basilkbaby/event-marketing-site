import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../../core/models/slide.model';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    // FEATURED SLIDE - No image, just text and colors
    {
      id: 1,
      type: 'featured',
      pretitle: 'Creative Insights',
      title: 'Music Lives,',
      highlightedText: 'Feel Beats',
      date: '27-28 Oct. 2026',
      description: 'Innovative solutions for unforgettable experiences',
      hasImage: false,
      pattern: 'geometric',
      location: 'Brooklyn, NY',
      venue: 'The Beacon Hall',
      time: '8:00 p.m. – 2:00 a.m.',
      price: 89,
      ctaText: 'Get Tickets',
      ctaLink: '/tickets',
      secondaryCtaText: 'Learn More',
      secondaryCtaLink: '/about'
    },
    
    // UPCOMING EVENTS SLIDES
    {
      id: 2,
      type: 'upcoming',
      pretitle: 'Upcoming Event',
      title: 'The gaze of marble',
      date: '23 June, 2026',
      description: 'An extraordinary exhibition featuring contemporary marble sculptures from world-renowned artists.',
      hasImage: true,
      image: '/assets/images/event-1.jpg',
      location: 'Toronto',
      venue: 'The Beacon Hall',
      time: '8:00 a.m. – 5:00 p.m.',
      price: 45,
      ctaText: 'Buy Tickets',
      ctaLink: '/tickets/1',
      secondaryCtaText: 'Event Details',
      secondaryCtaLink: '/events/1'
    },
    {
      id: 3,
      type: 'upcoming',
      pretitle: 'Upcoming Event',
      title: 'The graceful spirit of ballet',
      date: '07 July, 2026',
      description: 'A breathtaking ballet performance combining classical technique with contemporary expression.',
      hasImage: true,
      image: '/assets/images/event-2.jpg',
      location: 'New York',
      venue: 'The Glasshouse',
      time: '11:15 a.m. – 4:30 p.m.',
      price: 120,
      ctaText: 'Buy Tickets',
      ctaLink: '/tickets/2',
      secondaryCtaText: 'Event Details',
      secondaryCtaLink: '/events/2'
    },
    {
      id: 4,
      type: 'upcoming',
      pretitle: 'Upcoming Event',
      title: 'Urban fitness and focus',
      date: '14 August, 2026',
      description: 'A city-wide fitness festival with yoga, meditation, and high-energy workouts.',
      hasImage: true,
      image: '/assets/images/event-3.jpg',
      location: 'Toronto',
      venue: 'The Beacon Hall',
      time: '9:00 a.m. – 5:30 p.m.',
      price: 35,
      ctaText: 'Buy Tickets',
      ctaLink: '/tickets/3',
      secondaryCtaText: 'Event Details',
      secondaryCtaLink: '/events/3'
    },
    {
      id: 5,
      type: 'upcoming',
      pretitle: 'Upcoming Event',
      title: 'Motion and metaphor',
      date: '29 October, 2026',
      description: 'A contemporary dance performance exploring the relationship between movement and meaning.',
      hasImage: true,
      image: '/assets/images/event-4.jpg',
      location: 'New York',
      venue: 'The Glasshouse',
      time: '10:00 a.m. – 8:00 p.m.',
      price: 75,
      ctaText: 'Buy Tickets',
      ctaLink: '/tickets/4',
      secondaryCtaText: 'Event Details',
      secondaryCtaLink: '/events/4'
    },
    {
      id: 6,
      type: 'upcoming',
      pretitle: 'Upcoming Event',
      title: 'Curved steel and silent spaces',
      date: '11 November, 2026',
      description: 'An architectural exhibition showcasing innovative steel structures and spatial design.',
      hasImage: true,
      image: '/assets/images/event-5.jpg',
      location: 'Toronto',
      venue: 'The Beacon Hall',
      time: '9:00 a.m. – 8:00 p.m.',
      price: 60,
      ctaText: 'Buy Tickets',
      ctaLink: '/tickets/5',
      secondaryCtaText: 'Event Details',
      secondaryCtaLink: '/events/5'
    },

    // COMPLETED EVENTS SLIDES
    {
      id: 7,
      type: 'completed',
      pretitle: 'Past Event',
      title: 'Summer Music Festival 2025',
      date: 'June 15-17, 2025',
      description: 'An unforgettable weekend of live music, art, and community with over 50 artists.',
      hasImage: true,
      image: '/assets/images/completed-1.jpg',
      location: 'Central Park, NY',
      venue: 'Central Park',
      time: 'All Day',
      attendees: '15,000+',
      gallery: ['/assets/images/gallery-1.jpg', '/assets/images/gallery-2.jpg', '/assets/images/gallery-3.jpg'],
      ctaText: 'View Gallery',
      ctaLink: '/gallery/1',
      secondaryCtaText: 'Watch Recap',
      secondaryCtaLink: '/recap/1'
    },
    {
      id: 8,
      type: 'completed',
      pretitle: 'Past Event',
      title: 'Jazz & Blues Night',
      date: 'March 8, 2025',
      description: 'A sophisticated evening with legendary jazz performers including Miles Davis tribute.',
      hasImage: true,
      image: '/assets/images/completed-2.jpg',
      location: 'Blue Note, NY',
      venue: 'Blue Note Jazz Club',
      time: '8:00 p.m. – 2:00 a.m.',
      attendees: '500',
      gallery: ['/assets/images/gallery-4.jpg', '/assets/images/gallery-5.jpg'],
      ctaText: 'View Gallery',
      ctaLink: '/gallery/2',
      secondaryCtaText: 'Watch Highlights',
      secondaryCtaLink: '/highlights/2'
    },
    {
      id: 9,
      type: 'completed',
      pretitle: 'Past Event',
      title: 'Electronic Dreams Tour',
      date: 'February 22-24, 2025',
      description: 'The biggest electronic music tour of the year featuring world-class DJs.',
      hasImage: true,
      image: '/assets/images/completed-3.jpg',
      location: 'Multiple Cities',
      venue: 'Various Venues',
      time: 'Various Times',
      attendees: '25,000+',
      gallery: ['/assets/images/gallery-6.jpg', '/assets/images/gallery-7.jpg', '/assets/images/gallery-8.jpg'],
      ctaText: 'View Gallery',
      ctaLink: '/gallery/3',
      secondaryCtaText: 'Aftermovie',
      secondaryCtaLink: '/aftermovie/3'
    }
  ];

  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoPlay();
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  getSlideTypeClass(type: string): string {
    switch(type) {
      case 'featured': return 'featured-slide';
      case 'upcoming': return 'upcoming-slide';
      case 'completed': return 'completed-slide';
      default: return '';
    }
  }

  getSlideIndicator(type: string): string {
    switch(type) {
      case 'featured': return '✨ FEATURED';
      case 'upcoming': return '🔜 UPCOMING';
      case 'completed': return '✅ COMPLETED';
      default: return '';
    }
  }
}