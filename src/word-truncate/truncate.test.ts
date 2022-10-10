import { truncate } from './truncate';


describe ('Word Truncate', () => {
    it ('should remove letters after the nth letter in each word', () => {
        const input = 'never gonna give you up';
        const expected = 'nev gon giv you up';

        const actual = truncate(input, 3);

        expect(actual).toEqual(expected);
    });

    it ('should ignore non-alpabetical characters', () => {
        const input = '*hello* darkness, my ~old_friend';
        const expected = '*hel* dar, my ~old_fri';

        const actual = truncate(input, 3);

        expect(actual).toEqual(expected);
    });
});
