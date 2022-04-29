import { isNotEmptyString } from './isNotEmptyString';

describe('isNotEmptyString', () => {
  test("`''` returns false", () => {
    expect(isNotEmptyString('')).toEqual(false);
  });

  test('`undefined` returns true', () => {
    expect(isNotEmptyString(undefined)).toEqual(true);
  });

  test('`null` returns true', () => {
    expect(isNotEmptyString(null)).toEqual(true);
  });

  test('`0` returns true', () => {
    expect(isNotEmptyString(0)).toEqual(true);
  });
});
