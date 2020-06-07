function solve(input) {
  let capacityOfVoucher = Number(input.shift());
  let command = input.shift();
  let sum = 0;
  let movie = 0;
  let product = 0;

  while (command !== "End") {
    let purchaseHeChoose = command;
    let firstLetter = purchaseHeChoose[0];
    let secondLetter = purchaseHeChoose[1];
    if (purchaseHeChoose.length > 8) {
        sum = firstLetter.charCodeAt() + secondLetter.charCodeAt();
      if (capacityOfVoucher >= sum) {
        movie++;

        
      }
    } else if (purchaseHeChoose.length <= 8) {
        sum = firstLetter.charCodeAt();
      if (capacityOfVoucher >= sum) {
        product++;
        
      }
    }
    if (capacityOfVoucher >= sum) {
      capacityOfVoucher -= sum;
    } else if (capacityOfVoucher < sum) {
      console.log(movie);
      console.log(product);
      break;
    }

    command = input.shift();
  }
  if(command==='End'){
      console.log(movie);
      console.log(product);
  }
}
solve([300,
    'Captain Marvel',
    'popcorn',
    'Pepsi'
    
    ]);
