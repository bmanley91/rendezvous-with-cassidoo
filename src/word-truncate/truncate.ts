export const truncate = (inputString: string, n: number): string => {
    // Walk through input string
    // Keep track of how many letters we've seen since the last delimiter
    // If we're on a letter and the char counter is under the target number, append the char to the output
    // If we hit a delimiter, add the current char to the output and reset the char counter
    // Otherwise, just add the current char to the output
    let output = '';
    let charCounter = 0;
    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString.charAt(i);
        if (isLetter(currentChar)) {
            if (charCounter < n) {
                output += currentChar;
                charCounter++;
            }
        } else if (DELIMITERS.has(currentChar)) {
            output += currentChar;
            charCounter = 0;
        } else {
            output += currentChar;
        }
    }
    
    return output;
};

const isLetter = (input: string): boolean => input.length === 1 && input.toLocaleLowerCase() != input.toLocaleUpperCase();

const DELIMITERS = new Set([' ', '_']);
