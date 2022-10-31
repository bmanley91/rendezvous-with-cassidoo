/**
 * Return a string including all ascii chars between start and end args, inclusive
 * 
 * @param start Starting char for output string
 * @param end Ending char for output string
 */
export const asciiCharsBetween = (start: string, end: string): string => {
    let output = '';
    let currentChar = start;

    while (currentChar <= end) {
        output += currentChar;
        currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
    }
    
    return output;
};

export const problem = () => {
    console.log(asciiCharsBetween(' ', '~'));
};
