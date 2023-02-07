function boy01FNameGenerator() {
	const arrFNAMEBoy = [ //Grandezza: 25
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
function boy01LNameGenerator() {
	const arrLNAMEBoy = [ //Grandezza: 25
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
	return arrLNAMEBoy[Randomizer(25)];
}
function ragazzo01FULLNAMEGenerator() {
	let FullName = boy01FNameGenerator() + boy01LNameGenerator();
	return FullName;
}

function Randomizer(x) {
	return Math.floor(Math.random() * x);
}