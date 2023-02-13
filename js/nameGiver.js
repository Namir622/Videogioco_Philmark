let boyCounter = 0
let nonnaCounter= 0
let ragazzinaCounter= 0
let nonnoCounter = 0
let guardiaCounter= 0
let prigionieroCounter= 0

let boyName = ""
let nonnaName= ""
let ragazzinaName= ""
let nonnoName= ""
let guardiaName= ""
let prigionieroName= ""

function nameGiver(nGiver) {
    let nDG 
    console.log("Questo è il numero del personaggio " + nGiver)
    if (nGiver == 0 || nGiver == 4 || nGiver == 10) { //RAGAZZO
        nDG = 0
        console.log("000000000")
    }
    else if (nGiver == 1 || nGiver == 2 || nGiver == 6 || nGiver == 11) { //NONNA
        nDG = 1
        console.log("111111111")
    }
    else if (nGiver == 3 || nGiver == 7) {  //RAGAZZINA
        nDG = 2
        console.log("222222222")
    }
    else if (nGiver == 5) { //NONNO
        nDG = 3
        console.log("333333333")
    }
    else if (nGiver == 8) { //GUARDIA
        nDG = 4
        console.log("444444444")
    }
    else if (nGiver == 9) { //PRIGIONIERO
        nDG = 5
        console.log("555555555")
    }

    switch (nDG) {
        case 0: { //Ragazzo
            return boyNameGen()
        }
        case 1: { //Nonna
            return grandmaNameGen()
        }
        case 2: { //Ragazzina
            return ragazzinaNameGen()
        }
        case 3: { //Nonno
            return nonnoNameGen()
        }
        case 4: { //Guardia
            return guardiaNameGen()
        }
        case 5: { //Prigioniero
            return prigionieroNameGen()
        }
    }
}


function boyNameGen() {
    if (boyCounter == 0) {
        boyName = boy01FULLNAMEGenerator()
        boyCounter++
        return boyName
    }
    return boyName;
}

function grandmaNameGen() {
    if (nonnaCounter == 0) {
        nonnaName = grandmaFULLNAMEGenerator()
        nonnaCounter++
        return nonnaName
    }
    return nonnaName;
}

function ragazzinaNameGen() {
    if (ragazzinaCounter == 0) {
        ragazzinaName = ragazzinaFULLNAMEGenerator()
        ragazzinaCounter++
        return ragazzinaName
    }
    return ragazzinaName;
}
function nonnoNameGen() {
    if (nonnoCounter == 0) {
        console.log("Giovanni Pascoli")
        nonnoName = nonnoFULLNAMEGenerator()
        nonnoCounter++
        return nonnoName
    }
    return nonnoName;
}

function guardiaNameGen() {
    if (guardiaCounter == 0) {
        guardiaName = guardiaFULLNAMEGenerator()
        guardiaCounter++
        return guardiaName
    }
    return guardiaName;
}

function prigionieroNameGen() {
    if (prigionieroCounter == 0) {
        prigionieroName = prigionieroFULLNAMEGenerator()
        prigionieroCounter++
        return prigionieroName
    }
    return prigionieroName;
}
