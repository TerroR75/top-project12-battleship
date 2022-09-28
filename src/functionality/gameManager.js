import GameBoard from "../classes/GameBoard";

class GameManager {
    constructor() {
        this.currentPlayer = 'player';
        this.humanGameBoard = new GameBoard('player');
        this.aiGameBoard = new GameBoard('ai');
    }
}