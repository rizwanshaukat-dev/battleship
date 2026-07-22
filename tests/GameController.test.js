import GameController from "../src/modules/GameController.js";
test("creates a game controller", () => {
    const game = GameController();

    expect(game).toBeDefined();
});
test("creates separate gameboards for human and computer", () => {
    const game = GameController();

    expect(game.getHumanBoard()).toBeDefined();
    expect(game.getComputerBoard()).toBeDefined();
    expect(game.getHumanBoard()).not.toBe(game.getComputerBoard());
});
test("playTurn attacks the computer's gameboard", () => {
    const game = GameController();

    game.playTurn(3, 5);

    const board = game.getComputerBoard().getBoard();

    expect(board[3][5].attacked).toBe(true);
});
test("new game is not over", () => {
    const game = GameController();

    expect(game.isGameOver()).toBe(false);
});
test("A new game starts with Human Turn",()=>{
    const game = GameController();

    expect(game.getCurrentTurn()).toBe("human");
});
test("placeComputerShips places the entire fleet on the computer board", () => {
    const game = GameController();
    game.placeComputerShips();
    const board = game.getComputerBoard().getBoard();
    let occupiedCells = 0;
    for (const row of board) {
        for (const cell of row) {
            if (cell.ship !== null) {
                occupiedCells++;
            }
        }
    }
    expect(occupiedCells).toBe(17);
});