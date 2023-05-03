import { removeZeros } from './trim-array';

describe ('Trim Array', () => {
    it ('returns the input array without leading and trailing zeroes', () => {
        const input = [0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0];
        const expected = [3, 1, 4, 1, 5, 9];

        const result = removeZeros(input);

        expect(result).toEqual(expected);
    });

    it ('returns an empty array if there are no non-zeros', () => {
        const input = [0, 0, 0];
        const expected: number[] = [];

        const result = removeZeros(input);

        expect(result).toEqual(expected);
    });

    it ('returns the input if there are no zeroes', () => {
        const input = [8];
        const expected = [8];

        const result = removeZeros(input);

        expect(result).toEqual(expected);
    });

    it ('returns empty if the input is empty', () => {
        const input: number[] = [];
        const expected: number[] = [];

        const result = removeZeros(input);

        expect(result).toEqual(expected);
    });
});
