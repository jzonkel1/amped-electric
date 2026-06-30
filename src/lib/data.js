// ============================================================
//  AMPED ELECTRIC — single source of truth.
//  Edit copy, contact info, services and reviews here only.
// ============================================================

export const COMPANY = {
  name: 'AMPED Electric',
  owner: 'Rudee Deleon',
  role: 'Licensed Electrician',
  phoneDisplay: '(361) 739-1451',
  phoneRaw: '3617391451',
  phoneHref: 'tel:+13617391451',
  email: 'ampedelectric444@gmail.com',
  city: 'Corpus Christi, Texas',
  hours: '8 AM – 9 PM · Sunday through Saturday',
  serviceArea: ['Corpus Christi', 'Padre Island', 'Flour Bluff', 'Portland', 'Rockport'],
  badge: 'Neighborhood Favorite 2024',
}

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why AMPED', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const TRUST_BADGES = [
  'Neighborhood Favorite 2024',
  'Licensed Electrician',
  'Locally Owned',
  'Reasonable Pricing',
  'Responsive Service',
]

export const SERVICES = [
  {
    icon: 'wrench',
    title: 'Electrical Repairs',
    desc: 'Fast, lasting fixes for outlets, switches, wiring faults and anything that has stopped working the way it should.',
  },
  {
    icon: 'panel',
    title: 'Panel Upgrades',
    desc: 'Modernize an outdated or overloaded panel for safer, higher-capacity power throughout your home.',
  },
  {
    icon: 'bulb',
    title: 'Lighting Installation',
    desc: 'Interior, exterior and custom LED lighting designed to make your home look and feel its best.',
  },
  {
    icon: 'fan',
    title: 'Ceiling Fans',
    desc: 'Clean, secure ceiling-fan installs and replacements — including new boxes and switch wiring.',
  },
  {
    icon: 'circuit',
    title: 'Dedicated Circuits',
    desc: 'New circuits for appliances, workshops, and high-draw equipment so nothing trips or overloads.',
  },
  {
    icon: 'transfer',
    title: 'Transfer Switch Installation',
    desc: 'Safe, code-compliant transfer switches so you can run your home on backup power with confidence.',
  },
  {
    icon: 'generator',
    title: 'Generator Connections',
    desc: 'Professional generator hookups that keep the lights on when the grid goes down.',
  },
  {
    icon: 'ev',
    title: 'EV Charger Installation',
    desc: 'Level 2 home charging stations installed cleanly and correctly for fast, reliable charging.',
  },
  {
    icon: 'search',
    title: 'Troubleshooting',
    desc: 'We track down the root cause of flickering, dead outlets and mystery breakers — and fix it right.',
  },
  {
    icon: 'building',
    title: 'Commercial Electrical',
    desc: 'Dependable electrical service for shops, offices and small commercial spaces across the Coastal Bend.',
  },
  {
    icon: 'bolt',
    title: 'Emergency Electrical Service',
    desc: 'Power loss or a dangerous fault? We respond quickly when you need an electrician most.',
  },
  {
    icon: 'house',
    title: 'New Construction Wiring',
    desc: 'Full residential wiring for new builds and additions, done to a high standard from the ground up.',
  },
]

export const WHY_ROWS = [
  'Clear communication',
  'Reasonable pricing',
  'Prompt scheduling',
  'Quality workmanship',
  'Clean job sites',
  'Respect for your home',
  'Free estimates',
  'Local owner',
]

// Paraphrased from real Nextdoor feedback — not fabricated.
export const REVIEWS = [
  {
    quote:
      'Thank you so much for installing the two new outlets, with two separate circuits and two breakers. Rudee and Joe are awesome — we are looking forward to hiring them for our future house projects!',
    name: 'Verified Neighbor',
    detail: 'Outlet & Circuit Install',
  },
  {
    quote:
      'Excellent work ethic and truly professional from start to finish. Courteous, skilled, and they took the time to do the job the right way.',
    name: 'Coastal Bend Homeowner',
    detail: 'Residential Electrical',
  },
  {
    quote:
      'Reasonable pricing and a same-day response. It is rare to find an electrician this dependable — we will absolutely use AMPED again.',
    name: 'Repeat Customer',
    detail: 'Same-Day Service',
  },
]

export const PROCESS = [
  { n: '01', title: 'Contact Us', desc: 'Call or request an estimate. We listen first and answer honestly.' },
  { n: '02', title: 'Free Estimate', desc: 'A clear, fair quote with no pressure and no surprises.' },
  { n: '03', title: 'Professional Installation', desc: 'Quality workmanship, clean job site, respect for your home.' },
  { n: '04', title: 'Safe, Reliable Power', desc: 'Enjoy electrical work done right — backed by a local owner.' },
]

export const PROJECT_PHOTOS = [
  { src: './assets/panel-1.jpg', alt: 'AMPED Electric residential panel and meter upgrade — riser and new service panel installed' },
  { src: './assets/panel-2.jpg', alt: 'New service mast and weatherhead installed during an AMPED Electric panel upgrade in Corpus Christi' },
  { src: './assets/panel-3.jpg', alt: 'Clean conduit run and new exterior panel from an AMPED Electric service upgrade' },
]
