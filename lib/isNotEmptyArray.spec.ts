import { isNotEmptyArray } from './isNotEmptyArray';

describe('isNotEmptyArray', () => {
  test('`[]` returns false', () => {
    expect(isNotEmptyArray([])).toEqual(false);
  });
  test('`[null]` returns true', () => {
    expect(isNotEmptyArray([null])).toEqual(true);
  });
  test('`[undefined]` returns true', () => {
    expect(isNotEmptyArray([undefined])).toEqual(true);
  });
  test('populated array returns true', () => {
    expect(isNotEmptyArray([1])).toEqual(true);
  });
});
