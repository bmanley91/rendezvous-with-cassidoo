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
