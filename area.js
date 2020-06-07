function solve(input){

let name =input.shift();
let hours =3
let projects =Number(input.shift());
let solvetion=(hours*projects)
let output=`The architect ${name} will need ${solvetion} hours to complete ${projects} project/s.`;
console.log(output);
}
solve([
"George",
"4",
 
])