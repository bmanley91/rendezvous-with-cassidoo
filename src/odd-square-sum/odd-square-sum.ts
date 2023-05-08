export const oddSquareSum = (input: number): number => {
    // Start with running total of 0
    let sum = 0;

    // Since Odd Squares are squares of odd numbers, we can save time by only looking at odds
    // Start at 1 and add 2 when we iterate in the loop below
    let currentOdd = 1;
    let currentOddSquared = currentOdd * currentOdd;

    while (currentOddSquared < input) {
        // Add to running total
        sum += currentOddSquared;

        // Iterate
        currentOdd += 2;
        currentOddSquared = currentOdd * currentOdd;
    }

    return sum;
};
