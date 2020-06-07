function solve() {
  let wishedOutcome=Number(input.shift())
  let command=input.shift()
  let price=0
    while(command !== 'Party!'){
      let nameCoctail=command 
      let coctailOrdered=Number(input.shift())
      let pricecoctail=nameCoctail.length
      let order=coctailOrdered*pricecoctail
      if(order % 2 !==0 ){
        price+=order*0.75
      }else{
        price+=order
      }
      command=input.shift()

       
      if(wishedOutcome <= price){

      console.log(`Target acquired.`)
    
      break;
      
      }else if(command === 'Party!'){
           let moneyNeeded= wishedOutcome-price
           console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`)
           break;
      }
    
    }
    console.log(`Club income - ${price.toFixed(2)} leva.`)
}
solve([
  100,
  'Sidecar',
  7,
  'Mojito',
  5,
  'White Russian',
  10
  ]);
