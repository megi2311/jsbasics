function solve (input){
let tickets=Number(input.shift());
let letter=''


for(let i =0;i < tickets;i++){
    let ticketNumber=input.shift();

if(ticketNumber.length===4){
let firstLetter=ticketNumber[0].charCodeAt()
if(firstLetter>=65 && firstLetter<=90){
     letter=`${ticketNumber[0]}${ticketNumber[1]}${ticketNumber[2]}`
}else if(firstLetter< 65 || firstLetter >90){
    letter=`${ticketNumber[3]}${ticketNumber[1]}${ticketNumber[2]}`
}

}else if(ticketNumber.length===5 || ticketNumber.length===6){
    let secondLetter=ticketNumber[1].charCodeAt()
 letter=`${ticketNumber[0]}${secondLetter}`
}
console.log(`Seat decoded: ${letter}`)

} 

}
solve([
    3,
  '042W',
'W981',
'W24578',



])