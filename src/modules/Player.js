import Gameboard from "./Gameboard.js";
export default function Player(type){
    const previousCoordinates= new Set();
    const board= Gameboard();

    function getGameboard(){
        return board;
    }
    function attack(defenderBoard,row,column){
        if(type==="computer"){
            if(previousCoordinates.size===100) return;
            let rowIndex=Math.floor(Math.random()*10);
            let colIndex=Math.floor(Math.random()*10);
            let key=`${rowIndex},${colIndex}`;
            while(previousCoordinates.has(key)){
                rowIndex=Math.floor(Math.random()*10);
                colIndex=Math.floor(Math.random()*10);
                key=`${rowIndex},${colIndex}`;
            }
            defenderBoard.receiveAttack(rowIndex,colIndex);
            previousCoordinates.add(key);
        }
        else{
            defenderBoard.receiveAttack(row,column)
        }
    }
    return{
        getGameboard,
        attack,
    }
}