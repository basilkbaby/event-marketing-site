import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuItems = [
    { label: 'Home',        link: '/',            fragment: undefined, external: undefined },
    { label: 'Events',      link: '/',            fragment: 'events',  external: undefined },
    { label: 'Past Events', link: '/past-events', fragment: undefined, external: undefined },
    { label: 'Contact Us',  link: '/contact',     fragment: undefined, external: undefined },
    { label: 'About Us',    link: '/',            fragment: 'about',   external: undefined },
    { label: 'View Tickets', link: undefined,     fragment: undefined, external: 'https://booking.v4entertainments.co.uk/tickets/lookup' },
  ];

  activeLabel = 'Home';
  isMenuOpen  = false;

  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.syncFromUrl(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => this.syncFromUrl(e.urlAfterRedirects));
  }

  ngOnDestroy() { this.routerSub?.unsubscribe(); }

  private syncFromUrl(url: string) {
    if      (url.includes('#events'))         this.activeLabel = 'Events';
    else if (url.includes('#about'))          this.activeLabel = 'About Us';
    else if (url.startsWith('/past-events'))  this.activeLabel = 'Past Events';
    else if (url.startsWith('/contact'))      this.activeLabel = 'Contact Us';
    else                                      this.activeLabel = 'Home';
  }

  onNavClick(label: string) {
    this.activeLabel = label;
  }

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu()  { this.isMenuOpen = false; }
}
