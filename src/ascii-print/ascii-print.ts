/**
 * Return a string including all ascii chars between start and end args, inclusive
 * 
 * @param start Starting char for output string
 * @param end Ending char for output string
 */
export const asciiCharsBetween = (start: string, end: string): string => {
    return `${start}${end}`;
};

export const problem = () => {
    console.log(asciiCharsBetween('␠', '~'));
};
