export const calculateAspectRatio = (width: number, height: number): number => {
  if (!width || !height) {
    return 0;
  }

  return Number((width / height).toFixed(2));
};
