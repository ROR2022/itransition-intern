export class MoveValidator {
    static validateMoves(moves) {
        if (moves.length < 3 || moves.length % 2 === 0) {
            throw new Error("The number of moves must be an odd number greater than or equal to 3.");
        }
        const uniqueMoves = new Set(moves);
        if (uniqueMoves.size !== moves.length) {
            throw new Error("Moves must be non-repeating.");
        }
    }
}
