import { numBalance } from './balance-parens';

describe ('Balance Parens', () => {
    it ('returns the number of additional parens required to have a balanced set', () => {
        const input = '))()))))()';
        const expected = 6;

        const actual = numBalance(input);

        expect(actual).toEqual(expected);
    });

    it ('returns 0 if no parens are required', () => {
        const input = '(()())';
        const expected = 0;

        const actual = numBalance(input);

        expect(actual).toEqual(expected);
    });

    it ('ignores chars that are not parens', () => {
        const input = '(a))';
        const expected = 1;

        const actual = numBalance(input);

        expect(actual).toEqual(expected);
    });
});

