// define a function that rolls the dice based on:
//sides of the dice given,number of dice given,number of times the dice are rolled
//checking if works 

export function roll(sides, diceNum, numOfRolls) {
    
    var rolls = [];
    
        //will track how many rolls 
        for(var i = 0; i < numOfRolls; i++) {
            var outcome = 0;

            // will track the dice number
            for(var j = 0; j < diceNum; j++) {
                outcome = outcome + aRoll(sides);
            }
            // adds to rolls
            rolls.push(outcome);
        }
        
        // prints out outcome
        var output = {
            sides: parseInt(sides),
            dice: parseInt(diceNum),
            rolls: parseInt(numOfRolls),
            outcomes: rolls
        }
        // needs to convert the output to string 
        return JSON.stringify(output);
    }
// for producing random sides 
function aRoll(sides) {
        return Math.floor(Math.random() * sides) + 1;
}
