import { isNotUndefined } from './isNotUndefined';

describe('isNotUndefined', () => {
  test('`undefined` returns false', () => {
    expect(isNotUndefined(undefined)).toEqual(false);
  });
  test('`null` returns true', () => {
    expect(isNotUndefined(null)).toEqual(true);
  });
  test('`0` returns true', () => {
    expect(isNotUndefined(0)).toEqual(true);
  });
  test("`''` returns true", () => {
    expect(isNotUndefined('')).toEqual(true);
  });
});
