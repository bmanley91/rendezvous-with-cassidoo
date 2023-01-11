import { sumEveryOther } from './sum-every-other';

describe ('Sum Every Other', () => {
    it ('Returns the sum of every other digit in the input number', () => {
        const expected = 26;

        const actual = sumEveryOther(548915381);

        expect(actual).toEqual(expected);
    });

    it ('ignores digits past decimal point', () => {
        const expected = 26;

        const actual = sumEveryOther(1010.11);

        expect(actual).toEqual(expected);
    });


    it ('return zero for a number with less than two digits', () => {
        const expected = 0;

        const actual = sumEveryOther(1);

        expect(actual).toEqual(expected);
    });
});
