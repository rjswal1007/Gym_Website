import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header';
import { Footer } from './shared/footer';
import { Whatsapp } from './shared/whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Whatsapp],
  template: `
    <app-header />
    <main><router-outlet /></main>
    <app-footer />
    <app-whatsapp />
  `,
})
export class App {}
