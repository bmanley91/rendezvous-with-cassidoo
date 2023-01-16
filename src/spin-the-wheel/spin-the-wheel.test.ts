import { getScoreReport, initializePlayerList, main, Player } from './spin-the-wheel';

describe('Play the game', () => {
    it ('Runs the game', () =>
        main()
    );
});

describe ('Initialize Players', () => {
    it ('returns a list of players of the given size', () => {
        const expected = [
            new Player('Player0', 10),
            new Player('Player1', 10),
            new Player('Player2', 10),
        ];

        const actual = initializePlayerList(3);

        actual.forEach((actualPlayer, index) => {
            expect(actualPlayer.name).toBe(expected[index].name);
            expect(actualPlayer.score).toBe(expected[index].score);
        });
    });
});

describe ('Get Score Report', () => {
    it ('returns a report of players and their scores', () => {
        const expected = 'Round 5 Scores:\n' +
            'name: Player1, score: 10\n' +
            'name: Player2, score: 8\n' +
            'name: Player3, score: 0\n' +
            'name: Player4, score: 999';
        
        const playerList = [
            new Player('Player1', 10),
            new Player('Player2', 8),
            new Player('Player3', 0),
            new Player('Player4', 999),
        ];
        
        const actual = getScoreReport(playerList, 5);

        expect(actual).toEqual(expected);
    });
});
