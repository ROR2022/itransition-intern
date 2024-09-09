//const { Table } = require('console-table-printer');
import { Table } from 'console-table-printer';

export class HelpTable {
    static generate(moves) {
        const table = new Table({ title: 'Help: Move Outcomes', columns: [{ name: 'Move' }, ...moves.map(move => ({ name: move }))] });
        
        moves.forEach((move, i) => {
            const row = { Move: move };
            moves.forEach((opponentMove, j) => {
                if (i === j) {
                    row[opponentMove] = 'Draw';
                } else {
                    const halfLength = Math.floor(moves.length / 2);
                    if ((j > i && j - i <= halfLength) || (j < i && i - j > halfLength)) {
                        row[opponentMove] = 'Win';
                    } else {
                        row[opponentMove] = 'Lose';
                    }
                }
            });
            table.addRow(row);
        });

        table.printTable();
    }
}
