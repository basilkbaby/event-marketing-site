import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  private push(event: Record<string, unknown>): void {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }

  // ── Page view (fired on every SPA route change) ───────────────────
  pageView(path: string): void {
    this.push({ event: 'page_view', page_path: path });
  }

  // ── Ticket button clicked ─────────────────────────────────────────
  ticketClick(params: {
    artistName: string;
    tourName: string;
    city: string;
    date: string;
    price?: number;
  }): void {
    this.push({
      event: 'ticket_click',
      artist_name: params.artistName,
      tour_name: params.tourName,
      event_city: params.city,
      event_date: params.date,
      ticket_price: params.price ?? null,
    });
  }

  // ── User leaving to booking subdomain ────────────────────────────
  bookingRedirect(params: {
    artistName: string;
    tourName: string;
    city: string;
    bookingId: string;
  }): void {
    this.push({
      event: 'booking_redirect',
      artist_name: params.artistName,
      tour_name: params.tourName,
      event_city: params.city,
      booking_id: params.bookingId,
    });
  }

  // ── Communication clicks ──────────────────────────────────────────
  phoneClick(source: string): void {
    this.push({ event: 'phone_click', click_source: source });
  }

  whatsappClick(source: string): void {
    this.push({ event: 'whatsapp_click', click_source: source });
  }

  emailClick(source: string): void {
    this.push({ event: 'email_click', click_source: source });
  }

  // ── Contact form submitted successfully ──────────────────────────
  contactFormSubmit(): void {
    this.push({ event: 'contact_form_submit' });
  }

  // ── Social media link clicked ─────────────────────────────────────
  socialClick(platform: string, source: string): void {
    this.push({ event: 'social_click', platform, click_source: source });
  }
}
