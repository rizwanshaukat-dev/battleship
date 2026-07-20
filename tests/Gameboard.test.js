import Gameboard from "../src/modules/Gameboard.js";
import Ship from "../src/modules/Ship.js";

test("creates a 10x10 Gameboard grid",()=>{
    const gameboard=Gameboard();
    const board=gameboard.getBoard();

    expect(board).toHaveLength(10);

    board.forEach((row) => {
        expect(row).toHaveLength(10);
    });
});
test("place a ship successfully on a valid position",()=>{
    const gameboard=Gameboard();
    const ship=Ship(3);
    const placed=gameboard.placeShip(ship,2,4,"horizontal");

    expect(placed).toBe(true);
});
test("Ship is placed successfully",()=>{
    const gameboard=Gameboard();
    const board=gameboard.getBoard();
    const ship=Ship(3);
    gameboard.placeShip(ship, 2, 4, "horizontal");

    expect(board[2][4].ship).toBe(ship);
});
test("Place a horizontal ship on consecutive cells",()=>{
    const gameboard=Gameboard();
    const board=gameboard.getBoard();
    const ship=Ship(3);
    gameboard.placeShip(ship, 2, 4, "horizontal");

    expect(board[2][4].ship).toBe(ship);
    expect(board[2][5].ship).toBe(ship);
    expect(board[2][6].ship).toBe(ship);

});
test("Place a vertical ship on consecutive cells",()=>{
    const gameboard=Gameboard();
    const board=gameboard.getBoard();
    const ship=Ship(3);
    gameboard.placeShip(ship, 2, 4, "vertical");

    expect(board[2][4].ship).toBe(ship);
    expect(board[3][4].ship).toBe(ship);
    expect(board[4][4].ship).toBe(ship);

});
test("returns false when a horizontal ship goes out of bounds", () => {
    const gameboard = Gameboard();
    const ship = Ship(3);
    const placed = gameboard.placeShip(ship, 2, 8, "horizontal");

    expect(placed).toBe(false);
});
test("returns false when a vertical ship goes out of bounds", () => {
    const gameboard = Gameboard();
    const ship = Ship(3);
    const placed = gameboard.placeShip(ship, 8, 2, "vertical");

    expect(placed).toBe(false);
});
test("returns false when a horizontal ship overlaps", () => {
    const gameboard = Gameboard();
    const ship1 = Ship(3);
    const ship2=Ship(2);
    gameboard.placeShip(ship1,2,4,"horizontal")
    const placed = gameboard.placeShip(ship2, 2, 5, "horizontal");

    expect(placed).toBe(false);
});
test("returns false when a vertical ship overlaps", () => {
    const gameboard = Gameboard();
    const ship1 = Ship(3);
    const ship2=Ship(2);
    gameboard.placeShip(ship1,2,4,"vertical")
    const placed = gameboard.placeShip(ship2, 3, 4, "vertical");

    expect(placed).toBe(false);
});
test("marks an empty cell as attacked", () => {
    const gameboard = Gameboard();

    gameboard.receiveAttack(3, 4);

    expect(gameboard.getBoard()[3][4].attacked).toBe(true);
});
test("attacking a ship calls hit on the ship",()=>{
    const gameboard=Gameboard();
    const ship=Ship(1);
    gameboard.placeShip(ship,3,4,"horizontal");
    gameboard.receiveAttack(3,4);

    expect(ship.isSunk()).toBe(true);
});
test("allShipsSunk returns false when a placed ship is not sunk", () => {
    const gameboard = Gameboard();
    const ship = Ship(2);

    gameboard.placeShip(ship, 0, 0, "horizontal");

    expect(gameboard.allShipsSunk()).toBe(false);
});
test("records a missed attack", () => {
    const gameboard = Gameboard();

    gameboard.receiveAttack(4, 5);

    expect(gameboard.getMissedAttacks()).toContainEqual([4, 5]);
});
test("Ignore the same attack on the same cell",()=>{
    const gameboard=Gameboard();
    const ship=Ship(2);
    gameboard.placeShip(ship,0,0,"horizontal");
    gameboard.receiveAttack(0,0);
    gameboard.receiveAttack(0,0);

    expect(ship.isSunk()).toBe(false);

})