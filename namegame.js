function solve (input){
    let command=input.shift()
    let points=0
    let max=Number.MIN_VALUE
    let winner=''
    while(command !== 'Stop'){
        let namePlayer=command
       let lengthname=namePlayer.length
        points=0
     for(let i =0; i<lengthname;i++){
         let number=input.shift()
         let letter =namePlayer[i].charCodeAt()

         if(letter===number){
             points+=10

         }else{
             points+=2

         }
        
     }
     if(max < points){
         max=points
         winner=namePlayer

     }
    
      command=input.shift()
    }
  if(command==='Stop'){
console.log(`The winner is ${winner} with ${max} points!`)
  }



}
solve ([
    'Ivan',
73,
20,
98,
110,
'Ivo',
80,
65,
87,
'Stop'

])