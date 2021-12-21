export function isNotEmptyString<T>(value: T): value is Exclude<T, ''> {
  return typeof value !== 'string' || value !== '';
}
