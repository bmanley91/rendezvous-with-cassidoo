export const a1Reference = (input: string): number => {
    // For a char at a given point (counting from the right starting from 0)
    // The char's value is the value of the letter (A-Z, 1-26)
    // Times 26 to the power of it's position
    // Ex   A = 1 * 26^0 = 1
    //      B = 2 * 26^0 = 2
    //      AA = (1 * 26^1) + (1 * 26^0) = 27
    //      AB = (1 * 26^1) + (2 * 26^0) = 28
    //      AAA = (1 * 26^2) + (1 * 26^1) + (1 * 26^0)

    let output = 0;

    let rightToLeftIndex = 0;
    while (rightToLeftIndex < input.length) {
        const currentCharCode = input.charCodeAt(input.length - rightToLeftIndex - 1);
        const currentCharVal = currentCharCode - 64; // 'A' = 65

        output += currentCharVal * Math.pow(26, rightToLeftIndex);
        rightToLeftIndex++;
    }

    return output;
};
