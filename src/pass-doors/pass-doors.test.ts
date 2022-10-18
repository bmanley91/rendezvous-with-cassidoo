import { passDoors } from './pass-doors';

describe ('Pass Doors', () => {
    it ('should return the number of open doors after all passes', () => {
        const doors = 7;
        const passes = 3;
        const expected = 4;
        
        const actual = passDoors(doors, passes);

        expect(actual).toEqual(expected);
    });
});
