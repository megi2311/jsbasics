function solve (input){
let numberSoldGames=Number(input.shift())
 let Hearthstone=0
let Fornite=0
let Overwatch=0
let Others=0

for(let i = 0 ;i<=numberSoldGames;i++){
    let gameName=input.shift();
    if(gameName==='Hearthstone'){
        Hearthstone+=100/4
    }else if (gameName==='Fornite'){
        Fornite+=100/4
    }else if (gameName==='Overwatch'){
        Overwatch+=100/4
    }else{
        Others+=100/4
    }
}

console.log(`'Heartstone'- ${Hearthstone.toFixed(2)}%`)
console.log(`'Fornite'-${Fornite.toFixed(2)}%`)
console.log(`'Overwatch'-${Overwatch.toFixed(2)}%`)
console.log(`'Others'- ${Others.toFixed(2)}%`)



}
solve([
    4,
    'Hearthstone',
    'Fornite',
     'Overwatch',
    'Counter-Strike'
    
])