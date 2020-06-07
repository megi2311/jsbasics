function solve (input){
let numberBitcoin=Number(input.shift())
let numberYuan=Number(input.shift())
let comission=Number(input.shift())  / 100

let Bitcoin=1168
let Yuan=0.15
let Dollar=1.76
let Euro=1.95
let BitcoinInLv=numberBitcoin * Bitcoin
let YuanInDollar=numberYuan * Yuan
let DollarInlv=YuanInDollar * Dollar 
 
let LvInEuro=(BitcoinInLv + DollarInlv) / Euro
let sumcomission=LvInEuro * comission
let result=LvInEuro - sumcomission
console.log(result.toFixed(2))








}
solve([
  
1,
5,
5
])