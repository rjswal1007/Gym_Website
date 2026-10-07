import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT } from './data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="wrap grid">
        <div>
          <a routerLink="/" class="logo">PULSE<b>8</b></a>
          <p class="about">
            A premium unisex fitness club in Greater Noida — world-class equipment, expert coaching,
            and a community that keeps you going.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <a routerLink="/about">About</a>
          <a routerLink="/gallery">Gallery</a>
          <a routerLink="/join">Membership</a>
        </div>
        <div>
          <h4>Facilities</h4>
          <a routerLink="/" fragment="facilities">Bodybuilding</a>
          <a routerLink="/" fragment="facilities">Weight Lifting</a>
          <a routerLink="/" fragment="facilities">Yoga</a>
          <a routerLink="/" fragment="facilities">Zumba</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a [href]="'mailto:' + c.email">{{ c.email }}</a>
          @for (p of c.phones; track p) {
            <a [href]="'tel:' + p">{{ p }}</a>
          }
          <a [href]="c.map" target="_blank" rel="noopener">{{ c.address }}</a>
        </div>
      </div>
      <div class="wrap legal">© {{ year }} Pulse8 Fitness. All rights reserved.</div>
    </footer>
  `,
  styles: `
    footer {
      background: var(--bg-2);
      border-top: 1px solid var(--line);
      padding: 90px 0 30px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
      gap: 48px;
    }
    .logo {
      font: 700 1.6rem/1 var(--serif);
      letter-spacing: 0.14em;
    }
    .logo b {
      color: var(--gold);
    }
    .about {
      color: var(--muted);
      margin-top: 20px;
      max-width: 34ch;
      font-size: 0.95rem;
    }
    h4 {
      font: 600 0.75rem var(--sans);
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 20px;
    }
    div > a:not(.logo) {
      display: block;
      color: var(--muted);
      font-size: 0.95rem;
      padding: 4px 0;
      transition:
        color 0.3s,
        transform 0.3s;
    }
    div > a:not(.logo):hover {
      color: var(--text);
      transform: translateX(4px);
    }
    .legal {
      margin-top: 70px;
      padding-top: 26px;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 0.85rem;
    }
    @media (max-width: 860px) {
      .grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media (max-width: 520px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class Footer {
  protected readonly c = CONTACT;
  protected readonly year = new Date().getFullYear();
}
