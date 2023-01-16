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
    WIN = 'WIN',
    LOSE = 'LOSE',
    KEEP = 'KEEP'
}

const wheel = [
    GameResult.WIN,
    GameResult.LOSE,
    GameResult.KEEP
];

export const initializePlayerList = (playerCount: number): Player[] => {
    const playerList = [];
    for (let index = 0; index < playerCount; index++) {
        playerList.push(new Player(`Player${index}`, gameSetup.startingScore));
    }
    return playerList;
};

const playGame = (playerList: Player[], roundCount: number): Player[] => {
    let runningPlayerStatus = playerList;
    for (let roundNumber = 1; roundNumber <= roundCount; roundNumber++) {
        console.log(`Playing round ${roundNumber}`);
        runningPlayerStatus = playRound(runningPlayerStatus);
        console.log(getScoreReport(runningPlayerStatus, roundNumber));
    }
    return playerList;
};

const playRound = (playerList: Player[]): Player[] => {
    let updatedPlayerStatus = playerList;

    updatedPlayerStatus = playerList.map(player => {
        if (player.score === 0) {
            return player;
        }

        // Let's just use half of the player's score.
        const wagerAmount = Math.ceil(player.score / 2);
        console.log(`${player.name} wagers ${wagerAmount}`);
        const scoreDiff = spinWheel(wagerAmount);

        return new Player(player.name, player.score + scoreDiff);
    });

    return updatedPlayerStatus;
};

const spinWheel = (wager: number): number => {
    const result = wheel[Math.floor(Math.random() * wheel.length)];
    console.log(`Result is ${result}`);

    switch (result) {
    case GameResult.WIN:
        return wager * 2;
    case GameResult.LOSE:
        return 0;
    default:
        return wager;
    }
};

export const getScoreReport = (playerList: Player[], roundNumber: number): string => {
    const stringBuilder = [`Round ${roundNumber} Scores:`];
    playerList.forEach(player => stringBuilder.push(`${player}`));
    return stringBuilder.join('\n');
};

export const getFinalScore = (playerList: Player[]): string => {
    const stringBuilder = ['Final Score:'];
    playerList.forEach(player => stringBuilder.push(`${player}`));
    return stringBuilder.join('\n');
};

export const main = (): void => {
    // Set up players
    const playerList = initializePlayerList(gameSetup.playerCount);

    const finalResults = playGame(playerList, gameSetup.roundCount);

    console.log(getFinalScore(finalResults));
};

main();
