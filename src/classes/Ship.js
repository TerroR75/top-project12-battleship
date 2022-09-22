export default class Ship {
    constructor(type) {
        this.type = type;
        this.sunk = false;
        this.length = this.determineLength(this.type);
        this.position = [];
        this.hitTimes = 0;
    }

    determineLength(type) {
        switch (type) {
            case 'Carrier': return 5;
            case 'Battleship': return 4;
            case 'Destroyer': return 3;
            case 'Submarine': return 3;
            case 'Patrol_Boat': return 2;
            default: return 0;
        }
    }

    hit() {
        this.hitTimes += 1;

        this.checkIfSunken();
    }

    checkIfSunken() {
        if (this.hitTimes === this.length) {
            this.sunk = true;
        }
        else {
            this.sunk = false;
        }
    }
}