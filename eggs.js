function solve (input){
let numberEggs=Number(input.shift());
let orange=0
 let blue=0
 let green=0
 let red =0
 let color=''
 
for(let i =0; i < numberEggs;i++){
    let coloredEggs=input.shift()
 
if(coloredEggs==='orange'){
   orange++
}else if (coloredEggs==='blue'){
    blue++
}else if (coloredEggs==='green'){
    green++
}else if (coloredEggs==='red'){
    red++

}
}

let maxeggs=Math.max(green,red,orange,blue)
if(maxeggs===green){
    color='green'
}else if (maxeggs===red){
    color='red'
}else if (maxeggs===orange){
    color='orange'
}else if (maxeggs===blue){
    color='blue'
}
console.log(`Red eggs: ${red}`)
console.log(`Orange eggs: ${orange}`)
console.log(`Blue eggs: ${blue}`)
console.log(`Green eggs: ${green}`)
console.log(`Max eggs:${maxeggs} -> ${color}`)

}
solve ([
    7,
  'orange',
   'blue',
   'green',
   'green',
    'blue',
     'red',
    'green'

])