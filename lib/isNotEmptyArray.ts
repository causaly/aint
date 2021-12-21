type NonEmptyArray<T> = [T, ...T[]];

export function isNotEmptyArray<T>(value: T[]): value is NonEmptyArray<T> {
  return value.length !== 0;
}
