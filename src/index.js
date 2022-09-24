import GameBoard from "./classes/GameBoard";
import Ship from "./classes/Ship";
import './styles/main.scss';
import { appendTiles, refreshTiles } from "./domManip/GameBoard";


export const playerBoard = document.querySelector('.playerBoard');
export const aiBoard = document.querySelector('.aiBoard');

const gameBoard = new GameBoard();
const newCarrier = new Ship('Carrier');


appendTiles(playerBoard, gameBoard);

gameBoard.randomPlacement();

refreshTiles(gameBoard);