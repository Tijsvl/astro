import { slug } from '@utils/slug';
const { PUBLIC_BUNNY_PULLZONE } = import.meta.env;

export const createBunnyPrefix = (artist: string, venue: string, date: string): string => {
  return PUBLIC_BUNNY_PULLZONE + '/galleries/' + slug(artist) + '/' + slug(venue) + '/' + date;
};

export const bunnyLarge = (path: string): string => {
  return PUBLIC_BUNNY_PULLZONE + path.replace('.jpg', '_medium.jpg');
};

export const bunnyBackdrop = (image: string, size: 'small' | 'medium' | 'large'): string => {
  return PUBLIC_BUNNY_PULLZONE + image.replace(PUBLIC_BUNNY_PULLZONE, '').replace('.jpg', `_${size}.jpg`);
};
