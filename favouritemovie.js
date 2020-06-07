function solve(input) {
  let sum = 0;
  let bestMovie = Number.MIN_VALUE;
  let bestMovieName = "";
  let counter = 0;

  let command = input.shift();
  while (command !== "STOP") {
    let movieName = command;
    sum = 0;
    counter++;

    for (let i = 0; i < movieName.length; i++) {
      let title = movieName[i];
      sum += title.charCodeAt();
      if (title.charCodeAt() >= 65 && title.charCodeAt() <= 90) {
        sum -= movieName.length;
      } else if (title.charCodeAt() >= 97 && title.charCodeAt() <= 122) {
        sum -= movieName.length * 2;
      }
    }
2
    if (bestMovie < sum) {
      bestMovieName = movieName;
      bestMovie = sum;
    }

    command = input.shift();
    if (counter === 7) {
      console.log(`The limit is reached.`);
      console.log(
        `The best movie for you is ${bestMovieName} with ${bestMovie} ASCII sum.`
      );
      break;
    }
    if (command === "STOP") {
      console.log(
        `The best movie for you is ${bestMovieName} with ${bestMovie} ASCII sum.`
      );
      break;
    }
  }
}

solve([
  "Wrong turn",
  "The maze",
  "Area 51",
  "Night Club",
  "Ice age",
  "Harry Potter",
  "Wizards"
]);
