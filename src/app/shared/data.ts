const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const PHOTOS = {
  hero: img('1571902943202-507ec2618e8f', 2000),
  floor: img('1593079831268-3381b0db4a77', 1400),
  barbell: img('1517836357463-d25dfeac3438', 1400),
  yoga: img('1544367567-0f2fcb009e0b', 1400),
  class: img('1518611012118-696072aa579a', 1400),
  ropes: img('1599058917212-d750089bc07e', 1400),
  lifter: img('1574680096145-d05b474e2155', 1400),
  shoe: img('1549060279-7e168fcee0c2', 1400),
  weights: img('1534438327276-14e5300c3a48', 1400),
};

export interface Facility {
  id: string;
  name: string;
  blurb: string;
  photo: string;
  tag: string;
}
export const FACILITIES: Facility[] = [
  {
    id: 'bodybuilding',
    name: 'Bodybuilding',
    tag: 'Unisex floor',
    photo: PHOTOS.floor,
    blurb:
      'A spacious, climate-controlled unisex floor with premium machines and free weights for every muscle group.',
  },
  {
    id: 'weight-lifting',
    name: 'Weight Lifting',
    tag: 'Strength zone',
    photo: PHOTOS.barbell,
    blurb:
      'Competition-grade platforms, racks and plates, coached by certified strength specialists.',
  },
  {
    id: 'yoga',
    name: 'Yoga',
    tag: 'Mind & body',
    photo: PHOTOS.yoga,
    blurb: 'Sunrise and evening flows in a calm studio to build mobility, balance and focus.',
  },
  {
    id: 'zumba',
    name: 'Zumba',
    tag: 'Group energy',
    photo: PHOTOS.class,
    blurb: 'High-energy dance-fitness classes that burn calories and feel like a party.',
  },
];

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  featured?: boolean;
}
export const PLANS: Plan[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 11000,
    features: ['Full gym floor access', 'Locker & shower', 'Orientation session'],
  },
  {
    id: 'silver',
    name: 'Silver',
    price: 13500,
    features: ['Everything in Bronze', 'Group classes', 'Monthly body analysis', 'Diet guidance'],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 14000,
    featured: true,
    features: [
      'Everything in Silver',
      'Personal trainer sessions',
      'Steam & recovery',
      'Priority booking',
      'Guest passes',
    ],
  },
  {
    id: 'yoga',
    name: 'Yoga',
    price: 10000,
    features: ['Unlimited yoga classes', 'Meditation workshops', 'Mat & props included'],
  },
  {
    id: 'zumba',
    name: 'Zumba',
    price: 9500,
    features: ['Unlimited zumba classes', 'Weekend dance socials', 'Locker access'],
  },
];

export const CONTACT = {
  email: 'pulse8@gmail.com',
  phones: ['+919876543210', '+918893248384', '+917894848934'],
  address: 'Greater Noida, Uttar Pradesh, India',
  map: "https://www.google.com/maps/place/Gold's+Gym+Greater+Noida/@28.4760736,77.5204326,15z",
};
