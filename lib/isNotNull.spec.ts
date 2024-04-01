import { isNotNull } from './isNotNull.js';

describe('isNotNull', () => {
  test('`null` returns false', () => {
    expect(isNotNull(null)).toEqual(false);
  });

  test('`undefined` returns true', () => {
    expect(isNotNull(undefined)).toEqual(true);
  });

  test('`0` returns true', () => {
    expect(isNotNull(0)).toEqual(true);
  });

  test("`''` returns true", () => {
    expect(isNotNull('')).toEqual(true);
  });
});
