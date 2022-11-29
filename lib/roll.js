export function roll(sides, diceNumber, rollCount) {	
	
	var rolls = [];
	
	// keeps track of the number of rolls
	for(var i = 0; i < rollCount; i++) {
	var result = 0;
	
	// keeps track of the number of dice
	for(var j = 0; j < diceNumber; j++) {
	result = result + one_roll(sides);
	}
	// adds to rolls
	rolls.push(result);
	}
	
	// printing out the resils
	var output = {
	sides: parseInt(sides),
	dice: parseInt(diceNumber),
	rolls: parseInt(rollCount),
	results: rolls
	}
	// converts output to string
	return JSON.stringify(output);
	}
	
	function one_roll(sides) {
	return Math.floor(Math.random() * sides) + 1;
	}

