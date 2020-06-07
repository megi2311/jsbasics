function solve(input){
let command=input.shift();
//attack
while(command !=='END'){
 let n =Number(input.shift());
 for(let i=0;i<n;i++){
     let name =input.shift();
     console.log(`You are ${command}-${name}`)
 }



    command=input.shift();
} 
console.log(`Program ended.`)
} 
solve(['Attack',3,'Pesho','Gosho','Defend',1,'Petur','END'])