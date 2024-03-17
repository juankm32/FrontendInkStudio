// *---------- BASIC ----------* //

export const yearsToMonths = (years: number): number => {
  return years * 12;
};

export const monthsToWeeks = (months: number): number => {
  return months * 4.33;
};

export const weeksToDays = (weeks: number): number => {
  return weeks * 7;
};

export const daysToHours = (days: number): number => {
  return days * 24;
};

export const hoursToMinutes = (hours: number): number => {
  return hours * 60;
};

export const minutesToSeconds = (minutes: number): number => {
  return minutes * 60;
};

export const secondsToMs = (seconds: number): number => {
  return seconds * 1000;
};

// *---------- YEARS ----------* //

export const yearsToMs = (years: number): number => {
  const months = yearsToMonths(years);
  const weeks = monthsToWeeks(months);
  const days = weeksToDays(weeks);
  const hours = daysToHours(days);
  const minutes = hoursToMinutes(hours);
  const seconds = minutesToSeconds(minutes);
  return secondsToMs(seconds);
};

// *---------- DAYS ----------* //

export const daysToMs = (days: number): number => {
  const hours = daysToHours(days);
  const minutes = hoursToMinutes(hours);
  const seconds = minutesToSeconds(minutes);
  return secondsToMs(seconds);
};

// *---------- HOURS ----------* //

export const hoursToMs = (hours: number) => {
  const minutes = hoursToMinutes(hours);
  const seconds = minutesToSeconds(minutes);
  return secondsToMs(seconds);
};

// *---------- MINUTES ----------* //

export const minutesToMs = (minutes: number): number => {
  const seconds = minutesToSeconds(minutes);
  return secondsToMs(seconds);
};
