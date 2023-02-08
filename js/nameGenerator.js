function FNameGeneratorMALE() {
	const arrFNAMEBoy = [
		//Grandezza: 25
		"Benjamin",
		"James",
		"David",
		"Daniel",
		"Michael",
		"Christopher",
		"John",
		"Andrew",
		"Matthew",
		"Joseph",
		"Nicholas",
		"William",
		"Ryan",
		"Samuel",
		"Thomas",
		"Jonathan",
		"Eric",
		"Anthony",
		"Matthew",
		"Samuel",
		"Justin",
		"Alexander",
		"Christopher",
		"Michael",
		"William",
	];
	return arrFNAMEBoy[Randomizer(25)];
}
function LNameGenerator() {
	const arrLNAME = [
		//Grandezza: 25
		" Smith",
		" Brown",
		" Johnson",
		" Wilson",
		" Davis",
		" Lee",
		" Martinez",
		" Robinson",
		" Wilson",
		" Gonzalez",
		" Parker",
		" Green",
		" Edwards",
		" Turner",
		" Anderson",
		" Taylor",
		" Wilson",
		" Harris",
		" Lewis",
		" Lee",
		" Hall",
		" Young",
		" Baker",
		" Hill",
		" Campbell",
	];
	return arrLNAME[Randomizer(25)];
}

function FNameGeneratorFEMALE() {
	//Grandezza: 25
	const arrFNAMEGrandma = [
		"Emma",
		"Olivia",
		"Ava",
		"Isabella",
		"Sophia",
		"Mia",
		"Charlotte",
		"Amelia",
		"Harper",
		"Evelyn",
		"Abigail",
		"Emily",
		"Elizabeth",
		"Sofia",
		"Avery",
		"Ella",
		"Scarlett",
		"Grace",
		"Chloe",
		"Victoria",
		"Madison",
		"Lily",
		"Addison",
		"Zoe",
		"Natalie",
	];
	return arrFNAMEGrandma[Randomizer(25)];
}

var LName01 = LNameGenerator();

function boy01FULLNAMEGenerator() {
	return FNameGeneratorMALE() + LName01;
}

function grandmaFULLNAMEGenerator() {
	return FNameGeneratorFEMALE() + LName01;
}

function Randomizer(x) {
	return Math.floor(Math.random() * x);
}
