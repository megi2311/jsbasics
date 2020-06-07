function solve(input){
let typeShip=input.shift();
let typeRoom=input.shift();
let numberStay=Number(input.shift())
 let price=0
if(typeRoom==='standard cabin'){
    switch(typeShip){
        case 'Mediterranean':price+=numberStay*27.50*4;break
        case 'Adriatic' :price+=numberStay*22.99*4;break
        case 'Aegean' :price+=numberStay*23.00 *4;break
    }
}else if (typeRoom==='cabin with balcony'){
    switch(typeShip){
        case 'Mediterranean':price+=numberStay * 30.20 * 4;break
        case 'Adriatic' :price+=numberStay*25.00*4;break
        case 'Aegean' :price+=numberStay*26.60*4;break
    }
}else if (typeRoom==='apartment'){
    switch(typeShip){
        case 'Mediterranean' :price+=numberStay*40.50*4;break
        case 'Adriatic' :price+=numberStay*34.99*4;break
        case 'Aegean' :price+=numberStay*39.80*4;break
    }
}

if(numberStay>7){
price*=0.75

}
console.log(`Annie's holiday in the ${typeShip} sea costs ${price.toFixed(2)} lv.`)

}
solve([
    'Mediterranean',
'cabin with balcony',
12

    

])