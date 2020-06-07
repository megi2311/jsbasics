function solve (input){
let number=Number(input.shift());
let sugarPacket=950;
let flourPacket=750;
let sumSugar=0
let sumFloor=0
let max =Number.MIN_VALUE
let max1=Number.MIN_VALUE
let PackageSugar=0
let PackageFlour=0

for (let i =0;i <number;i++){
let capacityUsedSugar=Number(input.shift());
let capacityUsedFlour=Number(input.shift());
   sumSugar+=capacityUsedSugar
   sumFloor+=capacityUsedFlour
   PackageSugar=Math.ceil(sumSugar/sugarPacket)
   PackageFlour=Math.ceil(sumFloor/flourPacket)
   if(max<capacityUsedSugar ){
       max=capacityUsedSugar 

   }
       if (max1<capacityUsedFlour){
       max1=capacityUsedFlour
   }
}
console.log(`Sugar: ${PackageSugar}`)
console.log(`Flour: ${PackageFlour}`)
console.log(`Max used flour is ${max1} grams, max used sugar is ${max} grams.`)




}
solve([
    3,
    400,
    350,
    250,
    300,
    450,
    380

])