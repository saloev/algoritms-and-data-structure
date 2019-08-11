
// TODO jest dont support symlink @?????
import binarySearch from '../../chapter1/binarySearch';

/* tslint:disable: no-unused-expression */

it('must return number', () => {
    expect(binarySearch([10, 50, 78, 56], 78)).toBe(2),
    expect(binarySearch([10, 30, 40, 50, 51, 52, 78, 90, 100, 200, 300], 78)).toBe(6),
    expect(binarySearch([0, 1, 2, 3, 4, 5, 10, 50, 78, 100], 0)).toBe(0);
});

it('must return null', () => {
    expect(binarySearch([0, 1, 2, 3, 4, 5, 10, 50, 78, 80], 6)).toBeNull;
});
