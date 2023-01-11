export const sumEveryOther = (input: number): number => {
    let output = 0;
    const inputAsString = input.toString();

    let shouldAdd = false;
    for (let i = 0; i < inputAsString.length; i++) {
        // Ignore a decimal point if we see it
        if (inputAsString.charAt(i) !== '.') {
            // If we're on an even digit add it to the running total.
            if (shouldAdd) {
                output += Number(inputAsString.charAt(i));
            }
            // Either way, flip the shouldAdd flag
            shouldAdd = !shouldAdd;
        }
    }
    
    return output;
};
