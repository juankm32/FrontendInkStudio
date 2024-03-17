import type { CheckOnArrayParams } from "./types";

export const findArrayIndex = <T>(
  array: T[],
  { property, value }: CheckOnArrayParams<T>
): number => {
  return array.findIndex((obj) => obj[property] === value);
};

export const findOnArray = <T>(
  array: T[],
  { property, value }: CheckOnArrayParams<T>
): T | undefined => {
  return array.find((obj) => obj[property] === value);
};
