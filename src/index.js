import GameBoard from "./classes/GameBoard";
import Ship from "./classes/Ship";
import './styles/main.scss';
import { appendTiles, refreshTiles } from "./domManip/GameBoard";


export const playerBoard = document.querySelector('.playerBoard');
export const aiBoard = document.querySelector('.aiBoard');

const gameBoard = new GameBoard('player');
const newCarrier = new Ship('Carrier');



gameBoard.randomPlacement();

appendTiles(playerBoard, gameBoard);

refreshTiles(gameBoard);