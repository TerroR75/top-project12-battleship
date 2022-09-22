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
        if (this.gameBoard[index].isHit === true) {
            return;
        }
        else {
            this.gameBoard[index].isHit = true;
        }


        if (this.gameBoard[index].hasShip) {
            this.gameBoard[index].ship.isHit = true;
            this.gameBoard[index].ship.hit();
        }
    }

    addShip(ship, positions) {
        for (let i = 0; i < ship.length; i++) {
            ship.position.push({ pos: positions[i], isHit: false });

            this.gameBoard[positions[i]].hasShip = true;
            this.gameBoard[positions[i]].ship = ship;
        }
    }
}