export default class Ship {
    constructor(type) {
        this.type = type;
        this.sunk = false;
        this.length = determineLength(this.type);
        this.position = [];
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
}