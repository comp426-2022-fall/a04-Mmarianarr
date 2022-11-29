// define a function that rolls the dice based on:
//sides of the dice given,number of dice given,number of times the dice are rolled


export function roll(sides, dice, r_count) {
    
    let rolls = [];


         //how many dice we have
            for(var j = 0; j < dice; j++) {
                result = result + aRoll(sides);
            }

        // how many rolls we have 
        for(var i = 0; i < r_count; i++) {
            var result = 0;

            // adds to rolls
            rolls.push(result);
        }

        // what are results are 
        var output = {
            sides: parseInt(sides),
            rolls: parseInt(r_count),
            dice: parseInt(dice),
            results: rolls
        }

        // output to string 
        return JSON.stringify(output);
    }

   function aRoll(sides) {
        return Math.floor(Math.random() * sides) + 1;
       }
