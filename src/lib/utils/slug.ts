const removeAccents = (input: string): string => {
  return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const slug = (input: string): string => {
  // Remove special characters using regular expression
  let slug = removeAccents(input.replaceAll('-', ' ')).replace(/[^\w\s]/gi, '');

  // Convert to lowercase
  slug = slug.toLowerCase();

  // Replace spaces with dashes
  slug = slug.replace(/\s+/g, '-');
  return slug;
};
