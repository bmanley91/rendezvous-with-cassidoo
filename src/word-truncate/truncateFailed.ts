export const truncate = (inputString: string, n: number): string => {
    // Easy but slower approach
    // Split input into words
    const words = inputString.split(' ');
    // Shorten each word
    const shortenedWords = words.map(word => shortenWord(word, n));
    // Join words back into return string
    return shortenedWords.join(' ');
};

const shortenWord = (input: string, length: number): string => {
    let charCounter = 0;
    let output = '';
    for (let i = 0; i < input.length; i++) {
        const currentChar = input.charAt(i);
        if (isLetter(currentChar)) {
            if (charCounter < length) {
                output += currentChar;
                charCounter++;
            }
        } else {
            output += currentChar;
        }
    }
    return output;
};

const isLetter = (input: string): boolean => input.length === 1 && input.toLocaleLowerCase() != input.toLocaleUpperCase();
