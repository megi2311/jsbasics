function solve (input){
let budget=Number(input.shift());
let numberSeries=Number(input.shift());
let sum=0
for(let i=0;i < numberSeries;i++){
let nameSeries=input.shift();
let priceSeries=Number(input.shift());
if(nameSeries==='Thrones'){
    priceSeries*=0.50
}else if (nameSeries==='Lucifer'){
    priceSeries*=0.60
}else if (nameSeries==='Protector'){
    priceSeries*=0.70
}else if (nameSeries==='TotalDrama'){
    priceSeries*=0.80
}else if (nameSeries==='Area'){
    priceSeries*=0.90
}
sum+=priceSeries 


}
if(budget>=sum){
    let moneyLeft=budget-sum
    console.log(`You bought all the series and left with ${moneyLeft.toFixed(2)} lv.`)
}else if (budget<sum){
    let moneyNeeded=sum-budget
    console.log(`You need ${moneyNeeded.toFixed(2)} lv. more to buy the series!`)
}
}
solve([
    25,
    6,
    'Teen Wolf',
    8,
    'Protector',
    5,
     'TotalDrama',
         5,
       'Area',
         4,
      'Thrones',
         5,
      'Lucifer',
           9

])