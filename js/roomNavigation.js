let roomNumber = 1; //numero di stanze -1
let number;
let frt;



var scrollSize = document.getElementsByClassName("room")[0].offsetWidth


function dialogueNumber(Anumber) {
    number = Anumber;
};

function navigateNextRoom() {
    
    if (roomNumber == 2) {
        return;
    }
    else if (number == 2) {
        roomNumber++;
        console.log("2")
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