import { ordinal } from './ordinal-suffix';

describe ('Ordinal Suffix Addition', () => {
    it.each([1, 101]) ('should have an "st" suffix', (input: number) => {
        expect(ordinal(input)).toBe(`${input}st`);
    });

    it.each([2, 1002]) ('should have a "nd" suffix', (input: number) => {
        expect(ordinal(input)).toBe(`${input}nd`);
    });

    it.each([3, 10003]) ('should have a "rd" suffix', (input: number) => {
        expect(ordinal(input)).toBe(`${input}rd`);
    });

    it.each([4, 5, 9, 10, 108, 1_234_567]) ('should have a "th" suffix', (input: number) => {
        expect(ordinal(input)).toBe(`${input}th`);
    });

    describe.each([11, 112, 1013]) ('Edge Cases', (input: number) => {
        it ('should have a "th" suffix', () => {
            expect(ordinal(input)).toBe(`${input}th`);
        });
    });
    
});
