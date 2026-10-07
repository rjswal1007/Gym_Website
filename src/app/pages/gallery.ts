import { Component, HostListener, signal } from '@angular/core';
import { Reveal } from '../shared/reveal';
import { PHOTOS } from '../shared/data';

@Component({
  selector: 'app-gallery',
  imports: [Reveal],
  template: `
    <section class="page-hero">
      <div class="wrap">
        <span class="eyebrow">Gallery</span>
        <h1>Inside <em>Pulse8</em></h1>
        <p>A look at the floor, the classes and the people who make this place move.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap masonry">
        @for (p of items; track p.src; let i = $index) {
          <button
            class="tile"
            [reveal]="(i % 3) * 0.1"
            (click)="open(i)"
            [attr.aria-label]="'View ' + p.alt"
          >
            <img [src]="p.src" [alt]="p.alt" loading="lazy" />
            <span>{{ p.alt }}</span>
          </button>
        }
      </div>
    </section>

    @if (current() !== null) {
      <div
        class="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        (click)="close()"
      >
        <button class="x" (click)="close()" aria-label="Close">✕</button>
        <button class="nav prev" (click)="step(-1, $event)" aria-label="Previous">‹</button>
        <img
          [src]="items[current()!].full"
          [alt]="items[current()!].alt"
          (click)="$event.stopPropagation()"
        />
        <button class="nav next" (click)="step(1, $event)" aria-label="Next">›</button>
      </div>
    }
  `,
  styles: `
    .masonry {
      columns: 3 320px;
      column-gap: 20px;
    }
    .tile {
      position: relative;
      display: block;
      width: 100%;
      margin: 0 0 20px;
      padding: 0;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      overflow: hidden;
      background: var(--surface);
      cursor: zoom-in;
      break-inside: avoid;
    }
    .tile img {
      width: 100%;
      height: auto;
      transition:
        transform 1.2s var(--ease),
        filter 0.6s;
    }
    .tile:hover img {
      transform: scale(1.06);
    }
    .tile span {
      position: absolute;
      inset: auto 0 0;
      padding: 40px 22px 18px;
      text-align: left;
      font: 600 0.75rem var(--sans);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--text);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent);
      opacity: 0;
      transform: translateY(10px);
      transition: 0.5s var(--ease);
    }
    .tile:hover span,
    .tile:focus-visible span {
      opacity: 1;
      transform: none;
    }
    .lightbox {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: rgba(5, 5, 7, 0.94);
      backdrop-filter: blur(10px);
      display: grid;
      place-items: center;
      animation: fade 0.3s;
      cursor: zoom-out;
    }
    .lightbox img {
      max-width: min(92vw, 1300px);
      max-height: 86vh;
      border-radius: 12px;
      cursor: default;
      box-shadow: 0 30px 80px #000;
    }
    .x,
    .nav {
      position: absolute;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid var(--line);
      color: var(--text);
      width: 52px;
      height: 52px;
      border-radius: 50%;
      font-size: 1.4rem;
      cursor: pointer;
      transition:
        background 0.3s,
        color 0.3s;
    }
    .x:hover,
    .nav:hover {
      background: var(--gold);
      color: #111;
    }
    .x {
      top: 24px;
      right: 24px;
      font-size: 1rem;
    }
    .nav {
      top: 50%;
      margin-top: -26px;
      font-size: 2rem;
      line-height: 1;
      padding-bottom: 4px;
    }
    .prev {
      left: 24px;
    }
    .next {
      right: 24px;
    }
    @keyframes fade {
      from {
        opacity: 0;
      }
    }
  `,
})
export class Gallery {
  protected readonly items = [
    { src: PHOTOS.floor, alt: 'Cardio floor' },
    { src: PHOTOS.barbell, alt: 'Barbell training' },
    { src: PHOTOS.yoga, alt: 'Sunrise yoga' },
    { src: PHOTOS.class, alt: 'Group class' },
    { src: PHOTOS.lifter, alt: 'Strength session' },
    { src: PHOTOS.ropes, alt: 'Battle ropes' },
    { src: PHOTOS.shoe, alt: 'Deadlift prep' },
    { src: PHOTOS.hero, alt: 'Training hall' },
    { src: PHOTOS.weights, alt: 'Iron & chalk' },
  ].map((item) => ({ ...item, full: item.src.replace('w=1400', 'w=2000') }));

  protected readonly current = signal<number | null>(null);

  open(i: number) {
    this.current.set(i);
  }
  close() {
    this.current.set(null);
  }
  step(d: number, e: Event) {
    e.stopPropagation();
    this.current.update((c) => (c === null ? c : (c + d + this.items.length) % this.items.length));
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.current() === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowRight') this.step(1, e);
    if (e.key === 'ArrowLeft') this.step(-1, e);
  }
}
