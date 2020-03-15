// NOTE: jest don't support symlink @
// https://github.com/facebook/jest/pull/7549https://github.com/facebook/jest/pull/7549
import binarySearch from "./binarySearch";
import binarySearchImperative from "./binarySearchImperative";

import {
  getRandomIntInclusive,
  getRandomRangeIntInclusive,
  getRandomIntNotInArrayRange
} from "../../utils/random";

/* tslint:disable: no-unused-expression */

describe("Binary search: recursion implementation", () => {
  it("must return number", () => {
    expect(binarySearch([10, 50, 78, 56], 78)).toBe(2),
      expect(
        binarySearch([10, 30, 40, 50, 51, 52, 78, 90, 100, 200, 300], 78)
      ).toBe(6),
      expect(binarySearch([0, 1, 2, 3, 4, 5, 10, 50, 78, 100], 0)).toBe(0);
  });

  it("must return null", () => {
    expect(binarySearch([0, 1, 2, 3, 4, 5, 10, 50, 78, 80], 6)).toBeNull;
  });
});

describe("Binary search: imperative implementation", () => {
  it("must return number", () => {
    expect(binarySearchImperative([10, 50, 78, 56], 78)).toBe(2),
      expect(
        binarySearchImperative(
          [10, 30, 40, 50, 51, 52, 78, 90, 100, 200, 300],
          78
        )
      ).toBe(6),
      expect(
        binarySearchImperative([0, 1, 2, 3, 4, 5, 10, 50, 78, 100], 0)
      ).toBe(0);
  });

  it("must return null", () => {
    expect(binarySearchImperative([0, 1, 2, 3, 4, 5, 10, 50, 78, 80], 6))
      .toBeNull;
  });
}); 
