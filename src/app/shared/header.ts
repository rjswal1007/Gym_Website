import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header [class.scrolled]="scrolled()" [class.open]="open()">
      <div class="wrap bar">
        <a routerLink="/" class="logo" (click)="open.set(false)" aria-label="Pulse8 home"
          >PULSE<b>8</b></a
        >
        <nav id="nav" aria-label="Primary">
          @for (l of links; track l.path) {
            <a
              [routerLink]="l.path"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              (click)="open.set(false)"
              >{{ l.label }}</a
            >
          }
          <a routerLink="/join" class="btn btn-gold cta" (click)="open.set(false)">Join now</a>
        </nav>
        <button
          class="burger"
          (click)="open.set(!open())"
          [attr.aria-expanded]="open()"
          aria-controls="nav"
          aria-label="Toggle menu"
        >
          <span></span><span></span>
        </button>
      </div>
    </header>
  `,
  styles: `
    header {
      position: fixed;
      inset: 0 0 auto;
      z-index: 50;
      transition:
        background 0.4s,
        padding 0.4s,
        border-color 0.4s;
      padding: 22px 0;
      border-bottom: 1px solid transparent;
    }
    header.scrolled,
    header.open {
      background: rgba(11, 11, 13, 0.82);
      backdrop-filter: blur(18px);
      padding: 14px 0;
      border-color: var(--line);
    }
    .bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo {
      font: 700 1.6rem/1 var(--serif);
      letter-spacing: 0.14em;
    }
    .logo b {
      color: var(--gold);
      margin-left: 2px;
    }
    nav {
      display: flex;
      align-items: center;
      gap: 36px;
    }
    nav a:not(.btn) {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
      position: relative;
      transition: color 0.3s;
    }
    nav a:not(.btn)::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      height: 1px;
      width: 0;
      background: var(--gold);
      transition: width 0.4s var(--ease);
    }
    nav a:not(.btn):hover,
    nav a.active {
      color: var(--text);
    }
    nav a:not(.btn):hover::after,
    nav a.active::after {
      width: 100%;
    }
    .cta {
      padding: 12px 24px;
    }
    .burger {
      display: none;
      background: none;
      border: 0;
      width: 44px;
      height: 44px;
      cursor: pointer;
      position: relative;
    }
    .burger span {
      position: absolute;
      left: 10px;
      right: 10px;
      height: 2px;
      background: var(--text);
      transition: transform 0.4s var(--ease);
    }
    .burger span:first-child {
      top: 17px;
    }
    .burger span:last-child {
      top: 25px;
    }
    .open .burger span:first-child {
      transform: translateY(4px) rotate(45deg);
    }
    .open .burger span:last-child {
      transform: translateY(-4px) rotate(-45deg);
    }
    @media (max-width: 860px) {
      .burger {
        display: block;
      }
      header.scrolled,
      header.open {
        backdrop-filter: none;
        background: rgba(11, 11, 13, 0.96);
      }
      nav {
        position: fixed;
        inset: 0;
        background: var(--bg);
        flex-direction: column;
        justify-content: center;
        gap: 28px;
        opacity: 0;
        visibility: hidden;
        transition:
          opacity 0.4s,
          visibility 0.4s;
        z-index: -1;
      }
      nav a:not(.btn) {
        font-size: 1.1rem;
      }
      .open nav {
        opacity: 1;
        visibility: visible;
      }
    }
  `,
})
export class Header {
  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }
}
