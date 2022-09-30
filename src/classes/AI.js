export default class Ai {
    constructor() {
        this.possibleHitPositions = this.#definePossibleHitArray();
        this.lastSuccessHit = undefined;
    }

    #definePossibleHitArray() {
        let array = [];
        for (let i = 0; i < 100; i++) {
            array.push(i);
        }
        return array;
    }

    removePositionFromArray(pos) {
        for (let i = 0; i < this.possibleHitPositions.length; i++) {
            if (pos === this.possibleHitPositions[i]) {
                this.possibleHitPositions.splice(i, 1);
                break;
            }
        }
    }
}