import Ship from "./Ship";
import { utils } from '../utils/utils';

export default class GameBoard {
    constructor(humanOrAi) {
        this.tileArray = [];
        this.init();
        this.player = humanOrAi;
    }

    init() {
        for (let i = 0; i < 100; i++) {
            this.tileArray.push({ isHit: false, hasShip: false, ship: null });
        }
    }

    hit(index) {
        if (this.tileArray[index].hasShip) {
            this.tileArray[index].ship.isHit = true;
            this.tileArray[index].ship.hit(index);

            console.log(this);
        }
        if (this.tileArray[index].isHit === true) {
            return;
        }
        else {
            this.tileArray[index].isHit = true;
        }

        // console.log(this.tileArray);
    }

    randomPlacement() {
        const ships = this.#generateShips();

        console.log(ships);

        for (let i = 0; i < ships.length; i++) {
            let axis = utils.randomIntFromInterval(0, 1); // 0 - Horizontal, 1 - Vertical
            let boardIndex = utils.randomIntFromInterval(0, this.tileArray.length - 1);

            console.log(axis);
            console.log(boardIndex);

            if (utils.shipCanBePlaced(axis, boardIndex, ships[i].length)) {
                let positions = [boardIndex];
                let nextPos = boardIndex;
                for (let j = 1; j < ships[i].length; j++) {
                    nextPos += utils.returnPosOffset(axis);
                    positions.push(nextPos);
                }
                console.log(positions);

                if (positions.some(pos => { return this.tileArray[pos].hasShip })) {
                    i--;
                }
                else {

                    this.addShip(ships[i], positions);
                }

            }
            else {
                i--;
            }
        }
    }

    addShip(ship, positions) {

        for (let i = 0; i < ship.length; i++) {
            ship.position.push({ pos: positions[i], isHit: false });

            this.tileArray[positions[i]].hasShip = true;
            this.tileArray[positions[i]].ship = ship;
        }
    }

    #generateShips() {
        const shipNames = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol_Boat'];
        const ships = [];

        for (let i = 0; i < shipNames.length; i++) {
            const newShip = new Ship(`${shipNames[i]}`);
            ships.push(newShip);
        }

        return ships;
    }
}