export default class GameBoard {
    constructor() {
        this.gameBoard = [];
        this.init();
    }

    init() {
        for (let i = 0; i < 100; i++) {
            this.gameBoard.push({ isHit: false, hasShip: false, ship: null });
        }
    }

    hit(index) {
        if (gameBoard[index].isHit === true) return;
        gameBoard[index].isHit = true;
    }
}