import { Component } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { CONTACT } from '../shared/data';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  template: `
    <div class="center" reveal>
      <span class="eyebrow">Visit us</span>
      <h2 class="title">Come <em>say hello</em></h2>
    </div>
    <div class="cards">
      <a class="c" [href]="c.map" target="_blank" rel="noopener" reveal
        ><small>Location</small><strong>{{ c.address }}</strong
        ><span>Open in Maps →</span></a
      >
      <a class="c" [href]="'tel:' + c.phones[0]" reveal=".1"
        ><small>Call</small><strong>{{ c.phones[0] }}</strong
        ><span>Tap to call →</span></a
      >
      <a class="c" [href]="'mailto:' + c.email" reveal=".2"
        ><small>Email</small><strong>{{ c.email }}</strong
        ><span>Write to us →</span></a
      >
    </div>
  `,
  styles: `
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      margin-top: 56px;
    }
    .c {
      display: block;
      padding: 36px 30px;
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      transition:
        transform 0.5s var(--ease),
        border-color 0.4s;
    }
    .c:hover {
      transform: translateY(-6px);
      border-color: var(--gold);
    }
    small {
      font-size: 0.7rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--gold);
    }
    strong {
      display: block;
      font: 500 1.4rem/1.3 var(--serif);
      margin: 12px 0 22px;
      overflow-wrap: anywhere;
    }
    span {
      color: var(--muted);
      font-size: 0.85rem;
    }
  `,
})
export class Contact {
  protected readonly c = CONTACT;
}
