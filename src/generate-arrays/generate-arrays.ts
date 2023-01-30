export const generateArrays = (input: number): number[][] => {
    const output: number[][] = [];

    if (input !== 0) {
        // Add the base value to the output so that we can loop without
        // worrying about out of bounds on the lookback we'll use later.
        output.push([1]);

        // Start iteration at index 1 in the output
        // and a value of 2.
        let currentIndex = 1;
        let currentValue = 2;

        while (currentValue <= input) {
            // Make a copy of the previous array.
            const previousIndex = currentIndex - 1;
            const currentArray = [...output[previousIndex]];

            // Add the current digit to the copy.
            currentArray.push(currentValue);

            // Add the new array to the output.
            output.push(currentArray);

            currentIndex++;
            currentValue++;
        }
    }

    return output;
};
