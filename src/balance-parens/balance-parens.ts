export const numBalance = (input: string): number => {
    // Store previous chars in a stack
    const stack = [];

    let counter = 0;

    for (let index = 0; index < input.length; index++) {
        const currentChar = input.charAt(index);
        // Two cases we care about: isOpenParen, isCloseParen
        // If the current char is anything else, move on.
        if (isOpenParen(currentChar)) {
            // When we have an open paren, just add it to the stack.
            stack.push(currentChar);
        } else if (isCloseParen(currentChar)) {
            // When we have a close paren, compare it to the top of the stack.
            const topOfStack = stack[stack.length - 1];

            if (charsAreMatchingPair(topOfStack, currentChar)) {
                // If the current char is a match with the top of the stack,
                // pop the stack, and do not increment the counter.
                stack.pop();
                
            } else {
                // If the current char isn't a match with the top of the stack,
                // increment the counter.
                counter++;
            }            
        }
    }

    // Once we've looped all the way through, add the number of chars in the stack to the counter.
    // Since they're all open parens, they need to be closed.
    counter += stack.length;
    
    return counter;
};

const isOpenParen = (char: string) => char === '(';

const isCloseParen = (char: string) => char === ')';

const charsAreMatchingPair = (first: string, second: string) => isOpenParen(first) && isCloseParen(second);
