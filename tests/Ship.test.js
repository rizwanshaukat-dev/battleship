import Ship from "../src/modules/Ship.js";

test("creates a ship with the correct length", () => {
  const ship = Ship(3);

  expect(ship.getLength()).toBe(3);
});

test("creates a ship of the length 3 that is sunk after 3 hits",()=>{
    const ship=Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
test("A ship of length 3 is not sunk after 1 hit",()=>{
    const ship=Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});
test("A ship of length 3 is not sunk before enough hits",()=>{
    const ship=Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});