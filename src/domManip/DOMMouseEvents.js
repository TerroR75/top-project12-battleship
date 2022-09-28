import { refreshTiles } from "./GameBoard";
import { gameManager } from '../index';

export function aiMouseEvents(tiles) {
    mouseOver(tiles);
    mouseClick(tiles);
}

function mouseOver(tiles) {
    if (gameManager.humanTurn === true) {
        tiles.forEach(tile => {
            tile.addEventListener('mouseenter', () => {
                tile.classList.toggle('mouse-over');

            })
            tile.addEventListener('mouseout', () => {
                tile.classList.toggle('mouse-over');
            })
        });
    }

}

function mouseClick(tiles) {
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            if (gameManager.humanTurn === true && !tile.classList.contains('hit')) {
                gameManager.aiGameBoard.tileArray[tile.dataset.id].isHit = true;
                refreshTiles(gameManager.aiGameBoard, 'ai');
                gameManager.aiGameBoard.hit(parseInt(tile.dataset.id));
                gameManager.humanTurn = false;

                gameManager.aiTurn();
            }
        })
    });
}