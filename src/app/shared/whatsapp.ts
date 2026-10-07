import { Component } from '@angular/core';
import { CONTACT } from './data';

const MESSAGE = "Hi Pulse8, I'd like to know more about membership";

@Component({
  selector: 'app-whatsapp',
  template: `
    <a [href]="link" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M4 4h16v12H8l-4 4z" />
      </svg>
    </a>
  `,
  styles: `
    a {
      position: fixed;
      right: 22px;
      bottom: 22px;
      z-index: 40;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: #25d366;
      color: #fff;
      box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
      transition: transform 0.4s var(--ease);
    }
    a:hover {
      transform: scale(1.1);
    }
  `,
})
export class Whatsapp {
  protected readonly link = `https://wa.me/${CONTACT.phones[0].replace('+', '')}?text=${encodeURIComponent(MESSAGE)}`;
}
