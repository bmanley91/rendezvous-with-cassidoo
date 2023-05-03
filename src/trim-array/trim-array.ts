export const removeZeros = (input: number[]): number[] => {
    // Guard against empty input
    if (input.length === 0) {
        return [];
    }

    // Find the first non-zero
    const startIndex = findIndexOfFirstNonZero(input);

    // If start index > input.length, then there were no zeros
    if (startIndex >= input.length) {
        return [];
    }

    // Find the last non-zero
    const endIndex = findIndexOfLastNonZero(input);

    // Return the sub-array between first and last non-zero
    return input.slice(startIndex, endIndex + 1);
};

const findIndexOfFirstNonZero = (input: number[]): number => {
    let index = 0;
    while (input[index] === 0 && index < input.length) {
        index++;
    }
    return index;
};

const findIndexOfLastNonZero = (input: number[]): number => {
    let index = input.length - 1;
    while (input[index] === 0 && index > 0) {
        index--;
    }
    return index;
};
