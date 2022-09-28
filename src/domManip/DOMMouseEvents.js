import { refreshTiles } from "./GameBoard";
import { gameManager } from '../index';

export function aiMouseEvents(tiles) {
    mouseOver(tiles);
    mouseClick(tiles);
}

function mouseOver(tiles) {
    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            tile.classList.toggle('mouse-over');
        })
        tile.addEventListener('mouseout', () => {
            tile.classList.toggle('mouse-over');
        })
    });
}

function mouseClick(tiles) {
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            gameManager.aiGameBoard.tileArray[tile.dataset.id].isHit = true;
            refreshTiles(gameManager.aiGameBoard);
            console.log(gameManager.aiGameBoard.tileArray[tile.dataset.id])
        })
    });
}