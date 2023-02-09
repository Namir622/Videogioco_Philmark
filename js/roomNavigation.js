let roomNumber = 1; //numero di stanze -1
let number = 0;
let frt;



var scrollSize = document.getElementsByClassName("room")[0].offsetWidth


function dialogueNumber(Anumber) {
    number = Anumber;
};

function navigateNextRoom() {
    debugger;

    if (roomNumber == 4) {
        return;
    }
    else if (number == 0) {
        roomNumber++;
        //number++
        console.log("2")
        document.querySelector("#rooms-container").scrollLeft += scrollSize;
    } else if (number == 4) {
        console.log(number);
        debugger;
        roomNumber++;
        number++
        console.log("4")
        document.querySelector("#rooms-container").scrollLeft += scrollSize;
    } else if (number == 8) {
        roomNumber++;
        number++
        console.log("8")
        document.querySelector("#rooms-container").scrollLeft += scrollSize;
    }
}

/*function navigatePreviousRoom(){
    if(roomNumber == 0){
        console.log("3")
        document.querySelector("#rooms-container").scrollLeft = scrollSize*3;
    } else{
        console.log("4")
        document.querySelector("#rooms-container").scrollLeft -= scrollSize;
    }
    
}*/