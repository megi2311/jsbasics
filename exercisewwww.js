function solve(input) {
  let capacity = Number(input.shift());
  let sumPeople = 0;
  let income = 0;
  let price = 0;
  for (let i = 0; i < input.length; i++) {
    let numberPeople = input[i];
    if (numberPeople !== "Movie time!") {
        let people=Number(number)
      sumPeople += numberPeople;
      price = numberPeople * 5;

      if (numberPeople % 3 === 0) {
        price -= 5;
      }
      income += price;
      if(sumPeople>=capacity){
          break;
      }
    }

    if (numberPeople === "Movie time!") {
     
    }

  }
  
  if (sumPeople <= capacity) {
    let seatsLeft = capacity - sumPeople;
    console.log(`There are ${seatsLeft} seats left in the cinema.`);
    console.log(`Cinema income - ${income} lv.`);
  } else {
    let seatsNeeded = sumPeople - capacity;
    console.log(`The cinema is full.`);
    console.log(`Cinema income - ${income} lv.`);
  }
}

solve([60, 10, 6, 3, 20, 15, "Movie time!"]);
