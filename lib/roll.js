// define a function that rolls the dice based on:
//sides of the dice given,number of dice given,number of times the dice are rolled


export function roll(sides, diceNumber, rollCount) {	
	
	var rolls = [];
	
	// tracks the number of rolls 
	for(var i = 0; i < rollCount; i++) {
	var answer = 0;
	
	// tracks the dice number 
	for(var j = 0; j < diceNumber; j++) {
	answer = answer + aRoll(sides);
	}
	// adds to the number of rolls 
	rolls.push(answer);
	}
	
	// returns the result 
	var output = {
	sides: parseInt(sides),
	dice: parseInt(diceNumber),
	rolls: parseInt(rollCount),
	answers: rolls
	}
	// converts result to a string
	return JSON.stringify(output);
	}
	
	function aRoll(sides) {
	return Math.floor(Math.random() * sides) + 1;
	}

