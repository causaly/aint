export type NotNullish<T> = Exclude<T, null | undefined>;

export function isNotNullish<T>(value: T): value is NotNullish<T> {
  return value != null;
}
