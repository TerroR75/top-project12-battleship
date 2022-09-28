import GameManager from "./functionality/gameManager";
import GameBoard from "./classes/GameBoard";
import Ship from "./classes/Ship";
import './styles/main.scss';
import { appendTiles, refreshTiles } from "./domManip/GameBoard";
import { mouseOverTile } from "./domManip/DOMMouseEvents";


const gameManager = new GameManager();

export const playerBoardDOM = document.querySelector('.playerBoard');
export const aiBoardDOM = document.querySelector('.aiBoard');
const announcer = document.querySelector('.announcer');

gameManager.humanGameBoard.randomPlacement();
gameManager.aiGameBoard.randomPlacement();

appendTiles(playerBoardDOM, gameManager.humanGameBoard);
appendTiles(aiBoardDOM, gameManager.aiGameBoard);

const playerTiles = document.querySelectorAll('.playerBoard .tile');
const aiTiles = document.querySelectorAll('.aiBoard .tile');

refreshTiles(gameManager.humanGameBoard)

mouseOverTile(aiTiles);

while (gameManager.gameOver === true) {

}
