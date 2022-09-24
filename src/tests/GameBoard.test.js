import GameBoard from '../classes/GameBoard';

test("Create 100 tiles inside gameboard array", () => {
    const gameboard = new GameBoard();

    expect(gameboard.tileArray.length).toEqual(100);
});