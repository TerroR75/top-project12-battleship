export function appendTiles(gameBoardDOM, gameBoardObject) {
    for (let i = 0; i < gameBoardObject.gameBoard.length; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.dataset.id = i;
        gameBoardDOM.appendChild(tile);
    }
}