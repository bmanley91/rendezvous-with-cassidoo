import { fibLike } from "./fib-like";

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
            expect(fibLike(10, 20, input)).toThrow('Invalid Input');
        });
    });
});
