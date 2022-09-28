export function appendTiles(gameBoardDOM, gameBoardObject) {
    for (let i = 0; i < gameBoardObject.tileArray.length; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.dataset.id = i;

        if (gameBoardObject.player !== 'ai') {
            if (gameBoardObject.tileArray[i].hasShip === true) {
                tile.classList.add('hasShip');
            }

            if (gameBoardObject.tileArray[i].ship !== null) {
                if (gameBoardObject.tileArray[i].ship.type === 'Carrier') {
                    tile.classList.add('carrier');
                }
                else if (gameBoardObject.tileArray[i].ship.type === 'Battleship') {
                    tile.classList.add('battleship');
                }
                else if (gameBoardObject.tileArray[i].ship.type === 'Destroyer') {
                    tile.classList.add('destroyer');
                }
                else if (gameBoardObject.tileArray[i].ship.type === 'Submarine') {
                    tile.classList.add('submarine');
                }
                else {
                    tile.classList.add('patrol-boat');
                }
            }
        }


        // console.log(gameBoardObject.tileArray[i]);

        gameBoardDOM.appendChild(tile);
    }
}

export function refreshTiles(gameBoardObject, player) {
    const aiTiles = document.querySelectorAll('.aiBoard .tile');
    const playerTiles = document.querySelectorAll('.playerBoard .tile');

    if (player === 'ai') {
        for (let i = 0; i < gameBoardObject.tileArray.length; i++) {
            if (gameBoardObject.tileArray[i].hasShip) aiTiles[i].classList.add('hasShip');

            if (gameBoardObject.tileArray[i].isHit) {
                if (gameBoardObject.tileArray[i].hasShip && gameBoardObject.tileArray[i].isHit) {
                    aiTiles[i].classList.add('hitShip');
                }
                else {
                    aiTiles[i].classList.add('hit');
                }
            }
        }
    }
    else {
        for (let i = 0; i < gameBoardObject.tileArray.length; i++) {
            if (gameBoardObject.tileArray[i].hasShip) playerTiles[i].classList.add('hasShip');

            if (gameBoardObject.tileArray[i].isHit) {
                if (gameBoardObject.tileArray[i].hasShip && gameBoardObject.tileArray[i].isHit) {
                    playerTiles[i].classList.add('hitShip');
                }
                else {
                    playerTiles[i].classList.add('hit');
                }
            }
        }
    }

}