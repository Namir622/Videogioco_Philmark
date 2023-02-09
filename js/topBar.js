let testa0 = document.getElementById('hiddenchar0pawn');
let testa2 = document.getElementById('hiddenchar2pawn');
let testa5 = document.getElementById('hiddenchar5pawn');


function topBarUnlocker(roomNumber){
    if (roomNumber == 2){
        console.log("unlocked room 2")
        testa2.id = 'char2pawn';
    }
    else if (roomNumber == 3){
        console.log("unlocked room 3")
        testa5.id = 'char5pawn';
    }
    else if (roomNumber == 4){
        console.log("unlocked room 4")
        testa0.id = 'char0pawn';
    }
}