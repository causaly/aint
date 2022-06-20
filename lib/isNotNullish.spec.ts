import { isNotNullish } from './isNotNullish';

describe('isNotNullish', () => {
  test('`null` returns false', () => {
    expect(isNotNullish(null)).toEqual(false);
  });

  test('`undefined` returns false', () => {
    expect(isNotNullish(undefined)).toEqual(false);
  });

  test('`0` returns true', () => {
    expect(isNotNullish(0)).toEqual(true);
  });

  test("`''` returns true", () => {
    expect(isNotNullish('')).toEqual(true);
  });
});
