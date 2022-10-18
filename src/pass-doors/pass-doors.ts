export const passDoors = (doors: number, passes: number) => {
    // For each door, increment from 1 to number of passes, 
    // see if the index is divisible by the pass number
    // If it is, its state flips.
    // Doors start with index 1
    let openCount = 0;
    for (let doorNumber = 1; doorNumber <= doors; doorNumber++) {
        let doorOpen = false;
        for (let passNumber = 1; passNumber <= passes; passNumber++) {
            if (doorNumber % passNumber === 0) {
                doorOpen = !doorOpen;
            }
        }
        if (doorOpen) openCount++;
    }

    return openCount;
};
