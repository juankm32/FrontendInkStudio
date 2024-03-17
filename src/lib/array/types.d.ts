export interface CheckOnArrayParams<T> {
  property: keyof T;
  value: string | number | boolean;
}

export interface FilterOnArrayParams<T> extends CheckOnArrayParams<T> {
  value?: string | number | boolean;
  exclude?: boolean;
}
