import { fibLike, isFibLike } from './fib-like';

describe ('Fib Like', () => {
    it ('should return the correct series for a basic input', () => {
        const expected = [10, 20, 30, 50, 80];

        const actual = fibLike(10, 20, 5);

        expect(actual).toEqual(expected);
    });

    it ('should only return the first and second numbers for n = 2', () => {
        const expected = [10, 20];

        const actual = fibLike(10, 20, 2);

        expect(actual).toEqual(expected);
    });

    describe.each([1, 0, -1]) ('Invalid Inputs', (input) => {
        it (`should reject n < 2: ${input}`, () => {
            expect(() => fibLike(10, 20, input)).toThrow('Invalid Input');
        });
    });
});

describe ('Is Fib Like', () => {
    it ('should return true for a valid fib-like sequence', () => {
        expect(isFibLike([1, 3, 4, 7, 11])).toBe(true);
    });

    it ('should return true for any two digit sequence', () => {
        expect(isFibLike([1, -100])).toBe(true);
    });

    it ('should return false for a series that is not fib-like', () => {
        expect(isFibLike([1, 5, 7, 12, 19])).toBe(false);
    });

    it ('should return true for any sequence with less than 2 digits', () => {
        expect(isFibLike([1])).toBe(true);
    });
});
