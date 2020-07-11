// Learn more about this problem here: https://en.wikipedia.org/wiki/Minesweeper_(video_game)
const minefield = [
    ["*", "*", "", ""],
    ["*", "*", "", ""],
    ["", "", "*", ""],
    ["", "", "", ""],
];

// Take input as minefield and print the following as output
// **20
// **31
// 23*1
// 0111
function minesweeper(minefield) {
    function getCell(row, col) {
        if (row < 0 || col < 0) return 0;
        if (row >= minefield.length) return 0;
        if (col >= minefield[row].length) return 0;
        if (minefield[row][col] === "*") return 1;
        return 0;
    }

    for (let row = 0; row < minefield.length; row++) {
        let line = "";
        for (let col = 0; col < minefield[row].length; col++) {
            if (getCell(row, col) === 1) {
                line += "*";
            } else {
                let bombs = 0;
                // top-left, top, top-right
                bombs += getCell(row - 1, col - 1);
                bombs += getCell(row - 1, col);
                bombs += getCell(row - 1, col + 1);

                bombs += getCell(row, col - 1); // left
                bombs += getCell(row, col + 1); // right

                // bot-left, bot, bot-right
                bombs += getCell(row + 1, col - 1);
                bombs += getCell(row + 1, col);
                bombs += getCell(row + 1, col + 1);

                line += bombs;
            }
        }
        console.log(line);
    }
}

minesweeper(minefield);