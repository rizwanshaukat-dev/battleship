import Player from "./Player.js";
import Ship from "./Ship.js";
export default function GameController(){
    const humanPlayer= Player("human");
    const computerPlayer = Player("computer");
    const FLEET=[5,4,3,3,2];
    const DIRECTIONS=["horizontal","vertical"];
    let currentTurn="human";

    function getHumanBoard(){
        return humanPlayer.getGameboard();
    }
    function getComputerBoard() {
        return computerPlayer.getGameboard();
    }
    function playTurn(row,column) {
        humanPlayer.attack(computerPlayer.getGameboard(),row,column);
        if (isGameOver()) return;
        computerPlayer.attack(humanPlayer.getGameboard());
        if (isGameOver()) return;
    }
    function placeComputerShips(){
        for (const length of FLEET) {
            const ship=Ship(length);
        let placed=false;
        while (!placed) {
            const rowIndex=Math.floor(Math.random()*10);
            const colIndex=Math.floor(Math.random()*10);
            const randomDirection=DIRECTIONS[Math.floor(Math.random() * 2)];
            placed=getComputerBoard().placeShip(ship,rowIndex,colIndex,randomDirection);
        }
    }
    }
    function isGameOver() {
        return humanPlayer.getGameboard().allShipsSunk() || computerPlayer.getGameboard().allShipsSunk();
    }
    function getCurrentTurn(){
        return currentTurn;
    }
    return{
        getComputerBoard,
        getHumanBoard,
        playTurn,
        isGameOver,
        getCurrentTurn,
        placeComputerShips
    }
}