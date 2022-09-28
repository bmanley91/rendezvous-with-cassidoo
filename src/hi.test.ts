import { sayHi } from './hi';

describe('hi', () => {
    it('should say hi', () => {
        expect(sayHi()).toBe('hi');
    });
});
