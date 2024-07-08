const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let gameOver = false;
let turn = 1;
let board = ["", "", "", "", "", "", "", "", ""];
let secretBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//Elements
let cells = document.getElementsByClassName("cell");
let resetButton = document.getElementById("replay");
let message = document.getElementById("message");

resetButton.addEventListener("click", function() {
    startGame();
})

//Assign event listeners to each cell
for (const cell of cells) {
    cell.addEventListener("click", function() {
        makeMove(cell.id);
    })
}

function clearBoard() {
    for (let i = 0; i < 9; i++) {
        board[i] = "";
        secretBoard[i] = 0;
    }

    for (const cell of cells) {
        cell.style.backgroundColor = null;
    }
}

function renderBoard() {
    for (let i = 0; i < 9; i++) {
        cells[i].innerHTML = board[i];
    }
}

function checkWin() {
    //Check for win for the player that just made a move
    for (const condition of winConditions) {
        if (secretBoard[condition[0]] === turn && secretBoard[condition[1]] === turn && secretBoard[condition[2]] === turn) {
            endGame(condition);
        }
    }
}

function startGame() {
    //Reset board
    gameOver = false;
    clearBoard();
    renderBoard();
    message.innerHTML = "";
    turn = 1;
}

function endGame(winningPos) {
    //Display game over message
    //Display winning row
    //Disable cells
    for (const pos of winningPos) {
        cells[pos].style.backgroundColor = "chartreuse";
    }

    message.innerHTML = `Player ${turn} wins!`;
    gameOver = true;
}

function makeMove(pos) {
    if (!gameOver) {
        if (board[pos] === "") {
            if (turn === 1) {
                board[pos] = "X";
                secretBoard[pos] = 1;
            } else {
                board[pos] = "O";
                secretBoard[pos] = -1;
            }
            renderBoard();
            checkWin();
            turn = turn * -1;   
        }
    }
}