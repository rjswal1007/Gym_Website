import { Component, computed, signal } from '@angular/core';
import { Reveal } from '../shared/reveal';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// Sample schedule — edit to match the real timetable.
const WEEK: Record<string, { time: string; name: string; kind: string }[]> = {
  weekday: [
    { time: '06:00', name: 'Sunrise Yoga', kind: 'Yoga' },
    { time: '08:00', name: 'Strength Foundations', kind: 'Weights' },
    { time: '18:00', name: 'Zumba Party', kind: 'Zumba' },
    { time: '19:30', name: 'Power Lifting Clinic', kind: 'Weights' },
  ],
  sat: [
    { time: '07:00', name: 'Vinyasa Flow', kind: 'Yoga' },
    { time: '09:00', name: 'Zumba Party', kind: 'Zumba' },
    { time: '11:00', name: 'Open Floor Coaching', kind: 'Bodybuilding' },
  ],
  sun: [
    { time: '08:00', name: 'Restorative Yoga', kind: 'Yoga' },
    { time: '10:00', name: 'Zumba Social', kind: 'Zumba' },
  ],
};

function scheduleFor(day: string) {
  if (day === 'Sat') return WEEK['sat'];
  if (day === 'Sun') return WEEK['sun'];
  return WEEK['weekday'];
}

@Component({
  selector: 'app-timetable',
  imports: [Reveal],
  template: `
    <div class="center" reveal>
      <span class="eyebrow">Class timetable</span>
      <h2 class="title">Find your <em>slot</em></h2>
      <p class="lead">Sample weekly schedule — confirm times at the front desk.</p>
    </div>
    <div class="tabs" role="tablist" reveal>
      @for (d of days; track d) {
        <button
          role="tab"
          [attr.aria-selected]="day() === d"
          [class.on]="day() === d"
          (click)="day.set(d)"
        >
          {{ d }}
        </button>
      }
    </div>
    <ul class="list">
      @for (c of classes(); track c.time) {
        <li>
          <time>{{ c.time }}</time
          ><strong>{{ c.name }}</strong
          ><span>{{ c.kind }}</span>
        </li>
      }
    </ul>
  `,
  styles: `
    .tabs {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin: 48px 0 28px;
      flex-wrap: wrap;
    }
    .tabs button {
      background: none;
      border: 1px solid var(--line);
      color: var(--muted);
      padding: 12px 22px;
      border-radius: 999px;
      font: 600 0.78rem var(--sans);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s;
    }
    .tabs button:hover {
      color: var(--text);
      border-color: var(--gold);
    }
    .tabs .on {
      background: var(--gold-grad);
      color: #111;
      border-color: transparent;
    }
    .list {
      list-style: none;
      max-width: 760px;
      margin: 0 auto;
      padding: 0;
    }
    li {
      display: grid;
      grid-template-columns: 90px 1fr auto;
      gap: 16px;
      align-items: center;
      padding: 22px 8px;
      border-bottom: 1px solid var(--line);
      animation: in 0.5s var(--ease) both;
    }
    time {
      font: 500 1.5rem var(--serif);
      color: var(--gold-2);
    }
    li span {
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
      border: 1px solid var(--line);
      padding: 6px 12px;
      border-radius: 999px;
    }
    @keyframes in {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
    }
    @media (max-width: 520px) {
      li {
        grid-template-columns: 70px 1fr;
      }
      li span {
        display: none;
      }
    }
  `,
})
export class Timetable {
  protected readonly days = DAYS;
  protected readonly day = signal(DAYS[(new Date().getDay() + 6) % 7]);
  protected readonly classes = computed(() => scheduleFor(this.day()));
}
