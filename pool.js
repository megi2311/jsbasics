function solve (input){
let numberBitcoin=Number(input.shift())
let numberChinaYuan=Number(input.shift())
let comission=Number(input.shift())

let oneBitcoin=1168
let oneYuan=0.15
let oneDollar=1.76
letEuro=1.95
let totalBitcoin=numberBitcoin*oneBitcoin
let Yuan=numberChinaYuan*oneYuan
let totalYuan=Yuan*oneDollar
let total=oneBitcoin+totalYuan
let finaltotal=total*letEuro
console.log(total)


}
solve([
    1,
    5,
    5
])