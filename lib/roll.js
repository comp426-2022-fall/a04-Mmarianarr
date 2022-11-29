// define a function that rolls the dice based on:
//sides of the dice given,number of dice given,number of times the dice are rolled


export function roll(sides, diceNumber, rollCount) {	
	
	var diceRoll = [];

	// tracks how many rolls 

	for(var i = 0; i < rollCount; i++) {
	var total = 0;

	// tracks the dice number 
	for(var j = 0; j < diceNumber; j++) {
	total = total + aRoll(sides);
	}
	// roll is added
	diceRoll.push(total);
	}
	
	// prints out output 
	var output = {
	sides: parseInt(sides),
	dice: parseInt(diceNumber),
	diceRoll: parseInt(rollCount),
	results: diceRoll
	}
	// converts result to string 
	return JSON.stringify(output);
	}
	//gets a random side  
	function aRoll(sides) {
	return Math.floor(Math.random() * sides) + 1;
	}

