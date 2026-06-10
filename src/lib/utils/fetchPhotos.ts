import { calculateAspectRatio } from '@utils/calculateAspectRatio';

type TFetchPhotos = {
  date: string;
  artist: string;
  artistSlug: string;
  venue: string;
  venueSlug: string;
  city: string;
  citySlug: string;
};

type MasonryImage = {
  file: string;
  width: number;
  height: number;
  aspectRatio?: number;
};

export const fetchPhotos = async (data: TFetchPhotos) => {
  const { artistSlug, citySlug, date } = data;
  const url = `/api/bunny/${artistSlug}/${citySlug}/${date}`;

  const getUrl = `https://tijsvl.b-cdn.net/galleries/${artistSlug}/${citySlug}/${date}/__images.json`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };

  let photos: MasonryImage[] = [];

  await fetch(getUrl, options)
    .then((res) => res.json())
    .then((response) => {
      photos = response;
    })
    .catch((e) => {
      console.log(e);
    });

  photos.forEach((photo) => {
    photo.aspectRatio = calculateAspectRatio(photo.width, photo.height);
  });

  return photos;
};
