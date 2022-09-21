import GameBoard from "./classes/GameBoard";
import './styles/main.scss';
import { appendTiles } from "./domManip/GameBoard";


export const playerBoard = document.querySelector('.playerBoard');
export const aiBoard = document.querySelector('.aiBoard');

const gameBoard = new GameBoard();

appendTiles(playerBoard, gameBoard);