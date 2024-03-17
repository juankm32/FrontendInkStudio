export const extractFirstLetter = (text: string, count: number) => {
  return text
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, count);
};
