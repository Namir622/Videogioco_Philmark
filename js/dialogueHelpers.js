function showDialogueBackground(buttonRef){
    buttonRef.style.zIndex = "2";
    document.getElementById("dark-overlay").style.zIndex = "1";
}

function hideDialogueBackground(){
    currentCharacterButton.style.zIndex = "1";
    document.getElementById("dark-overlay").style.zIndex = "-1";
}

function resetAnswerButtons(){
    const buttons = document.getElementsByClassName("answer-button")
    for (let i = 0; i < buttons.length; i++){
        // buttons[i].disabled = false
        buttons[i].classList.remove("disabled")
    }
    const selectionIndicators = document.getElementsByClassName("selection-indicator")
    for (let i = 0; i < selectionIndicators.length; i++){
        selectionIndicators[i].style.backgroundImage="none"
    }
}

function resetAnswersArray(){
    currentPlayerAnswers = []
}

function resetCurrentCharacter(){
    currentCharacterButton.classList.remove(currentCharReturnAnimation);
    currentCharacterButton.classList.remove(currentCharExitAnimation);
    currentCharacterButton.removeEventListener('animationend', endDialogue)
    currentCharExitAnimation = ""
    currentCharReturnAnimation = ""
    diarioDiClaytonEntry = ""
    currentCharacterButton = null
}

function resetConfirmButtons(){
    document.getElementById("button_annulla").disabled = currentPlayerAnswers.length <= 0
    document.getElementById("button_conferma").disabled = currentPlayerAnswers.length <= 3
}

function hideNavigationArrows(){
    const buttons = document.getElementsByClassName("room-switch-button")
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.display = "none"
    }
}

function showNavigationArrows(){
    const buttons = document.getElementsByClassName("room-switch-button")
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.display = "block"
    }
}

function setupCharAnimations(){
    if (currentCharacterButton.classList.contains('button-right')){
        currentCharExitAnimation = "anim-exit-right-char"
        currentCharReturnAnimation = "anim-right-to-initial"
    } else {
        currentCharExitAnimation = "anim-exit-left-char"
        currentCharReturnAnimation = "anim-left-to-initial"
    }
}

function updateUnlockedInteractions(){
    if (currentUnlocks != ""){
        unlockedInteractions.push(currentUnlocks)
        currentUnlocks = ""
    }
}

function displayAvantiButtonForInteractionEnd(){
    document.getElementById("annulla-conferma-row").style.display="none"
    document.getElementById("answers-container").style.display="none"
    document.getElementById("avanti-row").style.display="flex"
    document.getElementById("button_avanti").onclick = terminateInteraction;
}

function displayAvantiButtonForDialogue(){
    document.getElementById("annulla-conferma-row").style.display="none"
    document.getElementById("answers-container").style.display="none"
    document.getElementById("avanti-row").style.display="flex"
    document.getElementById("button_avanti").onclick = incrementDialogueIndex ;
}

function hideAvantiButton(){
    document.getElementById("annulla-conferma-row").style.display="flex"
    document.getElementById("answers-container").style.display="block"
    document.getElementById("avanti-row").style.display="none"
}