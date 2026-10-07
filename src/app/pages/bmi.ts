import { Component, computed, signal } from '@angular/core';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-bmi',
  imports: [Reveal],
  template: `
    <div class="box" reveal>
      <div>
        <span class="eyebrow">Know your numbers</span>
        <h2 class="title">BMI <em>calculator</em></h2>
        <p class="lead">
          A quick starting point. Our coaches will do a full body analysis when you join.
        </p>
      </div>
      <div class="calc">
        <label
          >Height (cm)<input
            type="number"
            min="100"
            max="250"
            [value]="h()"
            (input)="h.set(+$any($event.target).value)"
        /></label>
        <label
          >Weight (kg)<input
            type="number"
            min="25"
            max="300"
            [value]="w()"
            (input)="w.set(+$any($event.target).value)"
        /></label>
        <div class="out" aria-live="polite">
          @if (bmi(); as b) {
            <strong>{{ b.toFixed(1) }}</strong
            ><span>{{ label() }}</span>
          } @else {
            <span>Enter valid values</span>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      padding: clamp(32px, 5vw, 64px);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: linear-gradient(135deg, rgba(201, 164, 92, 0.1), var(--surface) 60%);
    }
    .calc {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    label {
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
    }
    input {
      display: block;
      width: 100%;
      margin-top: 10px;
      padding: 15px 16px;
      background: var(--bg);
      border: 1px solid var(--line);
      border-radius: 12px;
      color: var(--text);
      font: 1rem var(--sans);
    }
    input:focus {
      outline: none;
      border-color: var(--gold);
    }
    .out {
      grid-column: 1 / -1;
      text-align: center;
      padding: 26px;
      border-radius: 14px;
      background: var(--bg);
      border: 1px solid var(--line);
    }
    .out strong {
      display: block;
      font: 600 3.4rem/1 var(--serif);
      background: var(--gold-grad);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .out span {
      color: var(--muted);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    @media (max-width: 860px) {
      .box {
        grid-template-columns: 1fr;
        gap: 32px;
      }
    }
  `,
})
export class Bmi {
  protected readonly h = signal(170);
  protected readonly w = signal(70);
  protected readonly bmi = computed(() => {
    const heightM = this.h() / 100;
    const weightKg = this.w();
    const isValid = heightM >= 1 && weightKg >= 25;
    return isValid ? weightKg / (heightM * heightM) : null;
  });
  protected readonly label = computed(() => {
    const bmi = this.bmi() ?? 0;
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Healthy range';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  });
}
