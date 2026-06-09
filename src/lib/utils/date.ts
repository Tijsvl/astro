export type GalleryDateInput =
  | number
  | string
  | {
      seconds: number;
    };

const isEightDigitDate = (value: number): boolean => value >= 10000000 && value <= 99999999;

const yyyymmddToUnix = (value: number): number => {
  const year = Math.floor(value / 10000);
  const month = Math.floor(value / 100) % 100;
  const day = value % 100;

  return Math.floor(Date.UTC(year, month - 1, day) / 1000);
};

export const galleryDateToUnix = (value: GalleryDateInput): number => {
  if (typeof value === 'number') {
    if (isEightDigitDate(value)) {
      return yyyymmddToUnix(value);
    }

    return value;
  }

  if (typeof value === 'string') {
    const parsedNumber = Number(value);

    if (!Number.isNaN(parsedNumber)) {
      return galleryDateToUnix(parsedNumber);
    }

    const parsedDate = Date.parse(value);
    if (!Number.isNaN(parsedDate)) {
      return Math.floor(parsedDate / 1000);
    }
  }

  return value.seconds;
};
