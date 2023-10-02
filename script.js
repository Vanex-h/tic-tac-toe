let currentPlayer = 'X';
let cells = document.getElementsByClassName('cell');

function makeMove(cell) {
    if (cell.innerHTML === '' && currentPlayer) {
        cell.innerHTML = currentPlayer;
        cell.style.pointerEvents = 'none';
        if (checkWinner()) {
            alert('Player ' + currentPlayer + ' wins!');
            currentPlayer = null;
        } else if ([...cells].every(cell => cell.innerHTML !== '')) {
            alert("It's a draw!");
            currentPlayer = null;
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            cells[a].style.backgroundColor = '#4CAF50';
            cells[b].style.backgroundColor = '#4CAF50';
            cells[c].style.backgroundColor = '#4CAF50';
            return true;
        }
    }

    return false;
}
