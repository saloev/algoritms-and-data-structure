declare global {
  namespace jest {
    interface Matchers<R> {
      toBeWithinRange(a: number, b: number): R;
    }
  }
}

expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
  });

import {
  getRandomIntInclusive,
  getRandomRangeIntInclusive,
  getRandomIntNotInArrayRange
} from "./random";

describe("Test util random functions", () => {
  it("must return number in given range", () => {
    const from = 20;
    const to = 30;    
    for (let i = 0; i < 100; i += 1) {
        expect(getRandomIntInclusive(from, to)).toBeWithinRange(from, to);
    }
  });

  it("length must be correct", () => {
    for (let i = 0; i < 100; i += 1) {
        const length = getRandomIntInclusive(10, 15);
        const randomArr = getRandomRangeIntInclusive(length);
        expect(randomArr.length).toBe(length);
    }
  });

  it("element of array must be numbers in given range", () => {
    for (let i = 0; i < 100; i += 1) {
        const length = getRandomIntInclusive(10, 15);
        const from = length;
        const to = length + getRandomIntInclusive(10, 15);
        const randomArr = getRandomRangeIntInclusive(length, from, to);
        randomArr.map((elem) => {
            expect(elem).toBeWithinRange(from, to);
        });
    }
  });

  it("element must not be in random array", () => {
    for (let i = 0; i < 100; i += 1) {
        const randomLength = getRandomIntInclusive(i);
        const randomLengthTo = getRandomIntInclusive(i) + randomLength;
        const length = getRandomIntInclusive(randomLength, randomLengthTo);
        const from = length;
        const to = length + getRandomIntInclusive(randomLength, randomLengthTo);
        const randomArr = getRandomRangeIntInclusive(length, from, to);
        const notInArray = getRandomIntNotInArrayRange(randomArr, to, to + getRandomIntInclusive(10, 15));
        randomArr.map((elem) => {
            expect(elem).not.toEqual(notInArray);
        });
    }
  });
});
