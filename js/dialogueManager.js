var currentCharId="0";
var currentCharName = "";
var currentQuestionId=0;
var currentUnlocks="";
var currentPlayerAnswers = [];
var currentCharacterButton = null;
var currentCharExitAnimation = "";
var currentCharReturnAnimation = "";
var diarioDiClaytonEntry = "";
var chNumber = 0; //character number, si occupa di dare i nomi ai tizi
var finishedDialogues = 0;

var answersObject = {
    "0":[],
    "1":[],
    "2":[],
    "3":[],
    "4":[],
    "5":[],
    "6":[],
    "7":[]
}
var unlockedInteractions = []
var completedCharacters = [false, false]


function beginInteraction(buttonRef){
    console.log('beginInteraction');
    currentCharacterButton = buttonRef
    currentCharId = currentCharacterButton.id.substring(4)
    currentInteractionID = answersObject[currentCharId].length
    currentCharName = nameGiver(chNumber);
    $.getJSON('../data/questions.json', function(data){
        currentInteraction = data[currentCharId]["interactions"][currentInteractionID]
        if (currentInteraction["requires"] != "" && !unlockedInteractions.includes(currentInteraction["requires"])){
            // alert(currentInteraction["requires_message"])
            showMessageBox(currentInteraction["requires_message"])
        } else {
            showDialogueBackground(buttonRef)
            setupCharAnimations()
            buttonRef.classList.add(currentCharExitAnimation);
            buttonRef.addEventListener('animationend', startDialogue);
        }

        console.log(currentCharName)
    })


}

var dialogueIndex = 0


function startDialogue(){
    console.log('startDialogue');
    document.getElementById("dark-overlay").style.opacity=0.7
    document.getElementById("characterName").innerHTML = "Mr. Pando:"
    currentUnlocks = currentInteraction["unlocks"]
    currentQuestion = currentInteraction["question"]
    displayAvantiButtonForDialogue();
    document.getElementById("question-text").innerHTML = currentInteraction["dialogue"][dialogueIndex]
    hideNavigationArrows();
    document.getElementById("dialog-container").style.display="block"
    currentCharacterButton.removeEventListener('animationend', startDialogue)
}

function incrementDialogueIndex(){
    dialogueIndex++
    if(dialogueIndex <= currentInteraction["dialogue"].length-1){
        document.getElementById("question-text").innerHTML = currentInteraction["dialogue"][dialogueIndex]
        if((dialogueIndex % 2) == 0){
            document.getElementById("characterName").innerHTML = "Mr. Pando:"
        } else {
            document.getElementById("characterName").innerHTML = currentCharName + ":"
        }
    } else {
        populateQuestions();
    }
}

function populateQuestions(){
    console.log('populateQuestions');
    hideAvantiButton()
    document.getElementById("characterName").innerHTML = currentCharName + ":"
    document.getElementById("question-text").innerHTML = currentQuestion["question-text"]
    document.getElementById("answerA").innerHTML = currentQuestion["A"]["answer"]
    document.getElementById("answerB").innerHTML = currentQuestion["B"]["answer"]
    document.getElementById("answerC").innerHTML = currentQuestion["C"]["answer"]
    document.getElementById("answerD").innerHTML = currentQuestion["D"]["answer"]
    document.getElementById("A").style.backgroundImage = "url(../css/assets/UI/Dialogues/" + currentQuestion["A"]["color"] +"_Button_Dialogues.png)"
    document.getElementById("B").style.backgroundImage = "url(../css/assets/UI/Dialogues/" + currentQuestion["B"]["color"] +"_Button_Dialogues.png)"
    document.getElementById("C").style.backgroundImage = "url(../css/assets/UI/Dialogues/" + currentQuestion["C"]["color"] +"_Button_Dialogues.png)"
    document.getElementById("D").style.backgroundImage = "url(../css/assets/UI/Dialogues/" + currentQuestion["D"]["color"] +"_Button_Dialogues.png)"

}




function selectAnswer(buttonRef){
    console.log('selectAnswer');
    if (!buttonRef.classList.contains("disabled")){
        currentPlayerAnswers.push(buttonRef.id)
        var selectionIndicatorId = "Q" + buttonRef.id + "-indicator"
        document.getElementById(selectionIndicatorId).style.backgroundImage = "url(../css/assets/UI/Dialogues/" + currentPlayerAnswers.length +"_Button_Dialogues.png)";
        buttonRef.disabled = true
        buttonRef.classList.add("disabled")
        console.log(currentPlayerAnswers)
        resetConfirmButtons()
    }
}

function confirmAnswers(){
    console.log('confirmAnswers');
    displayAvantiButtonForInteractionEnd()
    firstAnswer = currentPlayerAnswers[0]
    document.getElementById("question-text").innerHTML = currentQuestion[firstAnswer]["quickReply"]
    diarioDiClaytonEntry = currentQuestion[firstAnswer]["claytonDiary"]
}

function terminateInteraction(){
    console.log('terminateInteraction');
    answersObject[currentCharId].push(currentPlayerAnswers)
    updateUnlockedInteractions()
    resetAnswerButtons()
    resetAnswersArray()
    resetConfirmButtons()
    document.getElementById("dialog-container").style.display="none"
    showNavigationArrows();
    hideAvantiButton();
    resetDialogueIndex();

    currentCharacterButton.classList.add(currentCharReturnAnimation);
    currentCharacterButton.addEventListener('animationend', endDialogue)

    finishedDialogues++;
    dialogueNumber(finishedDialogues);
    chNumber++;
    nameGiver(chNumber);
    
    
    //TODO ALEX
    if(currentCharId == 0){
        nextGame(answersObject[currentCharId]);
    }

}

function resetDialogueIndex(){
    dialogueIndex = 0;
}

function endDialogue(){
    hideDialogueBackground()
    checkCharacterCompleted()
    showMessageBox(diarioDiClaytonEntry)
    resetCurrentCharacter()
}

function cancelAnswers(){
    var confirm = window.confirm("Vuoi annullare la selezione?")
    if (confirm){
        resetAnswerButtons();
        resetAnswersArray();
        resetConfirmButtons()
    }
}

function updateCharacters(){
    //TODO ALEX TEST
    if  (completedCharacters.every (value => value === true)){
        //console.log(answersObject);
        //endGame(answersObject[1])
    }else{
        //console.log(answersObject);
        //nextGame(answersObject[0])
    }
}

function checkCharacterCompleted(){
    $.getJSON('../data/questions.json', function(data){
        if((data[currentCharId]["interactions"].length == answersObject[currentCharId].length) ){ //&& completedCharacters[currentCharId]===false
            //play character complete animation (change color)
            completedCharacters[currentCharId] = true
        }
    })
    updateCharacters()
    console.log(completedCharacters)
}

//modifica applicata

function areAllCharactersCompleted(){
    if  (completedCharacters.every (value => value === true)){
        console.log(answersObject);
        //modifica applicata
        endGame(answersObject[1]) //TODO ALEX
    }
}
