export const repeatedGroups = (input: number[]): number[][] => {
    // Keep track of current and previous digit.
    // If they are the same:
    //// First time:
    ////// Create a new array and add the number twice.
    //// Otherwise:
    ////// Add another of the number to the current group
    // If they aren't the same:
    //// If there was a group being built:
    ////// Add the group to the output array
    ////// Reset the current group to an empty array
    //// Otherwise:
    ////// Just move on

    console.log(`input ${input}`);

    const output = [];
    let currentGroup = [];

    for (let i = 1; i < input.length; i++) {
        const currentNumber = input[i];
        const previousNumber = input[i - 1];

        if (currentNumber === previousNumber) {
            if (currentGroup.length === 0) {
                currentGroup.push(currentNumber);
            } 
            currentGroup.push(currentNumber);
        } else {
            if (currentGroup.length > 0) {
                output.push(currentGroup);
                currentGroup = [];
            }
        }
    }

    if (currentGroup.length > 0) {
        output.push(currentGroup);
    }

    return output;
}