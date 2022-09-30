import GameManager from "./functionality/gameManager";
import Ai from "./classes/AI";
import './styles/main.scss';
import { appendTiles, refreshTiles } from "./domManip/GameBoard";
import { aiMouseEvents } from "./domManip/DOMMouseEvents";


export const gameManager = new GameManager();

export const playerBoardDOM = document.querySelector('.playerBoard');
export const aiBoardDOM = document.querySelector('.aiBoard');
export const announcer = document.querySelector('.announcer');

console.log(announcer);

gameManager.humanGameBoard.randomPlacement();
gameManager.aiGameBoard.randomPlacement();

appendTiles(playerBoardDOM, gameManager.humanGameBoard);
appendTiles(aiBoardDOM, gameManager.aiGameBoard);

const aiTiles = document.querySelectorAll('.aiBoard .tile');

refreshTiles(gameManager.humanGameBoard, 'player')
aiMouseEvents(aiTiles);