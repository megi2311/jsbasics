function solve(input) {
  let budget = Number(input.shift());
  let command = input.shift();
  let boughtProducts = 0;
  let itemsBought = 0;
  let thirdItem=input[3]
  while (command !== "Stop") {
    let productName = command;
    let priceProduct = Number(input.shift());
    if (budget >= priceProduct) {
      
        if (productName===thirdItem) {
          priceProduct *= 0.5;
          budget -= priceProduct;
          boughtProducts += priceProduct;
          itemsBought++;
        
        } else {
          boughtProducts += priceProduct;
          budget -= priceProduct;
          itemsBought++;
        }
      
    }
    if (budget < priceProduct) {
          let moneyNeeded=priceProduct-budget
        console.log(`You don't have enough money!`);
        console.log(`You need ${moneyNeeded.toFixed(2)} leva!`);
        break;
      }
    command=input.shift()
  }
  if (command === "Stop") {
    console.log(`You bought ${itemsBought} products for ${boughtProducts.toFixed(2)} leva.`);
  }
  
}

solve([ 
    54,
 'Thermal underwear',
    24,
   'Sunscreen',
    45

]);
