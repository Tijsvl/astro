export const prettyDate = (input: string | number, format?: 'extended' | 'short' | 'numeric' | 'html'): string => {
  const str = String(input);

  // Parse the input date string
  const year = str.substr(0, 4);
  const month = parseInt(str.substr(4, 2), 10);
  const day = parseInt(str.substr(6, 2), 10);

  if (format === 'html') {
    return year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
  }

  if (format === 'numeric') {
    return String(day).padStart(2, '0') + '.' + String(month).padStart(2, '0') + '.' + year.substring(2, 4);
  }

  // Define month names
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  if (format === 'short') {
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  }

  // Get the month name
  const monthName = months[month - 1];

  let daySuffix;
  if (format === 'extended') {
    // Get the day suffix
    switch (day % 10) {
      case 1:
        daySuffix = 'st';
        break;
      case 2:
        daySuffix = 'nd';
        break;
      case 3:
        daySuffix = 'rd';
        break;
      default:
        daySuffix = 'th';
    }
  }

  if (format === 'short' || !format) {
    daySuffix = '';
  }

  // Format the date
  const formattedDate = `${monthName} ${day}${daySuffix}, ${year}`;

  return formattedDate;
};

export const prettyText = (input: string): string => {
  return input.replaceAll('_', ' ');
};
