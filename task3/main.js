import { createInterface } from 'readline';
import { GameLogic } from './gameLogic.js';
import { KeyGenerator } from './keyGenerator.js';
import { MoveValidator } from './moveValidator.js';
import { HelpTable } from './helpTable.js';

function main() {
    const args = process.argv.slice(2);
    let userMove = '';
    try {
        MoveValidator.validateMoves(args);

        const game = new GameLogic(args);
        const keyGen = new KeyGenerator();

        

    
        const computerMove = game.getRandomMove();
        //console.log('Computer move generated.', computerMove);
        const hmac = keyGen.generateHMAC(computerMove);

        console.log(`HMAC: ${hmac}`);
        console.log('Available moves:');
        args.forEach((move, index) => console.log(`${index + 1} - ${move}`));
        console.log('0 - exit\n? - help');

        const rl = createInterface({ input: process.stdin, output: process.stdout });

        rl.question('Enter your move: ', (input) => {
            if (input === '?') {
                HelpTable.generate(args);
                rl.close();
                return;
            }

            const playerMoveIndex = parseInt(input);
            if (isNaN(playerMoveIndex) || playerMoveIndex < 0 || playerMoveIndex > args.length) {
                console.log('Invalid move. Please try again.');
                rl.close();
                return;
            }

            if (playerMoveIndex === 0) {
                console.log('Exiting game.');
                rl.close();
                return;
            }

            const playerMove = args[playerMoveIndex - 1];
            console.log(`Your move: ${playerMove}`);
            console.log(`Computer move: ${computerMove}`);

            const result = game.determineWinner(playerMove, computerMove);
            console.log(result);

            console.log(`HMAC key: ${keyGen.getKey()}`);
            rl.close();
        });
    
    } catch (err) {
        console.error(err.message);
        console.log('Example usage: node game.js rock paper scissors');
    }
}

main();
