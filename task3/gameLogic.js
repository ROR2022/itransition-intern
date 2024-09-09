import crypto from 'crypto';

export class GameLogic {
    constructor(moves) {
        this.moves = moves;
    }

    getRandomMove() {
        const randomIndex = crypto.randomInt(0, this.moves.length);
        return this.moves[randomIndex];
    }

    determineWinner(playerMove, computerMove) {
        const playerIndex = this.moves.indexOf(playerMove);
        const computerIndex = this.moves.indexOf(computerMove);
        const halfLength = Math.floor(this.moves.length / 2);

        if (playerIndex === computerIndex) return 'Draw';

        if (
            (computerIndex > playerIndex && computerIndex - playerIndex <= halfLength) ||
            (computerIndex < playerIndex && playerIndex - computerIndex > halfLength)
        ) {
            return 'Computer wins';
        }

        return 'Player wins';
    }
}
