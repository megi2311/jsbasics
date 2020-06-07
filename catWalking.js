function solve (input){
let minetesWalkDay=Number(input.shift())
let numberWalksPerDay=Number(input.shift())
let caloriesTakenForDay=Number(input.shift())


let totalMinutesWalk=minetesWalkDay * numberWalksPerDay
    let totalBurnedCalories=totalMinutesWalk * 5
    let percent=caloriesTakenForDay * 0.50 
if( totalBurnedCalories > percent){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCalories}.`)
}else{
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCalories}.`)
}

}
solve([
30,
3,
600

])