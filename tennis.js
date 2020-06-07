function solve(input) {
  let numberTournament = Number(input.shift());
  let startPoints = Number(input.shift());
  let result = 0;
  let total = 0;
  let points = 0;
  let sum = 0;
  let win = 0;
  for (let i = 1; i <= numberTournament; i++) {
    let reachedStage = input.shift();
    if (reachedStage === "W") {
      win++;
      points = 2000;
    } else if (reachedStage === "SF") {
      points = 720;
    } else if (reachedStage === "F") {
      points = 1200;
    }

    if (i === 1) {
      result = startPoints + points;
    } else if (i < numberTournament && i > 1) {
      total = result + points;
      result = total;
    }
    sum += points;
  }
  console.log(`Final points: ${total}`);
  let average = sum / numberTournament;
  console.log(`Average points: ${Math.ceil(average)}`);
  let percent = (win / numberTournament) * 100;
  console.log(`${percent.toFixed(2)}%`);
}
solve([7, 1200, "SF", "F", "W", "F", "W", "SF", "W"]);
