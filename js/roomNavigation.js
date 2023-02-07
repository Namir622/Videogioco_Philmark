var currentRoomIndex = 0;
var scrollSize = document.getElementsByClassName("room")[0].offsetWidth

function navigateNextRoom(){
    if(currentRoomIndex == 3){
        currentRoomIndex = 0
        document.querySelector("#rooms-container").scrollLeft = 0;
    } else{
        document.querySelector("#rooms-container").scrollLeft += scrollSize;
        currentRoomIndex++;
    }
}

function navigatePreviousRoom(){
    if(currentRoomIndex == 0){
        currentRoomIndex = 3
        document.querySelector("#rooms-container").scrollLeft = scrollSize*3;
    } else{
        document.querySelector("#rooms-container").scrollLeft -= scrollSize;
        currentRoomIndex--
    }
    
}