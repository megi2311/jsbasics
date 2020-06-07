function solve(input) {
  let holidayPeriod = Number(input.shift())
  let limitForDay = 60;
  let sum = 0;

  let counter = 0;
  for (let i = 0; i < holidayPeriod; i++) {
    let balance = limitForDay + sum;
    counter=0
    let command = input.shift();
    while (true) {
      let price = command;
      if (command === "Day over") {
        console.log(
          `Money left from today: ${balance.toFixed(2)}. You've bought ${counter} products.`
        );
        sum = balance;
        break;
      }
      
      if (price <= balance) {
        counter++;

        balance -= price;
      }

      if (balance === 0) {
        console.log(`Daily limit exceeded! You've bought ${counter} products.`);
        break;
      }

      command = input.shift();
    }
  }
}

solve([3, 20, 40, 40, 15, "Day over", 15, 5, 10, 17, 10, "Day over"]);
