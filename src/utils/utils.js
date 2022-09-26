function randomIntFromInterval(min, max) { //
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function shipCanBePlaced(axis, boardIndex, shipLength) {
    if (axis === 0) {
        let shipsRear = boardIndex + ((shipLength - 1) * returnPosOffset(0));
        if (boardIndex >= 0 && boardIndex <= 9) {
            return shipsRear > 9 ? false : true;
        }
        else if (boardIndex >= 10 && boardIndex <= 19) {
            return shipsRear > 19 ? false : true;
        }
        else if (boardIndex >= 20 && boardIndex <= 29) {
            return shipsRear > 29 ? false : true;
        }
        else if (boardIndex >= 30 && boardIndex <= 39) {
            return shipsRear > 39 ? false : true;
        }
        else if (boardIndex >= 40 && boardIndex <= 49) {
            return shipsRear > 49 ? false : true;
        }
        else if (boardIndex >= 50 && boardIndex <= 59) {
            return shipsRear > 59 ? false : true;
        }
        else if (boardIndex >= 60 && boardIndex <= 69) {
            return shipsRear > 69 ? false : true;
        }
        else if (boardIndex >= 70 && boardIndex <= 79) {
            return shipsRear > 79 ? false : true;
        }
        else if (boardIndex >= 80 && boardIndex <= 89) {
            return shipsRear > 89 ? false : true;
        }
        else if (boardIndex >= 90 && boardIndex <= 99) {
            return shipsRear > 99 ? false : true;
        }
        else {
            return false;
        }
    }
    else {
        let shipsRear = boardIndex + ((shipLength - 1) * returnPosOffset(10));
        if (shipLength === 5) {
            return boardIndex >= 60 ? false : true;
        }
        else if (shipLength === 4) {
            return boardIndex >= 70 ? false : true;
        }
        else if (shipLength === 3) {
            return boardIndex >= 80 ? false : true;
        }
        else if (shipLength === 2) {
            return boardIndex >= 90 ? false : true;
        }
        else {
            return false;
        }
    }
}

function returnPosOffset(axis) {
    if (axis === 0) {
        return 1;
    }
    else {
        return 10;
    }
}

export const utils = {
    randomIntFromInterval,
    shipCanBePlaced,
    returnPosOffset
}