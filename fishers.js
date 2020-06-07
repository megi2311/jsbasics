function solve(arg1,arg2,arg3){
let budget=Number(arg1)
let season=(arg2)
let  fishers=Number(arg3)
let price=0
if(season==='Spring'){
    price=3000
}else if (season==='Summer' ){
    price=4200
}else if (season==='Autumn'){
     price=4200
}else if(season==='Winter'){
    price=2600
}


if(fishers <= 6){
    price*=0.90
}else if (fishers >= 7 && fishers <= 11){
    price *= 0.85
}else if (fishers >= 12){
    price *= 0.75
}
if (fishers % 2 ===0 && season !== 'Autumn'){
    price*=0.95
}else if (fishers % 2 ===0 && season ==='Autumn'){
    price
}
if (price > budget){
    let moneyNeeded=price- budget
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
}else if (budget>=price){
    let moneyLeft=budget-price
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
}
}

solve(3600,
    'Autumn',
    6
    

    
    )