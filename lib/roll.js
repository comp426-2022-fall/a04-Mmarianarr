export function roll(sides, dice, rolls) {

    var end = []

    for(let i = 0; i < rolls; i++) {
        let total = 0
        for(let j = 0; j < dice; j++) {
            total += Math.floor(Math.random() * sides) + 1;
        }
        end.push(total);
    }
    return {"sides": sides, "dice": dice, "rolls": rolls, "results": end};
}
