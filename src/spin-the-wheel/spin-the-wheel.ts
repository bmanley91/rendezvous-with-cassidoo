const gameSetup = {
    playerCount: 5,
    startingScore: 10,
    roundCount: 5
};

export class Player {
    name: string;
    score: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    toString = () => `name: ${this.name}, score: ${this.score}`;
}

enum GameResult {
    WIN,
    LOSE,
    KEEP
}

export const initializePlayerList = (playerCount: number): Player[] => {
    const playerList = [];
    for (let index = 0; index < playerCount; index++) {
        playerList.push(new Player(`Player${index}`, gameSetup.startingScore));
    }
    return playerList;
};

const playGame = (playerList: Player[]): Player[] => {
    return playerList;
};

const playRound = (playerList: Player[]): Player[] => {
    return playerList;
};

export const getScoreReport = (playerList: Player[], roundNumber: number): string => {
    const stringBuilder = [`Round ${roundNumber} Scores:`];
    playerList.forEach(player => stringBuilder.push(`${player}`));
    return stringBuilder.join('\n');
};

const main = (): void => {
    // Set up players
    const playerList = initializePlayerList(gameSetup.playerCount);
};

main();
