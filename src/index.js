import GameManager from "./functionality/gameManager";
import GameBoard from "./classes/GameBoard";
import Ship from "./classes/Ship";
import './styles/main.scss';
import { appendTiles, refreshTiles } from "./domManip/GameBoard";
import { aiMouseEvents } from "./domManip/DOMMouseEvents";


export const gameManager = new GameManager();

export const playerBoardDOM = document.querySelector('.playerBoard');
export const aiBoardDOM = document.querySelector('.aiBoard');
const announcer = document.querySelector('.announcer');

gameManager.humanGameBoard.randomPlacement();
gameManager.aiGameBoard.randomPlacement();

appendTiles(playerBoardDOM, gameManager.humanGameBoard);
appendTiles(aiBoardDOM, gameManager.aiGameBoard);

const aiTiles = document.querySelectorAll('.aiBoard .tile');

refreshTiles(gameManager.humanGameBoard)

aiMouseEvents(aiTiles);

while (gameManager.gameOver === true) {
    // game loop
}
