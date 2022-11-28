// define a function that rolls the dice based on:
//sides of the dice given,number of dice given,number of times the dice are rolled
//checking if works 

export function roll(sides, dice, rolls) {

 var rollResults = [];
 for (var i = 0; i < rolls; i++) {
        var rollTotal = 0;
        for (var j = 0; j < dice; j++) {
        rollTotal += Math.floor(Math.random() * sides)+ 1 ;
        }
        rollResults.push(rollTotal);
        }

        const result = {
        sides: givenSides,
        dice: givenDice,
        rolls: roll,
        results: results
    }

    return result
}

