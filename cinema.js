function solve(input) {
  let capacity = Number(input.shift());
  let number = input.shift();
  let income = 0;
  let sum = 0;

  while (number !== "Movie time!") {
    let people = Number(number);
    capacity -= people;
    if (capacity < 0) {
      break;
    }
    if (people % 3 === 0) {
      sum = people * 5 - 5;
    } else {
      sum = people * 5;
    }
    income += sum;

    number = input.shift();
  }
  if (capacity >= 0) {
    console.log(`There are ${capacity} seats left in the cinema.`);
  } else {
    console.log(`The cinema is full.`);
  }
  console.log(`Cinema income - ${income} lv.`);
}

solve([60, 10, 6, 3, 20, 15, "Movie time!"]);
