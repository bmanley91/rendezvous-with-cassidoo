import { scramble } from './sentence-scramble';

describe ('Sentence Scramble', () => {
    it ('outputs a sentence with each word scrambled', () => {
        const input = 'A quick brown fox jumped over the lazy dog.';
        
        const output = scramble(input);

        expect(output).not.toEqual(input);
    });

    it ('only operates on words with more than three chars', () => {
        const input = 'foo bar';
        
        const output = scramble(input);

        expect(output).toEqual(input);
    });
});
