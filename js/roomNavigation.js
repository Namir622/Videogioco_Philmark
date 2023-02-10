let roomNumber = 1; //numero di stanze -1
let number = 0;
let frt;



var scrollSize = document.getElementsByClassName("room")[0].offsetWidth


function dialogueNumber(Anumber) {
    number = Anumber;
};

function navigateNextRoom() {

    if (roomNumber == 4) {
        return;
    }
    else if (number == 2 ) { /*|| number == 0 cambia lo 0  a 2 per far si che si blocchi il bottone se nn avvengono i dialoghi*/
        roomNumber++;
        //number++
        console.log("2")
        topBarUnlocker(roomNumber);
        document.querySelector("#rooms-container").scrollLeft += scrollSize;
    } else if (number == 4) {
        console.log(number);
        roomNumber++;
        number++
        topBarUnlocker(roomNumber);
        console.log("4")
        document.querySelector("#rooms-container").scrollLeft += scrollSize;
    } else if (number == 8) {
        roomNumber++;
        number++
        topBarUnlocker(roomNumber);
        console.log("8")
        document.querySelector("#rooms-container").scrollLeft += scrollSize;
    }
}
