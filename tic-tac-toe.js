let turn = 1;
let board = [["", "", ""], ["", "", ""], ["", "", ""]];
let cells = document.getElementsByClassName("cell");

//Assign event listeners to each cell
for (const cell of cells) {
    cell.addEventListener("click", function() {
        makeMove(Math.floor(cell.id / 3), cell.id % 3);
    })
}

console.log(cells);

function renderBoard() {

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[i * 3 + j].textContent = board[i][j];
        }
    }
}

function checkWin() {

}

function endGame() {
    //Display game over message
    //Display replay button
    //Disable cells
}

function makeMove(x, y) {
    console.log(x, y);

    if (board[x][y] === "") {
        if (turn === 1) {
            board[x][y] = "X";
        } else {
            board[x][y] = "O";
        }
        turn = turn * -1;
        renderBoard();
        checkWin();
    }
}