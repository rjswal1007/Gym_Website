import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../shared/reveal';
import { Timetable } from './timetable';
import { Bmi } from './bmi';
import { Faq } from './faq';
import { Contact } from './contact';
import { FACILITIES, PHOTOS, PLANS } from '../shared/data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Reveal, Timetable, Bmi, Faq, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly photos = PHOTOS;
  protected readonly facilities = FACILITIES;
  protected readonly plans = PLANS;
  protected readonly stats = [
    { n: '12k+', l: 'Sq. ft. training floor' },
    { n: '40+', l: 'Weekly classes' },
    { n: '25', l: 'Certified coaches' },
    { n: '5', l: 'Membership tiers' },
  ];
  protected readonly reasons = [
    {
      t: 'State-of-the-art equipment',
      d: 'Globally proven, regularly serviced machines and free weights for every goal.',
    },
    {
      t: 'Expert coaching',
      d: 'Certified trainers who build programmes around you, not a template.',
    },
    {
      t: 'Wellness for everyone',
      d: 'Corporate and community wellness programmes that bring fitness to you.',
    },
  ];
}
