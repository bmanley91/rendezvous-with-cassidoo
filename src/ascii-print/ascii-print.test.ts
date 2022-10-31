import { asciiCharsBetween } from './ascii-print';

describe ('ASCII Chars Between', () => {
    it ('should return all chars between the input chars', () => {
        const start = '_';
        const end = 'b';
        const expected = '_`ab';

        const actual = asciiCharsBetween(start, end);
        
        expect(actual).toEqual(expected);
    });
   
    it ('should return an empty string if the start char is after the end char', () => {
        const start = 'z';
        const end = 'a';
        const expected = '';

        const actual = asciiCharsBetween(start, end);

        expect(actual).toEqual(expected);
    });
});
