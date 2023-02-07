function ragazzo01FNAMEGenerator() {
    let nameGenBoy = Math.random() * (25 - 0);
    let abc = Math.floor(nameGenBoy)
    const GenFNAMEBoyArray = ["Benjamin", "James", "David", "Daniel", "Michael", "Christopher",
        "John", "Andrew", "Matthew", "Joseph", "Nicholas", "William",
        "Ryan", "Samuel", "Thomas", "Jonathan", "Eric", "Anthony",
        "Matthew", "Samuel", "Justin", "Alexander", "Christopher", "Michael",
        "William"];
    let FName = GenFNAMEBoyArray[abc];
    console.log(nameGenBoy);
    return FName;
}
function ragazzo01LNAMEGenerator() {
    let nameGenBoy = Math.random() * (25 - 0);
    let abc = Math.floor(nameGenBoy)
    const GenLNAMEBoyArray = [" Smith", " Brown", " Johnson", " Wilson", " Davis", " Lee",
        " Martinez", " Robinson", " Wilson", " Gonzalez", " Parker", " Green",
        " Edwards", " Turner", " Anderson", " Taylor", " Wilson", " Harris",
        " Lewis", " Lee", " Hall", " Young", " Baker", " Hill",
        " Campbell"];

        let LName = GenLNAMEBoyArray[abc];
    return LName;
    
}
function ragazzo01FULLNAMEGenerator() {
    let FullName = ragazzo01FNAMEGenerator() + ragazzo01LNAMEGenerator();
    return FullName;
} //javascript fa schifo