function solve (input){
 let capacityOfEggs=Number(input.shift());
 let command=input.shift();
 let boughtEggs=0
 while(command !== 'Close' ){
 let action=command
 let eggs=Number(input.shift());

 if (action==='Buy'){
    
   if(capacityOfEggs <eggs){
       console.log(`Not enough eggs in store!\nYou can buy only ${capacityOfEggs}.`)
       break;
   }else{
     boughtEggs+=eggs 
       capacityOfEggs-=eggs
   }
 }else if (action==='Fill'){
   capacityOfEggs+=eggs 
 }


 command=input.shift()
}
if(command==='Close'){
    
    console.log(`Store is  closed!\n${boughtEggs} eggs sold.`)


    

}


}



solve([
    20,
    'Fill',
    30,
    'Buy',
    15,
    'Buy',
    20,
    'Close'
    

])