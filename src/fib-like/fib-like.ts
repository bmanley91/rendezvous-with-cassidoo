export const fibLike = (first: number, second: number, n: number): number[] => {
    // Assure n is valid
    if (n < 2) {
        throw new Error('Invalid Input');
    }

    const output = [first, second];

    for (let index = 1; index < n - 1; index++) {
        const nextVal = output[index]  + output[index - 1];
        output.push(nextVal);
    }

    return output;
};

export const isFibLike = (inputArr: number[]): boolean => {
    // Go backwards through the input array until we reach the first two digits.
    // Make sure that the current number is the sum of the previous two numbers.
    for (let index = inputArr.length - 1; index > 1; index--) {
        if (inputArr[index] !== inputArr[index - 1] + inputArr[index - 2]) {
            return false;
        }
    }
    // If we get this far the sequence must be fib-like.
    return true;
};
