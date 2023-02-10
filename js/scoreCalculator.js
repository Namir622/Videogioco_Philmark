/* 
la classifica finale si calcola secondo 3 parametri: sommatoria, sequenza corretta e punti totali
la sommatoria consiste nella somma algebrica delle risposte selezionate dal giocatore come prima risposta
(perchè abbiamo detto che il giocatore non sceglie una sola risposta, ma le seleziona in sequenza in base a quanto vicine o lontane
    gli sembrino rispetto al colore dell'avatar)
es. 
Domanda 1:
    risposta 1: 2
    risposta 2: -1
    risposta 3: -2
    risposta 4: 1

Domanda 2:
    risposta 1: 1
    risposta 2: 2
    risposta 3: -1
    risposta 4: -2

Per la domanda 1 il giocatore sceglie prima la risposta 4, mentre per la domanda 2 sceglie la rispsota 2. La somma algebrica dei due valori sarà 3
-------------
La sequenza corretta consiste nel numero di volte in cui si è indovinato il corretto ordine delle risposte.
Verranno assegnati 2 punti per la risposta dominante scelta per prima e 1 punto per ogni altra risposta scelta nell'ordine giusto
esempio con le stesse domande di prima:

per la domanda 1 la sequenza del giocatore è 4-2-1-3
in questo caso l'unico valore che si trova al posto giusto è il 3, perchè vale -2 e quindi è il più distante dal colore dell'avatar.
Questa sequenza vale 1 punto.

per la domanda 2 la sequenza del giocatore è 2-3-1-4
in questo caso il giocatore ha indovinato la risposta dominante (2 punti) e la risposta 4, mentre le altre due sono sbagliate.
Questa sequenza vale 3 punti.
*/

var sommatoria=0;
var sequenza=0;
var punteggioTotale=0;

function calculateSommatoria(){
    $.getJSON('data/questions.json', function(data){
        
        var playerAnswers = data[0]["interactions"][0]["playerSequence"];
        var correctSequence = data[0]["interactions"][0]["playerSequence"];
        console.log(playerAnswers === correctSequence)
        calculatePunteggioTotale();
    });
}

function countRisposteCorrette(){

}

function calculatePunteggioTotale(){
    $.getJSON('data/questions.json', function(data){
        
        var playerAnswers = data[0]["interactions"][0]["playerSequence"];
        var correctSequence = data[0]["interactions"][0]["playerSequence"];
        for (let i = 0; i < playerAnswers.length; i++) {
            if (playerAnswers[i] == correctSequence[i]){
                punteggioTotale++
            }
        }
        console.log(punteggioTotale)
    });
}

// calculatePunteggioTotale()