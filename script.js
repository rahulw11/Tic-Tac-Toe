<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Tic-Tac-Toe</h1>
    <div id="game">
        <div class="cell" data-index="0"></div>
        <div class="cell" data-index="1"></div>
        <div class="cell" data-index="2"></div>
        <div class="cell" data-index="3"></div>
        <div class="cell" data-index="4"></div>
        <div class="cell" data-index="5"></div>
        <div class="cell" data-index="6"></div>
        <div class="cell" data-index="7"></div>
        <div class="cell" data-index="8"></div>
    </div>
    <div id="message"></div>
    <button id="restart">Restart Game</button>
    <style>
body {
    background-color: rgb(240, 138, 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
}

h1 {
    margin-top: 20px;
}

#game {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    margin-top: 20px;
}

.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #f0f0f0;
    font-size: 2rem;
    cursor: pointer;
}

#message {
    margin-top: 20px;
    font-size: 1.2rem;
}

#restart {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
}
    </style>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const messageElement = document.getElementById("message");
    const restartButton = document.getElementById("restart");
    
    let currentPlayer = "X";
    let board = Array(9).fill(null);
    let isGameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleClick(event) {
        const index = event.target.getAttribute("data-index");

        if (!isGameActive || board[index]) return;

        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWin()) {
            messageElement.textContent = (`${currentPlayer} Wins!;
            isGameActive = false`);
        } else if (board.every(cell => cell)) {
            messageElement.textContent = "It's a Draw!";
            isGameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            messageElement.textContent =(Current Player: ${currentPlayer}) ;
        }
    }

    function checkWin() {
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === currentPlayer);
        });
    }

    function restartGame() {
        board.fill(null);
        cells.forEach(cell => cell.textContent = "");
        currentPlayer = "X";
        isGameActive = true;
        messageElement.textContent = (Current Player: ${currentPlayer});
    }

    cells.forEach(cell => cell.addEventListener("click", handleClick));
    restartButton.addEventListener("click", restartGame);

    messageElement.textContent = (Current Player: ${currentPlayer});
});
    </script>
</body>
</html>