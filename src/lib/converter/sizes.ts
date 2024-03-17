export const remToPx = (remValue: number): number => {
  const fontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const pxValue = remValue * fontSize;
  return pxValue;
};
