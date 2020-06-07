function solve (input){

let lenght=Number(input.shift());
let width=Number(input.shift());
let wardrobeSide=Number(input.shift());
let hallSize=(lenght*100)*(width*100);
let wardrobe=(wardrobeSide*100)*(wardrobeSide*100);
let bench=hallSize/10;
let freeSpace=hallSize-(wardrobe+bench);
let dancers=freeSpace/7040
console.log(Math.floor(dancers))
 
}

solve([
    '50',
    '25',
    '2',
    
    
])
