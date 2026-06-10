import { db } from '@firebase/firebase.server';

type TGallery = {
  id: string;
  created_at: number;
  date: string;
  artist: string;
  artistSlug: string;
  venue: string;
  venueSlug: string;
  city: string;
  citySlug: string;
  country: string;
  countrySlug: string;
  thumbnail: string;
  landscape: string;
  portrait: string;
  video: string;
  festival: boolean;
};

export const fetchGalleries = async () => {
  const querySnapshot = await db.collection('galleries').get();
  const galleries: TGallery[] = [];

  querySnapshot.forEach((doc: any) => {
    galleries.push({
      ...(doc.data() as TGallery),
      id: doc.id
    });
  });

  return galleries;
};
