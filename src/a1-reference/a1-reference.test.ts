import { a1Reference } from './a1-reference';

class ReferencePair {
    letterSequence: string;
    mappedNumber: number;

    constructor(letterSequence: string, mappedNumber: number) {
        this.letterSequence = letterSequence;
        this.mappedNumber = mappedNumber;
    }
}

describe ('A1 Reference', () => {
    it.each([
        new ReferencePair('A', 1), 
        new ReferencePair('B', 2),
        new ReferencePair('C', 3),
        new ReferencePair('Z', 26),
        new ReferencePair('AA', 27),
        new ReferencePair('AB', 28),
        new ReferencePair('AAA', 703)
    ]) ('returns the correct number for a given column letter sequence', (pair) => {
        expect(a1Reference(pair.letterSequence)).toEqual(pair.mappedNumber);
    });
});


