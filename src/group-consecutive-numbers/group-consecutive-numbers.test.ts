import { repeatedGroups } from './group-consecutive-numbers';

describe ('Group Consecutive Numbers', () => {
    it ('returns groups of consecutive repeating numbers in the input array', () => {
        const input = [1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9];
        const expected = [[1, 1], [0, 0], [4, 4, 4], [9, 9]];

        const actual = repeatedGroups(input);

        expect(actual).toEqual(expected);
    });

    it ('should return an empty array if there are no consecutive repeating numbers', () => {
        const input = [1, 0, 1, 0, 1, 0];
        
        const actual = repeatedGroups(input);

        expect(actual.length).toBe(0);
    });

    it ('should handle an empty input array', () => {
        const input: number[] = [];

        const actual = repeatedGroups(input);

        expect(actual.length).toBe(0);
    })
});