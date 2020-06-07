function solve(input) {
  let playerName = input.shift();
  let numberChoosenGames = Number(input.shift());
  let volleyball = 0;
  let tennis = 0;
  let badminton = 0;
  let sum = 0;
  let sum1 = 0;
  let counterv = 0;
  let countert = 0;
  let counterb = 0;
  for (let i = 0; i < numberChoosenGames; i++) {
    let gameName = input.shift();
    let numberPoints = Number(input.shift());
    if (gameName === "volleyball") {
      volleyball += numberPoints *1.07;
      counterv++;
    } else if (gameName === "tennis") {
      tennis += numberPoints *1.05;
      countert++;
    } else if (gameName === "badminton") {
      badminton +=numberPoints * 1.02;
      counterb++;
    }
   
  }
   let averageVolleyball=Math.floor(volleyball/counterv)
   let averageTennis=Math.floor(tennis/countert)
   let averageBadminton=Math.floor(badminton/counterb)
  if (
    averageVolleyball >= 75 &&
    averageTennis >= 75 &&
    averageBadminton >= 75
  ) {
    sum =Math.floor(volleyball + tennis + badminton);
    console.log(
      `Congratulations, ${playerName}! You won the cruise games with ${Math.floor(
        sum)
      } points.`
    );
  } else {
    sum1 = Math.floor(volleyball + tennis + badminton);
    console.log(
      `Sorry, ${playerName}, you lost. Your points are only ${
        sum1}.`)
  }
}
solve([
  "Annie",
  5,
  "badminton",
  34,
  "tennis",
  76,
  "badminton",
  10,
  "volleyball",
  62,
  "badminton",
  56
]);
console.log();
solve(["Pepi", 3, "volleyball", 78, "tennis", 98, "badminton", 105]);
