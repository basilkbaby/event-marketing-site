import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PastTour {
  id: number;
  year: number;
  period: string;
  artistName: string;
  tourName: string;
  category: string;
  posterUrl: string;
  cities: string[];
  showCount: number;
}

interface YearGroup {
  year: number;
  events: PastTour[];
}

@Component({
  selector: 'app-past-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {

  private readonly pastTours: PastTour[] = [
    {
      id: 3,
      year: 2026,
      period: 'Feb – Mar 2026',
      artistName: "Sithara's Project Malabaricus",
      tourName: 'UK Tour 2026',
      category: 'Music Concert',
      posterUrl: 'https://img1.wsimg.com/isteam/ip/f732a94f-7c29-4ffb-be70-523cb8b86b1c/rs%3Dw_1280%2Ch_1816.webp/:/rs=w:1160,h:1646',
      cities: ['Wigan', 'Leicester', 'Cambridge', 'London', 'Southampton', 'Cardiff'],
      showCount: 6
    },
    {
      id: 2,
      year: 2025,
      period: 'November 2025',
      artistName: 'AGAM',
      tourName: 'UK Tour November 2025',
      category: 'Music Concert',
      posterUrl: 'https://img1.wsimg.com/isteam/ip/f732a94f-7c29-4ffb-be70-523cb8b86b1c/all%20red.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:1230',
      cities: ['London', 'Cardiff', 'Cambridge', 'Manchester', 'Southampton', 'Leicester'],
      showCount: 6
    },
    {
      id: 1,
      year: 2025,
      period: 'February 2025',
      artistName: 'Vidhu Prathap ft. Jyotsna',
      tourName: 'UK Tour 2025',
      category: 'Music Concert',
      posterUrl: 'https://img1.wsimg.com/isteam/ip/f732a94f-7c29-4ffb-be70-523cb8b86b1c/dddd.jpg/:/rs=w:984,h:1237',
      cities: ['Belfast', 'London', 'Manchester', 'Southampton', 'Leicester', 'Stoke on Trent', 'Cardiff'],
      showCount: 7
    }
  ];

  yearGroups: YearGroup[] = [];
  totalTours = 0;
  totalShows = 0;
  totalCities = 0;

  ngOnInit() {
    this.totalTours = this.pastTours.length;
    this.totalShows = this.pastTours.reduce((sum, t) => sum + t.showCount, 0);
    this.totalCities = new Set(this.pastTours.flatMap(t => t.cities)).size;

    const years = [...new Set(this.pastTours.map(t => t.year))].sort((a, b) => b - a);
    this.yearGroups = years.map(year => ({
      year,
      events: this.pastTours.filter(t => t.year === year)
    }));
  }
}
