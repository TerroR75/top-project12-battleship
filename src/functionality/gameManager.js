import GameBoard from "../classes/GameBoard";

export default class GameManager {
    constructor() {
        this.humanTurn = true;
        this.humanGameBoard = new GameBoard('player');
        this.aiGameBoard = new GameBoard('ai');
        this.gameOver = false;
    }
}