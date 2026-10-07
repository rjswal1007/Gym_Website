import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../shared/reveal';
import { PHOTOS } from '../shared/data';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Reveal],
  template: `
    <section class="page-hero">
      <div class="wrap">
        <span class="eyebrow">About us</span>
        <h1>More than a gym.<br /><em>A transformation.</em></h1>
        <p>
          Pulse8 is about fitness, a healthy lifestyle and a complete change — not just getting into
          shape.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="wrap story">
        <figure reveal>
          <img
            [src]="photos.weights"
            alt="Barbell on a gym floor"
            width="800"
            height="900"
            loading="lazy"
          />
        </figure>
        <div reveal=".15">
          <span class="eyebrow">Our story</span>
          <h2 class="title">Comprehensive health, <em>coached</em></h2>
          <p class="lead">
            We're known for state-of-the-art equipment and fitness knowledge backed by a globally
            proven training module, certified trainers and nutritional counselling — a comprehensive
            approach to every member's overall health and wellbeing.
          </p>
          <p class="lead">
            Beyond our walls, our corporate and community wellness programmes reach people who want
            to get fitter but can't make it to the gym. The goal is the whole experience: fitness, a
            healthy lifestyle and lasting change.
          </p>
          <p class="lead">
            With the support of our members, employees, vendor partners and franchise partners,
            we're working towards <b>#MakingIndiaFit</b> — spreading fitness awareness to as many
            people as possible.
          </p>
        </div>
      </div>
    </section>

    <section class="section values">
      <div class="wrap">
        <div class="center" reveal>
          <span class="eyebrow">What drives us</span>
          <h2 class="title">Our <em>principles</em></h2>
        </div>
        <div class="grid">
          @for (v of values; track v.t; let i = $index) {
            <div class="val" [reveal]="i * 0.1">
              <span>0{{ i + 1 }}</span>
              <h3>{{ v.t }}</h3>
              <p>{{ v.d }}</p>
            </div>
          }
        </div>
        <div class="center" style="margin-top:64px" reveal>
          <a routerLink="/join" class="btn btn-gold">Become a member</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .story {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 80px;
      align-items: center;
    }
    figure {
      margin: 0;
      border-radius: var(--radius);
      overflow: hidden;
      border: 1px solid var(--line);
      aspect-ratio: 4 / 4.6;
    }
    figure img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .lead b {
      color: var(--gold-2);
      font-weight: 600;
    }
    .values {
      background: var(--bg-2);
      border-top: 1px solid var(--line);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
      margin-top: 60px;
    }
    .val {
      padding: 40px 32px;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: var(--surface);
      transition:
        transform 0.5s var(--ease),
        border-color 0.4s;
    }
    .val:hover {
      transform: translateY(-6px);
      border-color: rgba(201, 164, 92, 0.5);
    }
    .val span {
      font: 500 2rem var(--serif);
      color: var(--gold);
    }
    .val h3 {
      font-size: 1.4rem;
      margin: 14px 0 10px;
    }
    .val p {
      color: var(--muted);
      font-size: 0.95rem;
    }
    @media (max-width: 860px) {
      .story {
        grid-template-columns: 1fr;
        gap: 48px;
      }
    }
  `,
})
export class About {
  protected readonly photos = PHOTOS;
  protected readonly values = [
    {
      t: 'Excellence',
      d: 'Premium equipment and spaces that are maintained to a standard you can feel.',
    },
    { t: 'Expertise', d: 'Certified trainers and nutritional counselling guide every programme.' },
    { t: 'Community', d: 'A welcoming, unisex environment where everyone belongs.' },
    { t: 'Wellbeing', d: 'Fitness as a lifestyle — for the body, the mind and the nation.' },
  ];
}
