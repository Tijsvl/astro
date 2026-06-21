import { slug } from '@utils/slug.js';

export { slug };

export type Gallery = {
  name: string;
  date: number;
  unix: number;
  venue: string;
  city: string;
  country: string;
  festival: boolean;
};

export const unixToDate = (unix: number) => {
  const date = new Date(unix * 1000);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

export const galleryUrl = (gallery: Gallery) => {
  return `/galleries/${slug(gallery.name)}/${slug(gallery.venue)}/${unixToDate(gallery.unix)}`;
};
