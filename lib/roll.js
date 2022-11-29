// define a function that rolls the dice based on:
//sides of the dice given,number of dice given,number of times the dice are rolled


export function roll(sides, diceNumber, rollCount) {	
	
	var rolls = [];
	
	
	// tracks how many rolls 

	for(var i = 0; i < rollCount; i++) {
	var result = 0;

	// tracks the dice number 
	for(var j = 0; j < diceNumber; j++) {
	result = result + aRoll(sides);
	}
	// roll is added
	rolls.push(result);
	}
	
	// prints out output 
	var output = {
	sides: parseInt(sides),
	dice: parseInt(diceNumber),
	rolls: parseInt(rollCount),
	results: rolls
	}
	// converts result to string 
	return JSON.stringify(output);
	}
	//gets a random side  
	function aRoll(sides) {
	return Math.floor(Math.random() * sides) + 1;
	}

