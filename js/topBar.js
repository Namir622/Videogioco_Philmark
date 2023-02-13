/*per le teste*/
let testa0 = document.getElementById('hiddenchar0pawn');
let testa1 = document.getElementById('hiddenchar1pawn')
let testa2 = document.getElementById('hiddenchar2pawn');
let testa3 = document.getElementById('char3-pawn');
let testa4 = document.getElementById('char4-pawn');
let testa5 = document.getElementById('hiddenchar5pawn');
/*per la barra*/
let barra3 = document.getElementById('progress-bar3');
let barra4 = document.getElementById('progress-bar4');
let barra2 = document.getElementById('progress-bar2');
let barra5 = document.getElementById('progress-bar5');
let barra1 = document.getElementById('progress-bar1');
let barra0 = document.getElementById('progress-bar0');

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
        barra4.style.width= "62.50px";
        barra4.style.height= "10px";
        barra4.style.borderRadius = "10px";
        barra4.style.backgroundColor = "#fff"
    }
    if(NumberDialogue == 4)
    {
        barra2.style.width= "62.5px";
        barra2.style.height= "10px";
        barra2.style.borderRadius = "10px";
        barra2.style.backgroundColor = "#fff"
    }    
    if(NumberDialogue == 5)
    {
        barra3.style.width= "83.3px";
        barra3.style.height= "10px";
        barra3.style.borderRadius = "10px";
        barra3.style.backgroundColor = "#fff"
    }
    if(NumberDialogue == 6)
    {
        barra5.style.width= "125px";
        barra5.style.height= "10px";
        barra5.style.borderRadius = "10px";
        barra5.style.backgroundColor = "rgb(57, 57, 235)";
        testa5.id = "char5-pawn-colored";
    }
    if(NumberDialogue == 7)
    {
        barra4.style.width= "93.75px";
        barra4.style.height= "10px";
        barra4.style.borderRadius = "10px";
        barra4.style.backgroundColor = "#fff"
    }
    if(NumberDialogue == 8)
    {
        barra2.style.width= "125px";
        barra2.style.height= "10px";
        barra2.style.borderRadius = "10px";
        barra2.style.backgroundColor = "rgb(20, 223, 4)"
        testa2.id = "char2-pawn-colored"
    }
    if(NumberDialogue == 9)
    {
        barra0.style.width= "125px";
        barra0.style.height= "10px";
        barra0.style.borderRadius = "10px";
        barra0.style.backgroundColor = "rgb(47, 236, 243)"
        testa0.id = "char0-pawn-colored"
    }
    if(NumberDialogue == 10)
    {
        barra1.style.width= "125px";
        barra1.style.height= "10px";
        barra1.style.borderRadius = "10px";
        barra1.style.backgroundColor = "rgb(89, 4, 90)"
        testa1.id = "char1-pawn-colored"
    }
    if(NumberDialogue == 11)
    {
        barra3.style.width= "125px";
        barra3.style.height= "10px";
        barra3.style.borderRadius = "10px";
        barra3.style.backgroundColor = "rgb(236, 204, 53)"
        testa3.id = "char3-pawn-colored"
    }
    if(NumberDialogue == 12)
    {
        barra4.style.width= "125px";
        barra4.style.height= "10px";
        barra4.style.borderRadius = "10px";
        barra4.style.backgroundColor = "rgb(228, 6, 32)"
        testa4.id = "char4-pawn-colored"
    }


}