function solve (input){
let numberChicken=Number(input.shift())
let numberFish=Number(input.shift())
let numberVegetarian=Number(input.shift())
let chickenMenu=10.35
let fishMenu=12.40
let vegetarianMenu=8.15
let totalchicken=numberChicken*chickenMenu
let totalfish=numberFish*fishMenu
let totalvegeterian=numberVegetarian*vegetarianMenu
let sum=(totalchicken+totalfish+totalvegeterian)
let delivery=2.50
let desert=sum*0.20
let total=sum+desert+delivery 
console.log(`Total:${total.toFixed(2)}`)



}
solve([2,4,3])