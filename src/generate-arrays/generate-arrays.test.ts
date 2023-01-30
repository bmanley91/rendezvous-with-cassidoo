import { generateArrays } from './generate-arrays';

describe ('Generate Arrays', () => {
    it ('returns arrays from 1 to the input value', () => {
        const input = 4;
        const expected = [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]];
        
        const actual = generateArrays(input);

        expect(actual).toEqual(expected);
    });

    it ('handles an input of 1', () => {
        const input = 1;
        const expected = [[1]];
        
        const actual = generateArrays(input);

        expect(actual).toEqual(expected);
    });

    it ('handles an input of 0', () => {
        const input = 0;
        const expected: number[][] = [];
        
        const actual = generateArrays(input);

        expect(actual).toEqual(expected);
    });
});

