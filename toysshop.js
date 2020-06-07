function solve (input){
  let jurneyPrice=Number(input.shift());
  let puzzle=Number(input.shift());
  let talkingDoll=Number(input.shift());
  let teddyBear=Number(input.shift());
  let minions=Number(input.shift());
  let trucks=Number(input.shift());
 let countofToys= puzzle+talkingDoll+teddyBear+minions+trucks;
 let price=puzzle*2.60+talkingDoll*3.00+teddyBear*4.10+minions*8.20+trucks*2.00
  if (countofToys >=50){
      price=price*0.75;
      
    }
price=price*0.9;
if(jurneyPrice<=price){
console.log(`Yes! ${(price-jurneyPrice).toFixed(2)} lv left.`)

}else{
console.log(`Not enough money! ${(jurneyPrice-price).toFixed(2)} lv needed.`)
}
}
solve([
    40.8,
    20,
    25,
    30,
    50,
    10
])
