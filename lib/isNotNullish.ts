export type NonNullish<T> = Exclude<T, null | undefined>;

export function isNotNullish<T>(value: T): value is NonNullish<T> {
  return value != null;
}
