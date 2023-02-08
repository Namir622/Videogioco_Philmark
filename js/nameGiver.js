function nameGiver(nGiver){
    switch(nGiver){
        case 0: { //Ragazzo
            return boyNameGen()
        }
        case 1: { //Nonna
            return grandmaNameGen()
        }
    }
}

function boyNameGen(){
    return boy01FULLNAMEGenerator();
}

function grandmaNameGen(){
    return grandmaFULLNAMEGenerator();
}
