export function isNotNullish<T>(
  value: T
): value is Exclude<T, null | undefined> {
  return value != null;
}
