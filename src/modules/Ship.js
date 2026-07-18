export default function Ship(length){
    let hits=0;

    function hit(){
        hits++;
    }
    function getLength(){
        return length;
    }
    function isSunk(){
        return hits>=length;
    }
    return {
        hit,
        getLength,
        isSunk
    }
}