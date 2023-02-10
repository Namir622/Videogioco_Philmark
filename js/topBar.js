let testa0 = document.getElementById('hiddenchar0pawn');
let testa1 = document.getElementById('hiddenchar1pawn')
let testa2 = document.getElementById('hiddenchar2pawn');
let testa5 = document.getElementById('hiddenchar5pawn');
let testa3 = document.getElementById('char3-pawn');
let barra3 = document.getElementById('progress-bar3');
let barra4 = document.getElementById('progress-bar4');


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
        testa1.id = 'char1pawn';
    }
}
function progressiveBar(NumberDialogue){

    if(NumberDialogue == 1)
    {
        barra3.style.width= "41.6px";
        barra3.style.height= "10px";
        barra3.style.borderRadius = "10px";
        barra3.style.backgroundColor = "#fff"
    }
    if(NumberDialogue == 2)
    {
        barra4.style.width= "31.25px";
        barra4.style.height= "10px";
        barra4.style.borderRadius = "10px";
        barra4.style.backgroundColor = "#fff"
    }
    if(NumberDialogue == 3)
    {
        barra4.style.width= "31.25px";
        barra4.style.height= "10px";
        barra4.style.borderRadius = "10px";
        barra4.style.backgroundColor = "#fff"
    }
    
}