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
    } else if (currentCharacterButton.classList.contains('button-left')) {
        currentCharExitAnimation = "anim-exit-left-char"
        currentCharReturnAnimation = "anim-left-to-initial"
    } else if (currentCharacterButton.classList.contains('vecchia-scena2')) {
        currentCharExitAnimation = "anim-exit-Scena2-vecchia"
        currentCharReturnAnimation = "anim-veccia2-to-initial"
    } else if (currentCharacterButton.classList.contains('minorenne-scena2')) {
        currentCharExitAnimation = "anim-exit-Scena2-minorenne"
        currentCharReturnAnimation = "anim-minorenne2-to-initial"
    } else if (currentCharacterButton.classList.contains('epatite-scena3')) {
        currentCharExitAnimation = "anim-exit-Scena3-epatite"
        currentCharReturnAnimation = "anim-epatite3-to-initial"
    } else if (currentCharacterButton.classList.contains('vecchia-scena3')) {
        currentCharExitAnimation = "anim-exit-Scena3-vecchia"
        currentCharReturnAnimation = "anim-vecchia3-to-initial"
    } else if (currentCharacterButton.classList.contains('minorenne-scena3')) {
        currentCharExitAnimation = "anim-exit-Scena3-monerenne"
        currentCharReturnAnimation = "anim-minorenne3-to-initial"
    } else if (currentCharacterButton.classList.contains('testimone-scena3')) {
        currentCharExitAnimation = "anim-exit-Scena3-testimone"
        currentCharReturnAnimation = "anim-testimone3-to-initial"
    } else if (currentCharacterButton.classList.contains('epatite-scena4')) {
        currentCharExitAnimation = "anim-exit-Scena4-epatite"
        currentCharReturnAnimation = "anim-epatite4-to-initial"
    } else if (currentCharacterButton.classList.contains('vecchia-scena4')) {
        currentCharExitAnimation = "anim-exit-Scena4-vecchia"
        currentCharReturnAnimation = "anim-vecchia4-to-initial"
    } else if (currentCharacterButton.classList.contains('prigioniero-scena4')) {
        currentCharExitAnimation = "anim-exit-Scena4-prigioniero"
        currentCharReturnAnimation = "anim-prigioniero4-to-initial"
    } else if (currentCharacterButton.classList.contains('poliziotto-scena4')) {
        currentCharExitAnimation = "anim-exit-Scena4-poliziotto"
        currentCharReturnAnimation = "anim-poliziotto4-to-initial"
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