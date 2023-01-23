import { missingBits } from './missing-bits';

describe ('Missing Bits', () => {
    it ('returns a list with elipises where numbers are skipped', () => {
        const input = [1,3,20,27];
        const expected = ['1','2','3','...','20','...','27'];

        const actual = missingBits(input);

        expect(actual).toEqual(expected);
    });

    it ('inserts a missing number if adjacent elements differ by exactly two', () => {
        const input = [1,2,3,5,6];
        const expected = ['1','2','3','4','5','6'];

        const actual = missingBits(input);

        expect(actual).toEqual(expected);
    });
});
