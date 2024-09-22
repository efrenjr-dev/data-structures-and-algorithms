const isValidSudoku = (board) => {
    const cols = new Map();
    const rows = new Map();
    const squares = new Map();
    // const mod = Math.floor(r / 3) * 3 + Math.floor(c / 3);

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const cell = board[r][c];
            if (cell === ".") continue;
            if (
                rows.get(r)?.has(cell) ||
                cols.get(c)?.has(cell) ||
                squares
                    .get(Math.floor(r / 3) * 3 + Math.floor(c / 3))
                    ?.has(cell)
            ) {
                return false;
            }
            cols.set(c, new Set(cols.get(c)).add(cell));
            rows.set(r, new Set(rows.get(r)).add(cell));
            squares.set(
                Math.floor(r / 3) * 3 + Math.floor(c / 3),
                new Set(
                    squares.get(Math.floor(r / 3) * 3 + Math.floor(c / 3))
                ).add(cell)
            );
        }
    }

    return true;
};

const sudokuBoard = [
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const output = isValidSudoku(sudokuBoard);
console.log(output);
