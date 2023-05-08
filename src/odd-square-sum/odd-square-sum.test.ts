import { oddSquareSum } from './odd-square-sum';

describe ('Odd Square Sum', () => {
    it.each([
        {
            input: 1,
            expectedAnswer: 0
        }, {
            input: 2,
            expectedAnswer: 1
        }, {
            input: 9,
            expectedAnswer: 1
        }, {
            input: 10,
            expectedAnswer: 10
        }, {
            input: 44,
            expectedAnswer: 35
        },
    ]) ('Returns the correct answer', (testCase: OddSquareTestCase) => {
        const result = oddSquareSum(testCase.input);

        expect(result).toBe(testCase.expectedAnswer);
    });
});

interface OddSquareTestCase {
    input: number,
    expectedAnswer: number
}
