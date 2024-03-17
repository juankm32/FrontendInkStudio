import type { FilterOnArrayParams } from "./types";

export const filterOnArray = <T>(
  array: T[],
  { property, value, exclude }: FilterOnArrayParams<T>
): T[] => {
  if (value) {
    if (!exclude) {
      return array.filter((obj) => obj[property] === value);
    } else {
      return array.filter((obj) => obj[property] !== value);
    }
  } else {
    if (!exclude) {
      return array.filter((obj) => obj[property]);
    } else {
      return array.filter((obj) => !obj[property]);
    }
  }
};
