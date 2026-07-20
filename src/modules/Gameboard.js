export default function Gameboard(){
    const board=Array.from({length:10},()=> Array.from({length:10},()=>({
            ship:null,
            attacked:false
        }))
    );

    function getBoard(){
        return board;
    }
    function placeShip(ship,row,column,direction){
        if(direction==="horizontal" ){
            if(column+ship.getLength()-1 > 9) return false;
            for (let index = 0; index < ship.getLength(); index++) {
                if(board[row][column+index].ship!==null) return false;
            }
        for (let index = 0; index < ship.getLength(); index++) {
                board[row][column+index].ship=ship;
        }
    }
    else{
            if(row+ship.getLength()-1 > 9) return false;
                for (let index = 0; index < ship.getLength(); index++) {
                    if(board[row+index][column].ship!==null) return false;
            }
        for (let index = 0; index < ship.getLength(); index++) {
            board[row+index][column].ship=ship;
        }
    }
        return true;
    }
    return{
        getBoard,
        placeShip,
    }

}