export function appendTiles(gameBoardDOM, gameBoardObject) {
    for (let i = 0; i < gameBoardObject.tileArray.length; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.dataset.id = i;

        if (gameBoardObject.tileArray[i].hasShip === true) {
            tile.classList.add('hasShip');
        }

        gameBoardDOM.appendChild(tile);
    }
}

export function refreshTiles(gameBoardObject) {
    const tiles = document.querySelectorAll('.tile');

    for (let i = 0; i < gameBoardObject.tileArray.length; i++) {
        if (gameBoardObject.tileArray[i].hasShip) tiles[i].classList.add('hasShip');

        if (gameBoardObject.tileArray[i].isHit) {
            if (gameBoardObject.tileArray[i].hasShip && gameBoardObject.tileArray[i].isHit) {
                tiles[i].classList.add('hitShip');
            }
            else {
                tiles[i].classList.add('hit');
            }
        }
    }
}