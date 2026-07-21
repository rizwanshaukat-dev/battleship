import Gameboard  from "../src/modules/Gameboard.js";
import Player from "../src/modules/Player.js"

test("player has a gameboard", () => {
    const player = Player();

    expect(player.getGameboard()).toBeDefined();
});
test("player can attack another player's gameboard", () => {
    const attacker = Player("human");
    const defenderBoard = Gameboard();

    attacker.attack(defenderBoard, 2, 3);

    expect(defenderBoard.getBoard()[2][3].attacked).toBe(true);
});
test("Computer hit exactly one cell of the player's Board", () => {
    const computer = Player("computer");
    const gameboard=Gameboard();
    let count=0;
    computer.attack(gameboard);
    gameboard.getBoard().forEach(row => {
    row.forEach(column => {
    if(column.attacked===true){
        count++;
    }
  });
});
    expect(count).toBe(1);
});
test("computer never attacks the same cell twice", () => {
    const computer = Player("computer");
    const defenderBoard = Gameboard();

    for (let i = 0; i < 100; i++) {
        computer.attack(defenderBoard);
    }

    let attackedCells = 0;

    defenderBoard.getBoard().forEach(row => {
        row.forEach(cell => {
            if (cell.attacked) attackedCells++;
        });
    });

    expect(attackedCells).toBe(100);
});