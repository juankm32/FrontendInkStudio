export const mapObj = <T extends Record<string, any>>(
  obj: T,
  mapper: (
    value: T[keyof T],
    metadata: { key: string; index: number; obj: T }
  ) => T[keyof T]
): T => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value], index) => [
      key,
      mapper(value, { key, index, obj }),
    ])
  ) as T;
};

export const mapObjToArr = <T extends Record<string, any>, U>(
  obj: T,
  mapper: (
    value: T[keyof T],
    metadata: { key: string; index: number; obj: T }
  ) => U
): U[] => {
  return Object.entries(obj).map(([key, value], index) =>
    mapper(value, { key, index, obj })
  );
};
