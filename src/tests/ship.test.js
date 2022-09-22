import Ship from "../classes/Ship";
import GameBoard from "../classes/GameBoard";

test('Append ship to gameboard', () => {
    const gameboard = new GameBoard();
    const ship = new Ship('Carrier');

    gameboard.addShip(ship, [0, 1, 2, 3, 4]);

    expect(gameboard.gameBoard[0]).toHaveProperty('hasShip', true);
    expect(gameboard.gameBoard[1]).toHaveProperty('hasShip', true);
    expect(gameboard.gameBoard[2]).toHaveProperty('hasShip', true);
    expect(gameboard.gameBoard[3]).toHaveProperty('hasShip', true);
    expect(gameboard.gameBoard[4]).toHaveProperty('hasShip', true);
});

test('Hit ship at specific position', () => {
    const gameboard = new GameBoard();
    const ship = new Ship('Carrier');

    gameboard.addShip(ship, [0, 1, 2, 3, 4]);

    gameboard.hit(0);

    expect(gameboard.gameBoard[0].ship.isHit).toEqual(true);
    expect(ship.hitTimes).toEqual(1);
});

test('Missed shot', () => {
    const gameboard = new GameBoard();
    const ship = new Ship('Carrier');

    gameboard.addShip(ship, [0, 1, 2, 3, 4]);

    gameboard.hit(5);

    expect(ship).toHaveProperty('hitTimes', 0);
    expect(gameboard.gameBoard[5].isHit).toEqual(true);
});

test('Sunking ship', () => {
    const gameboard = new GameBoard();
    const ship = new Ship('Carrier');

    gameboard.addShip(ship, [0, 1, 2, 3, 4]);

    gameboard.hit(0);
    gameboard.hit(1);
    gameboard.hit(2);
    gameboard.hit(3);
    gameboard.hit(4);

    expect(ship.sunk).toEqual(true);
});