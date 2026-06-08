import { slug } from '../utils/slug.js';

export { slug };

export type Gallery = {
  name: string;
  date: number;
  venue: string;
  city: string;
  country: string;
};

export const unixToDate = (unix: number) => {
  const date = new Date(unix * 1000);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

export const galleryUrl = (gallery: Gallery) => {
  return `/galleries/${slug(gallery.name)}/${slug(gallery.venue)}/${unixToDate(gallery.date)}`;
};

export const galleries: Gallery[] = [
  { name: 'Knocked Loose', date: 1779494400, venue: 'Slam Dunk Festival', city: 'Hatfield', country: 'England' },
  { name: 'Malevolence', date: 1779494400, venue: 'Slam Dunk Festival', city: 'Hatfield', country: 'England' },
  { name: 'Comeback Kid', date: 1779494400, venue: 'Slam Dunk Festival', city: 'Hatfield', country: 'England' },
  { name: 'Zebrahead', date: 1779494400, venue: 'Slam Dunk Festival', city: 'Hatfield', country: 'England' },
  { name: 'Bayside', date: 1779494400, venue: 'Slam Dunk Festival', city: 'Hatfield', country: 'England' },
  { name: 'Fit For A King', date: 1773705600, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Memphis May Fire', date: 1773705600, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Acres', date: 1773705600, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: '156/Silence', date: 1773705600, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Waterparks', date: 1773532800, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Thrice', date: 1773187200, venue: 'Melkweg', city: 'Amsterdam', country: 'The Netherlands' },
  { name: 'Militarie Gun', date: 1770422400, venue: 'Ladybird Skatepark', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Spite House', date: 1770422400, venue: 'Ladybird Skatepark', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'God Complex', date: 1770163200, venue: 'Patronaat', city: 'Haarlem', country: 'The Netherlands' },
  { name: 'Counterparts', date: 1770163200, venue: 'Patronaat', city: 'Haarlem', country: 'The Netherlands' },
  { name: 'Sunami', date: 1770163200, venue: 'Patronaat', city: 'Haarlem', country: 'The Netherlands' },
  { name: 'One Step Closer', date: 1770163200, venue: 'Patronaat', city: 'Haarlem', country: 'The Netherlands' },
  { name: 'Mayday Parade', date: 1769644800, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'All Time Low', date: 1769644800, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Static Dress', date: 1769558400, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Paleface Swiss', date: 1769558400, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Stick To Your Guns', date: 1769558400, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Gideon', date: 1768867200, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Madball', date: 1768867200, venue: '013', city: 'Tilburg', country: 'The Netherlands' },
  { name: 'Electric Callboy', date: 1768608000, venue: 'Ahoy', city: 'Rotterdam', country: 'The Netherlands' },
  { name: 'Bury Tomorrow', date: 1768608000, venue: 'Ahoy', city: 'Rotterdam', country: 'The Netherlands' },
  { name: 'Wargasm', date: 1768608000, venue: 'Ahoy', city: 'Rotterdam', country: 'The Netherlands' },
  { name: 'Landmvrks', date: 1765929600, venue: '013', city: 'Tilburg', country: 'The Netherlands' }
];
