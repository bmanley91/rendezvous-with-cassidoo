export const missingBits = (input: number[]): string[] => {
    // Iterate through the list with two pointers
    // Compare previous to current
    // If abs(current - previous) === 2, insert the number between current and previous into the output
    // If abs(current - previous) > 2, insert '...' into the output
    // Using abs so that it works on decending lists too.

    const output: string[] = [];

    // If the input is empty, skip all of this.
    if (input.length !== 0) {
        // Add first element to the output
        output.push(input[0].toString());

        // Start looping from index 1
        let previousIndex = 0;
        let currentIndex = 1;
        while(currentIndex < input.length) {
            const difference = Math.abs(input[currentIndex] - input[previousIndex]);

            switch (difference) {
            // If the difference is 1, then the sequence is unbroken. Insert the current number.
            case 1: {
                output.push(input[currentIndex].toString());
                break;
            }
            // If the difference is 2, insert the missing number then the current number
            case 2: {
                const middle = findNumberBetween(input[currentIndex], input[previousIndex]);
                output.push(middle.toString());
                output.push(input[currentIndex].toString());
                break;
            }
            // Otherwise, insert an elipsis followed by the current number
            default: {
                output.push('...');
                output.push(input[currentIndex].toString());
                break;
            }}

            previousIndex++;
            currentIndex++;
        }
    }

    return output;
};

const findNumberBetween = (input1: number, input2: number): number => (input1 + input2) / 2;
