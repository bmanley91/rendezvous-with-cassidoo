export const ordinal = (input: number): string => {
    const suffix = findSuffix(input);

    return `${input}${suffix}`;
};

const findSuffix = (input: number) => {
    const onesDigit = input % 10;
    // Special cases only occur for 1 (1st vs 11th), 2 (2nd vs 12th), and 3 (3rd vs 13th).
    // So we'll check 1, 2, and 3 to see if we have a special case and assign a suffix value accordingly.
    switch (onesDigit) {
    case 1:
        return isSpecialCase(input) ? 'th' : 'st';
    case 2:
        return isSpecialCase(input) ? 'th' : 'nd';
    case 3:
        return isSpecialCase(input) ? 'th' : 'rd';
    default:
        return 'th';
    }
};

const isSpecialCase = (originalInput: number) => {
    const lastTwoDigits = originalInput % 100;
    return lastTwoDigits === 11 ||
        lastTwoDigits === 12 ||
        lastTwoDigits === 13;
};
