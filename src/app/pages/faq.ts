import { Component } from '@angular/core';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-faq',
  imports: [Reveal],
  template: `
    <div class="center" reveal>
      <span class="eyebrow">FAQ</span>
      <h2 class="title">Good <em>questions</em></h2>
    </div>
    <div class="list" reveal>
      @for (f of faqs; track f.q) {
        <details>
          <summary>{{ f.q }}</summary>
          <p>{{ f.a }}</p>
        </details>
      }
    </div>
  `,
  styles: `
    .list {
      max-width: 780px;
      margin: 56px auto 0;
    }
    details {
      border-bottom: 1px solid var(--line);
    }
    summary {
      list-style: none;
      cursor: pointer;
      padding: 24px 0;
      font: 500 1.25rem var(--serif);
      display: flex;
      justify-content: space-between;
      gap: 20px;
      transition: color 0.3s;
    }
    summary::-webkit-details-marker {
      display: none;
    }
    summary::after {
      content: '+';
      color: var(--gold);
      font-size: 1.6rem;
      line-height: 1;
      transition: transform 0.4s var(--ease);
    }
    details[open] summary::after {
      transform: rotate(45deg);
    }
    summary:hover {
      color: var(--gold-2);
    }
    p {
      color: var(--muted);
      padding: 0 40px 26px 0;
    }
  `,
})
export class Faq {
  protected readonly faqs = [
    {
      q: 'Is Pulse8 open to both men and women?',
      a: 'Yes — it is a unisex gym with a welcoming environment for everyone.',
    },
    {
      q: 'Are the prices inclusive of tax?',
      a: 'All annual membership prices include taxes and charges.',
    },
    {
      q: 'Do you offer personal training?',
      a: 'Personal trainer sessions are included in the Premium plan, with certified coaches and nutritional counselling.',
    },
    {
      q: 'Can I join only for Yoga or Zumba?',
      a: 'Yes. Dedicated Yoga and Zumba memberships give unlimited access to those classes.',
    },
    {
      q: 'How do I pay?',
      a: 'Submit the membership form and our team will contact you to confirm and arrange payment at the front desk.',
    },
  ];
}
