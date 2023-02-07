function showMessageBox(message){
    document.getElementById("modal_message").innerHTML = message
    $("#message-box").fadeIn();
}

function hideMessageBox(){
    $("#message-box").fadeOut();
    areAllCharactersCompleted()
}